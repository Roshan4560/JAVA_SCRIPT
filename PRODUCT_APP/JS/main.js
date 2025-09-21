const products = [
    { id: 1, name: "Men's Slim Fit T-Shirt", price: 499 },
    { id: 2, name: "Women's Printed Dress", price: 899 },
    { id: 3, name: "Kids' Casual Shoes", price: 799 },
    { id: 4, name: "Home Decor Cushion", price: 399 }
];

let cart = [];

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    if (cartCount) {
        cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    }
}

function updateProductCards() {
    document.querySelectorAll('.product-card').forEach(card => {
        const id = parseInt(card.getAttribute('data-id'));
        const cartItem = cart.find(item => item.id === id);
        const decreaseBtn = card.querySelector('.decrease-qty');
        const increaseBtn = card.querySelector('.increase-qty');
        const qtySpan = card.querySelector('.product-qty');
        const addBtn = card.querySelector('.add-to-bag');

        if (cartItem && cartItem.qty > 0) {
            decreaseBtn.style.display = '';
            increaseBtn.style.display = '';
            qtySpan.style.display = '';
            addBtn.style.display = 'none';
            qtySpan.textContent = cartItem.qty;
        } else {
            decreaseBtn.style.display = 'none';
            increaseBtn.style.display = 'none';
            qtySpan.style.display = 'none';
            addBtn.style.display = '';
            qtySpan.textContent = 1;
        }
    });
}

function attachProductCardEvents() {
    document.querySelectorAll('.product-card').forEach(card => {
        const id = parseInt(card.getAttribute('data-id'));
        const addBtn = card.querySelector('.add-to-bag');
        const decreaseBtn = card.querySelector('.decrease-qty');
        const increaseBtn = card.querySelector('.increase-qty');
        const qtySpan = card.querySelector('.product-qty');
        const title = card.querySelector('.product-title').textContent;
        const price = parseInt(card.querySelector('.current-price').textContent.replace(/[^\d]/g, ''));

        addBtn.onclick = function () {
            let cartItem = cart.find(item => item.id === id);
            if (cartItem) {
                cartItem.qty += 1;
            } else {
                cart.push({ id, name: title, price, qty: 1 });
            }
            updateProductCards();
            updateCartCount();
        };

        increaseBtn.onclick = function () {
            let cartItem = cart.find(item => item.id === id);
            if (cartItem) {
                cartItem.qty += 1;
                updateProductCards();
                updateCartCount();
            }
        };

        decreaseBtn.onclick = function () {
            let cartItem = cart.find(item => item.id === id);
            if (cartItem) {
                cartItem.qty -= 1;
                if (cartItem.qty <= 0) {
                    cart = cart.filter(item => item.id !== id);
                }
                updateProductCards();
                updateCartCount();
            }
        };
    });
}

document.addEventListener('DOMContentLoaded', function () {
    updateProductCards();
    attachProductCardEvents();
    updateCartCount();
});

let slideIndex = 0;
const slides = document.querySelectorAll('.hero-banner .slide');

function showSlides() {
    slides.forEach((img, idx) => {
        img.style.display = (idx === slideIndex) ? 'block' : 'none';
    });
    slideIndex = (slideIndex + 1) % slides.length;
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

if (slides.length > 0) {
    showSlides();
}