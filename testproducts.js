/**
 * Mall of Royal Red Bull
 * Firebase Data Controller v1.0
 */

// 1. Firebase Configuration (From your registration)
const firebaseConfig = {
    apiKey: "AIzaSyAnUgYIKMUzf19cZrD60yD9MeKTOreAt1U",
    authDomain: "mall-of-royal-red-bull.firebaseapp.com",
    databaseURL: "https://mall-of-royal-red-bull-default-rtdb.firebaseio.com",
    projectId: "mall-of-royal-red-bull",
    storageBucket: "mall-of-royal-red-bull.firebasestorage.app",
    messagingSenderId: "371387584316",
    appId: "1:371387584316:web:d693c83d4628e3f5dd5839"
};

// 2. Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

/**
 * GLOBAL DATA FETCHER
 * Wraps the Firebase listener so you can use it across all pages.
 */
function initializeFirebaseInventory(callback) {
    const productsRef = db.ref('inventory');
    
    // Use .on() for real-time updates without page refresh
    productsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Convert Firebase object format to your standard array format
            window.merchandise = Object.values(data);
            console.log("📦 Cloud Inventory Synced:", window.merchandise.length, "items");
            
            if (callback) callback(window.merchandise);
        } else {
            console.warn("⚠️ No data found in Firebase 'inventory' node.");
            window.merchandise = [];
            if (callback) callback([]);
        }
    }, (error) => {
        console.error("❌ Firebase Error:", error);
    });
}

/**
 * UTILITY: Get Product By ID
 * Used for dynamic routing in food.html
 */
function getProductById(id) {
    if (!window.merchandise) return null;
    return window.merchandise.find(item => item.id === id);
}
