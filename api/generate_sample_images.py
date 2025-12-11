#!/usr/bin/env python3
"""
Generate sample placeholder images for testing the Image API
"""

from PIL import Image, ImageDraw, ImageFont
from pathlib import Path
import random

# Configuration
IMAGES_DIR = Path(__file__).parent.parent / "images"
IMAGES_DIR.mkdir(exist_ok=True)

# Sample image configurations
SAMPLE_IMAGES = [
    {"name": "landscape1", "size": (1920, 1080), "color": (100, 150, 200)},
    {"name": "portrait1", "size": (1080, 1920), "color": (200, 100, 150)},
    {"name": "square1", "size": (1080, 1080), "color": (150, 200, 100)},
    {"name": "wide1", "size": (2560, 1440), "color": (255, 200, 100)},
    {"name": "thumbnail1", "size": (640, 480), "color": (100, 255, 200)},
]


def create_placeholder_image(name: str, size: tuple, color: tuple):
    """Create a placeholder image with text overlay"""
    # Create image with solid color
    img = Image.new('RGB', size, color)
    draw = ImageDraw.Draw(img)
    
    # Add text overlay
    text_lines = [
        f"{name.upper()}",
        f"{size[0]}x{size[1]}"
    ]
    
    # Calculate text position (center)
    try:
        # Try to use a better font if available (cross-platform font paths)
        font_size = min(size) // 10
        font_paths = [
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",  # Linux
            "/System/Library/Fonts/Helvetica.ttc",  # macOS
            "C:\\Windows\\Fonts\\arial.ttf",  # Windows
        ]
        font = None
        for font_path in font_paths:
            try:
                font = ImageFont.truetype(font_path, font_size)
                break
            except:
                continue
        if font is None:
            raise Exception("No system fonts found")
    except:
        # Fallback to default font
        font = ImageFont.load_default()
    
    # Draw each line of text
    y_offset = size[1] // 2 - len(text_lines) * 30
    for line in text_lines:
        # Get text bounding box
        bbox = draw.textbbox((0, 0), line, font=font)
        text_width = bbox[2] - bbox[0]
        text_height = bbox[3] - bbox[1]
        
        # Calculate position to center text
        x = (size[0] - text_width) // 2
        y = y_offset
        
        # Draw text with shadow for better visibility
        shadow_offset = 2
        draw.text((x + shadow_offset, y + shadow_offset), line, fill=(0, 0, 0), font=font)
        draw.text((x, y), line, fill=(255, 255, 255), font=font)
        
        y_offset += text_height + 20
    
    return img


def main():
    """Generate all sample images"""
    print(f"Generating sample images in: {IMAGES_DIR}")
    
    for config in SAMPLE_IMAGES:
        name = config["name"]
        size = config["size"]
        color = config["color"]
        
        # Create image
        img = create_placeholder_image(name, size, color)
        
        # Save as JPEG
        output_path = IMAGES_DIR / f"{name}.jpg"
        img.save(output_path, "JPEG", quality=85)
        print(f"✓ Created: {output_path.name} ({size[0]}x{size[1]})")
    
    print(f"\n✅ Generated {len(SAMPLE_IMAGES)} sample images")
    print(f"📁 Location: {IMAGES_DIR}")
    print("\n🚀 You can now start the API server:")
    print("   cd api")
    print("   python main.py")


if __name__ == "__main__":
    main()
