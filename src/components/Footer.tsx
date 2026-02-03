import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import skrLogo from "@/assets/skr_logo-removebg-preview.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container-section py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <img
                src={skrLogo}
                alt="SKR Metal Suppliers Logo"
                className="h-24 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/80 leading-relaxed mb-6 max-w-md">
              Your reliable partner for quality metal washers in Coimbatore and across Full South India. Dedicated to serving industries with excellence.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <Button asChild size="lg" className="text-sm font-semibold bg-white text-primary hover:bg-gray-100">
                <a href="tel:9025421149" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-sm font-semibold bg-transparent border-white text-white hover:bg-white hover:text-primary">
                <a href="https://wa.me/919025421149" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-primary transition-all" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
            <div className="flex flex-col gap-3">
              <Link to="/" className="text-sm text-white/80 hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="text-sm text-white/80 hover:text-white transition-colors">About Us</Link>
              <Link to="/products" className="text-sm text-white/80 hover:text-white transition-colors">Products</Link>
              <Link to="/delivery" className="text-sm text-white/80 hover:text-white transition-colors">Delivery</Link>
              <Link to="/contact" className="text-sm text-white/80 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <a href="tel:9025421149" className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <div>9025421149</div>
                  <div>7305171210</div>
                </div>
              </a>
              <a href="mailto:skrmetalsuppliers@gmail.com" className="flex items-start gap-3 text-sm text-white/80 hover:text-white transition-colors">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">skrmetalsuppliers@gmail.com</span>
              </a>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>61 Extension Street, Sungal Thidal, Ondipudur, Coimbatore</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} SKR Metal Suppliers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


