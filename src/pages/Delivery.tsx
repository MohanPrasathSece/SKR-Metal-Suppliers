import { Link } from "react-router-dom";
import { Truck, MapPin, Package, Shield, Phone, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const deliveryFeatures = [
  {
    icon: MapPin,
    title: "Delivery Across Full South India",
    description: "We serve Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, and Telangana with reliable delivery services.",
  },
  {
    icon: Truck,
    title: "Fast Local Delivery",
    description: "Same-day or next-day delivery available within Coimbatore and nearby areas.",
  },
  {
    icon: Package,
    title: "Bulk Order Handling",
    description: "We efficiently handle bulk orders of any size with proper inventory management.",
  },
  {
    icon: Shield,
    title: "Safe Packaging",
    description: "All products are carefully packaged to ensure they arrive in perfect condition.",
  },
];

const Delivery = () => {
  return (
    <Layout>
      <SEO
        title="Reliable Industrial Washer Delivery across South India | Coimbatore to Kerala"
        description="SKR Metal Suppliers guarantees fast delivery of Umbrella Washers and Bitumen Washers across Tamil Nadu, Kerala, Karnataka and Andhra Pradesh."
        canonical="/delivery"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Industrial Washer Delivery",
          "provider": {
            "@type": "Organization",
            "name": "SKR Metal Suppliers"
          },
          "areaServed": [
            { "@type": "City", "name": "Coimbatore", "sameAs": "https://en.wikipedia.org/wiki/Coimbatore" },
            { "@type": "City", "name": "Chennai", "sameAs": "https://en.wikipedia.org/wiki/Chennai" },
            { "@type": "City", "name": "Bangalore", "sameAs": "https://en.wikipedia.org/wiki/Bangalore" },
            { "@type": "AdministrativeArea", "name": "Tamil Nadu", "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu" },
            { "@type": "AdministrativeArea", "name": "Kerala", "sameAs": "https://en.wikipedia.org/wiki/Kerala" }
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Delivery Services",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Same Day Delivery (Coimbatore)" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interstate Shipping (South India)" } }
            ]
          }
        }}
      />
      {/* Hero Section */}
      <section className="bg-primary section-padding">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Delivery Services</h1>
            <p className="text-lg text-primary-foreground/90">
              Reliable delivery across Full South India with fast local service in Coimbatore
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid sm:grid-cols-2 gap-8">
            {deliveryFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 md:p-8"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">How Our Delivery Works</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Simple and straightforward process to get your orders delivered
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Place Order</h3>
              <p className="text-sm text-muted-foreground">Contact us with your requirements via call or WhatsApp</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Confirm Details</h3>
              <p className="text-sm text-muted-foreground">We confirm quantity, specifications, and delivery address</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Dispatch</h3>
              <p className="text-sm text-muted-foreground">Orders are carefully packed and dispatched</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="font-semibold mb-2">Delivery</h3>
              <p className="text-sm text-muted-foreground">Receive your order at your doorstep</p>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Benefits */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Why Choose Our Delivery Service?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Reliable & Timely</h4>
                    <p className="text-muted-foreground text-sm">We understand the importance of timely delivery for your projects</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Secure Packaging</h4>
                    <p className="text-muted-foreground text-sm">Products are carefully packaged to prevent damage during transit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Order Tracking</h4>
                    <p className="text-muted-foreground text-sm">Stay updated on your order status via call or WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Flexible Delivery</h4>
                    <p className="text-muted-foreground text-sm">We accommodate your schedule and delivery preferences</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[300px] md:min-h-[400px] rounded-2xl overflow-hidden shadow-xl animate-in fade-in slide-in-from-right-8 duration-700">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop"
                alt="SKR Delivery Service"
                className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium text-lg">Fast & Secure Delivery Network</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Coverage Area</h2>
            <p className="text-muted-foreground mb-8">
              We deliver to businesses and industries across these regions
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                "Coimbatore",
                "Chennai",
                "Bangalore",
                "Erode",
                "Tirupur",
                "Salem",
                "Madurai",
                "Trichy",
                "Kerala",
              ].map((city) => (
                <div
                  key={city}
                  className="bg-background border border-border rounded-lg py-3 px-4 text-center"
                >
                  <span className="font-medium text-foreground">{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-white">
        <div className="container-section text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Ready to Place an Order?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Contact us now to discuss your delivery requirements
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-white">
              <a href="tel:9025421149" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call 9025421149
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Delivery;
