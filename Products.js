/**
 * Mall of Royal Red Bull
 * Global Inventory Database v2.0
 * Categories: Organic Food, Clothing, Accessories, Shoes
 */

const merchandise = [

    // --- ORGANIC FOOD ---
    {
        id: "RRB-001",
        title: "Avalose-Sweet 400g",
        category: "Organic Food",
        price: "₹100.00",
        description: "Avalose is a natural, healthy and traditional food of our ancestors. Prepared from unpolished red rice by adding coconut, organic jaggery, and spices like cardamom, fenugreek, dry ginger etc.",
        image: "https://drive.google.com/file/d/14uvsMG2sqZnCphBShM-BSHONvLfLE1Je/view?usp=drivesdk",
        inStock: true
    },
    {
        id: "RRB-002",
        title: "Avalose - Milk 250g",
        category: "Organic Food",
        price: "₹100.00",
        description: "Avalose is a natural, healthy and traditional food of our ancestors. Prepared from unpolished red rice by adding coconut, organic jaggery, and spices like cardamom, fenugreek, dry ginger, Condensed Milk etc.",
        image: "https://drive.google.com/file/d/108r_Kt3aJqqhrd5sxrIyZK69xm_7zVMx/view?usp=drivesdk",
        inStock: true
    },
    {
        id: "RRB-003",
        title: "Raagi Millet Puttu Flour 500g",
        category: "Organic Food",
        price: "₹50.00",
        description: "Ragi puttu is much healthier and staple breakfast for any diabetics. MYF Ragi puttu flour is produced from an organic Ragi millet.",
        image: "https://drive.google.com/file/d/1xgwALHLivsrrn-a6zqYNu2-HM_78xp_R/view?usp=drivesdk",
        inStock: false
    },
    {
        id: "RRB-004",
        title: "Kattuyanam Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹75.00",
        description: "Kattuyanam puttu is much healthier and staple breakfast for any diabetics. MYF Kattuyanam puttu flour is produced from an organic unpolished Kattuyanam red rice.",
        image: "https://drive.google.com/file/d/1Xu3tDjaaM56F0AyFsULFnR0xxFUhgfAR/view?usp=drivesdk",
        inStock: true
    },
    {
        id: "RRB-005",
        title: "Samba Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹55.00",
        description: "Samba puttu is much healthier and staple breakfast for any diabetics. MYF Samba puttu flour is produced from an organic unpolished Samba red rice.",
        image: "https://drive.google.com/file/d/1KHuIxPNTj4h4AbMb1zLa4v0akoJHQfyJ/view?usp=drivesdk",
        inStock: true
    },
    {
        id: "RRB-006",
        title: "Kattuyanam Rice Idiyappam Flour 500g",
        category: "Organic Food",
        price: "₹75.00",
        description: "Kattuyanam rice idiappam is a nutritious and tasty dish that is excellent for our health. Produced from organic unpolished Kattuyanam rice.",
        image: "https://drive.google.com/file/d/15KWp938Do6zFFTPD_Sv4Xexiy5AwnQ8Z/view?usp=drivesdk",
        inStock: true
    },
    {
        id: "RRB-007",
        title: "Black Kavuni Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹100.00",
        description: "Black Kavuni puttu is much healthier and staple breakfast for any diabetics. Produced from an organic unpolished Black Kavuni rice.",
        image: "https://drive.google.com/file/d/1Ut_QMbgsXAAa6WOOQ2sA-K92GbqQkltT/view?usp=drivesdk",
        inStock: false
    },

    // --- CLOTHING ---
    {
        id: "RRB-008",
        title: "Founder's Edition Vinyl Mat",
        category: "Clothing",
        price: "₹3,200",
        description: "Anti-static felt slipmat with a gold-leaf Royal Red Bull seal.",
        image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?q=80&w=1000",
        inStock: true
    }
];

// Exporting logic
if (typeof module !== 'undefined' && module.exports) {
    module.exports = merchandise;
} else {
    window.merchandise = merchandise;
}
