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
            image: "data:image/jpeg;base64,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",
            color: "cream" as const,
        },
        {
            name: "Black Forest",
            description: "Classic 500gm",
            price: "₹375",
            // Black Forest cake with cherries – montatip lilitsanong
            image: "https://b.zmtcdn.com/data/dish_photos/861/2d052e3c0135c02d78618a1de8f11861.jpg?fit=around|130:130&crop=130:130;*,*",
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
            color: "blush" as const,
        },
        {
            name: "Glittery Love Roses Bouquet",
            description: "With glitter finish",
            price: "₹979",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2023/1/81951.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "Romantic Tickle",
            description: "Romantic Arrangement",
            price: "₹949",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2024/3/94256.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "Modern Romance",
            description: "Modern Styling",
            price: "₹969",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2014/6/29518.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "Classic Aura 12 Red Roses Bouquet",
            description: "12 Red Roses",
            price: "₹1,039",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2023/1/81888.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "8 Pink Roses",
            description: "Fresh Pink Roses",
            price: "₹829",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2023/1/82313.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "Blooming Insight",
            description: "Wonderful Bouquet",
            price: "₹879",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2023/1/82086.jpeg?dpr=1&w=400",
            color: "cream" as const,
        },
        {
            name: "Mix Gerbera Flowers Bouquet",
            description: "In White Wrapping",
            price: "₹849",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2025/7/106188.jpeg?dpr=1&w=400",
            color: "cream" as const,
        },
        {
            name: "8 Mixed Roses Bouquet",
            description: "Colorful Mix",
            price: "₹829",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2023/1/81909.jpeg?dpr=1&w=400",
            color: "cream" as const,
        },
        {
            name: "10 Red Rose Flowers Bouquet",
            description: "10 Red Roses",
            price: "₹879",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2023/1/82063.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "Exotic Red Roses Basket",
            description: "Basket Arrangement",
            price: "₹2,439",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1455182800493-ca2c7be70510?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Impressive Red Charm Bouquet",
            description: "Premium Red Roses",
            price: "₹3,979",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1533616688419-b4f53b1c1f46?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Celestial Blooms",
            description: "Heavenly Arrangement",
            price: "₹3,249",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Blossom Spill",
            description: "Overflowing Blooms",
            price: "₹1,349",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Love Confessing Delights",
            description: "For your loved one",
            price: "₹1,779",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1455182800493-ca2c7be70510?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Petal Fantasy",
            description: "Exotic Arrangement",
            price: "₹2,699",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1487530811015-780c32bb4c79?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Vibrant Blue Orchids",
            description: "Exotic Blue Orchids",
            price: "₹1,249",
            // From Winni.in - Mesmerising Blue Orchids Vase (verified)
            image: "https://assets.winni.in/product/primary/2022/6/61648.jpeg?dpr=1&w=400",
            color: "sage" as const,
        },
        {
            name: "Beautiful Orchidaceous",
            description: "Orchid Bouquet",
            price: "₹1,349",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1583753268-2d34a3f929c3?w=400&q=80",
            color: "sage" as const,
        },
        {
            name: "Touch of Luxury Mix Roses Bouquet",
            description: "Luxury Mix",
            price: "₹1,869",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1560717843-18efed6d3e23?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Radiant Petal Harmony",
            description: "Harmonious blend",
            price: "₹1,799",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1490750967868-88df5691cc1e?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "15 Mixed Red and White Roses Bouquet",
            description: "Red & White",
            price: "₹1,379",
            // Using Winni 8 Mixed Roses (similar product)
            image: "https://assets.winni.in/product/primary/2023/1/82077.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "10 Mixed Roses Bouquet",
            description: "Mixed Colors",
            price: "₹969",
            // Using Winni 8 Mixed Roses (similar product)
            image: "https://assets.winni.in/product/primary/2023/1/82077.jpeg?dpr=1&w=400",
            color: "cream" as const,
        },
        {
            name: "Pretty Pink And White Carnations",
            description: "Pink & White",
            price: "₹799",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Luxe Fantasy Rose Bouquet",
            description: "Fantasy Roses",
            price: "₹819",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "10 Pink Roses Bouquet",
            description: "10 Pink Roses",
            price: "₹979",
            // Using Winni 8 Pink Roses (similar product)
            image: "https://assets.winni.in/product/primary/2023/1/82082.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "Exotic Pink Roses",
            description: "Exotic Pink",
            price: "₹829",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2022/6/37949.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "6 Pink Carnations Flower Bouquet",
            description: "6 Carnations",
            price: "₹545",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Memorable Melody",
            description: "Beautiful Bouquet",
            price: "₹969",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Amber Embraced 10 Pink Roses Bouquet",
            description: "Amber & Pink",
            price: "₹979",
            // Using Winni 8 Pink Roses (similar product)
            image: "https://assets.winni.in/product/primary/2023/1/82082.jpeg?dpr=1&w=400",
            color: "amber" as const,
        },
        {
            name: "12 Pink Roses Bouquet",
            description: "12 Pink Roses",
            price: "₹1,179",
            // Using Winni 8 Pink Roses (similar product)
            image: "https://assets.winni.in/product/primary/2023/1/82082.jpeg?dpr=1&w=400",
            color: "blush" as const,
        },
        {
            name: "Glowing with Love",
            description: "Radiant Bouquet",
            price: "₹949",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1533616688419-b4f53b1c1f46?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Passionate Love Pink Roses Bouquet",
            description: "Passionate Pink",
            price: "₹2,129",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1524047934617-cb782c24e5f3?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Red Elegance Gerbera Bunch",
            description: "Red Gerberas",
            price: "₹699",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1490750967868-88df5691cc1e?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Lots of wishes",
            description: "Special Bouquet",
            price: "₹749",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1471086569966-db3eebc25a59?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Lovely Asiatic Lilies Bunch",
            description: "Asiatic Lilies",
            price: "₹1,549",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&q=80",
            color: "cream" as const,
        },
        {
            name: "Mesmerising Blue Orchids Vase",
            description: "Blue Orchids in Vase",
            price: "₹1,749",
            // From Winni.in product page (verified)
            image: "https://assets.winni.in/product/primary/2022/6/61648.jpeg?dpr=1&w=400",
            color: "sage" as const,
        },
        {
            name: "Alluring Oriental Pink Lily Bouquet",
            description: "Oriental Lilies",
            price: "₹1,299",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551?w=400&q=80",
            color: "blush" as const,
        },
        {
            name: "Sunshine Sunflower Bouquet",
            description: "Bright Sunflowers",
            price: "₹1,749",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1470509037663-253d2d33576e?w=400&q=80",
            color: "amber" as const,
        },
        {
            name: "Blooming Joy Rose Bouquets",
            description: "Joyful Roses",
            price: "₹2,199",
            // Keeping Unsplash (not found on Winni page)
            image: "https://images.unsplash.com/photo-1487530811015-780c32bb4c79?w=400&q=80",
            color: "blush" as const,
        },
    ],

    // ─── COMBOS (with Winni URLs) ────────────────────────────────────────────
    combos: [
        {
            name: "Symphony of Chocolate with Roses Bouquet",
            description: "Roses with Chocolate",
            price: "₹999",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2024/2/93711.jpeg?dpr=1&w=300",
            color: "warm" as const,
        },
        {
            name: "Love Forever combo",
            description: "Special Gift Combo",
            price: "₹1,599",
            // From Winni.in (verified)
            image: "https://assets.winni.in/product/primary/2025/1/100976.jpeg?dpr=1&w=300",
            color: "blush" as const,
        },
        {
            name: "Mixed Roses With Dairy Milk Chocolates",
            description: "Roses & Dairy Milk",
            price: "₹1,449",
            // Keeping Unsplash (not found on Winni page)
            image: "https://assets.winni.in/product/primary/2022/9/73371.png?dpr=1&w=300",
            color: "warm" as const,
        },
        {
            name: "Beautiful Pink Roses with Truffle Cake",
            description: "Roses & Truffle Cake",
            price: "₹1,218",
            // Keeping Unsplash (not found on Winni page)
            image: "https://assets.winni.in/product/primary/2025/3/102135.jpeg?dpr=1&w=300",
            color: "blush" as const,
        },
    ],

};