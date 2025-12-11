"""
FastAPI Image Server - Similar to Unsplash API
Serves images from a local folder with metadata
"""

from fastapi import FastAPI, HTTPException, Path
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path as PathLib
from typing import List, Optional
import os
import random
from datetime import datetime
from pydantic import BaseModel

app = FastAPI(
    title="Image API",
    description="API for serving images from local folder, similar to Unsplash",
    version="1.0.0"
)

# Configure CORS for frontend access
# In production, set ALLOWED_ORIGINS environment variable (comma-separated URLs)
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "*").split(",")
app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration
IMAGES_DIR = PathLib(__file__).parent.parent / "images"
SUPPORTED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp"}


class ImageMetadata(BaseModel):
    """Model for image metadata"""
    id: str
    filename: str
    width: Optional[int] = None
    height: Optional[int] = None
    size: int
    format: str
    url: str
    download_url: str
    created_at: str


class ImageList(BaseModel):
    """Model for list of images"""
    total: int
    images: List[ImageMetadata]


def get_image_files() -> List[PathLib]:
    """Get all image files from the images directory"""
    if not IMAGES_DIR.exists():
        return []
    
    image_files = []
    for file in IMAGES_DIR.iterdir():
        if file.is_file() and file.suffix.lower() in SUPPORTED_EXTENSIONS:
            image_files.append(file)
    
    return sorted(image_files, key=lambda x: x.name)


def get_image_metadata(image_path: PathLib, base_url: str = "http://localhost:8000") -> ImageMetadata:
    """Generate metadata for an image file"""
    file_stat = image_path.stat()
    image_id = image_path.stem
    
    # Try to get image dimensions (basic implementation)
    width, height = None, None
    try:
        from PIL import Image
        with Image.open(image_path) as img:
            width, height = img.size
    except (ImportError, Exception):
        # PIL not available or error reading image
        pass
    
    return ImageMetadata(
        id=image_id,
        filename=image_path.name,
        width=width,
        height=height,
        size=file_stat.st_size,
        format=image_path.suffix.lstrip('.').upper(),
        url=f"{base_url}/api/images/{image_id}",
        download_url=f"{base_url}/api/images/{image_id}/download",
        created_at=datetime.fromtimestamp(file_stat.st_ctime).isoformat()
    )


@app.get("/")
async def root():
    """Root endpoint with API information"""
    return {
        "name": "Image API",
        "version": "1.0.0",
        "description": "FastAPI image server similar to Unsplash",
        "endpoints": {
            "list_images": "/api/images",
            "get_image": "/api/images/{image_id}",
            "random_image": "/api/images/random",
            "download_image": "/api/images/{image_id}/download"
        }
    }


@app.get("/api/images", response_model=ImageList)
async def list_images(
    limit: Optional[int] = None,
    offset: int = 0
):
    """
    List all available images with metadata
    
    Args:
        limit: Maximum number of images to return
        offset: Number of images to skip (for pagination)
    
    Returns:
        ImageList: List of images with metadata
    """
    image_files = get_image_files()
    
    if not image_files:
        return ImageList(total=0, images=[])
    
    # Apply pagination
    total = len(image_files)
    image_files = image_files[offset:]
    if limit:
        image_files = image_files[:limit]
    
    images = [get_image_metadata(img) for img in image_files]
    
    return ImageList(total=total, images=images)


@app.get("/api/images/random", response_model=ImageMetadata)
async def get_random_image():
    """
    Get a random image with metadata
    
    Returns:
        ImageMetadata: Random image metadata
    """
    image_files = get_image_files()
    
    if not image_files:
        raise HTTPException(status_code=404, detail="No images available")
    
    random_image = random.choice(image_files)
    return get_image_metadata(random_image)


@app.get("/api/images/{image_id}", response_model=ImageMetadata)
async def get_image_info(
    image_id: str = Path(..., description="The image ID (filename without extension)")
):
    """
    Get metadata for a specific image
    
    Args:
        image_id: The image ID (filename without extension)
    
    Returns:
        ImageMetadata: Image metadata
    """
    image_files = get_image_files()
    
    # Find the image by ID
    for image_path in image_files:
        if image_path.stem == image_id:
            return get_image_metadata(image_path)
    
    raise HTTPException(status_code=404, detail=f"Image with ID '{image_id}' not found")


@app.get("/api/images/{image_id}/download")
async def download_image(
    image_id: str = Path(..., description="The image ID (filename without extension)")
):
    """
    Download the actual image file
    
    Args:
        image_id: The image ID (filename without extension)
    
    Returns:
        FileResponse: The image file
    """
    image_files = get_image_files()
    
    # Find the image by ID
    for image_path in image_files:
        if image_path.stem == image_id:
            return FileResponse(
                image_path,
                media_type=f"image/{image_path.suffix.lstrip('.')}",
                filename=image_path.name
            )
    
    raise HTTPException(status_code=404, detail=f"Image with ID '{image_id}' not found")


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    images_count = len(get_image_files())
    return {
        "status": "healthy",
        "images_directory": str(IMAGES_DIR),
        "images_available": images_count
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
