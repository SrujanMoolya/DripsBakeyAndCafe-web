import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const FloatingCartButton = () => {
    const { totalItems, totalPrice } = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    // Only show if there are items in the cart and we are NOT on the cart page
    if (totalItems === 0 || location.pathname === "/cart") return null;

    return (
        <AnimatePresence>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 100, opacity: 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="fixed bottom-24 lg:bottom-10 left-0 right-0 z-40 px-4 flex justify-center pointer-events-none"
            >
                <Button
                    onClick={() => navigate("/cart")}
                    className="w-full max-w-md bg-primary hover:bg-primary/90 text-primary-foreground shadow-2xl rounded-2xl py-6 px-4 flex items-center justify-between pointer-events-auto transition-transform hover:scale-[1.02]"
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-full">
                            <ShoppingCart className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col items-start">
                            <span className="font-bold text-base leading-none">
                                {totalItems} ITEM{totalItems !== 1 ? "S" : ""}
                            </span>
                            <span className="text-xs opacity-90 font-medium">
                                ₹{totalPrice.toFixed(2)}
                            </span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-sm">
                        View Cart
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </Button>
            </motion.div>
        </AnimatePresence>
    );
};

export default FloatingCartButton;
