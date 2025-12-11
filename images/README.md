# Images Directory

This directory is used to store images that will be served by the FastAPI Image API.

## Usage

1. Place your image files in this directory
2. Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.bmp`
3. The API will automatically detect and serve all images in this folder

## Example

```
images/
├── landscape1.jpg
├── portrait2.png
├── abstract3.webp
└── nature4.jpg
```

## Accessing Images

Once images are placed here, they can be accessed via the API:

- List all: `GET http://localhost:8000/api/images`
- Get specific: `GET http://localhost:8000/api/images/landscape1`
- Download: `GET http://localhost:8000/api/images/landscape1/download`
- Random: `GET http://localhost:8000/api/images/random`

## Notes

- Image ID is the filename without extension (e.g., `landscape1.jpg` → ID: `landscape1`)
- Images are served in alphabetical order by filename
- The API includes metadata like dimensions, size, and format
