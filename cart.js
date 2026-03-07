// cart.js - Pure Logic
let cart = JSON.parse(localStorage.getItem('cart_data')) || [];

function addToCart(product) {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    saveCart();
}

function saveCart() {
    localStorage.setItem('cart_data', JSON.stringify(cart));
}

function getCartCount() {
    return cart.reduce((total, item) => total + (item.quantity || 1), 0);
}
