# Image API - FastAPI Image Server

A FastAPI-based image server similar to Unsplash API that serves images from a local folder.

## Features

- 📸 List all images with metadata
- 🎲 Get random images
- 📥 Download images
- 🔍 Get specific image details
- 📊 Image metadata including dimensions, size, and format
- 🌐 CORS enabled for frontend integration

## Installation

1. Install Python dependencies:
```bash
cd api
pip install -r requirements.txt
```

2. Add images to the `images/` folder in the project root

## Running the API

Start the development server:
```bash
# From the api directory
python main.py

# Or using uvicorn directly
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`

## API Endpoints

### 1. Root - API Information
```
GET /
```

Returns basic API information and available endpoints.

**Example Response:**
```json
{
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
```

### 2. List All Images
```
GET /api/images?limit={limit}&offset={offset}
```

Returns a list of all available images with metadata.

**Query Parameters:**
- `limit` (optional): Maximum number of images to return
- `offset` (optional): Number of images to skip (for pagination)

**Example Response:**
```json
{
  "total": 10,
  "images": [
    {
      "id": "image1",
      "filename": "image1.jpg",
      "width": 1920,
      "height": 1080,
      "size": 245678,
      "format": "JPG",
      "url": "http://localhost:8000/api/images/image1",
      "download_url": "http://localhost:8000/api/images/image1/download",
      "created_at": "2024-01-01T12:00:00"
    }
  ]
}
```

### 3. Get Random Image
```
GET /api/images/random
```

Returns metadata for a randomly selected image.

**Example Response:**
```json
{
  "id": "image5",
  "filename": "image5.png",
  "width": 1280,
  "height": 720,
  "size": 123456,
  "format": "PNG",
  "url": "http://localhost:8000/api/images/image5",
  "download_url": "http://localhost:8000/api/images/image5/download",
  "created_at": "2024-01-01T12:00:00"
}
```

### 4. Get Specific Image Info
```
GET /api/images/{image_id}
```

Returns metadata for a specific image by its ID (filename without extension).

**Example:**
```bash
curl http://localhost:8000/api/images/image1
```

### 5. Download Image
```
GET /api/images/{image_id}/download
```

Downloads the actual image file.

**Example:**
```bash
curl http://localhost:8000/api/images/image1/download -o image.jpg
```

### 6. Health Check
```
GET /health
```

Returns API health status and available image count.

**Example Response:**
```json
{
  "status": "healthy",
  "images_directory": "/path/to/images",
  "images_available": 10
}
```

## Usage Examples

### Using curl

```bash
# List all images
curl http://localhost:8000/api/images

# Get random image
curl http://localhost:8000/api/images/random

# Get specific image info
curl http://localhost:8000/api/images/myimage

# Download image
curl http://localhost:8000/api/images/myimage/download -o output.jpg

# Pagination
curl "http://localhost:8000/api/images?limit=5&offset=0"
```

### Using JavaScript/Fetch

```javascript
// List all images
fetch('http://localhost:8000/api/images')
  .then(res => res.json())
  .then(data => console.log(data));

// Get random image
fetch('http://localhost:8000/api/images/random')
  .then(res => res.json())
  .then(image => {
    console.log('Random image:', image);
    // Display image
    const img = document.createElement('img');
    img.src = image.download_url;
    document.body.appendChild(img);
  });

// Download image
fetch('http://localhost:8000/api/images/myimage/download')
  .then(res => res.blob())
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const img = document.createElement('img');
    img.src = url;
    document.body.appendChild(img);
  });
```

### Using Python requests

```python
import requests

# List all images
response = requests.get('http://localhost:8000/api/images')
images = response.json()
print(f"Total images: {images['total']}")

# Get random image
response = requests.get('http://localhost:8000/api/images/random')
image = response.json()
print(f"Random image: {image['filename']}")

# Download image
response = requests.get(f"http://localhost:8000/api/images/{image['id']}/download")
with open('downloaded.jpg', 'wb') as f:
    f.write(response.content)
```

## Supported Image Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)
- BMP (.bmp)

## Directory Structure

```
.
├── api/
│   ├── main.py          # FastAPI application
│   ├── requirements.txt # Python dependencies
│   └── README.md        # This file
└── images/              # Place your images here
    ├── image1.jpg
    ├── image2.png
    └── ...
```

## Interactive API Documentation

FastAPI automatically generates interactive API documentation:

- **Swagger UI**: http://localhost:8000/docs
- **ReDoc**: http://localhost:8000/redoc

## Configuration

You can modify the following settings in `main.py`:

- `IMAGES_DIR`: Directory containing images (default: `../images`)
- `SUPPORTED_EXTENSIONS`: List of supported image file extensions
- CORS settings for frontend integration

## Production Deployment

For production deployment:

1. Set proper CORS origins in `main.py`
2. Use a production ASGI server like Gunicorn with Uvicorn workers
3. Add authentication if needed
4. Consider adding rate limiting
5. Use environment variables for configuration

Example production command:
```bash
gunicorn main:app --workers 4 --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:8000
```

## License

MIT License
