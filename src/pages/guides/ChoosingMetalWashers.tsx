import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, Wrench, BookOpen, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const ChoosingMetalWashers = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "How to Choose Metal Washers for Roofing Applications: Engineering Guide",
        "description": "Technical guide explaining washer selection criteria for industrial roofing. Covers material properties, load requirements, environmental factors, and common selection mistakes.",
        "author": {
            "@type": "Organization",
            "name": "SKR Metal Suppliers"
        },
        "publisher": {
            "@type": "Organization",
            "name": "SKR Metal Suppliers",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.skrmetalsuppliers.in/skr-logo.png"
            }
        },
        "datePublished": "2026-02-03",
        "dateModified": "2026-02-03"
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "How do I determine the correct washer thickness for my roofing application?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Washer thickness depends on three factors: the load per fastener point, the substrate material hardness, and environmental exposure. For standard corrugated metal roofing, 1.5mm to 2mm thickness is commonly used. Higher wind load areas or softer substrates may require 2.5mm or thicker to prevent deformation."
                }
            },
            {
                "@type": "Question",
                "name": "Should I use galvanized iron or stainless steel washers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "This depends on environmental exposure. Galvanized iron (GI) washers are cost-effective for normal environments and provide adequate corrosion resistance for 10-15 years. Stainless steel (SS304 or SS316) is recommended for coastal areas, chemical exposure, or applications requiring 20+ years of service life without maintenance."
                }
            },
            {
                "@type": "Question",
                "name": "What is the difference between umbrella washers and bitumen washers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Umbrella washers are metal-only fasteners designed to distribute load across the roofing sheet. Bitumen washers include a bonded sealing compound (EPDM or bitumen) that creates a waterproof seal around the fastener hole. Use bitumen washers where water ingress prevention is critical."
                }
            }
        ]
    };

    return (
        <Layout>
            <SEO
                title="How to Choose Metal Washers for Roofing Applications | Technical Guide"
                description="Engineering guide to selecting the right metal washers for industrial roofing. Learn about material properties, load requirements, environmental factors, and common mistakes to avoid."
                canonical="/guide/choosing-metal-washers"
                schema={[schema, faqSchema]}
            />

            <article className="bg-white">
                <div className="container-section py-12 md:py-16 max-w-4xl">
                    {/* Breadcrumb */}
                    <nav className="mb-8 text-sm text-gray-600">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <span className="mx-2">/</span>
                        <Link to="/guides" className="hover:text-primary">Technical Guides</Link>
                        <span className="mx-2">/</span>
                        <span className="text-gray-900">Choosing Metal Washers</span>
                    </nav>

                    {/* Header */}
                    <header className="mb-12">
                        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 leading-tight">
                            How to Choose Metal Washers for Roofing Applications
                        </h1>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            A technical guide to washer selection based on load requirements, environmental conditions, and application-specific factors. This guide explains the engineering logic behind material and specification choices.
                        </p>
                        <div className="mt-6 flex items-center gap-4 text-sm text-gray-500">
                            <span>Updated: February 2026</span>
                            <span>•</span>
                            <span>8 min read</span>
                        </div>
                    </header>

                    {/* Introduction */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-6">Why Washer Selection Matters</h2>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Metal washers in roofing applications serve two critical functions: load distribution and sealing. Incorrect selection can lead to premature failure through several mechanisms including substrate deformation, corrosion-induced weakening, or seal degradation.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            This guide explains the selection criteria used in industrial roofing installations. The approach is based on matching washer properties to application requirements rather than defaulting to generic specifications.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-6">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="font-semibold text-amber-900 mb-2">Common misconception:</p>
                                    <p className="text-amber-800 text-sm leading-relaxed">
                                        "All washers are the same, just buy the cheapest option." This approach ignores material compatibility, environmental factors, and load requirements, often resulting in failures within 3-5 years instead of the expected 15-20 year service life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Decision Framework */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-6">Washer Selection Decision Framework</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Use this systematic approach to determine appropriate washer specifications for your application:
                        </p>

                        <div className="space-y-6">
                            {/* Step 1 */}
                            <div className="border-l-4 border-primary bg-gray-50 p-6">
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span>
                                    Determine Load Requirements
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Calculate the expected load per fastener point based on:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong>Wind load:</strong> Consult local building codes for wind pressure values (typically 1.5 to 3 kPa for normal applications)</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong>Fastener spacing:</strong> Wider spacing increases load per point</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span><strong>Safety factor:</strong> Apply 1.5x to 2x multiplier for cyclone-prone regions</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Step 2 */}
                            <div className="border-l-4 border-primary bg-gray-50 p-6">
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span>
                                    Assess Environmental Exposure
                                </h3>
                                <div className="overflow-x-auto">
                                    <table className="w-full text-sm border-collapse">
                                        <thead>
                                            <tr className="bg-primary text-white">
                                                <th className="border border-gray-300 p-3 text-left">Environment</th>
                                                <th className="border border-gray-300 p-3 text-left">Corrosion Risk</th>
                                                <th className="border border-gray-300 p-3 text-left">Recommended Material</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="border border-gray-300 p-3">Inland / Normal</td>
                                                <td className="border border-gray-300 p-3">Low</td>
                                                <td className="border border-gray-300 p-3">Galvanized Iron (GI)</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 p-3">Industrial</td>
                                                <td className="border border-gray-300 p-3">Medium</td>
                                                <td className="border border-gray-300 p-3">Heavy GI or SS304</td>
                                            </tr>
                                            <tr>
                                                <td className="border border-gray-300 p-3">Coastal (&lt;5km from sea)</td>
                                                <td className="border border-gray-300 p-3">High</td>
                                                <td className="border border-gray-300 p-3">SS304 or SS316</td>
                                            </tr>
                                            <tr className="bg-gray-50">
                                                <td className="border border-gray-300 p-3">Chemical Exposure</td>
                                                <td className="border border-gray-300 p-3">Very High</td>
                                                <td className="border border-gray-300 p-3">SS316 or specialized alloys</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Step 3 */}
                            <div className="border-l-4 border-primary bg-gray-50 p-6">
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">3</span>
                                    Choose Washer Type and Sealing
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Select based on waterproofing requirements:
                                </p>
                                <ul className="space-y-3">
                                    <li className="text-gray-700">
                                        <strong className="text-primary">Umbrella washers (metal only):</strong> Suitable for applications where the roofing sheet itself provides waterproofing, and the washer primarily distributes load
                                    </li>
                                    <li className="text-gray-700">
                                        <strong className="text-primary">Bitumen/EPDM bonded washers:</strong> Required when the fastener penetration must be sealed against water ingress. The bonded seal compresses during installation to fill the hole
                                    </li>
                                </ul>
                            </div>

                            {/* Step 4 */}
                            <div className="border-l-4 border-primary bg-gray-50 p-6">
                                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                                    <span className="bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center text-sm">4</span>
                                    Specify Dimensions
                                </h3>
                                <p className="text-gray-700 mb-4 leading-relaxed">
                                    Standard specifications for corrugated metal roofing:
                                </p>
                                <ul className="space-y-2 ml-6">
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="font-semibold text-primary">Diameter:</span>
                                        <span>19mm to 25mm typical. Larger diameters distribute load over greater area</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="font-semibold text-primary">Thickness:</span>
                                        <span>1.5mm to 2.5mm. Thicker washers resist deformation under high loads</span>
                                    </li>
                                    <li className="flex items-start gap-3 text-gray-700">
                                        <span className="font-semibold text-primary">Hole size:</span>
                                        <span>Match to screw diameter with minimal clearance</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Common Mistakes */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-6">Common Selection Mistakes</h2>
                        <div className="space-y-4">
                            <div className="border border-red-200 bg-red-50 p-5 rounded-lg">
                                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Using undersized washers in high-load applications
                                </h4>
                                <p className="text-red-800 text-sm leading-relaxed">
                                    Results in substrate deformation and eventual pull-through failure. This is common when fastener spacing is increased beyond design specifications.
                                </p>
                            </div>

                            <div className="border border-red-200 bg-red-50 p-5 rounded-lg">
                                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Mixing material types in same installation
                                </h4>
                                <p className="text-red-800 text-sm leading-relaxed">
                                    Galvanic corrosion occurs when dissimilar metals are in contact with moisture. Do not mix stainless steel washers with galvanized screws or vice versa.
                                </p>
                            </div>

                            <div className="border border-red-200 bg-red-50 p-5 rounded-lg">
                                <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Ignoring temperature cycling effects
                                </h4>
                                <p className="text-red-800 text-sm leading-relaxed">
                                    In regions with extreme temperature variations, thermal expansion/contraction can degrade sealing materials. EPDM maintains elasticity better than traditional bitumen in these conditions.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-6">Technical Questions</h2>
                        <Accordion type="single" collapsible className="space-y-4">
                            <AccordionItem value="item-1" className="border border-gray-200 rounded-lg px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                                    How do I determine the correct washer thickness for my roofing application?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                                    Washer thickness depends on three factors: the load per fastener point, the substrate material hardness, and environmental exposure. For standard corrugated metal roofing, 1.5mm to 2mm thickness is commonly used. Higher wind load areas or softer substrates may require 2.5mm or thicker to prevent deformation. If you observe indentation around existing fasteners, this indicates insufficient thickness.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-2" className="border border-gray-200 rounded-lg px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                                    Should I use galvanized iron or stainless steel washers?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                                    This depends on environmental exposure. Galvanized iron (GI) washers are cost-effective for normal environments and provide adequate corrosion resistance for 10-15 years. Stainless steel (SS304 or SS316) is recommended for coastal areas, chemical exposure, or applications requiring 20+ years of service life without maintenance. The cost difference is approximately 3-4x, so balance this against expected service life requirements.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-3" className="border border-gray-200 rounded-lg px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                                    What is the difference between umbrella washers and bitumen washers?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                                    Umbrella washers are metal-only fasteners designed to distribute load across the roofing sheet. Bitumen washers include a bonded sealing compound (EPDM or bitumen) that creates a waterproof seal around the fastener hole. Use bitumen washers where water ingress prevention is critical, such as in exposed fastener applications or where the roof sheet itself may allow capillary action around holes.
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="item-4" className="border border-gray-200 rounded-lg px-6">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary">
                                    Can I use standard washers instead of specialized roofing washers?
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 leading-relaxed pt-4">
                                    Standard flat washers are not recommended for roofing applications. Roofing washers (umbrella type) are designed with a larger diameter and specific profile to distribute load across the corrugations without creating stress concentration points. Standard washers may punch through thin roofing sheets under wind load or thermal movement.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </section>

                    {/* Related Topics */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-bold text-primary mb-6">Related Technical Guides</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Link to="/guide/washer-installation-mistakes" className="border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group">
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary flex items-center gap-2">
                                    <Wrench className="w-5 h-5" />
                                    Washer Installation Mistakes That Cause Roof Leaks
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Learn about common installation errors and how to avoid them during roofing projects.
                                </p>
                            </Link>

                            <Link to="/guide/roofing-washer-failure-signs" className="border border-gray-200 rounded-lg p-6 hover:border-primary hover:shadow-lg transition-all group">
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary flex items-center gap-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Why Metal Roofing Washers Fail: Common Causes
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    Understand failure mechanisms and how to identify early warning signs before major issues develop.
                                </p>
                            </Link>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary/5 border-l-4 border-primary p-8 rounded-lg">
                        <h3 className="text-xl font-bold text-primary mb-4">Need Technical Assistance?</h3>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            If you need help determining the right washer specifications for your specific application, our team can provide technical guidance based on your project requirements.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                                <a href="tel:9025421149" className="flex items-center gap-2">
                                    <Phone className="w-4 h-4" />
                                    Call: 9025421149
                                </a>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                                <Link to="/products" className="flex items-center gap-2">
                                    View Product Specifications
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </Button>
                        </div>
                    </section>
                </div>
            </article>
        </Layout>
    );
};

export default ChoosingMetalWashers;
