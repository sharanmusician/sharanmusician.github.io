import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, onSnapshot, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your verified Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnUgYIKWUrF19cZrD50y39MxKTOrEaT1U",
  authDomain: "mall-of-royal-red-bull.firebaseapp.com",
  projectId: "mall-of-royal-red-bull",
  storageBucket: "mall-of-royal-red-bull.firebasestorage.app",
  messagingSenderId: "371387584316",
  appId: "1:371387584316:web:d693c83d4628e3f5dd5839",
  measurementId: "G-7VMLSFPY5Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * Fetches products from a specific collection and updates the UI
 * @param {string} collectionName - 'products' or 'food'
 * @param {string} elementId - The ID of the HTML grid to fill
 */
export function loadCollection(collectionName, elementId) {
    const grid = document.getElementById(elementId);
    const q = query(collection(db, collectionName), orderBy("createdAt", "desc"));

    onSnapshot(q, (snapshot) => {
        grid.innerHTML = ''; 
        if (snapshot.empty) {
            grid.innerHTML = `<p>No items found in ${collectionName}.</p>`;
            return;
        }

        snapshot.forEach((doc) => {
            const item = doc.data();
            const card = document.createElement('div');
            card.className = 'card'; // Assumes you have a .card CSS class
            card.innerHTML = `
                <img src="${item.image || 'https://via.placeholder.com/250'}" alt="${item.name}">
                <h3>${item.name}</h3>
                <p>${item.description || ''}</p>
                <div class="price">${item.price}</div>
                <button onclick="alert('Added ${item.name} to cart!')">Add to Cart</button>
            `;
            grid.appendChild(card);
        });
    }, (error) => {
        console.error(`Error loading ${collectionName}:`, error);
    });
}
