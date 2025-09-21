const products = [
    {
        id: 1,
        name: "Floral Dress",
        price: 49.99,
        image: "https://via.placeholder.com/200x150?text=Floral+Dress"
    },
    {
        id: 2,
        name: "Handbag",
        price: 29.99,
        image: "https://via.placeholder.com/200x150?text=Handbag"
    },
    {
        id: 3,
        name: "Heels",
        price: 39.99,
        image: "https://via.placeholder.com/200x150?text=Heels"
    }
];

let cartCount = 0;

function renderProducts() {
    const productsSection = document.getElementById('products');
    productsSection.innerHTML = '';
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        productsSection.appendChild(div);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
}

window.onload = renderProducts;