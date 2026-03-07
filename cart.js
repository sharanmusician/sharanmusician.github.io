<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>Your Selection | Royal Red Bull Cart</title>
    <style>
        :root {
            --bg-dark: #0a0a0c;        
            --card-bg: #111114;       
            --neon-green: #00c853;    
            --royal-white: #ffffff;
            --text-gray: #a0a0a0;
            --danger-red: #ff3b3b;
        }

        * { box-sizing: border-box; -webkit-user-select: none; user-select: none; }

        body {
            margin: 0;
            font-family: 'Inter', -apple-system, sans-serif;
            background-color: var(--bg-dark);
            color: var(--royal-white);
            padding-bottom: 100px;
        }

        /* --- HEADER --- */
        header {
            background-color: var(--bg-dark);
            padding: 18px 15px;
            position: sticky; top: 0; z-index: 1000;
            border-bottom: 1px solid #1f1f23;
            display: flex; align-items: center; gap: 15px;
        }
        .back-link { color: var(--neon-green); text-decoration: none; font-size: 20px; font-weight: bold; }
        .page-title { font-size: 16px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }

        /* --- CART LIST --- */
        .cart-container { padding: 15px; max-width: 800px; margin: 0 auto; }
        
        .cart-item {
            background: var(--card-bg);
            border: 1px solid #1f1f23;
            border-radius: 12px;
            padding: 12px;
            display: flex;
            gap: 15px;
            margin-bottom: 12px;
            animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }

        .item-img { width: 90px; height: 90px; border-radius: 8px; object-fit: cover; }
        
        .item-details { flex: 1; display: flex; flex-direction: column; justify-content: space-between; }
        
        .item-header { display: flex; justify-content: space-between; align-items: flex-start; }
        .item-name { font-size: 14px; font-weight: 600; margin-bottom: 4px; color: var(--royal-white); }
        .item-price { font-size: 15px; font-weight: 800; color: var(--neon-green); }

        .item-actions { display: flex; gap: 8px; margin-top: 10px; }

        /* --- BUTTONS --- */
        .remove-btn {
            background: transparent; color: var(--danger-red);
            border: 1px solid rgba(255, 59, 59, 0.3);
            font-size: 10px; font-weight: 800; padding: 8px 12px;
            border-radius: 6px; text-transform: uppercase; cursor: pointer;
        }

        .ig-order-btn {
            flex: 1; background: var(--neon-green); color: #000;
            text-align: center; text-decoration: none;
            font-size: 10px; font-weight: 900; padding: 8px;
            border-radius: 6px; text-transform: uppercase;
        }

        /* --- EMPTY STATE --- */
        .empty-cart { text-align: center; padding: 60px 20px; display: none; }
        .empty-cart svg { margin-bottom: 20px; opacity: 0.2; }
        .empty-cart p { color: var(--text-gray); margin-bottom: 25px; }
        .shop-now { 
            display: inline-block; background: var(--neon-green); color: #000;
            padding: 12px 30px; border-radius: 8px; font-weight: 800; text-decoration: none;
        }

        /* --- SUMMARY BAR --- */
        .summary-bar {
            position: fixed; bottom: 0; width: 100%;
            background: #0f0f12; border-top: 1px solid #1f1f23;
            padding: 20px; display: flex; justify-content: space-between; align-items: center;
        }
        .total-label { font-size: 12px; color: var(--text-gray); text-transform: uppercase; }
        .total-amount { font-size: 20px; font-weight: 900; color: var(--royal-white); }
    </style>
</head>
<body>

<header>
    <a href="javascript:history.back()" class="back-link">✕</a>
    <div class="page-title">Shopping Cart</div>
</header>

<div class="cart-container" id="cartList">
    </div>

<div class="empty-cart" id="emptyCart">
    <svg viewBox="0 0 24 24" width="80" height="80" fill="currentColor" color="#333"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
    <h2 style="margin-bottom: 10px;">Your cart is empty</h2>
    <p>Looks like you haven't added anything yet.</p>
    <a href="merchandise.html" class="shop-now">START SHOPPING</a>
</div>

<div class="summary-bar" id="summaryBar">
    <div>
        <div class="total-label">Subtotal</div>
        <div class="total-amount" id="cartTotal">₹0.00</div>
    </div>
    <a href="https://instagram.com/myfoodproductsputhukkadai" class="shop-now" style="padding: 12px 20px;">CHECKOUT ALL</a>
</div>

<script src="cart.js"></script>
<script>
    const listElement = document.getElementById('cartList');
    const emptyElement = document.getElementById('emptyCart');
    const summaryElement = document.getElementById('summaryBar');
    const totalElement = document.getElementById('cartTotal');

    function renderCartPage() {
        // Clear current list
        listElement.innerHTML = '';
        
        if (cart.length === 0) {
            emptyElement.style.display = 'block';
            summaryElement.style.display = 'none';
            return;
        }

        emptyElement.style.display = 'none';
        summaryElement.style.display = 'flex';

        let totalValue = 0;

        cart.forEach(item => {
            // Clean price string (removes ₹, etc) to calculate total if needed
            // For now, we display the price string directly from products.js
            
            const itemHTML = `
                <div class="cart-item">
                    <img src="${item.image}" class="item-img" alt="${item.title}">
                    <div class="item-details">
                        <div class="item-header">
                            <div>
                                <div class="item-name">${item.title}</div>
                                <div class="item-price">${item.price} (x${item.quantity})</div>
                            </div>
                        </div>
                        <div class="item-actions">
                            <button class="remove-btn" onclick="removeFromCart('${item.id}')">Remove</button>
                            <a href="https://instagram.com/myfoodproductsputhukkadai" class="ig-order-btn">Order via Instagram</a>
                        </div>
                    </div>
                </div>
            `;
            listElement.innerHTML += itemHTML;
        });

        // Update subtotal display (Uses item.price from products.js)
        // Note: For real calculations, products.js prices should be numbers
        updateTotal();
    }

    function removeFromCart(id) {
        // Filter out the item
        cart = cart.filter(item => item.id !== id);
        saveCart();
        renderCartPage();
    }

    function updateTotal() {
        // Logic to sum up prices can be added here if you use numeric prices in products.js
        // For now, we show a dynamic item count
        const count = getCartCount();
        totalElement.innerText = `${count} Items Selected`;
    }

    // Initial Render
    renderCartPage();
</script>

</body>
</html>
