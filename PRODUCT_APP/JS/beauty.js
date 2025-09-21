const products = [
    {
        name: "Face wash",
        image: "https://images.unsplash.com/photo-1653919198052-546d44e2458e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFjZSUyMHdhc2h8ZW58MHx8MHx8fDA%3D",
        description: "A gentle face wash for daily use.",
        price: "₹ 1,999"
    },
    {
        name: "Moisturizer",
        image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vaXN0dXJpemVyfGVufDB8fDB8fHww",
        description: "Hydrating moisturizer for all skin types.",
        price: "₹ 1,499"
    },
    {
        name: "Sunscreen",
        image: "https://images.unsplash.com/photo-1640269971566-9abaebc2b35d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHN1biUyMHNjcmVlbiUyMGNyZWFtJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        description: "Broad-spectrum sunscreen for daily protection.",
        price: "₹ 1,299"
    },
    {
        name: "Vitamin C Serum",
        image: "https://images.unsplash.com/photo-1723951174326-2a97221d3b7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dml0YW1pbiUyMGMlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Brightening serum for a radiant complexion.",
        price: "₹ 1,799"
    },
    {
        name: "Night Cream",
        image: "https://media.istockphoto.com/id/651873946/photo/cosmetic-bottle-container-with-green-herbal-leaves-blank-label-for-branding-mock-up.webp?a=1&b=1&s=612x612&w=0&k=20&c=9fvck7mNLawLYrKzWS46yfjme-vva9f5tOqez_BCTIo=",
        description: "Nourishing night cream for all skin types.",
        price: "₹ 2,199"
    },
    {
        name: "Lip Balm",
        image: "https://media.istockphoto.com/id/1133378206/photo/lip-balms-isolated-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=awyVOCH3xgfTToulVQzexTrAIKTq-hr7pyNeLv810ZU=",
        description: "Hydrating lip balm for soft lips.",
        price: "₹ 499"
    },
    {
        name: "Face Mask",
        image: "https://images.unsplash.com/photo-1613892571289-39d5c649887a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZSUyMG1hc2slMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Revitalizing face mask for a glowing complexion.",
        price: "₹ 799"
    },
    {
        name: "Exfoliating Scrub",
        image: "https://images.unsplash.com/photo-1737372805905-be0b91ec86fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGV4Zm9saWF0aW5nJTIwc2NydWIlMjBwcm9kdWN0c3xlbnwwfHwwfHx8MA%3D%3D",
        description: "Gently exfoliating scrub for smooth skin.",
        price: "₹ 899"
    },
    {
        name: "Lip Scrub",
        image: "https://images.unsplash.com/photo-1631214499883-47ef353c0372?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxpcCUyMHNjcnViJTIwcHJvZHVjdHN8ZW58MHx8MHx8fDA%3D",
        description: "Exfoliating lip scrub for soft lips.",
        price: "₹ 599"
    },
    {
        name: "Nail Polish",
        image: "https://images.unsplash.com/photo-1733172072205-7fbe8e8c50f5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmFpbCUyMHBvbGlzaCUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
        description: "Long-lasting nail polish in various shades.",
        price: "₹ 999"
    }
];

function displayProducts() {
    const productsDiv = document.getElementById('products');
    productsDiv.innerHTML = '';
    products.forEach((product) => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p> <!-- Show description -->
            <p>${product.price}</p>
        `;
        productsDiv.appendChild(card);
    });
}

window.onload = () => {
    displayProducts();
};