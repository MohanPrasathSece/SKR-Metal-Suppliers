import { Link } from "react-router-dom";
import { XCircle, CheckCircle, AlertTriangle, Wrench } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const InstallationMistakes = () => {
    return (
        <Layout>
            <SEO
                title="7 Critical Metal Washer Installation Mistakes That Cause Roof Leaks | Prevention Guide"
                description="Learn the most common washer installation errors that lead to roof failures, water damage, and structural issues. Includes corrective actions and professional installation guidelines."
                canonical="/guide/washer-installation-mistakes"
            />

            {/* Hero */}
            <section className="bg-red-600 section-padding">
                <div className="container-section">
                    <div className="max-w-4xl">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                            7 Common Washer Installation Mistakes That Destroy Roofs
                        </h1>
                        <p className="text-lg text-white/90">
                            Even quality washers fail when installed incorrectly. Learn the critical errors contractors and DIYers make — and how to avoid them.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-padding bg-background">
                <div className="container-section max-w-4xl">

                    <div className="mb-12">
                        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                            According to roofing failure analysis, <strong>over 40% of premature metal roof leaks</strong> are caused by incorrect fastener and washer installation — not material defects. These mistakes are preventable with proper technique and awareness.
                        </p>
                    </div>

                    {/* Mistake 1 */}
                    <div className="mb-12 border-l-4 border-red-500 pl-6">
                        <div className="flex items-start gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl font-bold">Mistake #1: Over-Tightening Fasteners</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            <strong>The Problem:</strong> Excessive torque compresses the washer beyond design limits, causing the metal sheet to dimple and creating a stress concentration point. Over time, thermal expansion cycles cause cracking around the fastener hole.
                        </p>
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-red-900 mb-2">Consequences:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-red-800 text-sm">
                                <li>Sheet metal tears around fastener during wind or thermal movement</li>
                                <li>Washer rubber seal extrudes beyond metal flange, losing waterproofing</li>
                                <li>Increased point loading accelerates metal fatigue</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Correct Technique:
                            </h4>
                            <p className="text-green-800 text-sm">
                                Tighten until washer makes firm contact with sheet surface, then <strong>add only 1/4 turn</strong>. The sheet should NOT dimple or deform. For power tools, use a torque limiter set to 8-10 Nm.
                            </p>
                        </div>
                    </div>

                    {/* Mistake 2 */}
                    <div className="mb-12 border-l-4 border-red-500 pl-6">
                        <div className="flex items-start gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl font-bold">Mistake #2: Using Wrong Washer Size for Sheet Gauge</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            <strong>The Problem:</strong> Undersized washers (under 19mm on thin 0.35mm sheets) create excessive bearing stress per square millimeter, causing the fastener to pull through the metal during wind uplift.
                        </p>
                        <div className="overflow-x-auto mb-4">
                            <table className="w-full border-collapse border border-border text-sm">
                                <thead className="bg-red-100">
                                    <tr>
                                        <th className="border border-border p-2 text-left">Sheet Thickness</th>
                                        <th className="border border-border p-2 text-left">❌ Wrong Washer</th>
                                        <th className="border border-border p-2 text-left">✅ Correct Washer</th>
                                        <th className="border border-border p-2 text-left">Why It Matters</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-border p-2">0.35mm</td>
                                        <td className="border border-border p-2">12mm flat</td>
                                        <td className="border border-border p-2">19mm+ bonded</td>
                                        <td className="border border-border p-2">Distributes wind load across larger area</td>
                                    </tr>
                                    <tr className="bg-gray-50">
                                        <td className="border border-border p-2">0.50mm</td>
                                        <td className="border border-border p-2">16mm basic</td>
                                        <td className="border border-border p-2">25mm umbrella</td>
                                        <td className="border border-border p-2">Prevents pull-through under stress</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Correct Technique:
                            </h4>
                            <p className="text-green-800 text-sm">
                                Follow the <Link to="/guide/choosing-metal-washers" className="underline font-semibold">washer sizing chart</Link>. For sheets ≤0.45mm, ALWAYS use 19mm+ diameter with bonded seal. Never assume "one size fits all."
                            </p>
                        </div>
                    </div>

                    {/* Mistake 3 */}
                    <div className="mb-12 border-l-4 border-red-500 pl-6">
                        <div className="flex items-start gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl font-bold">Mistake #3: Installing in Valley Instead of Crest (When Incorrect)</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            <strong>The Problem:</strong> Fastening through the valley (low point) of corrugated sheets creates a water collection point. Even with perfect washers, pooled water increases hydrostatic pressure on the seal.
                        </p>
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-red-900 mb-2">Why This Fails:</h4>
                            <p className="text-red-800 text-sm mb-2">Water naturally flows to valleys. A valley-fastened washer sits in standing water, accelerating seal degradation through:</p>
                            <ul className="list-disc pl-6 space-y-1 text-red-800 text-sm">
                                <li>UV degradation of exposed rubber</li>
                                <li>Freeze-thaw cycles in cold climates</li>
                                <li>Capillary action wicking moisture under washer</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Correct Technique:
                            </h4>
                            <p className="text-green-800 text-sm">
                                For corrugated and trapezoidal profiles, <strong>always fasten at the crest</strong> (high point). Use self-drilling fasteners designed for crest fixing. Valley fastening is only acceptable in specialized industrial applications with engineer approval.
                            </p>
                        </div>
                    </div>

                    {/* Mistake 4 */}
                    <div className="mb-12 border-l-4 border-red-500 pl-6">
                        <div className="flex items-start gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl font-bold">Mistake #4: Mixing Incompatible Metals (Galvanic Corrosion)</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            <strong>The Problem:</strong> Using a galvanized washer on an aluminum sheet (or vice versa) creates a galvanic cell. When moisture is present, the more reactive metal corrodes rapidly.
                        </p>
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-red-900 mb-2">High-Risk Combinations:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-red-800 text-sm">
                                <li>GI washer + Aluminum sheet = Aluminum corrodes</li>
                                <li>Steel washer + Stainless steel sheet = Steel washer rusts</li>
                                <li>Copper/Bronze washer + Galvanized sheet = Galvanized coating fails</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Correct Technique:
                            </h4>
                            <p className="text-green-800 text-sm">
                                <strong>Match materials:</strong> GI sheet → GI washer. Aluminum sheet → Aluminum or SS washer. Stainless sheet → SS washer. When in doubt, use EPDM-bonded washers with plastic/rubber isolation layers.
                            </p>
                        </div>
                    </div>

                    {/* Mistake 5 */}
                    <div className="mb-12 border-l-4 border-red-500 pl-6">
                        <div className="flex items-start gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl font-bold">Mistake #5: Insufficient Washer Spacing in High Wind Zones</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            <strong>The Problem:</strong> Using standard 400mm spacing in cyclonic or high-wind regions results in excessive uplift load per fastener, causing washers to pull through or fasteners to fail.
                        </p>
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-red-900 mb-2">Wind Zone Requirements:</h4>
                            <ul className="space-y-2 text-sm text-red-800">
                                <li><strong>Low wind (&lt;140 km/h):</strong> 400-500mm spacing acceptable</li>
                                <li><strong>Moderate wind (140-180 km/h):</strong> 300-350mm spacing required</li>
                                <li><strong>Cyclonic (&gt;180 km/h):</strong> 200-250mm + edge fastening every profile</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Correct Technique:
                            </h4>
                            <p className="text-green-800 text-sm">
                                Consult local building codes and wind zone maps. In high-wind areas, use closer spacing AND larger diameter washers (32mm+) to distribute uplift forces effectively.
                            </p>
                        </div>
                    </div>

                    {/* Mistake 6 */}
                    <div className="mb-12 border-l-4 border-red-500 pl-6">
                        <div className="flex items-start gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl font-bold">Mistake #6: Using Metal Washers Where Bonded Seals Are Required</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            <strong>The Problem:</strong> Plain metal umbrella washers without rubber/bitumen bonding rely solely on compression for waterproofing. On pre-painted or coated sheets, metal-to-paint contact is not waterproof and damages the finish.
                        </p>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Correct Technique:
                            </h4>
                            <p className="text-green-800 text-sm mb-2">
                                <strong>Use bonded washers when:</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-1 text-green-800 text-sm">
                                <li>Installing on color-coated or pre-painted sheets</li>
                                <li>Roofing in high-rainfall regions (&gt;1500mm annually)</li>
                                <li>Low-pitch roofs (&lt;10° slope) where water runoff is slow</li>
                                <li>Coastal or marine environments</li>
                            </ul>
                        </div>
                    </div>

                    {/* Mistake 7 */}
                    <div className="mb-12 border-l-4 border-red-500 pl-6">
                        <div className="flex items-start gap-3 mb-4">
                            <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" />
                            <h2 className="text-2xl md:text-3xl font-bold">Mistake #7: Ignoring Washer Alignment (Cocked Washers)</h2>
                        </div>
                        <p className="text-muted-foreground mb-4">
                            <strong>The Problem:</strong> When fasteners are driven at an angle, the washer sits unevenly ("cocked"), creating gaps on one side that allow water infiltration even with bonded seals.
                        </p>
                        <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                            <h4 className="font-semibold text-red-900 mb-2">Common Causes:</h4>
                            <ul className="list-disc pl-6 space-y-1 text-red-800 text-sm">
                                <li>Drilling at wrong angle to purlin/substrate</li>
                                <li>Fastener bends during installation through thick material</li>
                                <li>Washer tilts due to uneven sheet surface or debris</li>
                            </ul>
                        </div>
                        <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                Correct Technique:
                            </h4>
                            <p className="text-green-800 text-sm">
                                Always drill perpendicular to the sheet surface. Use a square-drive drill guide for accuracy. Before final tightening, visually verify the washer sits flat with uniform contact all around.
                            </p>
                        </div>
                    </div>

                    {/* Prevention Checklist */}
                    <div className="mb-12 bg-blue-50 border-2 border-blue-300 p-6 rounded-lg">
                        <div className="flex items-start gap-3 mb-4">
                            <Wrench className="w-8 h-8 text-blue-600 flex-shrink-0" />
                            <h2 className="text-2xl font-bold text-blue-900">Pre-Installation Checklist</h2>
                        </div>
                        <p className="text-blue-800 mb-4">Before starting, verify:</p>
                        <div className="space-y-2">
                            <label className="flex items-center gap-3 text-blue-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Washer size matches sheet gauge (refer to sizing chart)</span>
                            </label>
                            <label className="flex items-center gap-3 text-blue-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Washer material is compatible with sheet material (no galvanic risk)</span>
                            </label>
                            <label className="flex items-center gap-3 text-blue-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Bonded seal washers for painted/coated sheets</span>
                            </label>
                            <label className="flex items-center gap-3 text-blue-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Fastening at crest (not valley) unless engineer-specified</span>
                            </label>
                            <label className="flex items-center gap-3 text-blue-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Spacing adjusted for local wind zone requirements</span>
                            </label>
                            <label className="flex items-center gap-3 text-blue-900">
                                <input type="checkbox" className="w-5 h-5" disabled />
                                <span>Torque limiter set (8-10 Nm) or hand-tight technique practiced</span>
                            </label>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="bg-primary text-primary-foreground p-8 rounded-xl text-center">
                        <h3 className="text-2xl font-bold mb-4">Get Professional-Grade Washers with Installation Guidance</h3>
                        <p className="mb-6">We supply contractors and builders with properly sized, material-matched washers and provide technical installation support.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/products" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                View Washer Catalog
                            </Link>
                            <Link to="/contact" className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
                                Consult Our Team
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </Layout>
    );
};

export default InstallationMistakes;

