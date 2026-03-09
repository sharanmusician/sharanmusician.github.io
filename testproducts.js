/**
 * Mall of Royal Red Bull
 * Firebase Data Controller v1.0
 */

// 1. Firebase Configuration (Matches your registered app)
const firebaseConfig = {
    apiKey: "AIzaSyAnUgYIKMUzf19cZrD60yD9MeKTOreAt1U",
    authDomain: "mall-of-royal-red-bull.firebaseapp.com",
    databaseURL: "https://mall-of-royal-red-bull-default-rtdb.firebaseio.com",
    projectId: "mall-of-royal-red-bull",
    storageBucket: "mall-of-royal-red-bull.firebasestorage.app",
    messagingSenderId: "371387584316",
    appId: "1:371387584316:web:d693c83d4628e3f5dd5839"
};

// 2. Initialize Firebase if not already initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.database();

/**
 * GLOBAL DATA FETCHER
 * This function wraps the Firebase listener so you can 
 * use it across all your pages.
 */
function initializeFirebaseInventory(callback) {
    const productsRef = db.ref('inventory');
    
    productsRef.on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
            // Convert Firebase's object format back to your array format
            window.merchandise = Object.values(data);
            console.log("📦 Cloud Inventory Synced:", window.merchandise.length, "items");
            
            if (callback) callback(window.merchandise);
        } else {
            console.error("⚠️ No data found in Firebase 'inventory' node.");
            window.merchandise = [];
        }
    });
}

/**
 * UTILITY: Get Product By ID
 * Used specifically for food.html detail views
 */
function getProductById(id) {
    if (!window.merchandise) return null;
    return window.merchandise.find(item => item.id === id);
}
