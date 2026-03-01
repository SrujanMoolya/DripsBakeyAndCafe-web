
import { PRODUCT_CATEGORIES } from "../src/data/products";
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = "https://dripsbakeryandcafe.com"; // Change if this is different

interface GoogleProduct {
    id: string;
    title: string;
    description: string;
    link: string;
    image_link: string;
    availability: string;
    price: string;
    condition: string;
    brand: string;
    google_product_category: string;
}

function generateCSV() {
    const products: GoogleProduct[] = [];

    Object.entries(PRODUCT_CATEGORIES).forEach(([category, items]) => {
        items.forEach((item: any) => {
            const priceVal = item.price.replace(/[^\d.]/g, '');
            products.push({
                id: item.name.toLowerCase().replace(/\s+/g, '-'),
                title: item.name,
                description: item.description || `${item.name} - Fresh cake from Drips Bakery.`,
                link: `${BASE_URL}/menu`, // Since there are no individual product pages, linking to menu
                image_link: item.image,
                availability: "in stock",
                price: `${priceVal} INR`,
                condition: "new",
                brand: "Drips Bakery & Cafe",
                google_product_category: "Food, Beverages & Tobacco > Food Items > Bakery and Dessert Ingredients > Cakes" // Generic category
            });
        });
    });

    const headers = ["id", "title", "description", "link", "image_link", "availability", "price", "condition", "brand", "google_product_category"];
    const csvRows = [
        headers.join(","),
        ...products.map(p => headers.map(h => `"${(p as any)[h]}"`).join(","))
    ];

    const outputPath = path.join(__dirname, '../public/google-products.csv');
    fs.writeFileSync(outputPath, csvRows.join("\n"));
    console.log(`✅ Google Product Feed generated at: ${outputPath}`);
}

generateCSV();
