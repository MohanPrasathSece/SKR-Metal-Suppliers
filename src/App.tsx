import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import ChoosingMetalWashers from "./pages/guides/ChoosingMetalWashers";
import WasherInstallationMistakes from "./pages/guides/WasherInstallationMistakes";
import WasherFailureSignsGuide from "./pages/guides/WasherFailureSigns";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/guide/choosing-metal-washers" element={<ChoosingMetalWashers />} />
            <Route path="/guide/washer-installation-mistakes" element={<WasherInstallationMistakes />} />
            <Route path="/guide/roofing-washer-failure-signs" element={<WasherFailureSignsGuide />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Analytics />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
