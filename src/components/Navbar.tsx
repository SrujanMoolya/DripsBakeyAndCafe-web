import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu as MenuIcon, X, Phone, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import dripsLogo from "@/assets/drips-logo.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
    >
      {/* Delivery Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-xs font-medium tracking-wide">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Clock className="w-3 h-3" />
          <span>We deliver within 15km of Udupi, Manipal & Malpe</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.img
              initial={{ rotate: -180, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={dripsLogo}
              alt="Drips Bakery & Cafe udupi , manipal , malpe"
              className="h-10 md:h-12 w-auto object-contain group-hover:scale-105 transition-transform rounded-full"
            />
            <span className="font-display font-bold text-lg md:text-xl">
              Drips Bakery & Cafe <span className="hidden md:inline">Udupi,Manipal</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium tracking-wide transition-all duration-300 ${isActive(link.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <Link to="/cart">
              <Button size="icon" variant="ghost" className="ml-2 relative hover:bg-secondary rounded-full">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link to="/menu">
                <Button size="sm" className="ml-4 rounded-full font-semibold shadow-[var(--shadow-warm)] hover:scale-105 transition-transform">
                  <Phone className="w-4 h-4 mr-2" />
                  Order Now
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <Link to="/cart">
              <Button size="icon" variant="ghost" className="relative hover:bg-secondary rounded-full">
                <ShoppingCart className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Button>
            </Link>

            <button
              className="p-2 text-foreground/70 hover:text-foreground transition-colors rounded-lg hover:bg-secondary"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border/50"
            >
              <div className="py-4 flex flex-col space-y-2 px-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-all ${isActive(link.path)
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/70 hover:text-foreground hover:bg-secondary"
                      }`}
                  >
                    {link.name}
                  </Link>
                ))}
                <Link to="/menu" onClick={() => setIsOpen(false)}>
                  <Button className="w-full rounded-full font-semibold mt-4 py-6">
                    <Phone className="w-4 h-4 mr-2" />
                    Order Now
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
