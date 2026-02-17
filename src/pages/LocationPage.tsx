import React from 'react';
import SEO from '../components/SEO';
import { getLocalBusinessSchema, getFAQSchema } from '../lib/seo-utils';
import MenuSection from '../components/MenuSection';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone, Star } from 'lucide-react';

interface LocationPageProps {
    location: string;
    keywords: string[];
    mapEmbed: string;
}

const LocationPage: React.FC<LocationPageProps> = ({ location, keywords, mapEmbed }) => {
    const primaryKeyword = keywords[0];

    return (
        <div className="min-h-screen pt-20">
            <SEO
                title={`${primaryKeyword} | Best Bakery in ${location}`}
                description={`Order the best ${keywords.join(', ')} in ${location}. Same-day delivery available. 100% Eggless & Custom Cakes.`}
                schema={getLocalBusinessSchema()}
            />

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
                    alt={`${primaryKeyword} in ${location}`}
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="relative z-20 text-center text-white px-4">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">{primaryKeyword}</h1>
                    <p className="text-xl md:text-2xl mb-8">Serving Freshness in {location} & Surrounding Areas</p>
                    <Button size="lg" className="bg-primary hover:bg-primary/90">Order Now</Button>
                </div>
            </section>

            {/* Local Info */}
            <section className="py-16 container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold mb-6">Why Choose Our Bakery in {location}</h2>
                        <div className="space-y-4">
                            <div className="flex items-start gap-4">
                                <MapPin className="text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Central Location</h3>
                                    <p className="text-muted-foreground">Conveniently located in the heart of {location} for easy pickup and fast delivery.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Clock className="text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">Same Day Delivery</h3>
                                    <p className="text-muted-foreground">Ordered a last-minute cake? We've got you covered with same-day delivery in {location}.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Star className="text-primary mt-1" />
                                <div>
                                    <h3 className="font-semibold text-lg">100% Eggless Options</h3>
                                    <p className="text-muted-foreground">Wide variety of veg cakes and eggless treats for all your celebrations.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
                        <iframe
                            src={mapEmbed}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            {/* Featured Menu */}
            <MenuSection />

            {/* FAQ Section */}
            <section className="py-16 bg-secondary/30">
                <div className="container mx-auto px-4 max-w-4xl">
                    <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Do you offer express delivery in {location}?</h3>
                            <p>Yes, we offer express 2-hour delivery for select cakes and flower bouquets across {location}.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm">
                            <h3 className="font-bold text-lg mb-2">Can I customize my birthday cake?</h3>
                            <p>Absolutely! We specialize in custom designer cakes, photo cakes, and themed cakes for all occasions in {location}.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp Floating */}
            <div className="fixed bottom-24 right-6 z-50">
                <a
                    href={`https://wa.me/91XXXXXXXXXX?text=Hi, I want to order a cake in ${location}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2"
                >
                    <Phone size={20} />
                    <span className="font-bold hidden md:inline">Order via WhatsApp</span>
                </a>
            </div>
        </div>
    );
};

export default LocationPage;
