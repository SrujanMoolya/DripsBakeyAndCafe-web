import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Heart, Award, Users, Leaf, MapPin, Phone, Clock, Instagram, GraduationCap, Sparkles } from "lucide-react";
import heroBakery from "@/assets/hero-bakery.jpg";
import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";
import cafeInterior from "@/assets/cafe-interior.jpg";
import ProductCard from "@/components/ProductCard";
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    occasion: "",
    size: "",
    flavor: "",
    design: "",
    date: "",
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const featuredProducts = [
    { name: "Chocolate Truffle Cake", description: "Pure Ganache Cake", price: "₹450", image: customCake, color: "yellow" as const },
    { name: "Lotus Biscoff Cake", description: "Premium 500gm", price: "₹500", image: customCake, color: "blue" as const },
    { name: "Red Velvet Cake", description: "Premium 500gm", price: "₹400", image: customCake, color: "pink" as const },
    { name: "Plain Croissant", description: "Buttery & flaky", price: "₹30", image: pastries, color: "peach" as const },
  ];

  const galleryImages = [
    { src: customCake, alt: "Custom Designer Cake" },
    { src: pastries, alt: "Fresh Pastries" },
    { src: heroBakery, alt: "Bakery Display" },
    { src: cafeInterior, alt: "Cafe Interior" },
    { src: customCake, alt: "Wedding Cake" },
    { src: pastries, alt: "Croissants" },
  ];

  const handleCustomCakeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Request submitted! We'll contact you soon to finalize your custom cake.");
    setFormData({
      name: "",
      phone: "",
      email: "",
      occasion: "",
      size: "",
      flavor: "",
      design: "",
      date: "",
    });
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactForm({ ...contactForm, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-peach via-cream to-yellow-light">
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow rounded-full opacity-30 blur-2xl animate-float" />
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-pink rounded-full opacity-30 blur-3xl animate-float [animation-delay:1s]" />
        
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 bg-yellow px-4 py-2 rounded-full font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                100% VEGETARIAN
              </div>
              <h1 className="font-display text-6xl md:text-8xl font-black leading-tight">
                <span className="block text-brown">Happiness</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange to-pink">Baked</span>
                <span className="block text-brown">Fresh Everyday</span>
              </h1>
              <p className="text-xl text-brown/80 max-w-md font-medium">
                Love at First Bite!!! 🍰
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/menu">
                  <Button size="lg" variant="yellow" className="rounded-full px-8 hover:scale-105 transition-transform">
                    VIEW MENU
                  </Button>
                </Link>
                <Link to="/custom-cakes">
                  <Button size="lg" variant="outline" className="rounded-full px-8 hover:scale-105 transition-transform">
                    ORDER CUSTOM CAKE →
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative animate-fade-in-up [animation-delay:200ms]">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow rounded-3xl -rotate-12" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue rounded-full" />
              <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white transform hover:scale-105 transition-transform duration-500">
                <img
                  src={heroBakery}
                  alt="Fresh Baked Goods"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Discount Banner */}
      <section className="py-12 bg-gradient-to-r from-primary via-coffee-light to-rose">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left animate-fade-in-up">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <div>
              <h3 className="font-display text-3xl md:text-4xl font-black text-white mb-2">
                10% OFF on Cakes
              </h3>
              <p className="text-white/90 text-lg font-medium">For Students - Show Your Valid ID Card!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu */}
      <section className="py-20 bg-white" id="menu">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-coffee-light to-rose bg-clip-text text-transparent">
              Featured Delights
            </h2>
            <p className="text-muted-foreground text-lg">
              Taste our most loved creations, handpicked just for you!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              to="/menu"
              className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-gradient-to-r from-primary to-coffee-light text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-b from-cream/30 to-background" id="about">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-fade-in-up">
                <img
                  src={cafeInterior}
                  alt="Drips Cafe"
                  className="w-full rounded-3xl shadow-2xl hover-lift"
                />
              </div>
              <div className="animate-fade-in-up">
                <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-rose bg-clip-text text-transparent">
                  About Drips
                </h2>
                <p className="text-foreground/80 text-lg mb-4">
                  Drips Bakery & Cafe is a popular local hangout in Udupi and Manipal known for its delightful cakes, pastries, and handcrafted coffee.
                </p>
                <p className="text-foreground/80 text-lg mb-4">
                  We serve happiness baked fresh every day — from customized designer cakes to crunchy croissants, creamy desserts, and refreshing beverages.
                </p>
                <p className="text-foreground/80 text-lg mb-6">
                  With cozy interiors, vibrant vibes, and 100% vegetarian menu options, Drips has become a go-to place for students, families, and dessert lovers alike.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-yellow px-6 py-3 rounded-full">
                    <span className="font-black text-brown">100% Vegetarian</span>
                  </div>
                  <div className="bg-pink px-6 py-3 rounded-full">
                    <span className="font-black text-brown">Fresh Daily</span>
                  </div>
                  <div className="bg-blue px-6 py-3 rounded-full">
                    <span className="font-black text-white">Love at First Bite!!!</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center glass p-6 rounded-3xl border border-white/20 hover-lift animate-fade-in-up">
                <div className="w-16 h-16 bg-yellow rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-brown" />
                </div>
                <h3 className="font-bold text-xl mb-2">Made with Love</h3>
                <p className="text-muted-foreground text-sm">
                  Every item crafted with passion
                </p>
              </div>
              <div className="text-center glass p-6 rounded-3xl border border-white/20 hover-lift animate-fade-in-up">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">100% Vegetarian</h3>
                <p className="text-muted-foreground text-sm">
                  Quality vegetarian ingredients
                </p>
              </div>
              <div className="text-center glass p-6 rounded-3xl border border-white/20 hover-lift animate-fade-in-up">
                <div className="w-16 h-16 bg-pink rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-brown" />
                </div>
                <h3 className="font-bold text-xl mb-2">Premium Quality</h3>
                <p className="text-muted-foreground text-sm">
                  Finest ingredients for taste
                </p>
              </div>
              <div className="text-center glass p-6 rounded-3xl border border-white/20 hover-lift animate-fade-in-up">
                <div className="w-16 h-16 bg-peach rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-brown" />
                </div>
                <h3 className="font-bold text-xl mb-2">Community First</h3>
                <p className="text-muted-foreground text-sm">
                  Building connections through food
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Cakes Section */}
      <section className="py-20 bg-gradient-to-r from-pink/10 via-peach/10 to-yellow/10" id="custom-cakes">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-rose bg-clip-text text-transparent">
              Custom Cakes
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Make your celebrations extra special with our designer custom cakes. We'll bring your vision to life!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="animate-fade-in-up">
              <img
                src={customCake}
                alt="Custom Cake"
                className="w-full rounded-3xl shadow-2xl hover-lift"
              />
              <div className="mt-8 space-y-4 glass p-6 rounded-3xl border border-white/20">
                <h3 className="font-display text-2xl font-bold">Available Options</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-black">✓</span>
                    <span className="text-foreground/80"><strong>Novelty Cakes (1kg)</strong> - ₹1000</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-black">✓</span>
                    <span className="text-foreground/80"><strong>Semi Fondant Cakes (1kg)</strong> - ₹1200</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-black">✓</span>
                    <span className="text-foreground/80"><strong>3D Pure Fondant Cakes (1kg)</strong> - ₹1400</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary text-xl font-black">✓</span>
                    <span className="text-foreground/80"><strong>Photo Print Cakes</strong> - ₹150-300</span>
                  </li>
                </ul>
                <p className="text-sm text-muted-foreground italic mt-4">
                  * For your special cake orders, kindly discuss with our chef
                </p>
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 border border-border shadow-xl animate-fade-in-up">
              <h3 className="font-display text-3xl font-bold mb-6">Order Your Custom Cake</h3>
              <form onSubmit={handleCustomCakeSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="+91 99728 56775"
                  />
                </div>

                <div>
                  <Label htmlFor="occasion">Occasion *</Label>
                  <Input
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleChange}
                    required
                    placeholder="Birthday, Wedding, Anniversary, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="size">Cake Size *</Label>
                  <select
                    id="size"
                    name="size"
                    value={formData.size}
                    onChange={handleChange}
                    required
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                  >
                    <option value="">Select size</option>
                    <option value="500gm">500gm</option>
                    <option value="1kg">1 kg</option>
                    <option value="2kg">2 kg</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="flavor">Preferred Flavor *</Label>
                  <Input
                    id="flavor"
                    name="flavor"
                    value={formData.flavor}
                    onChange={handleChange}
                    required
                    placeholder="Chocolate, Vanilla, Red Velvet, etc."
                  />
                </div>

                <div>
                  <Label htmlFor="date">Required Date *</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="design">Design Details</Label>
                  <Textarea
                    id="design"
                    name="design"
                    value={formData.design}
                    onChange={handleChange}
                    placeholder="Describe your dream cake design..."
                    rows={3}
                  />
                </div>

                <Button type="submit" className="w-full" size="lg">
                  Submit Custom Cake Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white" id="gallery">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-coffee-light to-rose bg-clip-text text-transparent">
              Gallery
            </h2>
            <p className="text-muted-foreground text-lg">
              A visual treat of our delicious creations and happy moments
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover-lift animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white font-semibold text-lg p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center glass p-10 rounded-3xl border border-white/20 animate-fade-in-up hover-lift">
            <h3 className="font-display text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-rose bg-clip-text text-transparent">
              Share Your Drips Moments
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              Tag us on Instagram to be featured in our gallery!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://instagram.com/DripsBakeryAndCafeUdupi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-pink to-rose text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                @DripsBakeryAndCafeUdupi
              </a>
              <a
                href="https://instagram.com/DripsBakeryAndCafeManipal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-full bg-gradient-to-r from-pink to-rose text-white font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
                @DripsBakeryAndCafeManipal
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-b from-background to-cream/20" id="contact">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-rose bg-clip-text text-transparent">
              Visit Us
            </h2>
            <p className="text-muted-foreground text-lg">
              We're here to serve you happiness every day!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            <div className="glass p-8 rounded-3xl border border-white/20 hover-lift animate-fade-in-up">
              <h3 className="font-display text-3xl font-bold mb-6 text-brown">Udupi Outlet</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brown" />
                  </div>
                  <div>
                    <p className="text-foreground/80 text-lg font-medium">
                      Opp. Udupi Courts<br />
                      Beside Mummy & Me<br />
                      Udupi, Karnataka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground/80 text-lg font-medium">
                      📞 +91 99728 56775<br />
                      📱 +91 81519 56775
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brown" />
                  </div>
                  <div>
                    <p className="text-foreground/80 text-lg font-medium">
                      Open Daily<br />
                      8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-8 rounded-3xl border border-white/20 hover-lift animate-fade-in-up">
              <h3 className="font-display text-3xl font-bold mb-6 text-brown">Manipal Outlet</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-brown" />
                  </div>
                  <div>
                    <p className="text-foreground/80 text-lg font-medium">
                      Opp. Youth Corner<br />
                      Beside Hotel Tranquil, Vidhyaratna Nagar<br />
                      Manipal, Karnataka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-foreground/80 text-lg font-medium">
                      📞 +91 99728 56775<br />
                      📱 +91 81519 56775
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-pink rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-brown" />
                  </div>
                  <div>
                    <p className="text-foreground/80 text-lg font-medium">
                      Open Daily<br />
                      8:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto bg-card rounded-3xl p-8 border border-border shadow-xl animate-fade-in-up">
            <h3 className="font-display text-3xl font-bold mb-6 text-center">Send us a Message</h3>
            <form onSubmit={handleContactSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="contact-name">Name *</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleContactChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <Label htmlFor="contact-phone">Phone *</Label>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={contactForm.phone}
                    onChange={handleContactChange}
                    required
                    placeholder="+91 99728 56775"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="contact-email">Email</Label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={contactForm.email}
                  onChange={handleContactChange}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <Label htmlFor="contact-message">Message *</Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactChange}
                  required
                  placeholder="How can we help you?"
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-12 max-w-2xl mx-auto bg-blue/10 border border-blue/20 rounded-3xl p-6 text-center animate-fade-in-up">
            <p className="text-foreground/80 text-sm">
              <strong>Note:</strong> All fresh cream products to be refrigerated and should be consumed within 3 days from purchase.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
