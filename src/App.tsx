import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import WhatsAppButton from "./components/WhatsAppButton";
import FloatingBottomNav from "./components/FloatingBottomNav";
import FloatingCartButton from "./components/FloatingCartButton";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import CustomCakes from "./pages/CustomCakes";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import LocationPage from "./pages/LocationPage";
import { CartProvider } from "./context/CartContext";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <CartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/custom-cakes" element={<CustomCakes />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />

            {/* SEO Keyword Routes */}
            <Route path="/custom-cakes-manipal" element={<LocationPage location="Manipal" keywords={["Custom Cakes Manipal", "Designer Cakes Manipal"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.91897217592!2d74.7873!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a60907161b%3A0x8898952467d5192c!2sManipal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/veg-cakes-udupi" element={<LocationPage location="Udupi" keywords={["100% Veg Cakes Udupi", "Veg Cakes Online Udupi"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31093.59341772186!2d74.7438!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb6ae564e9a5%3A0x7d28645e5d1e268a!2sUdupi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/birthday-cakes-manipal" element={<LocationPage location="Manipal" keywords={["Birthday Cakes Manipal", "Same Day Cake Delivery Manipal"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.91897217592!2d74.7873!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a60907161b%3A0x8898952467d5192c!2sManipal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/flower-delivery-manipal" element={<LocationPage location="Manipal" keywords={["Flower Delivery Manipal", "Bouquet Delivery Manipal"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.91897217592!2d74.7873!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a60907161b%3A0x8898952467d5192c!2sManipal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/cake-delivery-udupi" element={<LocationPage location="Udupi" keywords={["Cake Delivery Udupi", "Same Day Cake Delivery Udupi"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31093.59341772186!2d74.7438!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb6ae564e9a5%3A0x7d28645e5d1e268a!2sUdupi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/bakery-cafe-malpe" element={<LocationPage location="Malpe" keywords={["Bakery Cafe Malpe", "Cake Shop in Malpe"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.666666666666!2d74.7000!3d13.3500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb3e248b61e7%3A0x8d5c5f4b3e8e7a6b!2sMalpe%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/designer-cakes-manipal" element={<LocationPage location="Manipal" keywords={["Designer Cakes Manipal", "Custom Fondant Cakes Manipal"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.91897217592!2d74.7873!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a60907161b%3A0x8898952467d5192c!2sManipal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/roses-and-cake-combo" element={<LocationPage location="Manipal & Udupi" keywords={["Roses and Cake Combo Delivery", "Flower and Cake Delivery Same Day"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.91897217592!2d74.7873!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a60907161b%3A0x8898952467d5192c!2sManipal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />

            {/* Location Specific Pages */}
            <Route path="/manipal" element={<LocationPage location="Manipal" keywords={["Best Bakery in Manipal", "Cake Shop Manipal"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.91897217592!2d74.7873!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbca4a60907161b%3A0x8898952467d5192c!2sManipal%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/udupi" element={<LocationPage location="Udupi" keywords={["Best Bakery in Udupi", "Cake Shop Udupi"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31093.59341772186!2d74.7438!3d13.3409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb6ae564e9a5%3A0x7d28645e5d1e268a!2sUdupi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />
            <Route path="/malpe" element={<LocationPage location="Malpe" keywords={["Best Bakery in Malpe", "Cake Shop Malpe"]} mapEmbed="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15546.666666666666!2d74.7000!3d13.3500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbcbb3e248b61e7%3A0x8d5c5f4b3e8e7a6b!2sMalpe%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
          <FloatingCartButton />
          <FloatingBottomNav />
        </BrowserRouter>
      </CartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
