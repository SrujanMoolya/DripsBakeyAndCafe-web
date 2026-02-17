import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const BLOG_CONTENT: Record<string, any> = {
    'best-cake-flavors-in-manipal': {
        title: 'Top 5 Best Cake Flavors to Try in Manipal',
        content: `
      <p>Manipal is a melting pot of cultures, and its taste in cakes is just as diverse. At Drips Bakery, we've seen trends come and go, but some flavors remain timeless favorites.</p>
      <h2>1. Red Velvet</h2>
      <p>Our Red Velvet cake is not just a cake; it's an experience. The subtle hint of cocoa and the rich cream cheese frosting make it a top choice for anniversaries.</p>
      <h2>2. Lotus Biscoff</h2>
      <p>The new favorite! The caramelized biscuit flavor combined with our fluffy 100% veg sponge is taking Manipal by storm.</p>
      <h2>3. Chocolate Truffle</h2>
      <p>For the purists. We use 100% pure ganache for that intense chocolate flavor that melt-in-the-mouth.</p>
    `,
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=1200&q=80',
        keywords: 'best cake flavors Manipal, red velvet cake Manipal, lotus biscoff cake'
    }
};

const BlogPost = () => {
    const { slug } = useParams();
    const post = BLOG_CONTENT[slug || ''];

    if (!post) return <div className="pt-40 text-center">Post not found</div>;

    return (
        <div className="min-h-screen pt-32 pb-20">
            <SEO
                title={`${post.title} | Drips Bakery Blog`}
                description={post.title}
                keywords={post.keywords}
                ogType="article"
                schema={{
                    "@context": "https://schema.org",
                    "@type": "BlogPosting",
                    "headline": post.title,
                    "image": [post.image],
                    "datePublished": "2024-03-15T08:00:00+08:00",
                    "author": {
                        "@type": "Person",
                        "name": "Drips Bakery Team"
                    }
                }}
            />
            <div className="container mx-auto px-4 max-w-3xl">
                <Link to="/blog">
                    <Button variant="ghost" className="mb-8 gap-2">
                        <ArrowLeft size={16} /> Back to Blog
                    </Button>
                </Link>
                <img src={post.image} alt={post.title} className="w-full h-[400px] object-cover rounded-3xl mb-8" />
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
                <div
                    className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-16 p-8 bg-secondary/20 rounded-2xl text-center">
                    <h3 className="text-2xl font-bold mb-4">Want to try these flavors?</h3>
                    <p className="mb-6">Order now for same-day delivery in Manipal and Udupi.</p>
                    <Link to="/menu">
                        <Button size="lg" className="rounded-full px-8">Order Now</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
