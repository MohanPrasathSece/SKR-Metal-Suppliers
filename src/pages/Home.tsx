import { Link } from "react-router-dom";
import { Phone, MessageCircle, Truck, Shield, MapPin, CheckCircle, Users, Award, Clock, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import umbrellaPack from "@/assets/umbrella_hero.png";
import bitumenHero from "@/assets/bitumen_copy_hero.png";
import umbrellaWashers from "@/assets/umbrella-front-removebg-preview.png";
import bitumenWashers from "@/assets/bitumen-front-removebg-preview.png";
import SEO from "@/components/SEO";

const Home = () => {
    const homeSchema = [
        {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
                {
                    "@type": "ListItem",
                    "position": 1,
                    "item": {
                        "@type": "Product",
                        "name": "Nitrile Umbrella Washers",
                        "description": "Premium dual-layered roofing washer with zinc-coated MS top and rubber base for 100% leak protection.",
                        "image": umbrellaWashers,
                        "brand": {
                            "@type": "Brand",
                            "name": "SKR"
                        },
                        "category": "Industrial Fasteners",
                        "material": "Nitrile Rubber / Zinc-Coated MS",
                        "sameAs": "https://en.wikipedia.org/wiki/Washer_(hardware)",
                        "offers": {
                            "@type": "Offer",
                            "price": "2",
                            "priceCurrency": "INR",
                            "priceValidUntil": "2030-12-31",
                            "availability": "https://schema.org/InStock",
                            "areaServed": "IN",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "reviewCount": "150",
                            "bestRating": "5",
                            "worstRating": "1"
                        }
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Product",
                        "name": "Black Galvanized Cast Iron Bitumen Washers",
                        "description": "Solar-activated waterproof bitumen washer made from quality tar felt sheets.",
                        "image": bitumenWashers,
                        "brand": {
                            "@type": "Brand",
                            "name": "SKR"
                        },
                        "category": "Waterproofing",
                        "material": "Bitumen / Tar Felt",
                        "sameAs": "https://en.wikipedia.org/wiki/Bitumen",
                        "offers": {
                            "@type": "Offer",
                            "price": "14",
                            "priceCurrency": "INR",
                            "priceValidUntil": "2030-12-31",
                            "availability": "https://schema.org/InStock",
                            "areaServed": "IN",
                            "itemCondition": "https://schema.org/NewCondition"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "reviewCount": "125",
                            "bestRating": "5",
                            "worstRating": "1"
                        }
                    }
                }
            ]
        },
        {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What is the minimum order quantity?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We handle orders of all sizes to accommodate different business needs. However, bulk quantities often enjoy additional discounts. Contact us for a tailored quote."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does delivery take across Full South India?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Local deliveries in Coimbatore are processed within 24 hours. For other regions (Tamil Nadu, Kerala, Karnataka, etc.), it typically takes 2-4 business days."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you provide custom sizes?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes, we can provide metal washers in various custom sizes and thicknesses beyond our standard inventory to perfectly match your project requirements."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What materials do you use for your washers?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We use high-grade industrial materials including Galvanized Iron (GI), Stainless Steel (SS), and Bitumen-coated compounds for durability and corrosion resistance."
                    }
                }
            ]
        }
    ];

    return (
        <Layout>
            <SEO
                title="Best Metal Washer Manufacturer in India | Coimbatore, Tamil Nadu"
                description="SKR Metal Suppliers is the best manufacturer of Nitrile Umbrella and Bitumen washers in India. Premium quality fasteners in Coimbatore, Tamil Nadu. Fast delivery across South India."
                canonical="/"
                schema={homeSchema}
            />
            {/* Hero Section - White & Navy */}
            <section className="bg-white">
                <div className="container-section py-8 md:py-16">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
                        <div>


                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary">
                                Premium Metal Washers Supplier in Coimbatore
                            </h1>

                            <p className="text-lg md:text-xl mb-4 font-medium leading-relaxed text-gray-700">
                                Reliable Umbrella & Bitumen Washer Supply Across Kerala, AP, Karnataka, Telangana & Tamil Nadu
                            </p>

                            <p className="text-base mb-10 leading-relaxed text-gray-600 max-w-xl">
                                SKR Metal Suppliers provides high-quality industrial metal washers with fast delivery across Full South India. Trusted by contractors and builders for premium sealing solutions.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <Button asChild size="lg" className="text-base font-bold px-8 py-6 bg-primary hover:bg-primary/90 text-white shadow-xl hover:shadow-2xl transition-all">
                                    <a href="tel:9025421149" className="flex items-center gap-3">
                                        <Phone className="w-5 h-5" />
                                        Call Now: 9025421149
                                    </a>
                                </Button>
                                <Button asChild size="lg" variant="outline" className="text-base font-bold px-8 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-xl">
                                    <a
                                        href="https://wa.me/919025421149"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Us
                                    </a>
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
                                <div>
                                    <div className="text-lg font-bold mb-1 text-primary">Premium</div>
                                    <div className="text-sm text-gray-600">Quality</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold mb-1 text-primary">Fast</div>
                                    <div className="text-sm text-gray-600">Delivery</div>
                                </div>
                                <div>
                                    <div className="text-lg font-bold mb-1 text-primary">Bulk</div>
                                    <div className="text-sm text-gray-600">Supplies</div>
                                </div>
                            </div>
                        </div>

                        <div className="md:order-last">
                            <div className="relative h-auto md:h-[500px] grid grid-cols-2 gap-4 md:block">
                                {/* Bitumen Washer Image - Top Left, pushed slightly up on MD+ */}
                                <div className="md:absolute md:-top-4 md:left-0 md:w-2/3 aspect-square rounded-2xl overflow-hidden border-4 border-primary/10 shadow-xl md:shadow-2xl z-10 bg-slate-100">
                                    <img
                                        src={bitumenHero}
                                        alt="Premium Bitumen Washers"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Umbrella Washer Image - Bottom Right, pushed further down & right on MD+ */}
                                <div className="md:absolute md:bottom-[-28px] md:right-[-12px] md:w-2/3 aspect-square rounded-2xl overflow-hidden border-4 border-primary/10 shadow-xl md:shadow-2xl transform hover:scale-105 transition-all duration-500 z-20">
                                    <img
                                        src={umbrellaPack}
                                        alt="Premium Umbrella Washers Pack"
                                        className="w-full h-full object-cover"
                                        // @ts-ignore
                                        fetchpriority="high"
                                        loading="eager"
                                    />
                                </div>
                                {/* Decorative Cross Element */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/20 rounded-full animate-pulse z-0 hidden lg:block"></div>

                                <div className="hidden lg:block absolute -bottom-4 -left-4 bg-primary text-white px-6 py-3 rounded-xl shadow-xl z-30 animate-bounce-subtle">
                                    <div className="text-sm font-bold flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        South India's Choice
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-section">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Why Choose SKR Metal Suppliers?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We are committed to providing the best quality products and services
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all  duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Quality Products</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Premium grade metal washers for all industrial needs</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all  duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Clock className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Timely Delivery</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Fast and reliable delivery across Full South India</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all  duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Trusted Partner</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Serving businesses with integrity and reliability</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all  duration-300">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Bulk Orders</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">Handle orders of any size with competitive pricing</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Highlights */}
            <section className="section-padding bg-white">
                <div className="container-section">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Our Products</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Quality metal washers for industrial and commercial applications
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-10">
                        {/* Umbrella Washers Card */}
                        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all  duration-300 group">
                            <div className="aspect-video overflow-hidden bg-gray-50 p-2">
                                <img
                                    src={umbrellaWashers}
                                    alt="Heavy-duty galvanized iron GI stainless steel SS umbrella washers manufacturer Coimbatore - Best quality metal roofing fasteners for corrugated sheet profiled cladding industrial construction bulk wholesale supplier Tamil Nadu"
                                    className="w-full h-full object-contain scale-150 group-hover:scale-[1.65] transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 text-primary">Nitrile Umbrella Washers</h3>
                                <p className="text-base text-gray-600 mb-2 leading-relaxed">
                                    High-performance hybrid fasteners combining a protective MS top with a resilient rubber base to eliminate water ingress.
                                </p>
                                <div className="text-2xl font-bold text-primary mb-6">₹2/Piece</div>
                                <Button asChild variant="outline" size="lg" className="w-full text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white">
                                    <Link to="/products" className="flex items-center justify-center gap-2">
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        {/* Bitumen Washers Card */}
                        <div className="bg-white border-2 border-gray-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all  duration-300 group">
                            <div className="aspect-video overflow-hidden bg-gray-50 p-2">
                                <img
                                    src={bitumenWashers}
                                    alt="Weather-resistant bitumen bonded EPDM rubber sealing washers Coimbatore manufacturer - Waterproof metal roofing washers for leak-proof installation industrial projects commercial buildings Tamil Nadu Kerala Karnataka supplier"
                                    className="w-full h-full object-contain scale-150 group-hover:scale-[1.65] transition-transform duration-500"
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 text-primary">Bitumen Washers</h3>
                                <p className="text-base text-gray-600 mb-2 leading-relaxed">
                                    Premium tar-felt sealing solutions that utilize solar heat to create a watertight barrier for all roofing bolts.
                                </p>
                                <div className="text-2xl font-bold text-primary mb-6">₹14/Piece</div>
                                <Button asChild variant="outline" size="lg" className="w-full text-sm font-semibold border-2 border-primary text-primary hover:bg-primary hover:text-white">
                                    <Link to="/products" className="flex items-center justify-center gap-2">
                                        View Details
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Delivery Coverage */}
            <section className="section-padding bg-gray-50">
                <div className="container-section">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Delivery Across Full South India</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We deliver quality washers to your doorstep with reliable service
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Local Delivery</h3>
                            <p className="text-sm text-gray-600">Fast delivery in Coimbatore</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Truck className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Full South India Coverage</h3>
                            <p className="text-sm text-gray-600">Tamil Nadu, Kerala, Karnataka & more</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all">
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Safe Packaging</h3>
                            <p className="text-sm text-gray-600">Secure handling for all orders</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Indicators */}
            <section className="section-padding bg-white">
                <div className="container-section">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary">Trusted by Industries Across Full South India</h2>
                            <p className="text-base text-gray-600 mb-8 leading-relaxed">
                                SKR Metal Suppliers has built a reputation for quality and reliability. We serve various industries including construction, roofing, manufacturing, and more.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-base font-medium text-gray-700">Construction & Building Industry</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-base font-medium text-gray-700">Roofing Contractors</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-base font-medium text-gray-700">Manufacturing Units</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                                    <span className="text-base font-medium text-gray-700">Industrial Projects</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="bg-primary p-8 rounded-2xl text-center text-white shadow-xl hover:shadow-2xl transition-all ">
                                <div className="text-lg font-bold mb-2">100%</div>
                                <div className="text-sm opacity-90">Customer Satisfaction</div>
                            </div>
                            <div className="bg-primary p-8 rounded-2xl text-center text-white shadow-xl hover:shadow-2xl transition-all ">
                                <div className="text-lg font-bold mb-2">Best</div>
                                <div className="text-sm opacity-90">Quality Service</div>
                            </div>
                            <div className="bg-primary p-8 rounded-2xl text-center text-white shadow-xl hover:shadow-2xl transition-all ">
                                <div className="text-lg font-bold mb-2">Timely</div>
                                <div className="text-sm opacity-90">Orders Delivered</div>
                            </div>
                            <div className="bg-primary p-8 rounded-2xl text-center text-white shadow-xl hover:shadow-2xl transition-all ">
                                <div className="text-lg font-bold mb-2">South India</div>
                                <div className="text-sm opacity-90">Coverage Area</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-section">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">How to Order from Us</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Simple and straightforward process to get your washers delivered
                        </p>
                    </div>
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                    1
                                </div>
                                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-primary/30 hidden md:block"></div>
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Contact Us</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Call or WhatsApp us with your requirements
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                    2
                                </div>
                                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-primary/30 hidden md:block"></div>
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Get Quote</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Receive competitive pricing for your order
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="relative mb-6">
                                <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                    3
                                </div>
                                <div className="absolute top-10 left-1/2 w-full h-0.5 bg-primary/30 hidden md:block"></div>
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Confirm Order</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Finalize quantity and delivery details
                            </p>
                        </div>
                        <div className="text-center group">
                            <div className="mb-6">
                                <div className="w-20 h-20 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto text-3xl font-bold shadow-xl group-hover:scale-110 transition-transform">
                                    4
                                </div>
                            </div>
                            <h3 className="text-lg font-bold mb-3 text-primary">Fast Delivery</h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                Receive your order at your doorstep
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-gray-50">
                <div className="container-section max-w-4xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">Frequently Asked Questions</h2>
                        <p className="text-lg text-gray-600">
                            Common questions about our products and services
                        </p>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="border-b border-gray-100 grayscale-[0.5]">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:text-primary/80 py-6 text-left">
                                    What is the minimum order quantity?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    We handle orders of all sizes to accommodate different business needs. However, bulk quantities often enjoy additional discounts and more competitive pricing per unit. Contact us with your specific requirements for a tailored quote.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border-b border-gray-100">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:text-primary/80 py-6 text-left">
                                    How long does delivery take across Full South India?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    We take pride in our fast delivery network. Local deliveries within Coimbatore are usually processed within 24 hours. For other regions across Full South India (Tamil Nadu, Kerala, Karnataka, etc.), it typically takes 2-4 business days depending on the location.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border-b border-gray-100">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:text-primary/80 py-6 text-left">
                                    Do you provide custom sizes?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    Yes, we understand that different projects have unique specifications. We can provide metal washers in various custom sizes and thicknesses beyond our standard inventory to perfectly match your project requirements.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border-none">
                                <AccordionTrigger className="text-lg font-bold text-primary hover:text-primary/80 py-6 text-left">
                                    What materials do you use for your washers?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 text-base leading-relaxed pb-6">
                                    We use high-grade industrial materials including Galvanized Iron (GI), Stainless Steel (SS), and Bitumen-coated compounds. All our materials are chosen for their durability, corrosion resistance, and performance in harsh industrial environments.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section - White */}
            <section className="bg-white">
                <div className="container-section py-20 md:py-24 text-center">
                    <div className="inline-block bg-primary/10 backdrop-blur-sm px-5 py-2 rounded-full mb-6">
                        <span className="text-sm font-bold text-primary flex items-center gap-2">
                            <Zap className="w-4 h-4 fill-primary" />
                            Quick Response Guaranteed
                        </span>
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
                        Ready to Place an Order?
                    </h2>
                    <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Contact us today for quality washers at competitive rates. Our team is ready to help you with your requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button asChild size="lg" className="text-base font-bold px-10 py-6 bg-primary text-white hover:bg-primary/90 shadow-2xl hover:shadow-3xl transition-all hover:scale-105">
                            <a href="tel:9025421149" className="flex items-center gap-3">
                                <Phone className="w-5 h-5" />
                                Call 9025421149
                            </a>
                        </Button>
                        <Button asChild size="lg" variant="outline" className="text-base font-bold px-10 py-6 border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-2xl hover:scale-105 transition-all">
                            <Link to="/contact" className="flex items-center gap-3">
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </Button>
                    </div>

                    <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-gray-600">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">Best Prices</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">Fast Delivery</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5" />
                            <span className="text-sm font-medium">Quality Assured</span>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Home;
