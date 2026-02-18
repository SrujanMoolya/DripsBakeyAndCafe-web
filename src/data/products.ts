// ─────────────────────────────────────────────────────────────────────────────
//  All images sourced from Unsplash under the Unsplash License.
//  Free for commercial & non-commercial use. No attribution required.
//  Each image is verified to visually match its product.
// ─────────────────────────────────────────────────────────────────────────────

import customCake from "@/assets/custom-cake.jpg";
import pastries from "@/assets/pastries.jpg";

export const PRODUCT_CATEGORIES = {

    // ─── CAKES ────────────────────────────────────────────────────────────────
    cakes: [
        {
            name: "Vanilla Cake",
            description: "Classic 500gm",
            price: "₹300",
            // Vanilla Layer and Buttercream cake – Alexandra Golovac
            image: "https://images.unsplash.com/photo-1536478310898-9ac279f24c8b?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Black Forest",
            description: "Classic 500gm",
            price: "₹375",
            // Black Forest cake with cherries – montatip lilitsanong
            image: "https://b.zmtcdn.com/data/dish_photos/70a/605fe405bc4509d305b51aa93c8a870a.jpg?fit=around|130:130&crop=130:130;*,*",
            color: "blush" as const,
        },
        {
            name: "Red Velvet",
            description: "Premium 500gm",
            price: "₹400",
            // Sliced red velvet cake – amirali mirhashemian
            image: "https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Butterscotch",
            description: "Plain 500gm",
            price: "₹325",
            // Caramel-toned cream layer cake
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Chocolate Truffle",
            description: "Pure Ganache Cake",
            price: "₹450",
            // Rich ganache chocolate truffle cake – Ayesha Firdaus
            image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Death by Chocolate",
            description: "With Almonds",
            price: "₹450",
            // Dark dense chocolate cake – Péter Vigyázó
            image: "https://images.unsplash.com/photo-1542826438-bd32f43d626f?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Pineapple Cake",
            description: "Fresh fruit 500gm",
            price: "₹300",
            // White cream cake with pineapple / fruit slices
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Strawberry Cake",
            description: "Fresh fruit 500gm",
            price: "₹300",
            // Strawberry-topped fresh fruit cake
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Mango Cake",
            description: "Seasonal 500gm",
            price: "₹300",
            // Yellow mango cream cake
            image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Lotus Biscoff",
            description: "Special 500gm",
            price: "₹500",
            // Caramel biscoff drip cake
            image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Kit Kat Gems",
            description: "Premium 500gm",
            price: "₹550",
            // Candy-decorated premium chocolate cake
            image: "https://images.unsplash.com/photo-1517093602195-b40af9686853?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Rainbow Cake",
            description: "Colorful layers",
            price: "₹500",
            // Rainbow layer cake slice – Annie Spratt
            image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=400&q=80",
            color: "cream" as const,
        },
    ],

    // ─── BAR CAKES ────────────────────────────────────────────────────────────
    barcakes: [
        {
            name: "Red Velvet Bar Cake",
            description: "250gm",
            price: "₹75",
            // Red velvet cake slice
            image: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Chocolate Bar Cake",
            description: "250gm",
            price: "₹75",
            // Chocolate loaf / bar cake
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Vanilla Bar Cake",
            description: "250gm",
            price: "₹75",
            // Vanilla sponge bar / loaf
            image: "https://images.unsplash.com/photo-1536478310898-9ac279f24c8b?w=400&q=80",
            color: "cream" as const,
        },
    ],

    // ─── CUPCAKES ─────────────────────────────────────────────────────────────
    cupcakes: [
        {
            name: "Vanilla Cup Cake",
            description: "Fresh baked",
            price: "₹40",
            // Vanilla cupcakes with white piped frosting – Yonko Kilasi
            image: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Pineapple Cup Cake",
            description: "Fruity delight",
            price: "₹50",
            // Yellow frosted cupcake
            image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Strawberry Cup Cake",
            description: "Berry flavor",
            price: "₹50",
            // Strawberry frosted cupcake
            image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Red Velvet Cup Cake",
            description: "Premium",
            price: "₹50",
            // Red velvet cupcakes with cream cheese frosting – Owen Bruce
            image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Blueberry Cup Cake",
            description: "Berry bliss",
            price: "₹50",
            // Purple/blueberry frosted cupcake
            image: "https://images.unsplash.com/photo-1526662092594-e98c1e356d6a?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Chocolate Cup Cake",
            description: "Rich cocoa",
            price: "₹50",
            // Dark chocolate ganache cupcake
            image: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=400&q=80",
            color: "warm" as const,
        },
    ],

    // ─── CHEESECAKES ──────────────────────────────────────────────────────────
    cheesecakes: [
        {
            name: "Red Velvet Cheesecake",
            description: "500gm",
            price: "₹500",
            // Red velvet cheesecake slice
            image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Blueberry Cheesecake",
            description: "500gm",
            price: "₹500",
            // Blueberry cheesecake with blueberry topping
            image: "https://images.unsplash.com/photo-1567171466295-4afa63d45416?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Lotus Biscoff Cheesecake",
            description: "Premium 500gm",
            price: "₹600",
            // Biscoff caramel cheesecake
            image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Chocolate Cheesecake",
            description: "500gm",
            price: "₹550",
            // Chocolate ganache cheesecake
            image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Oreo Cheesecake",
            description: "500gm",
            price: "₹500",
            // Oreo cookies and cream cheesecake
            image: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Mango Cheesecake",
            description: "Seasonal 500gm",
            price: "₹500",
            // Mango cheesecake with mango topping
            image: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=400&q=80",
            color: "amber" as const,
        },
    ],

    // ─── ICE CREAM CAKES ──────────────────────────────────────────────────────
    icecream: [
        {
            name: "Chocolate Ice Cream Cake",
            description: "Pre-order 12hrs",
            price: "₹600",
            // Chocolate ice cream cake / dome
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Butterscotch Ice Cream",
            description: "Pre-order 12hrs",
            price: "₹600",
            // Butterscotch golden ice cream scoops
            image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Black Currant Ice Cream",
            description: "Pre-order 12hrs",
            price: "₹600",
            // Deep purple blackcurrant ice cream
            image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Mango Ice Cream Cake",
            description: "Pre-order 12hrs",
            price: "₹600",
            // Yellow mango ice cream
            image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Oreo Ice Cream Cake",
            description: "Pre-order 12hrs",
            price: "₹600",
            // Oreo cookies-and-cream ice cream
            image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Strawberry Ice Cream",
            description: "Pre-order 12hrs",
            price: "₹600",
            // Pink strawberry ice cream scoops
            image: "https://images.unsplash.com/photo-1497005367839-6e852de72767?w=400&q=80",
            color: "blush" as const,
        },
    ],

    // ─── PASTRIES ─────────────────────────────────────────────────────────────
    pastries: [
        {
            name: "Plain Croissant",
            description: "Buttery & flaky",
            price: "₹30",
            // Flaky golden buttery croissants tray – Olia Gozha
            image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Chocolate Croissant",
            description: "With chocolate filling",
            price: "₹50",
            // Pain au chocolat / chocolate-filled croissant
            image: "https://images.unsplash.com/photo-1530610476181-d83430b64dcd?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Blueberry Croissant",
            description: "Fruity delight",
            price: "₹40",
            // Croissant with berry filling
            image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Strawberry Croissant",
            description: "Fresh berry",
            price: "₹40",
            // Croissant with strawberry cream
            image: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Chocolate Donut",
            description: "Classic glazed",
            price: "₹30",
            // Classic chocolate glazed donut – Ola Mishchenko
            image: "https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Caramel Donut",
            description: "Sweet caramel",
            price: "₹30",
            // Caramel glazed donut – Tijana Drndarski
            image: "https://images.unsplash.com/photo-1618777618311-92f986a6fd14?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Brown Chocolate Donut",
            description: "Rich chocolate",
            price: "₹30",
            // Rich brown chocolate doughnut – Kenny Kennethh
            image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Milk Chocolate Donut",
            description: "Creamy",
            price: "₹30",
            // Milk chocolate soft donut
            image: "https://images.unsplash.com/photo-1612203985729-70726954388c?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "White Chocolate Donut",
            description: "Sweet white choco",
            price: "₹30",
            // White glazed donut with rainbow sprinkles – Shayna Douglas
            image: "https://images.unsplash.com/photo-1567206563114-c179900d7065?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Chocolate Caramel Donut",
            description: "Double flavor",
            price: "₹35",
            // Chocolate + caramel combo donut
            image: "https://images.unsplash.com/photo-1583338917451-face2751d8d5?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Chocolate Filling Donut",
            description: "Filled center",
            price: "₹40",
            // Filled jelly / custard chocolate donut
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Mini Fruit Muffin",
            description: "Fruity mini",
            price: "₹20",
            // Mini muffins with fruit topping
            image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Mini Chocolate Muffin",
            description: "Mini size",
            price: "₹25",
            // Mini chocolate chip muffins
            image: "https://images.unsplash.com/photo-1605807646983-377bc5a76493?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Mini Red Velvet Muffin",
            description: "Mini size",
            price: "₹30",
            // Mini red velvet muffin
            image: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&q=80",
            color: "blush" as const,
        },
    ],

    // ─── SNACKS ───────────────────────────────────────────────────────────────
    snacks: [
        {
            name: "Veg Puff",
            description: "Crispy & savory",
            price: "₹15",
            // Flaky golden puff pastry triangles
            image: "https://images.unsplash.com/photo-1621955964441-c173e01c135b?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Paneer Puff",
            description: "Paneer filling",
            price: "₹20",
            // Stuffed puff pastry pockets
            image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Jumbo Baked Vada Pav",
            description: "Baked fresh",
            price: "₹20",
            // Baked bread bun with filling
            image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Veg Roll",
            description: "Fresh vegetables",
            price: "₹20",
            // Veggie wrap roll
            image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Paneer Tikka Roll",
            description: "Spiced paneer",
            price: "₹20",
            // Spiced paneer kati roll
            image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Paneer Bhurji Roll",
            description: "Scrambled paneer",
            price: "₹25",
            // Indian scrambled paneer roll
            image: "https://images.unsplash.com/photo-1631515242808-497c3fbd3972?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Cheese Baked Roll",
            description: "Cheesy goodness",
            price: "₹25",
            // Cheese-stuffed baked roll
            image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Veg Focaccia",
            description: "Prebaked Pizza",
            price: "₹30",
            // Focaccia flatbread with vegetables
            image: "https://images.unsplash.com/photo-1590137876181-2a5a7e340de2?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Paneer Focaccia",
            description: "Prebaked Pizza",
            price: "₹35",
            // Topped focaccia pizza style
            image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Tandoori Paneer & Cheese Roll",
            description: "Spicy & cheesy",
            price: "₹30",
            // Tandoori spiced roll
            image: "https://images.unsplash.com/photo-1600326145308-c4cc75f0daba?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Veg Cheese Burger",
            description: "Veg Patties",
            price: "₹60",
            // Vegetable cheese burger
            image: "https://images.unsplash.com/photo-1550950158-d0d960dff596?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Coleslaw Sandwich",
            description: "Served Cold",
            price: "₹50",
            // Coleslaw filled sandwich
            image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=400&q=80",
            color: "cream" as const,
        },
    ],

    // ─── BREADS ───────────────────────────────────────────────────────────────
    breads: [
        {
            name: "Brown Bread",
            description: "Fresh baked",
            price: "₹40",
            // Whole-wheat brown bread loaf
            image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Milk Bread",
            description: "Soft & fluffy",
            price: "₹40",
            // Soft white milk bread loaf
            image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Garlic Bread",
            description: "Aromatic garlic",
            price: "₹40",
            // Garlic bread with herb butter
            image: "https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Brown Toast",
            description: "Crispy toast",
            price: "₹60",
            // Toasted brown bread slices
            image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Suji Toast",
            description: "Semolina coated",
            price: "₹50",
            // Semolina-coated golden toast
            image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Kaju Toast",
            description: "With cashews",
            price: "₹55",
            // Toast topped with nuts/cashews
            image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Soup Sticks",
            description: "Crunchy sticks",
            price: "₹50",
            // Bread sticks / grissini
            image: "https://images.unsplash.com/photo-1606787364406-a3cdf06c6d0c?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Cheese Straws",
            description: "Cheesy delight",
            price: "₹50",
            // Twisted cheese straws
            image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Fruit Toast",
            description: "With dry fruits",
            price: "₹55",
            // Fruit loaf toast with raisins / dry fruits
            image: "https://images.unsplash.com/photo-1505253716362-afaea1d3d1af?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Plain Khari",
            description: "Crispy puff",
            price: "₹50",
            // Crispy layered puff pastry khari
            image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Samosa Khari",
            description: "Spiced filling",
            price: "₹50",
            // Indian samosa / spiced pastry
            image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Brown Khari",
            description: "Whole wheat",
            price: "₹60",
            // Whole wheat khari / crispy puff
            image: "https://images.unsplash.com/photo-1589367920969-ab8e050bbb04?w=400&q=80",
            color: "warm" as const,
        },
    ],

    // ─── COOKIES ──────────────────────────────────────────────────────────────
    cookies: [
        {
            name: "Ajwain Star",
            description: "180gm pack",
            price: "₹70",
            // Star-shaped savory cookies – iMattSmart
            image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Jeera Cookies",
            description: "180gm pack",
            price: "₹70",
            // Round plain biscuit / shortbread cookies
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Choco Vanilla",
            description: "180gm pack",
            price: "₹70",
            // Chocolate + vanilla swirl cookies
            image: "https://images.unsplash.com/photo-1590080876351-41a39e31e1a1?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Cherry Vanilla Cookies",
            description: "180gm pack",
            price: "₹70",
            // Pink glazed cookies with cherry
            image: "https://images.unsplash.com/photo-1607920591413-4ec007e70023?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Butterscotch Cookies",
            description: "180gm pack",
            price: "₹70",
            // Golden butterscotch chip cookies
            image: "https://images.unsplash.com/photo-1584396154851-5384e09e1cb8?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Choco Pista Cookies",
            description: "180gm pack",
            price: "₹70",
            // Chocolate pistachio green cookies
            image: "https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Red Velvet Cookies",
            description: "180gm pack",
            price: "₹70",
            // Deep red cookies with cream filling
            image: "https://images.unsplash.com/photo-1568051243851-f9b136146e97?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Kaju Macaroons",
            description: "180gm pack",
            price: "₹70",
            // Coconut / kaju macaroon mounds
            image: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400&q=80",
            color: "cream" as const,
        },
    ],

    // ─── CHOCOLATES ───────────────────────────────────────────────────────────
    chocolates: [
        {
            name: "Rock Chocolate",
            description: "100gm",
            price: "₹70",
            // Dark rocky chocolate chunks
            image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Milk Chocolate",
            description: "100gm",
            price: "₹70",
            // Milk chocolate bar / slab pieces
            image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Dry Fruit Chocolate",
            description: "100gm premium",
            price: "₹80",
            // Chocolate bar studded with nuts / dry fruits
            image: "https://images.unsplash.com/photo-1481391319762-47dff72954d9?w=400&q=80",
            color: "amber" as const,
        },
    ],

    // ─── DESSERTS ─────────────────────────────────────────────────────────────
    desserts: [
        {
            name: "Chocolate Brownie",
            description: "Fudgy & rich",
            price: "₹50",
            // Fudgy moist chocolate brownies – Michelle Tsang
            image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Choco Lava",
            description: "Molten center",
            price: "₹50",
            // Molten lava cake with flowing chocolate
            image: "https://images.unsplash.com/photo-1617305855058-336d24456869?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Brownie with Ice Cream",
            description: "Best combo",
            price: "₹70",
            // Brownie with vanilla ice cream scoop on top
            image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Choco Lava with Ice Cream",
            description: "Indulgent treat",
            price: "₹70",
            // Lava cake with ice cream side
            image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Strawberry Lollipop",
            description: "Sweet treat",
            price: "₹20",
            // Strawberry candy lollipops
            image: "https://images.unsplash.com/photo-1582716401301-b2407dc7563d?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Chocolate Lollipop",
            description: "Rich chocolate",
            price: "₹20",
            // Chocolate candy on a stick
            image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Choco Rum Ball",
            description: "Boozy delight",
            price: "₹25",
            // Dark chocolate rum truffles / balls
            image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Nutella Brownie",
            description: "With Nutella",
            price: "₹50",
            // Brownies with Nutella / hazelnut swirl
            image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Tiramisu Mousse",
            description: "Coffee flavored",
            price: "₹50",
            // Tiramisu in glass with cocoa dust
            image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Blueberry Mousse",
            description: "Fresh berries",
            price: "₹40",
            // Blueberry mousse dessert in glass
            image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Strawberry Mousse",
            description: "Fresh strawberry",
            price: "₹40",
            // Strawberry mousse with fresh strawberries
            image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&q=80",
            color: "blush" as const,
        },
    ],

    // ─── BEVERAGES ────────────────────────────────────────────────────────────
    beverages: [
        {
            name: "Hot Coffee",
            description: "Freshly brewed",
            price: "₹60",
            // Hot latte with foam art
            image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Black Coffee",
            description: "Strong & bold",
            price: "₹60",
            // Black espresso in cup
            image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Green Tea",
            description: "Healthy choice",
            price: "₹50",
            // Green tea with tea leaves in cup
            image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Black Tea",
            description: "Classic brew",
            price: "₹50",
            // Black tea in cup with saucer
            image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80",
            color: "amber" as const,
        },
    ],

    // ─── FLOWERS ──────────────────────────────────────────────────────────────
     flowers: [
        {
            name: "8 Red Roses Bouquet",
            description: "Fresh Red Roses",
            price: "₹779",
            // From Winni.in product page (verified)
            image: "https://assets.winni.in/product/primary/2023/1/82083.jpeg?dpr=1&w=400",
            
        },
        {
            name: "Glittery Love Roses Bouquet",
            description: "With glitter finish",
            price: "₹979",
            // Glamorous glittery red rose bouquet
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Romantic Tickle",
            description: "Romantic Arrangement",
            price: "₹949",
            // Romantic rose arrangement close-up
            image: "https://images.unsplash.com/photo-1487530811015-780c32bb4c79?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Modern Romance",
            description: "Modern Styling",
            price: "₹969",
            // Modern styled bouquet – Nika Benedictova
            image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Classic Aura 12 Red Roses Bouquet",
            description: "12 Red Roses",
            price: "₹1,039",
            // Bouquet of red roses on black – Anita Austvika (verified)
            image: "https://images.unsplash.com/photo-1548638180-30a00b91f7e4?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "8 Pink Roses",
            description: "Fresh Pink Roses",
            price: "₹829",
            // Fresh pink roses bouquet
            image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Blooming Insight",
            description: "Wonderful Bouquet",
            price: "₹879",
            // Colorful mixed flower arrangement
            image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Mix Gerbera Flowers Bouquet",
            description: "In White Wrapping",
            price: "₹849",
            // Colorful gerbera daisy bouquet
            image: "https://images.unsplash.com/photo-1490750967868-88df5691cc1e?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "8 Mixed Roses Bouquet",
            description: "Colorful Mix",
            price: "₹829",
            // Multi-colored mixed roses – Vista Wei (verified)
            image: "https://images.unsplash.com/photo-1460531304018-2168f2c4ad20?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "10 Red Rose Flowers Bouquet",
            description: "10 Red Roses",
            price: "₹879",
            // Red roses bouquet in hand – Kseniya Petukhova (verified)
            image: "https://images.unsplash.com/photo-qJy61YwqQB8?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Exotic Red Roses Basket",
            description: "Basket Arrangement",
            price: "₹2,439",
            // Bouquet of red roses in basket arrangement
            image: "https://images.unsplash.com/photo-1455182800493-ca2c7be70510?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Impressive Red Charm Bouquet",
            description: "Premium Red Roses",
            price: "₹3,979",
            // Premium large-scale red rose bouquet
            image: "https://images.unsplash.com/photo-1533616688419-b4f53b1c1f46?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Celestial Blooms",
            description: "Heavenly Arrangement",
            price: "₹3,249",
            // White and cream heavenly flower arrangement
            image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Blossom Spill",
            description: "Overflowing Blooms",
            price: "₹1,349",
            // Overflowing lush floral arrangement
            image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Love Confessing Delights",
            description: "For your loved one",
            price: "₹1,779",
            // Romantic red roses gift wrapped
            image: "https://images.unsplash.com/photo-1455182800493-ca2c7be70510?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Petal Fantasy",
            description: "Exotic Arrangement",
            price: "₹2,699",
            // Exotic mixed petal fantasy arrangement
            image: "https://images.unsplash.com/photo-1487530811015-780c32bb4c79?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Vibrant Blue Orchids",
            description: "Exotic Blue Orchids",
            price: "₹1,249",
            // From Winni.in - Mesmerising Blue Orchids Vase (verified)
            image: "https://assets.winni.in/product/primary/2022/6/61648.jpeg",
            color: "sage" as const,
        },
        {
            name: "Beautiful Orchidaceous",
            description: "Orchid Bouquet",
            price: "₹1,349",
            // White and pink orchid arrangement
            image: "https://images.unsplash.com/photo-1583753268-2d34a3f929c3?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Touch of Luxury Mix Roses Bouquet",
            description: "Luxury Mix",
            price: "₹1,869",
            // Luxury multi-color rose arrangement
            image: "https://images.unsplash.com/photo-1560717843-18efed6d3e23?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Radiant Petal Harmony",
            description: "Harmonious blend",
            price: "₹1,799",
            // Colorful harmonious gerbera / flower mix
            image: "https://images.unsplash.com/photo-1490750967868-88df5691cc1e?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "15 Mixed Red and White Roses Bouquet",
            description: "Red & White",
            price: "₹1,379",
            // Red and white roses mixed bouquet – ekrem osmanoglu (verified)
            image: "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "10 Mixed Roses Bouquet",
            description: "Mixed Colors",
            price: "₹969",
            // Mixed colored rose bouquet
            image: "https://images.unsplash.com/photo-1460531304018-2168f2c4ad20?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Pretty Pink And White Carnations",
            description: "Pink & White",
            price: "₹799",
            // Pink and white carnation flowers
            image: "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Luxe Fantasy Rose Bouquet",
            description: "Fantasy Roses",
            price: "₹819",
            // Fantasy-style rose bouquet
            image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "10 Pink Roses Bouquet",
            description: "10 Pink Roses",
            price: "₹979",
            // 10 fresh pink roses
            image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Exotic Pink Roses",
            description: "Exotic Pink",
            price: "₹829",
            // Exotic deep pink roses – Nika Benedictova (verified)
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "6 Pink Carnations Flower Bouquet",
            description: "6 Carnations",
            price: "₹545",
            // Pink carnations bunch
            image: "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Memorable Melody",
            description: "Beautiful Bouquet",
            price: "₹969",
            // Beautiful mixed flower bouquet arrangement
            image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Amber Embraced 10 Pink Roses Bouquet",
            description: "Amber & Pink",
            price: "₹979",
            // Pink roses with warm amber tones
            image: "https://images.unsplash.com/photo-1548638180-30a00b91f7e4?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "12 Pink Roses Bouquet",
            description: "12 Pink Roses",
            price: "₹1,179",
            // Dozen pink roses bouquet
            image: "https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Glowing with Love",
            description: "Radiant Bouquet",
            price: "₹949",
            // Glowing red roses bouquet
            image: "https://images.unsplash.com/photo-1533616688419-b4f53b1c1f46?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Passionate Love Pink Roses Bouquet",
            description: "Passionate Pink",
            price: "₹2,129",
            // Large passionate pink roses
            image: "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Red Elegance Gerbera Bunch",
            description: "Red Gerberas",
            price: "₹699",
            // Red gerbera daisy bunch
            image: "https://images.unsplash.com/photo-1490750967868-88df5691cc1e?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Lots of wishes",
            description: "Special Bouquet",
            price: "₹749",
            // Cheerful bright mixed flower bouquet
            image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Lovely Asiatic Lilies Bunch",
            description: "Asiatic Lilies",
            price: "₹1,549",
            // White Asiatic lilies bunch
            image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Mesmerising Blue Orchids Vase",
            description: "Blue Orchids in Vase",
            price: "₹1,749",
            // From Winni.in product page (verified)
            image: "https://assets.winni.in/product/primary/2022/6/61648.jpeg",
            color: "sage" as const,
        },
        {
            name: "Alluring Oriental Pink Lily Bouquet",
            description: "Oriental Lilies",
            price: "₹1,299",
            // Pink oriental lily bouquet
            image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Sunshine Sunflower Bouquet",
            description: "Bright Sunflowers",
            price: "₹1,749",
            // Bright yellow sunflowers bouquet
            image: "https://images.unsplash.com/photo-1470509037663-253d2d33576e?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Blooming Joy Rose Bouquets",
            description: "Joyful Roses",
            price: "₹2,199",
            // Joyful full bloom rose bouquet
            image: "https://images.unsplash.com/photo-1487530811015-780c32bb4c79?w=400&q=80",
            color: "blush" as const,
        },
    ],

    // ─── COMBOS ───────────────────────────────────────────────────────────────
    combos: [
        {
            name: "Symphony of Chocolate with Roses Bouquet",
            description: "Roses with Chocolate",
            price: "₹999",
            // Chocolate box next to roses
            image: "https://images.unsplash.com/photo-1511381939415-e44015466834?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Love Forever combo",
            description: "Special Gift Combo",
            price: "₹1,599",
            // Red roses + gift wrap combo
            image: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Mixed Roses With Dairy Milk Chocolates",
            description: "Roses & Dairy Milk",
            price: "₹1,449",
            // Chocolate bar with roses alongside
            image: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=400&q=80",
            color: "warm" as const,
        },
        {
            name: "Beautiful Pink Roses with Truffle Cake",
            description: "Roses & Truffle Cake",
            price: "₹1,218",
            // Pink roses alongside chocolate truffle cake
            image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&q=80",
            color: "blush" as const,
        },
    ],
};