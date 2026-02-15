import { Reveal } from "@/components/ui/Reveal";
import ProductCard from "@/components/ProductCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";

import { PRODUCT_CATEGORIES } from "@/data/products";

const MenuSection = () => {
    const categories = PRODUCT_CATEGORIES;

    return (
        <section className="py-24 bg-background overflow-hidden" id="menu">
            <div className="container mx-auto px-4">
                <Reveal width="100%">
                    <div className="text-center mb-16">
                        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-3">Explore</p>
                        <h1 className="font-display text-5xl md:text-6xl text-foreground italic mb-4">
                            Our Menu
                        </h1>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover our delicious selection of freshly baked goods, handcrafted beverages,
                            and delightful desserts. All items are 100% vegetarian.
                        </p>
                    </div>
                </Reveal>

                <Tabs defaultValue="cakes" className="w-full">
                    <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent justify-center mb-12">
                        {Object.keys(categories).map((category) => (
                            <TabsTrigger
                                key={category}
                                value={category}
                                className="px-4 py-2 bg-muted/50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full capitalize"
                            >
                                {category === 'icecream' ? 'Ice Cream' : category === 'barcakes' ? 'Bar Cakes' : category}
                            </TabsTrigger>
                        ))}
                    </TabsList>

                    {Object.entries(categories).map(([category, items]) => (
                        <TabsContent key={category} value={category} className="mt-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {items.map((item, index) => (
                                    <ProductCard key={index} {...item} index={index} />
                                ))}
                            </div>
                        </TabsContent>
                    ))}
                </Tabs>

                <div className="mt-16 bg-card rounded-2xl p-10 text-center border border-border/50 animate-fade-in-up hover-lift">
                    <h3 className="font-display text-2xl mb-4 text-foreground">
                        Order for Delivery
                    </h3>
                    <p className="text-muted-foreground mb-8">
                        Craving something sweet? Order now through our delivery partners!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://www.swiggy.com/city/manipal/drips-bakery-and-cakes-kinnimulki-udupi-rest542576" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300">
                            Order on Swiggy
                        </a>
                        <a href="https://www.zomato.com/manipal/drips-bakery-cafe-vidyaratna-nagar" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[var(--shadow-warm)] hover:scale-105 transition-all duration-300">
                            Order on Zomato
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MenuSection;
