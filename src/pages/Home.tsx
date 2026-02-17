import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Sparkles, ArrowRight } from "lucide-react";
import MenuSection from "@/components/MenuSection";
import CustomCakesSection from "@/components/CustomCakesSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import { Reveal } from "@/components/ui/Reveal";
import { ScaleIn } from "@/components/ui/ScaleIn";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useCallback } from "react";
import SEO from "@/components/SEO";
import { getLocalBusinessSchema, getFAQSchema } from "@/lib/seo-utils";
import TypewriterText from "@/components/TypewriterText";

// Import hero images
import cake1 from "@/assets/cake1.jpeg";
import cake2 from "@/assets/cake2.jpeg";
import cake3 from "@/assets/cake3.jpeg";
import customCake from "@/assets/custom-cake.jpg";
import heroBakery from "@/assets/hero-bakery.jpg";

const Home = () => {
  // Hero carousel images
  const heroImages = [
    { src: cake1, alt: "Custom Birthday Cakes in Manipal - Drips Bakery" },
    { src: cake2, alt: "Fresh Baked 100% Veg Pastries in Udupi" },
    { src: cake3, alt: "Designer Cakes for Delivery in Malpe" },
    { src: customCake, alt: "Special Occasion Custom Cakes Manipal" },
    { src: heroBakery, alt: "Best Bakery and Cafe in Manipal" },
  ];

  // Embla carousel setup with autoplay
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      duration: 30,
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="min-h-screen">
      <SEO
        title="Custom Cakes & 100% Veg Bakery in Manipal | Drips Bakery"
        description="Order custom, 100% veg & birthday cakes in Manipal, Udupi & Malpe. Same-day delivery available. Best bakery for designer cakes and fresh flowers."
        keywords="custom cakes Manipal, 100% veg cakes Manipal, cake delivery Udupi, flower delivery Manipal, birthday cakes near me, best bakery in Manipal"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            getLocalBusinessSchema(),
            getFAQSchema()
          ]
        }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-28 pb-12 lg:pb-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-secondary/40 to-accent/10" />
        <div className="absolute top-32 right-20 w-64 h-64 bg-accent/15 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-primary" />
                  100% Vegetarian & Veg Cakes Only
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight">
                  <span className="block text-foreground">Custom 100% Veg</span>
                  <span className="block text-gradient italic">Cakes in</span>
                  <span className="block text-foreground capitalize">
                    <TypewriterText texts={["Manipal", "Udupi", "Malpe"]} />
                  </span>
                </h1>
              </Reveal>
              <Reveal delay={0.6}>
                <p className="text-xl text-muted-foreground max-w-md">
                  Best Bakery and Cafe for Designer Cakes & Flower Delivery in Manipal, Udupi & Malpe. 🍰
                </p>
              </Reveal>
              <Reveal delay={0.8}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/menu">
                    <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform">
                      View Menu
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                  <Link to="/custom-cakes">
                    <Button size="lg" variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform">
                      Order Custom Cake
                    </Button>
                  </Link>
                </div>
              </Reveal>
            </div>

            <div className="relative">
              <ScaleIn delay={0.2} duration={0.8}>
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent/20 rounded-2xl -rotate-6" />
                <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/15 rounded-full" />
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-[var(--shadow-elevated)]">
                  {/* Embla Carousel */}
                  <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex transition-opacity duration-1000">
                      {heroImages.map((image, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0">
                          <img
                            src={image.src}
                            alt={image.alt}
                            loading={index === 0 ? "eager" : "lazy"}
                            {...(index === 0 ? { fetchpriority: "high" } : {})}
                            className="w-full h-[520px] object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 to-transparent pointer-events-none" />

                  {/* Carousel Navigation Dots */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                    {scrollSnaps.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => emblaApi?.scrollTo(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex
                          ? "bg-white w-8"
                          : "bg-white/50 hover:bg-white/75"
                          }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </div>
      </section>

      {/* Student Discount Banner */}
      <section className="mt-12 lg:mt-0 py-8 md:py-12 bg-gradient-to-r from-espresso via-chocolate to-espresso">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="w-16 h-16 bg-amber rounded-2xl flex items-center justify-center flex-shrink-0 rotate-3">
              <GraduationCap className="w-8 h-8 text-espresso" />
            </div>
            <div>
              <h3 className="font-display text-2xl md:text-3xl text-cream italic">
                10% OFF on Cakes for Students
              </h3>
              <p className="text-cream/70 text-sm mt-1">Show your valid ID card at any outlet</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">Same Day Cake Delivery in Udupi</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-secondary/20">
              <h3 className="text-xl font-bold mb-3">Popular Cake Flavors</h3>
              <p className="text-muted-foreground">From Classic Vanilla to Red Velvet and Lotus Biscoff, we have it all.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/20">
              <h3 className="text-xl font-bold mb-3">Designer Cake Options</h3>
              <p className="text-muted-foreground">Custom fondant and photo cakes designed for your special birthdays.</p>
            </div>
            <div className="p-6 rounded-2xl bg-secondary/20">
              <h3 className="text-xl font-bold mb-3">100% Veg Cake Varieties</h3>
              <p className="text-muted-foreground">100% vegetarian bakery ensuring quality and taste in every bite.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="flowers" className="py-16 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">Fresh Flower & Bouquet Delivery</h2>
          <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Complement your celebrations with our fresh rose collection and custom bouquets delivered in Manipal & Udupi.
          </p>
        </div>
      </section>

      <MenuSection />

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Order Online Now</h2>
          <p className="mb-8 text-lg">Experience the best bakery in Manipal with doorstep delivery.</p>
          <Link to="/menu">
            <Button size="lg" className="rounded-full px-12">Browse Full Menu</Button>
          </Link>
        </div>
      </section>

      <CustomCakesSection />

      <section className="py-16 bg-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Why Choose Our Bakery in Manipal</h2>
          <p className="max-w-3xl mx-auto text-muted-foreground text-lg">
            Drips Bakery & Cafe is the most trusted name for custom cakes and fresh flower delivery in Manipal.
            We take pride in our 100% veg recipes and same-day delivery service across Udupi, Manipal, and Malpe.
          </p>
        </div>
      </section>

      <GallerySection />

      <AboutSection />

      <ContactSection />
    </div>
  );
};

export default Home;
