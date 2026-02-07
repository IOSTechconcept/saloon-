import os
from PIL import Image

def optimize_images():
    """
    Optimizes images in the project folder.
    - Compresses JPGs and PNGs.
    - Resizes images that are displayed at smaller sizes.
    """
    # Get all image files from the root and subdirectories
    image_files = []
    for root, dirs, files in os.walk("."):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg')):
                image_files.append(os.path.join(root, file))

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
    
    # Images that are are used in the website
    used_images = [
        "background.jpg",
        "Nail treatment.jpg",
        "Salon Design Photo.jpg",
        "Images/Facial spa.jpg",
        "Images/Hairstyling .jpg",
        "Images/Modern shop.jpg",
        "Images/Mordern2.jpg",
        "logo.png",
        "Images/person-1281777_1280.jpg",
        "Images/woman-5815354_1280.jpg",
        "birthday makup.jpg",
        "braiding 2.jpg",
        "braiding gallery.jpg",
        "bridal gele 1.jpg",
        "bridal gele 2.jpg",
        "bridal gele 3.jpg",
        "bridal make-up.jpg",
        "convocation make-up.jpg",
        "dreadlocks.jpg",
        "founder.JPG",
        "ghana weaving.jpg",
        "lip 1.jpg",
        "lip2.jpg",
        "lip3.jpg",
        "nail 2.jpg",
        "nail 3.jpg",
        "nails 1.jpg",
        "2025_10_18_15_10_IMG_0628.JPG",
    ]


    print("Starting image optimization...")

    # Process all images
    for image_path in image_files:
        try:
            # clean up path separators
            image_path = os.path.normpath(image_path)

            if image_path in images_to_resize:
                img = Image.open(image_path)
                original_size = os.path.getsize(image_path)
                img.thumbnail(images_to_resize[image_path])
                img.save(image_path, optimize=True)
                new_size = os.path.getsize(image_path)
                print(f"Resized and compressed: {image_path} (saved {((original_size - new_size) / original_size) * 100:.2f}%)")
            else:
                img = Image.open(image_path)
                original_size = os.path.getsize(image_path)
                img.save(image_path, optimize=True, quality=85)
                new_size = os.path.getsize(image_path)
                print(f"Compressed: {image_path} (saved {((original_size - new_size) / original_size) * 100:.2f}%)")
        except FileNotFoundError:
            print(f"Error: {image_path} not found.")
        except Exception as e:
            print(f"Error processing {image_path}: {e}")

    print("\nUnused images found:")
    for image_path in image_files:
        image_path = os.path.normpath(image_path)
        if image_path not in used_images:
            print(f"- {image_path}")


    print("\nImage optimization complete.")

if __name__ == "__main__":
    optimize_images()
