import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyContactButtons from "./StickyContactButtons";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyContactButtons />

      {/* GLOBAL SEO POWER-CORE (BOT-ONLY) */}
      <div style={{ display: 'none', visibility: 'hidden', height: 0, width: 0, overflow: 'hidden' }} aria-hidden="true">
        <h2>Washers in Coimbatore, Umbrella Washers Coimbatore, Bitumen Washers Coimbatore, Tamil Nadu</h2>
        <p>SKR Metal Suppliers is the ultimate source for industrial metal washers in Coimbatore and South India. Best quality Umbrella washers manufacturer, Bitumen washers wholesaler, and GI roofing washer suppliers in Tamil Nadu.</p>
        <p>Industrial fastening solutions for roofing, cladding, and solar projects. Serving Coimbatore, Chennai, Madurai, Tiruppur, Salem, Erode, Tiruchirappalli, Kerala, Karnataka, and Pan-India. Competitive rates for bulk metal washers, stainless steel washers, and EPDM washers.</p>
        <nav>
          <a href="/">Home - Washers Coimbatore</a>
          <a href="/about">About SKR Metal Suppliers Coimbatore</a>
          <a href="/products">Umbrella and Bitumen Washers Tamil Nadu</a>
          <a href="/delivery">Fast Delivery Washers India</a>
          <a href="/contact">Contact Washer Manufacturers Coimbatore</a>
        </nav>
      </div>
    </div>
  );
};

export default Layout;
