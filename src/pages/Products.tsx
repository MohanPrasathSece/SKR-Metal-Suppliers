import { Link } from "react-router-dom";
import { Phone, CheckCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ProductGallery from "@/components/ProductGallery";
// Umbrella Images
import umbrellaFront from "@/assets/umbrella-front-removebg-preview.png";
import umbrellaSide from "@/assets/umbrella_side-removebg-preview.png";
import umbrellaBottom from "@/assets/umbrella_bottom-removebg-preview.png";
import umbrellaMain from "@/assets/umbrella-removebg-preview.png";
// Bitumen Images
import bitumenFront from "@/assets/bitumen-front-removebg-preview.png";
import bitumenSide from "@/assets/bitumen-side-removebg-preview.png";
import bitumenMain from "@/assets/bitumen-removebg-preview.png";
import SEO from "@/components/SEO";

const Products = () => {
  return (
    <Layout>
      <SEO
        title="Industrial Metal Washers Product Catalog | Umbrella & Bitumen Washers"
        description="Browse our range of Industrial Umbrella Washers and Bitumen Washers. Heavy-duty, corrosion-resistant, and weather-proof solutions for roofing and construction."
        canonical="/products"
        type="product"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "Industrial Washers Catalog",
          "description": "Catalog of Umbrella and Bitumen Washers",
          "about": {
            "@type": "Thing",
            "name": "Washer (Hardware)",
            "sameAs": "https://en.wikipedia.org/wiki/Washer_(hardware)"
          },
          "hasPart": [
            {
              "@type": "Product",
              "name": "Umbrella Washer",
              "description": "Industrial grade metal umbrella washer for roofing applications.",
              "image": "https://www.skrmetalsuppliers.in/assets/umbrella-front-removebg-preview.png",
              "category": "Industrial Fasteners",
              "material": {
                "@type": "Product",
                "name": "Galvanized Iron / Stainless Steel",
                "sameAs": "https://en.wikipedia.org/wiki/Sheet_metal"
              },
              "offers": {
                "@type": "Offer",
                "price": "100",
                "priceCurrency": "INR",
                "priceValidUntil": "2030-12-31",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "areaServed": "IN"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "150",
                "bestRating": "5",
                "worstRating": "1"
              }
            },
            {
              "@type": "Product",
              "name": "Bitumen Washer",
              "description": "Waterproof bitumen washer for roofing.",
              "image": "https://www.skrmetalsuppliers.in/assets/bitumen-front-removebg-preview.png",
              "category": "Waterproofing Materials",
              "material": {
                "@type": "Product",
                "name": "Bitumen",
                "sameAs": "https://en.wikipedia.org/wiki/Bitumen"
              },
              "offers": {
                "@type": "Offer",
                "price": "100",
                "priceCurrency": "INR",
                "priceValidUntil": "2030-12-31",
                "availability": "https://schema.org/InStock",
                "itemCondition": "https://schema.org/NewCondition",
                "areaServed": "IN"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "125",
                "bestRating": "5",
                "worstRating": "1"
              }
            }
          ]
        }}
      />
      {/* Hero Section */}
      <section className="bg-primary section-padding">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Our Products</h1>
            <p className="text-lg text-primary-foreground/90">
              Quality metal washers for industrial and commercial applications
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="space-y-16">
            {/* Umbrella Washers */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="order-2 md:order-1">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Umbrella Washers</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our umbrella washers are designed for industrial applications where durability and reliability are essential. Made from quality metal materials, these washers provide excellent performance in demanding environments.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Suitable for industrial and construction use</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Durable metal construction with premium finish</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Available in bulk quantities for large projects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Superior corrosion-resistant coating</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Technical Specifications</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border/50 pb-2">
                      <span>Material</span>
                      <span className="font-medium text-foreground">Galvanized Iron / Stainless Steel</span>
                    </li>
                    <li className="flex justify-between border-b border-border/50 pb-2">
                      <span>Sizes</span>
                      <span className="font-medium text-foreground">Standard & Custom Sizes</span>
                    </li>
                    <li className="flex justify-between border-b border-border/50 pb-2">
                      <span>Thickness</span>
                      <span className="font-medium text-foreground">Heavy Duty Gauge</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span>Application</span>
                      <span className="font-medium text-foreground">Roofing, Industrial Sheds</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact for Details
                  </Link>
                </Button>
              </div>
              <div className="order-1 md:order-2">
                <ProductGallery
                  images={[umbrellaFront, umbrellaSide, umbrellaBottom, umbrellaMain]}
                  alt="Umbrella Washer"
                />
              </div>
            </div>

            {/* Divider */}
            <hr className="border-border" />

            {/* Bitumen Washers */}
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <ProductGallery
                  images={[bitumenFront, bitumenSide, bitumenMain]}
                  alt="Bitumen Washer"
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">Bitumen Washers</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Bitumen washers are specially designed for roofing and industrial applications. These weather-resistant washers provide reliable sealing and protection against the elements.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Ideal for roofing applications</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Excellent weather and heat resistance</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Superior sealing properties against leaks</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-foreground">Long-lasting performance in harsh conditions</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-lg font-semibold mb-3">Product Features</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex justify-between border-b border-border/50 pb-2">
                      <span>Material Composition</span>
                      <span className="font-medium text-foreground">High-Grade Bitumen</span>
                    </li>
                    <li className="flex justify-between border-b border-border/50 pb-2">
                      <span>Waterproofing</span>
                      <span className="font-medium text-foreground">100% Water Tight</span>
                    </li>
                    <li className="flex justify-between border-b border-border/50 pb-2">
                      <span>Temperature Range</span>
                      <span className="font-medium text-foreground">-10°C to +80°C</span>
                    </li>
                    <li className="flex justify-between pt-1">
                      <span>Durability</span>
                      <span className="font-medium text-foreground">UV Resistant / Crack Proof</span>
                    </li>
                  </ul>
                </div>
                <Button asChild className="w-full sm:w-auto">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Contact for Details
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Product Applications</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our washers are used across various industries for different applications
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Roofing & Cladding</h3>
              <p className="text-muted-foreground text-sm">
                Secure roofing sheets and cladding materials with our durable washers
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Industrial Construction</h3>
              <p className="text-muted-foreground text-sm">
                Heavy-duty applications in factories, warehouses, and industrial buildings
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Waterproofing</h3>
              <p className="text-muted-foreground text-sm">
                Bitumen washers provide excellent sealing for waterproofing applications
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Sheet Metal Works</h3>
              <p className="text-muted-foreground text-sm">
                Essential for securing metal sheets in various construction projects
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Solar Panel Installation</h3>
              <p className="text-muted-foreground text-sm">
                Mounting washers for solar panel installations on rooftops
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-lg font-semibold mb-2">Agricultural Buildings</h3>
              <p className="text-muted-foreground text-sm">
                Durable solutions for agricultural sheds and storage buildings
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-section text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need Custom Requirements?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            We can supply washers in various sizes and quantities. Contact us to discuss your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-white">
              <a href="tel:9025421149" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 9025421149
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <a href="https://wa.me/919025421149" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>


    </Layout>
  );
};

export default Products;
