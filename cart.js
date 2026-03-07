/**
 * Royal Red Bull - Cart Logic Manager
 * This file acts as the "Memory" between index.html and cart.html.
 * It strictly saves only the Product IDs.
 */

// 1. Initialize the ID list from the browser's memory
let cartIds = JSON.parse(localStorage.getItem('cart_data')) || [];

/**
 * Adds a product ID to the list and saves it
 * @param {Object} product - The product object from products.js
 */
function addToCart(product) {
    // We only save the ID to ensure we always pull fresh data from products.js
    if (!cartIds.includes(product.id)) {
        cartIds.push(product.id);
        saveCart();
        console.log("ID Added to Memory:", product.id);
    } else {
        console.log("Item already in cart list.");
    }
}

/**
 * Saves the current list of IDs to LocalStorage
 */
function saveCart() {
    localStorage.setItem('cart_data', JSON.stringify(cartIds));
}

/**
 * Returns the count of unique items
 */
function getCartCount() {
    return cartIds.length;
}

/**
 * Removes a specific ID from the memory
 */
function removeFromCart(productId) {
    cartIds = cartIds.filter(id => id !== productId);
    saveCart();
}

/**
 * Wipes the memory clean
 */
function clearCart() {
    cartIds = [];
    localStorage.removeItem('cart_data');
}
