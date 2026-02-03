import { Link } from "react-router-dom";
import { AlertTriangle, Eye, Clock, Shield, CheckCircle, XCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const WasherFailureSigns = () => {
    return (
        <Layout>
            <SEO
                title="7 Warning Signs Your Roofing Washers Are Failing | Early Detection Guide"
                description="Learn to identify deteriorating roofing washers before major leaks develop. Covers visual inspection criteria, lifespan factors, and replacement decision logic for metal roofing systems."
                canonical="/guide/roofing-washer-failure-signs"
            />

            {/* Hero Section */}
            <section className="bg-amber-600 section-padding">
                <div className="container-section">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            How to Identify Failing Roofing Washers Before Leaks Develop
                        </h1>
                        <p className="text-lg text-white/90">
                            Early detection of washer deterioration can prevent water damage and costly roof repairs. This guide explains inspection criteria and replacement decision logic.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-background">
                <div className="container-section max-w-4xl">

                    {/* Introduction */}
                    <div className="mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                            Roofing washers are designed to provide waterproofing and load distribution for metal roof fasteners. However, exposure to environmental stress causes gradual degradation. Washers typically show visible signs of deterioration months before complete failure, allowing preventive replacement.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            This guide is based on common washer failure patterns observed in metal roofing systems. It is intended to help building owners, facility managers, and contractors identify when washers may need replacement before water infiltration occurs.
                        </p>
                        <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
                            <div className="flex items-start gap-3">
                                <Eye className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-semibold text-blue-900 mb-2">Inspection Frequency Recommendation</h3>
                                    <p className="text-sm text-blue-800">
                                        Annual visual inspection is advisable for most installations. In harsh environments (coastal, industrial, high-UV), bi-annual inspection may be appropriate. Document findings to track degradation rate over time.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Why Washers Fail */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Roofing Washers Deteriorate</h2>
                        <p className="text-muted-foreground mb-6">
                            Washer failure is typically caused by environmental and mechanical stress rather than manufacturing defects. Understanding these factors helps predict service life and interpret warning signs.
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="border border-border p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">UV Radiation Exposure</h4>
                                <p className="text-sm text-muted-foreground">
                                    Ultraviolet light breaks down rubber and polymer seals (EPDM, bitumen) through photodegradation, causing hardening and cracking typically after 8-15 years depending on climate.
                                </p>
                            </div>
                            <div className="border border-border p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Thermal Cycling</h4>
                                <p className="text-sm text-muted-foreground">
                                    Repeated heating and cooling causes expansion/contraction stress. Metal roofs can experience 30-60°C temperature swings daily, fatiguing the seal material.
                                </p>
                            </div>
                            <div className="border border-border p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Moisture and Chemical Attack</h4>
                                <p className="text-sm text-muted-foreground">
                                    Trapped moisture, acid rain, or industrial pollutants can degrade sealing materials and corrode metal washers, particularly in coastal or industrial areas.
                                </p>
                            </div>
                            <div className="border border-border p-4 rounded-lg">
                                <h4 className="font-semibold mb-2">Mechanical Movement</h4>
                                <p className="text-sm text-muted-foreground">
                                    Wind uplift forces, thermal expansion, and structural movement cause micro-movement at fastener points, gradually wearing the washer seal interface.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Warning Signs */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">7 Observable Warning Signs</h2>
                        <p className="text-muted-foreground mb-6">
                            These signs can be identified during visual roof inspection. They are listed in approximate order of severity.
                        </p>

                        {/* Sign 1 */}
                        <div className="mb-8 border-l-4 border-amber-500 pl-6 bg-amber-50 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3 mb-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <h3 className="text-xl font-semibold">1. Surface Cracking of Rubber/Bitumen Seal</h3>
                            </div>
                            <p className="text-muted-foreground mb-3">
                                <strong>What to look for:</strong> Fine cracks or crazing visible on the exposed rubber or bitumen sealing layer, particularly on the sun-facing side of the roof.
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>What this means:</strong> This indicates UV degradation and hardening of the seal material. While still functional at this stage, the seal is losing elasticity and will eventually crack through completely.
                            </p>
                            <div className="bg-white border border-amber-200 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-amber-900">Time to replacement: 1-3 years typically, depending on crack depth and progression rate.</p>
                            </div>
                        </div>

                        {/* Sign 2 */}
                        <div className="mb-8 border-l-4 border-amber-500 pl-6 bg-amber-50 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3 mb-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <h3 className="text-xl font-semibold">2. Hardening and Loss of Elasticity</h3>
                            </div>
                            <p className="text-muted-foreground mb-3">
                                <strong>What to look for:</strong> When pressed with a fingernail or tool, the rubber seal feels rigid rather than pliable. May show visible shrinkage around the metal washer edge.
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>What this means:</strong> The sealing material has lost its ability to maintain compression against the roof sheet. Thermal movement can now create gaps allowing moisture entry.
                            </p>
                            <div className="bg-white border border-amber-200 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-amber-900">Time to replacement: 6 months to 2 years. Monitor for water stains below these fasteners.</p>
                            </div>
                        </div>

                        {/* Sign 3 */}
                        <div className="mb-8 border-l-4 border-red-500 pl-6 bg-red-50 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3 mb-3">
                                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                <h3 className="text-xl font-semibold">3. Visible Rust Staining on Sheet Surface</h3>
                            </div>
                            <p className="text-muted-foreground mb-3">
                                <strong>What to look for:</strong> Brown or orange rust trails running down the roof sheet from washer locations, especially after rain.
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>What this means:</strong> The metal washer or fastener is corroding, indicating moisture has penetrated the seal. Galvanized coating has been compromised.
                            </p>
                            <div className="bg-white border border-red-200 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-red-900">Time to replacement: Immediate to 6 months. Water is already bypassing the seal intermittently.</p>
                            </div>
                        </div>

                        {/* Sign 4 */}
                        <div className="mb-8 border-l-4 border-red-500 pl-6 bg-red-50 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3 mb-3">
                                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                <h3 className="text-xl font-semibold">4. Gap Formation Between Washer and Sheet</h3>
                            </div>
                            <p className="text-muted-foreground mb-3">
                                <strong>What to look for:</strong> Visible daylight or separation between the washer edge and the roof sheet. Can often be detected by sliding a thin object (business card) under the washer edge.
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>What this means:</strong> Seal compression has been lost, creating a direct water entry path. This may result from initial over-tightening, thermal cycling, or seal material degradation.
                            </p>
                            <div className="bg-white border border-red-200 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-red-900">Time to replacement: Immediate. Active leak path exists during rainfall.</p>
                            </div>
                        </div>

                        {/* Sign 5 */}
                        <div className="mb-8 border-l-4 border-amber-500 pl-6 bg-amber-50 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3 mb-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <h3 className="text-xl font-semibold">5. Fastener Backing Out (Looseness)</h3>
                            </div>
                            <p className="text-muted-foreground mb-3">
                                <strong>What to look for:</strong> Fastener screws that can be turned by hand, or washers that spin freely. Fastener head may sit higher than surrounding fasteners.
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>What this means:</strong> The washer's compression has failed, allowing the fastener to loosen under wind vibration or thermal movement. This indicates seal failure and potential structural weakness.
                            </p>
                            <div className="bg-white border border-amber-200 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-amber-900">Time to replacement: 3-12 months. Re-tightening may provide temporary relief but washer should be replaced.</p>
                            </div>
                        </div>

                        {/* Sign 6 */}
                        <div className="mb-8 border-l-4 border-red-500 pl-6 bg-red-50 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3 mb-3">
                                <XCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                                <h3 className="text-xl font-semibold">6. Interior Water Stains Below Fastener Points</h3>
                            </div>
                            <p className="text-muted-foreground mb-3">
                                <strong>What to look for:</strong> From inside the building, visible water stains, rust marks, or dampness on purlins or ceiling panels directly below fastener rows.
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>What this means:</strong> Water is actively penetrating through failed washer seals. This is past the "warning" stage and indicates ongoing damage.
                            </p>
                            <div className="bg-white border border-red-200 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-red-900">Time to replacement: Immediate. Water infiltration is occurring and may be causing structural corrosion.</p>
                            </div>
                        </div>

                        {/* Sign 7 */}
                        <div className="mb-8 border-l-4 border-amber-500 pl-6 bg-amber-50 p-4 rounded-r-lg">
                            <div className="flex items-start gap-3 mb-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <h3 className="text-xl font-semibold">7. Discoloration or Bitumen Bleeding</h3>
                            </div>
                            <p className="text-muted-foreground mb-3">
                                <strong>What to look for:</strong> Dark staining around the washer edge where bitumen or rubber has "bled out" due to heat exposure, or significant color change (yellowing, darkening) of the seal material.
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                                <strong>What this means:</strong> Excessive heat has degraded the seal. Common in darker colored roofs or high-temperature climates. The seal material may have lost its waterproofing properties.
                            </p>
                            <div className="bg-white border border-amber-200 p-3 rounded-lg">
                                <p className="text-sm font-semibold text-amber-900">Time to replacement: 1-2 years. Monitor for other signs concurrently.</p>
                            </div>
                        </div>
                    </div>

                    {/* Lifespan Factors */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Factors Affecting Washer Service Life</h2>
                        <p className="text-muted-foreground mb-6">
                            Actual replacement timing varies based on environmental exposure and material quality. The table below provides general guidance.
                        </p>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse border border-border">
                                <thead className="bg-muted">
                                    <tr>
                                        <th className="border border-border p-3 text-left">Environment</th>
                                        <th className="border border-border p-3 text-left">Expected Service Life</th>
                                        <th className="border border-border p-3 text-left">Accelerating Factors</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-border p-3 font-semibold">Moderate Climate, Non-Coastal</td>
                                        <td className="border border-border p-3">12-20 years</td>
                                        <td className="border border-border p-3">Dark roof colors, low roof pitch</td>
                                    </tr>
                                    <tr className="bg-muted/50">
                                        <td className="border border-border p-3 font-semibold">High UV / Tropical Regions</td>
                                        <td className="border border-border p-3">8-15 years</td>
                                        <td className="border border-border p-3">Direct sun exposure, high ambient temperature</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-border p-3 font-semibold">Coastal / Marine Environment</td>
                                        <td className="border border-border p-3">6-12 years</td>
                                        <td className="border border-border p-3">Salt spray, high humidity, GI washers on coastal exposure</td>
                                    </tr>
                                    <tr className="bg-muted/50">
                                        <td className="border border-border p-3 font-semibold">Industrial / Chemical Exposure</td>
                                        <td className="border border-border p-3">5-10 years</td>
                                        <td className="border border-border p-3">Airborne chemicals, acid rain, non-resistant materials</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-muted-foreground mt-4">
                            Note: These estimates assume properly installed, material-matched washers. Incorrect installation or material selection can significantly reduce service life.
                        </p>
                    </div>

                    {/* Decision Checklist */}
                    <div className="mb-12 bg-green-50 border-2 border-green-300 p-6 rounded-lg">
                        <div className="flex items-start gap-3 mb-4">
                            <Shield className="w-8 h-8 text-green-600 flex-shrink-0" />
                            <h2 className="text-2xl font-bold text-green-900">Replacement Decision Checklist</h2>
                        </div>
                        <p className="text-green-800 mb-4">Consider immediate replacement if you observe:</p>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3 text-green-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Multiple washers showing cracking or hardening (cluster pattern)</span>
                            </label>
                            <label className="flex items-center gap-3 text-green-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Any washers with visible gaps or rust staining</span>
                            </label>
                            <label className="flex items-center gap-3 text-green-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Interior water stains correlating to washer positions</span>
                            </label>
                            <label className="flex items-center gap-3 text-green-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Washers older than expected service life for your environment</span>
                            </label>
                            <label className="flex items-center gap-3 text-green-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Fasteners that have loosened or backed out</span>
                            </label>
                        </div>
                        <p className="text-sm text-green-800 mt-4">
                            Recommendation: If 2 or more checkboxes apply, schedule professional inspection to assess replacement scope.
                        </p>
                    </div>

                    {/* When NOT to Replace */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">When Replacement May Not Be Necessary</h2>
                        <p className="text-muted-foreground mb-4">
                            Washer replacement is not always required. The following situations typically do not indicate imminent failure:
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Minor surface discoloration without cracking</p>
                                    <p className="text-sm text-muted-foreground">UV exposure causes some color change over time. If the seal remains pliable and intact, this is cosmetic.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Washers still within expected service life showing no physical degradation</p>
                                    <p className="text-sm text-muted-foreground">Preventive replacement based solely on age is generally not cost-effective unless severe environment warrants it.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
                                <CheckCircle className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
                                <div>
                                    <p className="font-semibold">Isolated single washer showing minor cracking</p>
                                    <p className="text-sm text-muted-foreground">One failing washer among hundreds may indicate localized cause (debris, installation issue). Monitor but mass replacement not required.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="w-full">
                            <AccordionItem value="replace-all">
                                <AccordionTrigger className="text-lg font-semibold">Should all washers be replaced at once?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    <p className="mb-3">
                                        If the installation is from the same period and exposed to similar conditions, failure patterns tend to be uniform. When 10-20% of washers show degradation, it often indicates the entire installation is nearing end-of-life.
                                    </p>
                                    <p>
                                        Replacing washers in sections or across the entire roof simultaneously reduces long-term maintenance costs compared to repeated small repairs. However, this decision depends on budget and urgency.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="retighten">
                                <AccordionTrigger className="text-lg font-semibold">Can I just re-tighten loose washers?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    <p className="mb-3">
                                        Re-tightening may provide temporary improvement if the washer seal is still pliable. However, if looseness is caused by hardened or compressed seal material, re-tightening will not restore waterproofing and may over-compress the sheet.
                                    </p>
                                    <p>
                                        This is generally a short-term measure while planning replacement. It is not a permanent solution.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="diy">
                                <AccordionTrigger className="text-lg font-semibold">Can washers be replaced without professional help?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    <p className="mb-3">
                                        Washer replacement requires removing and re-installing fasteners without damaging the roof sheet or underlying structure. It also requires proper material selection and torque control.
                                    </p>
                                    <p className="mb-3">
                                        Small-scale replacements (under 20 washers) may be feasible for experienced individuals with proper tools. Large-scale replacement is typically more cost-effective when performed by contractors who can work efficiently and ensure correct material matching.
                                    </p>
                                    <p>
                                        Safety risks of working on roofs should also be considered.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="cost">
                                <AccordionTrigger className="text-lg font-semibold">What is typical replacement cost?</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground leading-relaxed">
                                    <p className="mb-3">
                                        Cost depends on roof accessibility, washer quantity, and labor rates in your region. Material cost for washers themselves is typically minor compared to labor.
                                    </p>
                                    <p>
                                        For reference, contractors often quote per-fastener pricing that includes removal of old fasteners, installation of new washers and fasteners, and disposal. Bulk replacement is generally more economical per unit than small repairs.
                                    </p>
                                    <p className="text-sm mt-2">
                                        Contact local roofing contractors or suppliers for specific pricing in your area.
                                    </p>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>

                    {/* Conclusion */}
                    <div className="mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold mb-6">Summary</h2>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Regular inspection of roofing washers allows early detection of deterioration before water damage occurs. The warning signs described in this guide—cracking, hardening, rust, gaps, looseness, and interior staining—provide indicators for replacement timing.
                        </p>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                            Actual service life varies based on climate, material selection, and installation quality. When multiple washers show degradation or when washers approach expected lifespan limits for your environment, evaluation of systematic replacement is advisable.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            This information is provided for educational purposes and does not replace professional roof inspection or engineering advice for critical structures.
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary text-primary-foreground p-8 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Need Replacement Washers or Technical Consultation?</h3>
                        <p className="mb-6">We can assist with material-matched washer supply and provide guidance on selection criteria for your specific application.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/products" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                View Washer Options
                            </Link>
                            <Link to="/contact" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                                Contact for Guidance
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default WasherFailureSigns;
