// Product Data
const products = [
    {
        id: 1,
        name: "Fresh Apples",
        category: "Fruits & Vegetables",
        price: 2.99,
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop",
        description: "Crisp and sweet red apples, perfect for snacking"
    },
    {
        id: 2,
        name: "Organic Bananas",
        category: "Fruits & Vegetables",
        price: 1.49,
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop",
        description: "Fresh organic bananas, rich in potassium"
    },
    {
        id: 3,
        name: "Whole Milk",
        category: "Dairy Products",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&h=300&fit=crop",
        description: "Fresh whole milk, 1 gallon"
    },
    {
        id: 4,
        name: "Fresh Eggs",
        category: "Dairy Products",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400&h=300&fit=crop",
        description: "Farm-fresh eggs, 12 count"
    },
    {
        id: 5,
        name: "Sourdough Bread",
        category: "Bakery Items",
        price: 4.49,
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=400&h=300&fit=crop",
        description: "Artisan sourdough bread, freshly baked"
    },
    {
        id: 6,
        name: "Chocolate Chip Cookies",
        category: "Bakery Items",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&h=300&fit=crop",
        description: "Homemade chocolate chip cookies, 12 pack"
    },
    {
        id: 7,
        name: "Orange Juice",
        category: "Beverages",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=400&h=300&fit=crop",
        description: "100% pure orange juice, 64 fl oz"
    },
    {
        id: 8,
        name: "Bottled Water",
        category: "Beverages",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1548839140-5a516c31d1ce?w=400&h=300&fit=crop",
        description: "Purified bottled water, 24 pack"
    },
    {
        id: 9,
        name: "Potato Chips",
        category: "Snacks",
        price: 3.49,
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
        description: "Classic potato chips, family size"
    },
    {
        id: 10,
        name: "Granola Bars",
        category: "Snacks",
        price: 5.49,
        image: "https://images.unsplash.com/photo-1606312619070-d48b4b2bdc48?w=400&h=300&fit=crop",
        description: "Healthy granola bars, 12 pack variety"
    },
    {
        id: 11,
        name: "Paper Towels",
        category: "Household Items",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=400&h=300&fit=crop",
        description: "Absorbent paper towels, 8 pack"
    },
    {
        id: 12,
        name: "Laundry Detergent",
        category: "Household Items",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?w=400&h=300&fit=crop",
        description: "Concentrated laundry detergent, 100 oz"
    },
    {
        id: 13,
        name: "Fresh Tomatoes",
        category: "Fruits & Vegetables",
        price: 2.49,
        image: "https://images.unsplash.com/photo-1546095668-e993739c933d?w=400&h=300&fit=crop",
        description: "Vine-ripened tomatoes, 1 lb"
    },
    {
        id: 14,
        name: "Greek Yogurt",
        category: "Dairy Products",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop",
        description: "Creamy Greek yogurt, 32 oz"
    },
    {
        id: 15,
        name: "Coffee Beans",
        category: "Beverages",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop",
        description: "Premium arabica coffee beans, 1 lb"
    }
];

// Shopping Cart
let cart = [];

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartToggle = document.getElementById('cartToggle');
const closeCart = document.getElementById('closeCart');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');
const checkoutBtn = document.getElementById('checkoutBtn');
const overlay = document.getElementById('overlay');
const invoiceModal = document.getElementById('invoiceModal');
const invoiceBody = document.getElementById('invoiceBody');
const closeInvoice = document.getElementById('closeInvoice');
const printInvoice = document.getElementById('printInvoice');
const downloadPDF = document.getElementById('downloadPDF');

// Initialize
function init() {
    displayProducts();
    loadCartFromStorage();
    updateCartUI();
    setupEventListeners();
}

// Display Products
function displayProducts() {
    productsGrid.innerHTML = '';
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image" onerror="this.src='https://via.placeholder.com/400x300?text=${encodeURIComponent(product.name)}'">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCartToStorage();
    updateCartUI();
    showCartSidebar();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCartToStorage();
    updateCartUI();
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCartToStorage();
        updateCartUI();
    }
}

function calculateTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

function updateCartUI() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items display
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Your cart is empty</p>';
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image" onerror="this.src='https://via.placeholder.com/80x80?text=${encodeURIComponent(item.name)}'">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)} each</div>
                    <div class="cart-item-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-display">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item-btn" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            </div>
        `).join('');
        checkoutBtn.disabled = false;
    }
    
    // Update total
    cartTotal.textContent = calculateTotal().toFixed(2);
}

// Cart Sidebar Functions
function showCartSidebar() {
    cartSidebar.classList.add('active');
    overlay.classList.add('active');
}

function hideCartSidebar() {
    cartSidebar.classList.remove('active');
    overlay.classList.remove('active');
}

// Invoice Functions
function generateInvoice() {
    if (cart.length === 0) return;
    
    const invoiceNumber = 'INV-' + Date.now();
    const invoiceDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const invoiceTime = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    });
    
    const subtotal = calculateTotal();
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;
    
    invoiceBody.innerHTML = `
        <div class="invoice-info">
            <div class="invoice-store">
                <h3>🛒 Grocery Store</h3>
                <p>123 Main Street</p>
                <p>City, State 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@grocerystore.com</p>
            </div>
            <div class="invoice-details">
                <h3>Invoice Details</h3>
                <p><strong>Invoice #:</strong> ${invoiceNumber}</p>
                <p><strong>Date:</strong> ${invoiceDate}</p>
                <p><strong>Time:</strong> ${invoiceTime}</p>
            </div>
        </div>
        
        <table class="invoice-table">
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                ${cart.map(item => `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.quantity}</td>
                        <td>$${item.price.toFixed(2)}</td>
                        <td>$${(item.price * item.quantity).toFixed(2)}</td>
                    </tr>
                `).join('')}
            </tbody>
        </table>
        
        <div class="invoice-totals">
            <div class="total-row">
                <span style="margin-right: 2rem;">Subtotal:</span>
                <span>$${subtotal.toFixed(2)}</span>
            </div>
            <div class="total-row">
                <span style="margin-right: 2rem;">Tax (8%):</span>
                <span>$${tax.toFixed(2)}</span>
            </div>
            <div class="total-row final">
                <span style="margin-right: 2rem;">Total:</span>
                <span>$${total.toFixed(2)}</span>
            </div>
        </div>
        
        <div style="margin-top: 2rem; padding-top: 2rem; border-top: 2px solid #f0f0f0; text-align: center; color: #666;">
            <p>Thank you for your purchase!</p>
            <p>Please visit us again soon.</p>
        </div>
    `;
    
    invoiceModal.classList.add('active');
    hideCartSidebar();
}

function printInvoice() {
    window.print();
}

function downloadInvoicePDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    // Store name and header
    doc.setFontSize(20);
    doc.text('Grocery Store', 105, 20, { align: 'center' });
    
    doc.setFontSize(12);
    doc.text('123 Main Street, City, State 12345', 105, 30, { align: 'center' });
    doc.text('Phone: (555) 123-4567 | Email: info@grocerystore.com', 105, 36, { align: 'center' });
    
    // Invoice details
    const invoiceNumber = 'INV-' + Date.now();
    const invoiceDate = new Date().toLocaleDateString('en-US');
    
    doc.setFontSize(14);
    doc.text('INVOICE', 105, 50, { align: 'center' });
    
    doc.setFontSize(10);
    doc.text(`Invoice #: ${invoiceNumber}`, 20, 60);
    doc.text(`Date: ${invoiceDate}`, 20, 66);
    
    // Table header
    let yPos = 80;
    doc.setFontSize(10);
    doc.setFont(undefined, 'bold');
    doc.text('Item', 20, yPos);
    doc.text('Qty', 80, yPos);
    doc.text('Unit Price', 110, yPos);
    doc.text('Total', 160, yPos);
    
    // Table rows
    yPos += 10;
    doc.setFont(undefined, 'normal');
    cart.forEach(item => {
        if (yPos > 250) {
            doc.addPage();
            yPos = 20;
        }
        doc.text(item.name.substring(0, 30), 20, yPos);
        doc.text(item.quantity.toString(), 80, yPos);
        doc.text('$' + item.price.toFixed(2), 110, yPos);
        doc.text('$' + (item.price * item.quantity).toFixed(2), 160, yPos);
        yPos += 8;
    });
    
    // Totals
    const subtotal = calculateTotal();
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    
    yPos += 10;
    doc.text('Subtotal:', 120, yPos);
    doc.text('$' + subtotal.toFixed(2), 160, yPos);
    yPos += 8;
    doc.text('Tax (8%):', 120, yPos);
    doc.text('$' + tax.toFixed(2), 160, yPos);
    yPos += 8;
    doc.setFont(undefined, 'bold');
    doc.text('Total:', 120, yPos);
    doc.text('$' + total.toFixed(2), 160, yPos);
    
    // Footer
    yPos += 15;
    doc.setFont(undefined, 'normal');
    doc.setFontSize(9);
    doc.text('Thank you for your purchase!', 105, yPos, { align: 'center' });
    
    // Save PDF
    doc.save(`invoice-${invoiceNumber}.pdf`);
}

// Local Storage Functions
function saveCartToStorage() {
    localStorage.setItem('groceryCart', JSON.stringify(cart));
}

function loadCartFromStorage() {
    const savedCart = localStorage.getItem('groceryCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
    }
}

// Event Listeners
function setupEventListeners() {
    cartToggle.addEventListener('click', showCartSidebar);
    closeCart.addEventListener('click', hideCartSidebar);
    overlay.addEventListener('click', hideCartSidebar);
    checkoutBtn.addEventListener('click', generateInvoice);
    closeInvoice.addEventListener('click', () => {
        invoiceModal.classList.remove('active');
    });
    printInvoice.addEventListener('click', printInvoice);
    downloadPDF.addEventListener('click', downloadInvoicePDF);
    
    // Close invoice when clicking outside
    invoiceModal.addEventListener('click', (e) => {
        if (e.target === invoiceModal) {
            invoiceModal.classList.remove('active');
        }
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', init);

