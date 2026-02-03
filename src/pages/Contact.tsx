import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate form
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast({
        title: "Please fill required fields",
        description: "Name, phone number, and message are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    // Send to backend API
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Enquiry Sent",
          description: "Thank you for contacting SKR Metal Suppliers. We have received your message.",
        });
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email API Error:', error);

      // Fallback: Open WhatsApp with the message if API fails
      const waMessage = encodeURIComponent(
        `*New Enquiry from Website*\n\n` +
        `*Name:* ${formData.name.trim()}\n` +
        `*Phone:* ${formData.phone.trim()}\n` +
        `*Email:* ${formData.email.trim() || 'Not provided'}\n\n` +
        `*Message:*\n${formData.message.trim()}`
      );
      window.open(`https://wa.me/919025421149?text=${waMessage}`, '_blank');

      toast({
        title: "Redirecting to WhatsApp",
        description: "Email service is temporarily unavailable. You can reach us via WhatsApp.",
      });
      setFormData({ name: "", phone: "", email: "", message: "" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Contact Metal Washer Supplier Coimbatore | Get Instant Quote | Call 9025421149 Now"
        description="💬 Get FREE Quote in 10 Minutes ✓ Call/WhatsApp: 9025421149 ✓ Visit Factory: Ondipudur, Coimbatore ✓ Email: skrmetalsuppliers@gmail.com ✓ Speak to Washer Expert Now ✓ Same-Day Response Guaranteed | Bulk Orders Welcome"
        canonical="/contact"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "SKR Metal Suppliers",
            "image": "https://www.skrmetalsuppliers.in/logo.png",
            "telephone": "9025421149",
            "email": "skrmetalsuppliers@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "61 Extension Street, Sungal Thidal, Ondipudur",
              "addressLocality": "Coimbatore",
              "addressRegion": "Tamil Nadu",
              "postalCode": "641016",
              "addressCountry": "IN"
            }
          }
        }}
      />
      {/* Hero Section */}
      <section className="bg-primary section-padding">
        <div className="container-section">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-foreground">Contact Us</h1>
            <p className="text-lg text-primary-foreground/90">
              Get in touch with us for enquiries, orders, or any questions
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-background">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Send Us an Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1"
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1"
                    maxLength={15}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email (Optional)</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1"
                    maxLength={100}
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your requirements..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 min-h-[120px]"
                    maxLength={1000}
                  />
                </div>
                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Enquiry via WhatsApp"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:9025421149"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      9025421149
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:skrmetalsuppliers@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors break-all"
                    >
                      skrmetalsuppliers@gmail.com
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      61 Extension Street,<br />
                      Sungal Thidal,<br />
                      Ondipudur,<br />
                      Coimbatore
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-muted-foreground">
                      Monday - Saturday<br />
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button asChild size="lg" className="flex-1">
                  <a href="tel:9025421149" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
                <Button asChild size="lg" variant="outline" className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <a
                    href="https://wa.me/919025421149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-background">
        <div className="container-section max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Common Questions</h2>
            <p className="text-muted-foreground">
              Quick answers to frequently asked enquiries
            </p>
          </div>

          <div className="bg-muted/30 rounded-2xl p-6 md:p-10 border border-border">
            <Accordion type="single" collapsible className="w-full space-y-2">
              <AccordionItem value="item-1" className="border-b border-border/50">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-5 text-left">
                  What is the minimum order quantity?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  We handle orders of all sizes to accommodate different business needs. However, bulk quantities often enjoy additional discounts and more competitive pricing per unit. Contact us with your specific requirements for a tailored quote.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-border/50">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-5 text-left">
                  How long does delivery take?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  We take pride in our fast delivery network. Local deliveries within Coimbatore are usually processed within 24 hours. For other regions across Full South India, it typically takes 2-4 business days depending on the location.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-border/50">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-5 text-left">
                  Do you provide custom sizes?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  Yes, we understand that different projects have unique specifications. We can provide metal washers in various custom sizes and thicknesses beyond our standard inventory to perfectly match your project requirements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-none">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-5 text-left">
                  What materials do you use?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-5">
                  We use high-grade industrial materials including Galvanized Iron (GI), Stainless Steel (SS), and Bitumen-coated compounds. All our materials are chosen for their durability, corrosion resistance, and performance in harsh industrial environments.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-muted">
        <div className="container-section">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Location</h2>
          <div className="aspect-video lg:aspect-[21/9] rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9651!2d77.0013!3d10.9855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857b5e0a0a0a1%3A0x0!2sOndipudur%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="SKR Metal Suppliers Location"
            />
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="section-padding bg-white">
        <div className="container-section text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Need Immediate Assistance?</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Our team is ready to help you with your requirements. Call us directly for quick response.
          </p>
          <Button asChild size="lg" className="text-white">
            <a href="tel:9025421149" className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call 9025421149
            </a>
          </Button>
        </div>
      </section>


    </Layout>
  );
};

export default Contact;
