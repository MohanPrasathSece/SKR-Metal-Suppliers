import { Link } from "react-router-dom";
import { CheckCircle, AlertTriangle, Calculator, Ruler } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const WasherGuide = () => {
    return (
        <Layout>
            <SEO
                title="Complete Guide to Choosing Metal Roofing Washers | Technical Selection Criteria"
                description="Learn how to select the right umbrella and bitumen washers for your roofing project. Covers sizing, material selection, load calculations, and installation best practices for corrugated metal sheets."
                canonical="/guide/choosing-metal-washers"
            />

            {/* Hero Section */}
            <section className="bg-primary section-padding">
                <div className="container-section">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">
                            How to Choose the Right Metal Roofing Washers
                        </h1>
                        <p className="text-lg text-primary-foreground/90">
                            Technical guide for selecting umbrella washers, bitumen washers, and sealing hardware based on sheet gauge, environmental conditions, and load requirements.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-background">
                <div className="container-section max-w-4xl">

                    {/* Why Washer Selection Matters */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Washer Selection Affects Roof Longevity</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Incorrect washer selection is one of the most common causes of premature roof failure. Washers serve three critical functions: load distribution, waterproofing, and thermal expansion management. When mismatched to the sheet material or gauge, they can cause:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1 text-red-900">Point Loading Failures</h4>
                                        <p className="text-sm text-red-800">Undersized washers concentrate stress, tearing through thin gauge sheets</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1 text-red-900">Waterproofing Compromise</h4>
                                        <p className="text-sm text-red-800">Wrong material washers allow capillary moisture penetration</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1 text-red-900">Galvanic Corrosion</h4>
                                        <p className="text-sm text-red-800">Incompatible metal washers accelerate rust through electrochemical reaction</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-semibold mb-1 text-red-900">Thermal Movement Damage</h4>
                                        <p className="text-sm text-red-800">Rigid washers crack under metal expansion/contraction cycles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Washer Size Selection Table */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Washer Size Selection Chart</h2>
                        <p className="text-muted-foreground mb-6">
                            Match washer diameter to sheet gauge and fastener size to ensure proper load distribution and prevent tearing.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-border">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="border border-border p-3 text-left">Sheet Gauge (TCT)</th>
                                        <th className="border border-border p-3 text-left">Fastener Size</th>
                                        <th className="border border-border p-3 text-left">Minimum Washer Diameter</th>
                                        <th className="border border-border p-3 text-left">Recommended Type</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-border p-3">0.35mm - 0.40mm</td>
                                        <td className="border border-border p-3">#12 (4.8mm)</td>
                                        <td className="border border-border p-3">19mm (3/4")</td>
                                        <td className="border border-border p-3">Bitumen/EPDM bonded</td>
                                    </tr>
                                    <tr className="bg-muted/50">
                                        <td className="border border-border p-3">0.45mm - 0.50mm</td>
                                        <td className="border border-border p-3">#14 (5.5mm)</td>
                                        <td className="border border-border p-3">25mm (1")</td>
                                        <td className="border border-border p-3">Standard umbrella</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-border p-3">0.60mm - 0.70mm</td>
                                        <td className="border border-border p-3">5/16" (8mm)</td>
                                        <td className="border border-border p-3">32mm (1.25")</td>
                                        <td className="border border-border p-3">Heavy-duty umbrella</td>
                                    </tr>
                                    <tr className="bg-muted/50">
                                        <td className="border border-border p-3">0.80mm+</td>
                                        <td className="border border-border p-3">3/8" (10mm)</td>
                                        <td className="border border-border p-3">38mm (1.5")</td>
                                        <td className="border border-border p-3">Industrial grade GI/SS</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Material Compatibility Matrix */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Washer Material Compatibility Guide</h2>
                        <p className="text-muted-foreground mb-6">
                            Selecting the correct washer material prevents galvanic corrosion and ensures chemical compatibility with roofing profiles.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2 text-green-900">✓ Galvanized Iron Sheets → GI Umbrella Washers</h3>
                                <p className="text-sm text-green-800">Same metal composition prevents electrochemical corrosion. Use for standard industrial roofing.</p>
                            </div>
                            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2 text-green-900">✓ Color-Coated/Pre-Painted Sheets → Bitumen Bonded Washers</h3>
                                <p className="text-sm text-green-800">Soft bitumen layer protects paint finish and provides superior waterproofing seal.</p>
                            </div>
                            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2 text-green-900">✓ Stainless Steel/Aluminum Sheets → SS Washers or EPDM Bonded</h3>
                                <p className="text-sm text-green-800">Prevents galvanic reaction. Use stainless or inert rubber-based washers only.</p>
                            </div>
                            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2 text-red-900">✗ Mixed Metals (e.g., GI washer on aluminum sheet)</h3>
                                <p className="text-sm text-red-800">Creates galvanic cell causing accelerated corrosion at contact points. Avoid completely.</p>
                            </div>
                        </div>
                    </div>

                    {/* Environmental Selection Criteria */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Environmental Condition Adjustments</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="border border-border p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Coastal/High Humidity Areas</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Prefer stainless steel (316 grade) over galvanized</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Use EPDM-bonded washers for superior moisture barrier</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Increase washer size by 20% for wind load resistance</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="border border-border p-6 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Industrial/Chemical Exposure</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Mandatory: Stainless steel or specialized coated washers</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Avoid bitumen-based: degrades under chemical exposure</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                                        <span>Use fluoropolymer sealing washers if available</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Installation Best Practices */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Critical Installation Guidelines</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="spacing">
                                <AccordionTrigger className="text-lg font-semibold">How to Calculate Washer Spacing?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    <p className="mb-3">Standard spacing depends on wind zone and sheet profile:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Low wind zones:</strong> 400-500mm centers (purlin spacing dependent)</li>
                                        <li><strong>Moderate wind zones:</strong> 300-400mm centers</li>
                                        <li><strong>High wind/cyclonic zones:</strong> 200-300mm centers with edge fastening every profile</li>
                                    </ul>
                                    <p className="mt-3 text-sm">Always consult local building codes and engineer recommendations for critical structures.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="torque">
                                <AccordionTrigger className="text-lg font-semibold">Correct Fastener Torque Settings?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    <p className="mb-3">Over-tightening is a common mistake causing washer and sheet damage:</p>
                                    <ul className="list-disc pl-6 space-y-2">
                                        <li><strong>Hand-tight + 1/4 turn:</strong> For bitumen/EPDM bonded washers (compresses seal)</li>
                                        <li><strong>Snug without deformation:</strong> For metal umbrella washers (sheet should not dimple)</li>
                                        <li><strong>Use torque limiters:</strong> Set to 8-12 Nm for automated installation</li>
                                    </ul>
                                    <p className="mt-3 text-amber-700 text-sm">⚠️ Over-torquing tears thin sheets and damages the waterproof seal.</p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="placement">
                                <AccordionTrigger className="text-lg font-semibold">Valley vs. Crest Fastening?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    <p className="mb-3">Fastener placement depends on profile type and load distribution needs:</p>
                                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-3">
                                        <h4 className="font-semibold text-blue-900 mb-2">Crest Fastening (Recommended)</h4>
                                        <p className="text-sm text-blue-800">Fastens at the profile peak. Better drainage, reduced leak risk, used in most corrugated/trapezoidal sheets. Requires self-drilling fasteners.</p>
                                    </div>
                                    <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                                        <h4 className="font-semibold text-gray-900 mb-2">Valley Fastening</h4>
                                        <p className="text-sm text-gray-800">Fastens through the profile valley into purlins. Used in industrial high-strength applications. Higher leak risk; demands superior washer sealing.</p>
                                    </div>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Failure Signs */}
                    <div className="mb-12 bg-amber-50 border border-amber-200 p-6 rounded-lg">
                        <h2 className="text-2xl font-bold mb-4 text-amber-900">Signs Your Washers Need Replacement</h2>
                        <p className="text-amber-800 mb-4">Inspect roofing washers annually. Replace immediately if you observe:</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                                <span className="text-sm text-amber-900">Visible rust or corrosion staining on sheet surface</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                                <span className="text-sm text-amber-900">Cracked, hardened, or split rubber/bitumen sealing layer</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                                <span className="text-sm text-amber-900">Water stains or dampness inside building below fasteners</span>
                            </div>
                            <div className="flex items-start gap-2">
                                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
                                <span className="text-sm text-amber-900">Loose or backing-out fasteners (indicates washer compression failure)</span>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary text-primary-foreground p-8 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Need Help Selecting Washers for Your Project?</h3>
                        <p className="mb-6">Contact our technical team for free consultation on washer selection based on your specific roofing requirements.</p>
                        <Link to="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                            Get Expert Advice
                        </Link>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default WasherGuide;
