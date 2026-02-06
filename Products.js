/**
 * Mall of Royal Red Bull
 * Global Inventory Database v2.0
 */

const merchandise = [
    {
        id: "RRB-001",
        title: "Avalose-Sweet 400g",
        category: "Organic Food",
        price: "₹100.00",
        description: "Prepared from unpolished red rice with coconut and spices.",
        image: "avalose-sweet.jpg", // Direct filename
        inStock: true
    },
    {
        id: "RRB-002",
        title: "Avalose - Milk 250g",
        category: "Organic Food",
        price: "₹100.00",
        description: "Prepared from unpolished red rice with Condensed Milk.",
        image: "avalose-milk.jpg",
        inStock: true
    },
    {
        id: "RRB-003",
        title: "Raagi Millet Puttu Flour 500g",
        category: "Organic Food",
        price: "₹50.00",
        description: "Produced from organic Ragi millet.",
        image: "ragi-flour.jpg",
        inStock: false
    },
    {
        id: "RRB-004",
        title: "Kattuyanam Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹75.00",
        description: "Produced from organic unpolished Kattuyanam red rice.",
        image: "kattuyanam-puttu.jpg",
        inStock: true
    },
    {
        id: "RRB-005",
        title: "Samba Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹55.00",
        description: "Produced from organic unpolished Samba red rice.",
        image: "samba-puttu.jpg",
        inStock: true
    },
    {
        id: "RRB-006",
        title: "Kattuyanam Rice Idiyappam Flour 500g",
        category: "Organic Food",
        price: "₹75.00",
        description: "Produced from organic unpolished Kattuyanam rice.",
        image: "kattuyanam-idi.jpg",
        inStock: true
    },
    {
        id: "RRB-007",
        title: "Black Kavuni Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹100.00",
        description: "Produced from organic unpolished Black Kavuni rice.",
        image: "black-kavuni.jpg",
        inStock: false
    },
    {
        id: "RRB-008",
        title: "Founder's Edition Vinyl Mat",
        category: "Clothing",
        price: "₹3,200",
        description: "Anti-static felt slipmat.",
        image: "vinyl-mat.jpg",
        inStock: true
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = merchandise;
} else {
    window.merchandise = merchandise;
}
