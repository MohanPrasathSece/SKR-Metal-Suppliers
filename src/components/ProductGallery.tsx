import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductGalleryProps {
    images: string[];
    alt: string;
}

const ProductGallery = ({ images, alt }: ProductGalleryProps) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);

    if (!images || images.length === 0) return null;

    return (
        <div className="flex flex-col gap-4">
            {/* Main Large Image */}
            <div className="aspect-[4/3] w-full overflow-hidden rounded-lg border border-border bg-white p-2">
                <img
                    src={selectedImage}
                    alt={alt}
                    className="h-full w-full object-contain scale-150 transition-all duration-300 hover:scale-[1.6]"
                />
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
                {images.map((image, index) => (
                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={cn(
                            "aspect-square overflow-hidden rounded-md border bg-white p-2 transition-all hover:opacity-100",
                            selectedImage === image
                                ? "border-2 border-primary opacity-100"
                                : "border-border opacity-70"
                        )}
                    >
                        <img
                            src={image}
                            alt={`${alt} view ${index + 1}`}
                            className="h-full w-full object-contain"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
