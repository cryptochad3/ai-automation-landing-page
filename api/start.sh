#!/bin/bash

# Image API Startup Script

echo "🖼️  Image API Server"
echo "===================="
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "❌ Python 3 is not installed. Please install Python 3.8 or higher."
    exit 1
fi

# Check if dependencies are installed
if ! python3 -c "import fastapi" 2> /dev/null; then
    echo "📦 Installing dependencies..."
    pip install -r requirements.txt
    echo ""
fi

# Check if images directory has any images
IMAGE_COUNT=$(find ../images -maxdepth 1 -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" -o -iname "*.gif" -o -iname "*.webp" -o -iname "*.bmp" \) 2>/dev/null | wc -l)

if [ "$IMAGE_COUNT" -eq 0 ]; then
    echo "⚠️  No images found in the images/ directory"
    echo ""
    read -p "Would you like to generate sample images? (y/n) " -n 1 -r
    echo ""
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        echo "🎨 Generating sample images..."
        python3 generate_sample_images.py
        echo ""
    fi
fi

echo "🚀 Starting Image API server..."
echo "📍 Server will be available at: http://localhost:8000"
echo "📚 API Documentation: http://localhost:8000/docs"
echo "📖 ReDoc: http://localhost:8000/redoc"
echo "🌐 Example Client: http://localhost:8000/example.html (if you copy example.html to serve)"
echo ""
echo "Press CTRL+C to stop the server"
echo ""

# Start the server
python3 main.py
