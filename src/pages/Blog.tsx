import React from 'react';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/button';

const BLOG_POSTS = [
    {
        slug: 'best-cake-flavors-in-manipal',
        title: 'Top 5 Best Cake Flavors to Try in Manipal',
        excerpt: 'Discover the most popular cake flavors that locals in Manipal love, from Red Velvet to Lotus Biscoff.',
        date: 'March 15, 2024',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80'
    },
    {
        slug: 'how-to-order-custom-cake-in-udupi',
        title: 'How to Order the Perfect Custom Cake in Udupi',
        excerpt: 'A complete guide to planning and ordering a designer cake for your next big celebration in Udupi.',
        date: 'March 10, 2024',
        image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=800&q=80'
    },
    {
        slug: 'veg-vs-regular-cakes',
        title: '100% Veg vs Regular Cakes: Which One is Better?',
        excerpt: 'Thinking about going 100% veg? We break down the differences and why our veg cakes are just as fluffy.',
        date: 'March 5, 2024',
        image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=800&q=80'
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen pt-32 pb-20">
            <SEO
                title="Blog - Latest Updates & Cake Guides | Drips Bakery"
                description="Read our latest articles about cake flavors, custom cake ordering guides, and 100% veg bakery tips in Manipal and Udupi."
            />
            <div className="container mx-auto px-4">
                <Reveal>
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Sweet Blog</h1>
                        <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                            Tips, guides, and stories from the best bakery in Manipal.
                        </p>
                    </div>
                </Reveal>

                <div className="grid md:grid-cols-3 gap-8">
                    {BLOG_POSTS.map((post, index) => (
                        <Reveal key={post.slug} delay={index * 0.1}>
                            <div className="bg-card rounded-2xl border border-border/50 overflow-hidden hover:shadow-xl transition-all h-full flex flex-col">
                                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                                <div className="p-6 flex-grow flex flex-col">
                                    <p className="text-sm text-primary font-medium mb-2">{post.date}</p>
                                    <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                                    <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                                    <Link to={`/blog/${post.slug}`} className="mt-auto">
                                        <Button variant="link" className="p-0 text-primary font-bold">Read More →</Button>
                                    </Link>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
