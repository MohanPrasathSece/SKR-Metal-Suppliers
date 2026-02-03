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
import heroImage from "@/assets/hero-warehouse.jpg";
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
                        "name": "Industrial Umbrella Washers",
                        "description": "High-quality metal umbrella washers for industrial roofing applications.",
                        "image": umbrellaWashers,
                        "brand": {
                            "@type": "Brand",
                            "name": "SKR"
                        },
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "areaServed": "IN"
                        }
                    }
                },
                {
                    "@type": "ListItem",
                    "position": 2,
                    "item": {
                        "@type": "Product",
                        "name": "Bitumen Washers",
                        "description": "Weather-resistant bitumen washers for confident roofing and sealing.",
                        "image": bitumenWashers,
                        "brand": {
                            "@type": "Brand",
                            "name": "SKR"
                        },
                        "offers": {
                            "@type": "Offer",
                            "availability": "https://schema.org/InStock",
                            "areaServed": "IN"
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
                title="Premium Metal Washers Manufacturer in Coimbatore"
                description="SKR Metal Suppliers: Leading manufacturer & wholesaler of Umbrella Washers, Bitumen Washers, and Industrial Metal Washers in Coimbatore. Best Quality & Price in Tamil Nadu."
                canonical="/"
                schema={homeSchema}
            />
            {/* Hero Section - White & Navy */}
            <section className="bg-white">
                <div className="container-section py-12 md:py-20">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div>


                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-primary">
                                Premium Metal Washers Supplier in Coimbatore
                            </h1>

                            <p className="text-lg md:text-xl mb-4 font-medium leading-relaxed text-gray-700">
                                Reliable Umbrella & Bitumen Washer Supply Across Full South India
                            </p>

                            <p className="text-base mb-10 leading-relaxed text-gray-600 max-w-xl">
                                SKR Metal Suppliers provides high-quality metal washers for industrial and commercial applications. Serving businesses across Tamil Nadu and Full South India.
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

                        <div className="order-first lg:order-last">
                            <div className="relative">
                                <div className="aspect-[4/3] rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                    <img
                                        src={heroImage}
                                        alt="Industrial warehouse with metal washers"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 bg-primary text-white px-8 py-4 rounded-xl shadow-xl hidden md:block">
                                    <div className="text-sm font-semibold flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5" />
                                        ISO Certified Quality
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
                                    alt="Best Industrial Umbrella Washers in Coimbatore Tamil Nadu"
                                    className="w-full h-full object-contain scale-150 group-hover:scale-[1.65] transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 text-primary">Umbrella Washers</h3>
                                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                                    Durable metal washers designed for industrial applications. Built with quality materials for long-lasting performance.
                                </p>
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
                                    alt="Premium Bitumen Washers Manufacturer in Coimbatore India"
                                    className="w-full h-full object-contain scale-150 group-hover:scale-[1.65] transition-transform duration-500"
                                />
                            </div>
                            <div className="p-8">
                                <h3 className="text-xl font-bold mb-4 text-primary">Bitumen Washers</h3>
                                <p className="text-base text-gray-600 mb-6 leading-relaxed">
                                    Weather-resistant washers for roofing and industrial use. Strong and reliable for demanding applications.
                                </p>
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
