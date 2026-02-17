import React, { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PRODUCT_CATEGORIES } from "@/data/products";
import { Flower, Gift, UtensilsCrossed, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryGridProps {
    items: any[];
    limit?: number;
    color?: "warm" | "cream" | "blush" | "sage" | "amber";
    idPrefix: string;
}

const CategoryGrid = ({ items, limit = 8, color, idPrefix }: CategoryGridProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const displayedItems = isExpanded ? items : items.slice(0, limit);
    const hasMore = items.length > limit;

    return (
        <div className="flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 w-full mb-8">
                {displayedItems.map((item, index) => (
                    <React.Fragment key={`${idPrefix}-${index}`}>
                        <script type="application/ld+json">
                            {JSON.stringify({
                                "@context": "https://schema.org/",
                                "@type": "Product",
                                "name": item.name,
                                "image": "https://dripsbakeryandcafe.com" + item.image,
                                "description": item.description,
                                "offers": {
                                    "@type": "Offer",
                                    "url": "https://dripsbakeryandcafe.com/menu",
                                    "priceCurrency": "INR",
                                    "price": item.price.replace('₹', '').replace(',', ''),
                                    "availability": "https://schema.org/InStock"
                                }
                            })}
                        </script>
                        <ProductCard
                            {...item}
                            index={index}
                            color={color}
                        />
                    </React.Fragment>
                ))}
            </div>

            {hasMore && (
                <Button
                    variant="outline"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="rounded-full px-8 gap-2 hover:bg-primary hover:text-primary-foreground group transition-all duration-300"
                >
                    {isExpanded ? (
                        <>Show Less <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" /></>
                    ) : (
                        <>View More <ChevronDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" /></>
                    )}
                </Button>
            )}
        </div>
    );
};

const MenuSection = () => {
    const categories = PRODUCT_CATEGORIES;

    // Define category groups
    const foodCategories = [
        'cakes', 'barcakes', 'cupcakes', 'cheesecakes', 'icecream',
        'pastries', 'snacks', 'breads', 'cookies', 'chocolates',
        'desserts', 'beverages'
    ];

    const flowerCategory = 'flowers';
    const comboCategory = 'combos';

    return (
        <div className="flex flex-col w-full" id="menu">
            {/* Section 1: Food & Beverages */}
            <section className="py-24 bg-background overflow-hidden relative">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-primary/10 text-primary">
                                <UtensilsCrossed className="w-6 h-6" />
                            </div>
                            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3 text-gradient">Fresh From Oven</p>
                            <h1 className="font-display text-5xl md:text-6xl text-foreground italic mb-4">
                                Our Sweet Delights
                            </h1>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Discover our delicious selection of freshly baked goods, handcrafted beverages,
                                and delightful desserts. All items are 100% vegetarian.
                            </p>
                        </div>
                    </Reveal>

                    <Tabs defaultValue="cakes" className="w-full">
                        <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center mb-12">
                            {foodCategories.map((category) => (
                                <TabsTrigger
                                    key={category}
                                    value={category}
                                    className="px-6 py-2.5 bg-secondary/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full capitalize text-base transition-all duration-300 hover:bg-secondary"
                                >
                                    {category === 'icecream' ? 'Ice Cream' : category === 'barcakes' ? 'Bar Cakes' : category}
                                </TabsTrigger>
                            ))}
                        </TabsList>

                        {foodCategories.map((category) => (
                            <TabsContent key={category} value={category} className="mt-8 animate-fade-in-up">
                                <CategoryGrid
                                    items={(categories as any)[category]}
                                    idPrefix={category}
                                    limit={8}
                                />
                            </TabsContent>
                        ))}
                    </Tabs>
                </div>
            </section>

            {/* Section 2: Flowers (Distinct Styling) */}
            <section className="py-24 bg-gradient-to-b from-background to-blush/10 relative overflow-hidden" id="flowers">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blush/20 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

                <div className="container mx-auto px-4 relative z-10">
                    <Reveal width="100%">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-blush/20 text-terracotta">
                                <Flower className="w-6 h-6" />
                            </div>
                            <p className="text-terracotta text-sm font-medium tracking-widest uppercase mb-3">Floral Elegance</p>
                            <h2 className="font-display text-5xl md:text-6xl text-foreground italic mb-6">
                                Premium Flowers
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Express your feelings with our collection of fresh, vibrant, and exotic flowers.
                                Perfect for every occasion.
                            </p>
                        </div>
                    </Reveal>

                    <CategoryGrid
                        items={(categories as any)[flowerCategory]}
                        idPrefix="flower"
                        color="blush"
                        limit={8}
                    />
                </div>
            </section>

            {/* Section 3: Combos (Distinct Styling) */}
            <section className="py-24 bg-gradient-to-br from-cream to-secondary/30 relative" id="combos">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="text-center mb-16">
                            <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-amber/20 text-chocolate">
                                <Gift className="w-6 h-6" />
                            </div>
                            <p className="text-chocolate text-sm font-medium tracking-widest uppercase mb-3">Perfect Gift</p>
                            <h2 className="font-display text-5xl md:text-6xl text-foreground italic mb-6">
                                Celebration Combos
                            </h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                The best of both worlds. Delight your loved ones with our specially curated
                                flower and cake combinations.
                            </p>
                        </div>
                    </Reveal>

                    <CategoryGrid
                        items={(categories as any)[comboCategory]}
                        idPrefix="combo"
                        color="amber"
                        limit={6}
                    />
                </div>
            </section>

            {/* Delivery CTA Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <Reveal width="100%">
                        <div className="mt-8 bg-card rounded-3xl p-12 text-center border border-border/50 shadow-[var(--shadow-soft)] relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

                            <h3 className="font-display text-3xl md:text-4xl mb-4 text-foreground relative z-10">
                                Order for Delivery
                            </h3>
                            <p className="text-muted-foreground mb-8 text-lg relative z-10">
                                Craving something sweet or need a quick gift? Order now through our delivery partners!
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                                <a href="https://www.swiggy.com/city/manipal/drips-bakery-and-cakes-kinnimulki-udupi-rest542576" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-[#FC8019] text-white font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    Order on Swiggy
                                </a>
                                <a href="https://www.zomato.com/manipal/drips-bakery-cafe-vidyaratna-nagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-[#CB202D] text-white font-bold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300">
                                    Order on Zomato
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    );
};

export default MenuSection;
