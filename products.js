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
        description: "Avalose is a natural, healthy and traditional food of our ancestors. Prepared from unpolished red rice by adding coconut, organic jaggery, and spices like cardamom, fenugreek, dry ginger etc. A READY TO EAT NUTRITIOUS FOOD FOR CHILDREN, GIRLS, TRAVELLERS & ATHLETES",
        image: "avalose-sweet.jpg", // Direct filename
        inStock: true
    },
    {
        id: "RRB-002",
        title: "Avalose - Milk 250g",
        category: "Organic Food",
        price: "₹100.00",
        description: "Avalose is a natural, healthy and traditional food of our ancestors. Prepared from unpolished red rice by adding coconut, organic jaggery, and spices like cardamom, fenugreek, dry ginger, Condensed Milk etc. A READY TO EAT NUTRITIOUS FOOD FOR CHILDREN, GIRLS, TRAVELLERS & ATHLETES",
        image: "avalose-milk.jpg",
        inStock: true
    },
    {
        id: "RRB-003",
        title: "Raagi Millet Puttu Flour 500g",
        category: "Organic Food",
        price: "₹50.00",
        description: "Puttu is a common traditional breakfast of South India, made up of rice flour and grated coconut with the help of a special vessel called puttu kudam. Puttu-Kudam consists of two parts. The base part is for heating water, the top is a cylindrical tube and one is for steaming puttu. Traditionally puttu was made in bamboo logs which gave a lovely aroma. Puttu can be easily made in an idli cooker also. Ragi puttu is much healthier and staple breakfast for any diabetics. MYF Ragi puttu flour is produced from an organic Ragi millet. The B complex vitamins - thiamine, riboflavin, niacin and folic acid as well as calcium, magnesium, iron and phosphorus are also found in ample amounts in ragi flour, truly justifying its status as a wholesome breakfast cereal and a super food.",
        image: "ragi-flour.jpg",
        inStock: true
    },
    {
        id: "RRB-004",
        title: "Kattuyanam Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹75.00",
        description: "Puttu is a common traditional breakfast of South India, made up of rice flour and grated coconut with the help of a special vessel called puttu kudam. Puttu-Kudam consists of two parts. The base part is for heating water, the top is a cylindrical tube and one is for steaming puttu. Traditionally puttu was made in bamboo logs which gave a lovely aroma. Puttu can be easily made in an idly cooker also. Kattuyanam puttu is much healthier and staple breakfast for any diabetics. MYF Kattuyanam puttu flour is produced from an organic unpolished Kattuyanam red rice.",
        image: "kattuyanam-puttu.jpg",
        inStock: true
    },
    {
        id: "RRB-005",
        title: "Samba Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹55.00",
        description: "Puttu is a common traditional breakfast of South India, made up of rice flour and grated coconut with the help of a special vessel called puttu kudam. Puttu-Kudam consists of two parts. The base part is for heating water, the top is a cylindrical tube and one is for steaming puttu. Traditionally puttu was made in bamboo logs which gave a lovely aroma. Puttu can be easily made in an idly cooker also. Samba puttu is much healthier and staple breakfast for any diabetics. MYF Samba puttu flour is produced from an organic unpolished Samba red rice.",
        image: "samba-puttu.jpg",
        inStock: true
    },
    {
        id: "RRB-006",
        title: "Kattuyanam Rice Idiyappam Flour 500g",
        category: "Organic Food",
        price: "₹75.00",
        description: "Idiyappam / nool appam / sevai / ottu shavige or string hoppers are a staple breakfast dish in Kerala and Tamilnadu. It is also found in Sri Lanka, Malaysia and Singapore. Made with rice flour and grated sweetened coconut eaten with coconut milk sweetened with jaggery or a spicy egg curry. Kattuyanam rice idiappam is a nutritious and tasty dish that is excellent for our health. Kattuyanam rice idiyappam is much healthier and staple breakfast for any diabetics also. MYF Kattuyanam idiyappam flour is produced from an organic unpolished Kattuyanam rice.",
        image: "kattuyanam-idi.jpg",
        inStock: true
    },
    {
        id: "RRB-007",
        title: "Black Kavuni Rice Puttu Flour 500g",
        category: "Organic Food",
        price: "₹100.00",
        description: "Puttu is a common traditional breakfast of South India, made up of rice flour and grated coconut with the help of a special vessel called puttu kudam. Puttu-Kudam consists of two parts. The base part is for heating water, the top is a cylindrical tube and one is for steaming puttu. Traditionally puttu was made in bamboo logs which gave a lovely aroma. Puttu can be easily made in an idly cooker also. Black Kavuni puttu is much healthier and staple breakfast for any diabetics. MYF Black Kavuni puttu flour is produced from an organic unpolished Black Kavuni rice. It is a good source of energy for adults. In addition, there are no common side effects of black rice, it can be used in daily diet.",
        image: "black-kavuni.jpg",
        inStock: true
    },
    {
        id: "RRB-008",
        title: "Founder's Edition Vinyl Mat",
        category: "Clothing",
        price: "₹3,200",
        description: "Anti-static felt slipmat.",
        image: "vinyl-mat.jpg",
        inStock: false
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = merchandise;
} else {
    window.merchandise = merchandise;
}
