import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

// Umbrella Washer Images
import umbrellaPack from "@/assets/umbrella_pack.png";
import umbrellaHero from "@/assets/hero_image_umbrella.png";
import umbrellaFrontRemovebg from "@/assets/umbrella-front-removebg-preview.png";
import umbrellaRemovebg from "@/assets/umbrella-removebg-preview.png";
import umbrellaBottomRemovebg from "@/assets/umbrella_bottom-removebg-preview.png";
import umbrellaSideRemovebg from "@/assets/umbrella_side-removebg-preview.png";

// Bitumen Washer Images
import bitumenTable from "@/assets/bitumen_in_table.png";
import bitumenFrontRemovebg from "@/assets/bitumen-front-removebg-preview.png";
import bitumenRemovebg from "@/assets/bitumen-removebg-preview.png";
import bitumenSideRemovebg from "@/assets/bitumen-side-removebg-preview.png";

interface GalleryImage {
    src: string;
    alt: string;
    title: string;
    category: "umbrella" | "bitumen";
    bg?: string;
    keywords: string[];
}

const galleryImages: GalleryImage[] = [
    // Umbrella Washer - Front, Back, Side order
    {
        src: umbrellaFrontRemovebg,
        alt: "Best Nitrile Umbrella Washer in India - Premium Zinc Coated MS Top Front View for Roofing Leak Protection",
        title: "Best Nitrile Umbrella Washer in India - Front View",
        category: "umbrella",
        bg: "bg-slate-100",
        keywords: ["best metal washer in india", "top roofing washer coimbatore", "premium umbrella washer tamil nadu"]
    },
    {
        src: umbrellaBottomRemovebg,
        alt: "Best Roofing Washer in Tamil Nadu - High Resilience Nitrile Rubber Back View for 100% Water Sealing",
        title: "Best Roofing Washer in Tamil Nadu - Back View",
        category: "umbrella",
        bg: "bg-slate-100",
        keywords: ["best bitumen washer tamil nadu", "top quality metal supplier coimbatore", "waterproof washer india"]
    },
    {
        src: umbrellaSideRemovebg,
        alt: "Best Metal Washer in Coimbatore - Side Profile showing precise Rubber thickness and Industrial Design",
        title: "Best Metal Washer in Coimbatore - Side View",
        category: "umbrella",
        bg: "bg-slate-100",
        keywords: ["best washer coimbatore", "roofing accessories india", "metal washer supplier tamil nadu"]
    },
    {
        src: umbrellaHero,
        alt: "Top Rated Nitrile Umbrella Washers Wholesale - Group Shot of Industrial Sealing Solutions from India",
        title: "Top Rated Umbrella Washers Wholesale - India",
        category: "umbrella",
        keywords: ["wholesale metal washers india", "bulk roofing supply tamil nadu", "best umbrella washer manufacturer"]
    },
    {
        src: umbrellaPack,
        alt: "Premium Bulk Packaging of Umbrella Washers - Best Wholesale Pricing in India for Construction Projects",
        title: "Premium Bulk Umbrella Washers - Best India Pricing",
        category: "umbrella",
        keywords: ["bulk metal washer tamil nadu", "construction supply coimbatore", "best roof washer india"]
    },
    {
        src: umbrellaRemovebg,
        alt: "Industrial Grade Umbrella Washer with Sealing Compound - Best Choice for Roofing Projects in Tamil Nadu",
        title: "Industrial Umbrella Washer - Best Tamil Nadu Choice",
        category: "umbrella",
        bg: "bg-slate-100",
        keywords: ["industrial washer coimbatore", "best leaking protection india", "premium metal supply"]
    },

    // Bitumen Washer Section
    {
        src: bitumenFrontRemovebg,
        alt: "Best Bitumen Washer in India - Black Galvanized Cast Iron Sealing Solution for Tar Felt Roofing",
        title: "Best Bitumen Washer in India - Front View",
        category: "bitumen",
        bg: "bg-slate-100",
        keywords: ["best bitumen washer india", "black galvanized washer tamil nadu", "top bitumen supplier coimbatore"]
    },
    {
        src: bitumenSideRemovebg,
        alt: "Best Tar Felt Washer in Tamil Nadu - Side Profile showing Solar-Activated Sealing for Complete Waterproofing",
        title: "Best Tar Felt Washer in Tamil Nadu - Side View",
        category: "bitumen",
        bg: "bg-slate-100",
        keywords: ["waterproof bitumen washer india", "best sealing washer coimbatore", "premium roofing supply"]
    },
    {
        src: bitumenTable,
        alt: "Top Quality Bitumen Washers Display - Best Industrial Roofing Accessories Manufacturer in Coimbatore",
        title: "Top Quality Bitumen Washers - Best Coimbatore Manufacturer",
        category: "bitumen",
        keywords: ["roofing accessory supplier tamil nadu", "best bitumin washer india", "metal supply coimbatore"]
    },
    {
        src: bitumenRemovebg,
        alt: "Professional Bitumen Sealing Washer Catalogue - Best Industrial Quality and Durability in India",
        title: "Professional Bitumen Washer - Best India Quality",
        category: "bitumen",
        bg: "bg-slate-100",
        keywords: ["best tar washer tamil nadu", "industrial metal supplier india", "roof leakage solution coimbatore"]
    },
];

const Gallery = () => {
    const [lightboxImg, setLightboxImg] = useState<GalleryImage | null>(null);

    const gallerySchema = {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        "name": "Best Metal Washer Gallery in India - SKR Metal Suppliers",
        "description": "Premium industrial gallery of Nitrile Umbrella and Bitumen washers. Ranked as the best metal washer supplier in Tamil Nadu and Coimbatore, providing state-of-the-art roofing sealing solutions across India.",
        "url": "https://www.skrmetalsuppliers.in/gallery",
        "image": galleryImages.map((img) => ({
            "@type": "ImageObject",
            "name": img.title,
            "description": img.alt,
            "contentUrl": `https://www.skrmetalsuppliers.in${img.src}`,
            "caption": img.alt,
            "keywords": img.keywords.join(", ")
        })),
    };

    return (
        <Layout>
            <SEO
                title="Best Metal Washer Gallery | Coimbatore, Tamil Nadu, India – SKR"
                description="Explore the best metal washer product photos in India. High-resolution Nitrile Umbrella & Bitumen washers for roofing. Top supplier in Tamil Nadu and Coimbatore."
                canonical="/gallery"
                schema={gallerySchema}
            />

            {/* Hero Section */}
            <section className="bg-primary section-padding">
                <div className="container-section">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                            Best Product Gallery in India
                        </h1>
                        <p className="text-lg text-primary-foreground/90">
                            High-quality product photos of the best Nitrile Umbrella and Bitumen washers in Tamil Nadu and Coimbatore.
                        </p>
                    </div>
                </div>
            </section>

            {/* Umbrella Washers Section */}
            <section className="bg-background pt-12 pb-6">
                <div className="container-full">
                    <h2 className="text-2xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">
                        Best Nitrile Umbrella Washers in India
                    </h2>
                    <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
                        {galleryImages.filter(img => img.category === "umbrella").map((img, idx) => (
                            <div
                                key={idx}
                                className={`break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-zoom-in relative border border-border/50 ${img.bg ?? "bg-white"}`}
                                onClick={() => setLightboxImg(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    title={img.title}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bitumen Washers Section */}
            <section className="bg-background pt-6 pb-20">
                <div className="container-full">
                    <h2 className="text-2xl font-bold mb-8 text-primary border-l-4 border-primary pl-4">
                        Best Bitumen Washers in Tamil Nadu
                    </h2>
                    <div className="columns-2 sm:columns-3 lg:columns-4 gap-6 space-y-6">
                        {galleryImages.filter(img => img.category === "bitumen").map((img, idx) => (
                            <div
                                key={idx}
                                className={`break-inside-avoid rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group cursor-zoom-in relative border border-border/50 ${img.bg ?? "bg-white"}`}
                                onClick={() => setLightboxImg(img)}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    title={img.title}
                                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300 flex items-center justify-center">
                                    <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-lg" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {lightboxImg && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
                    onClick={() => setLightboxImg(null)}
                >
                    <div
                        className={`relative max-w-xl w-full rounded-2xl overflow-hidden shadow-2xl ${lightboxImg.bg ?? "bg-white"}`}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setLightboxImg(null)}
                            className="absolute top-4 right-4 z-10 bg-primary text-white rounded-full p-2 hover:bg-primary/80 transition shadow-lg"
                            aria-label="Close"
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <img
                            src={lightboxImg.src}
                            alt={lightboxImg.alt}
                            className="w-full h-auto max-h-[85vh] object-contain"
                        />
                        <div className="px-8 py-6 bg-white">
                            <h3 className="font-bold text-primary text-xl">{lightboxImg.title}</h3>
                            <p className="text-sm text-gray-500 mt-2 leading-relaxed">{lightboxImg.alt}</p>
                        </div>
                    </div>
                </div>
            )}
        </Layout>
    );
};

export default Gallery;
