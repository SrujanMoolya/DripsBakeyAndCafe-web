import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import dripsLogo from "@/assets/drips-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Custom Cakes", path: "/custom-cakes" },
    { name: "Gallery", path: "/gallery" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-white shadow-lg z-50 border-b-4 border-brown">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={dripsLogo} alt="Drips Bakery & Cafe" className="h-14 w-auto object-contain group-hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase transition-colors hover:text-orange ${
                  isActive(link.path) ? "text-orange" : "text-brown"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button variant="yellow" size="sm" className="rounded-full font-bold hover:scale-105 transition-transform">
              <Phone className="w-4 h-4 mr-2" />
              ORDER NOW
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-brown hover:text-orange transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} strokeWidth={3} /> : <Menu size={28} strokeWidth={3} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t-2 border-brown">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-bold uppercase transition-colors hover:text-orange ${
                    isActive(link.path) ? "text-orange" : "text-brown"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Button variant="yellow" size="sm" className="w-full rounded-full font-bold">
                <Phone className="w-4 h-4 mr-2" />
                ORDER NOW
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
