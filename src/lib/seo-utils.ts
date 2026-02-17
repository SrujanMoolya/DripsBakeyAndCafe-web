export const getLocalBusinessSchema = () => ({
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Drips Bakery & Cafe",
    "image": "https://dripsbakeryandcafe.com/logo.png",
    "@id": "https://dripsbakeryandcafe.com",
    "url": "https://dripsbakeryandcafe.com",
    "telephone": "+91-XXXXXXXXXX",
    "priceRange": "₹₹",
    "address": [
        {
            "@type": "PostalAddress",
            "streetAddress": "Manipal",
            "addressLocality": "Udupi",
            "addressRegion": "Karnataka",
            "postalCode": "576104",
            "addressCountry": "IN"
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "Udupi",
            "addressLocality": "Udupi",
            "addressRegion": "Karnataka",
            "postalCode": "576101",
            "addressCountry": "IN"
        },
        {
            "@type": "PostalAddress",
            "streetAddress": "Malpe",
            "addressLocality": "Udupi",
            "addressRegion": "Karnataka",
            "postalCode": "576108",
            "addressCountry": "IN"
        }
    ],
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.3409,
        "longitude": 74.7873
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
        ],
        "opens": "09:00",
        "closes": "22:00"
    },
    "sameAs": [
        "https://www.instagram.com/dripsbakeryandcafe",
        "https://www.facebook.com/dripsbakeryandcafe"
    ]
});

export const getProductSchema = (product: any) => ({
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": product.name,
    "image": product.image,
    "description": product.description,
    "offers": {
        "@type": "Offer",
        "url": window.location.href,
        "priceCurrency": "INR",
        "price": product.price.replace('₹', '').replace(',', ''),
        "availability": "https://schema.org/InStock",
        "itemCondition": "https://schema.org/NewCondition"
    }
});

export const getFAQSchema = () => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Do you offer 100% veg cakes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we specialize in 100% veg cakes in Manipal and Udupi. All our cakes are 100% vegetarian."
            }
        },
        {
            "@type": "Question",
            "name": "Do you deliver in Malpe?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide same-day cake and flower delivery in Malpe, Manipal, and Udupi."
            }
        },
        {
            "@type": "Question",
            "name": "Can I order same day cake delivery?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we offer same-day delivery for cakes and flowers if ordered before the cutoff time."
            }
        },
        {
            "@type": "Question",
            "name": "Do you offer custom photo cakes?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely! We create custom designer cakes, including photo cakes and fondant cakes for birthdays and anniversaries."
            }
        }
    ]
});
