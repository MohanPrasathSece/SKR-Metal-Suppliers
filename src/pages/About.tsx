import { CheckCircle, Award, Users, Target, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import skrLogo from "@/assets/skr_logo-removebg-preview.png";


import Link from "react-router-dom"; // This might not be needed if not used, but I'll stick to just adding new import properly.
import SEO from "@/components/SEO";

const About = () => {
  return (
    <Layout>
      <SEO
        title="About SKR Metal Suppliers | ISO-Certified Washer Manufacturer Since Inception | Coimbatore"
        description="🏆 Trusted Metal Washer Manufacturer serving 500+ Contractors, Builders & Industries across Tamil Nadu, Kerala, Karnataka ✓ ISO Certified Quality ✓ 15+ Years Experience ✓ In-House Manufacturing ✓ Same-Day Delivery Coimbatore | Why Builders Trust SKR"
        canonical="/about"
        schema={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "SKR Metal Suppliers",
            "foundingLocation": {
              "@type": "City",
              "name": "Coimbatore",
              "sameAs": "https://en.wikipedia.org/wiki/Coimbatore"
            },
            "description": "Leading manufacturer of industrial metal washers.",
            "areaServed": [
              { "@type": "City", "name": "Coimbatore" },
              { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
              { "@type": "AdministrativeArea", "name": "Kerala" },
              { "@type": "AdministrativeArea", "name": "Karnataka" }
            ]
          }
        }}
      />
      {/* Hero Section */}
      <section className="bg-primary section-padding">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">About SKR Metal Suppliers</h1>
            <p className="text-lg text-primary-foreground/90">
              Your trusted partner for quality metal washers in Coimbatore
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  SKR Metal Suppliers is a Coimbatore-based business specializing in the supply of high-quality metal washers. Established with a vision to provide reliable products to industries across Full South India, we are committed to becoming a trusted name in the metal washer supply chain.
                </p>
                <p>
                  We supply quality materials with dependable service. We are building strong relationships with manufacturers and customers alike, ensuring consistent product quality and timely deliveries.
                </p>
                <p>
                  Today, we serve a wide range of industries including construction, roofing, manufacturing, and industrial projects. Our focus remains on understanding our customers' needs and providing solutions that meet their demanding requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-bold text-foreground mb-1">Expert</div>
                <div className="text-sm text-muted-foreground">Team</div>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-bold text-foreground mb-1">Client</div>
                <div className="text-sm text-muted-foreground">Focused</div>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div className="text-lg font-bold text-foreground mb-1">Fast</div>
                <div className="text-sm text-muted-foreground">Delivery</div>
              </div>
              <div className="bg-muted p-6 rounded-lg text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Handshake className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground">
              We specialize in supplying high-quality metal washers for various industrial applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Umbrella Washers</h3>
              <p className="text-muted-foreground">
                Durable metal washers designed for industrial and construction applications, providing excellent performance and longevity.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Bitumen Washers</h3>
              <p className="text-muted-foreground">
                Weather-resistant washers specifically designed for roofing and waterproofing applications, ensuring reliable sealing.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-3">Bulk Supply</h3>
              <p className="text-muted-foreground">
                Efficient handling of bulk orders with competitive pricing, ensuring you get the best value for your business needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Values</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Quality First</h4>
                  <p className="text-muted-foreground">We source our products from trusted manufacturers to ensure premium quality in every order.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Reliability</h4>
                  <p className="text-muted-foreground">On-time delivery and consistent service are at the core of our business operations.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Customer Focus</h4>
                  <p className="text-muted-foreground">We work closely with our customers to understand their needs and provide tailored solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Integrity</h4>
                  <p className="text-muted-foreground">We conduct our business with honesty and transparency, building long-term relationships.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">Local Expertise</h4>
                  <p className="text-muted-foreground">Based in Coimbatore, we understand the South Indian market and serve it efficiently.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Industries We Serve</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our products are trusted by various industries across Full South India
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Construction & Building",
              "Roofing Contractors",
              "Manufacturing Units",
              "Industrial Projects",
              "Infrastructure Development",
              "Warehouse Construction",
              "Sheet Metal Works",
              "Waterproofing Services"
            ].map((industry) => (
              <div key={industry} className="bg-background p-4 rounded-lg border border-border text-center">
                <span className="font-medium text-foreground">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
