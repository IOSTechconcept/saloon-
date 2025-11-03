
import os
from PIL import Image

def optimize_images():
    """
    Optimizes images in the project folder.
    - Compresses JPGs and PNGs.
    - Resizes images that are displayed at smaller sizes.
    """
    # Images to be optimized (compressed)
    images_to_compress = [
        "background.jpg",
        "Nail treatment.jpg",
        "Salon Design Photo.jpg",
        "Images/Facial spa.jpg",
        "Images/Hairstyling .jpg",
        "Images/Modern shop.jpg",
        "Images/Mordern2.jpg",
    ]

    # Images to be resized and compressed
    images_to_resize = {
        "logo.png": (100, 100),  # Resized to 100px height, maintaining aspect ratio
        "Images/person-1281777_1280.jpg": (400, 400),
        "Images/woman-5815354_1280.jpg": (400, 400),
    }

    # Unused images
    unused_images = [
        "Images/Africa picture.jpg",
        "Images/hairdress tool.jpg",
        "Images/hero-bg.jpg",
        "Images/logo.jpg",
    ]

    print("Starting image optimization...")

    # Process images to be compressed
    for image_path in images_to_compress:
        try:
            img = Image.open(image_path)
            original_size = os.path.getsize(image_path)
            img.save(image_path, optimize=True, quality=85)
            new_size = os.path.getsize(image_path)
            print(f"Compressed: {image_path} (saved {((original_size - new_size) / original_size) * 100:.2f}%)")
        except FileNotFoundError:
            print(f"Error: {image_path} not found.")
        except Exception as e:
            print(f"Error processing {image_path}: {e}")

    # Process images to be resized
    for image_path, size in images_to_resize.items():
        try:
            img = Image.open(image_path)
            original_size = os.path.getsize(image_path)
            img.thumbnail(size)
            img.save(image_path, optimize=True)
            new_size = os.path.getsize(image_path)
            print(f"Resized and compressed: {image_path} (saved {((original_size - new_size) / original_size) * 100:.2f}%)")
        except FileNotFoundError:
            print(f"Error: {image_path} not found.")
        except Exception as e:
            print(f"Error processing {image_path}: {e}")

    print("\nUnused images found:")
    for image_path in unused_images:
        print(f"- {image_path}")

    print("\nImage optimization complete.")

if __name__ == "__main__":
    optimize_images()
