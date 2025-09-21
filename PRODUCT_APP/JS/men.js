const products = [
    {
        name: "Shaving Kit",
        image: "https://plus.unsplash.com/premium_photo-1661380558859-40df8dd91dfd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2hhdmluZyUyMGtpdHxlbnwwfHwwfHx8MA%3D%3D",
        description: "A complete kit for a smooth and comfortable shave.",
        price: "₹799"
    },
    {
        name: "Formal Shoes",
        image: "https://media.istockphoto.com/id/185011763/photo/shoes.webp?a=1&b=1&s=612x612&w=0&k=20&c=iseVXyDsnnSkSrP32NFh8DXEPMaTx9kBlJXEM0QXCdM=",
        description: "Elegant leather shoes for formal occasions.",
        price: "₹2,499"
    },
    {
        name: "Leather Wallet",
        image: "https://media.istockphoto.com/id/180756294/photo/wallet.webp?a=1&b=1&s=612x612&w=0&k=20&c=TLaEknZrTHzhQpX1stxfNIn6EpMpdOkkXX6JfxOpuXI=",
        description: "Premium leather wallet with multiple compartments.",
        price: "₹999"
    },
    {
        name: "Sports Watch",
        image: "https://images.unsplash.com/photo-1669480380743-f76990b9bc44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0cyUyMHdhdGNofGVufDB8fDB8fHww",
        description: "Water-resistant sports watch with stopwatch.",
        price: "₹1,499"
    },
    {
        name: "Sunglasses",
        image: "https://media.istockphoto.com/id/1081398784/photo/sunglass-on-white-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=3RzzimuSJ_7YFzdMbIzgmsu7VZ_Qmmk1XFSNcNvk7PQ=",
        description: "Stylish sunglasses with UV protection.",
        price: "₹599"
    },
    {
        name: "soap",
        image: "https://images.unsplash.com/photo-1584305574647-0cc949a2bb9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNvYXB8ZW58MHx8MHx8fDA%3D",
        description: "feel fresh and clean with our premium soap.",
        price: "₹199"
    },
    {
        name: "White Polo T-Shirt",
        image: "https://media.istockphoto.com/id/1207547332/photo/hanging-plan-white-polo-t-shirt-on-wall-with-male-model.webp?a=1&b=1&s=612x612&w=0&k=20&c=sdNg1awM5BW4oV_yIfX7L4b3ZFWEdHlOvsGW1hszIPA=",
        description: "Classic white polo t-shirt for a casual look.",
        price: "₹799"
    },
    {
        name: "Casual Sneakers",
        image: "https://images.unsplash.com/photo-1608666634759-4376010f863d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWVucyUyMHNuZWFrZXJzfGVufDB8fDB8fHww",
        description: "Comfortable sneakers for everyday wear.",
        price: "₹15,299"
    },
    {
        name: "jeans",
        image: "https://images.unsplash.com/photo-1714143136372-ddaf8b606da7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWVucyUyMGplYW5zfGVufDB8fDB8fHww",
        description: "stylish and comfortable jeans for everyday wear.",
        price: "₹1,299"
    },
    {
        name: "sports products",
        image: "https://plus.unsplash.com/premium_photo-1682435576307-a71fec9529be?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnRzJTIwbWVucyUyMHByb2R1Y3RzfGVufDB8fDB8fHww",
        description: "High-quality sports products for active lifestyle.",
        price: "₹5,000"
    },
    {
        name: "mens accessories",
        image: "https://media.istockphoto.com/id/961512188/photo/different-mens-accessories-such-as-cufflinks-watches-rings-belt-tie-and-phone-are-on-the-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=chjvYwurcW75Ujjq-uPY6E1rLCgm4StXWS7LZ3zMM88=",
        description: "Explore our range of men's accessories to enhance your style.",
        price: "₹9,999"
    }
];

const productList = document.getElementById('product-list');

products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="product-img">
        <div class="product-title">${product.name}</div>
        <div class="product-desc">${product.description}</div>
        <div class="product-price">${product.price}</div>
        <button class="buy-btn" onclick="alert('Thank you for buying ${product.name}!')">Buy Now</button>
    `;
    productList.appendChild(card);
});