// Example array of jewelry products
let jewelryProducts = [
    { id: 1, name: "Sterling Silver Necklace with Amethyst Pendant", material: "Sterling Silver", price: 1500, category: "necklace", image: "C:/Users/SAMPATH/Downloads/il_1080xN.2447457754_ghau.webp" },
    { id: 2, name: "Gold-Plated Bracelet with Emerald", material: "Gold-Plated", price: 3200, category: "bracelet", image: "path_to_image.jpg" },
    { id: 3, name: "Rose Gold Earrings with Diamonds", material: "Rose Gold", price: 5000, category: "earrings", image: "path_to_image.jpg" },
    { id: 4, name: "Platinum Ring with Sapphire", material: "Platinum", price: 7500, category: "rings", image: "path_to_image.jpg" }
];

// Function to display cart items
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = ''; // Clear previous content
    let total = 0;

    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    cartItems.forEach((item, index) => {
        // Debugging: Log item to ensure it has the correct properties
        console.log('Cart Item:', item);

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div> 
                <h4>${item.name}</h4>
                <p>Price: Rs. ${item.price}</p> <!-- Fixed the property to 'item.price' -->
            </div>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price || 0; // Ensure total calculation works
    });

    cartTotalElement.innerText = total.toFixed(2);
}

// Function to add a product to the cart
function addToCart(productId) {
    const product = jewelryProducts.find(p => p.id === productId);
    
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
        cart.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cart));
        alert('Product added to cart!');
        displayCartItems(); // Update the cart display
    } else {
        console.error('Product not found');
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.splice(index, 1); // Remove item from array
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    displayCartItems(); // Update the cart display
}

// Initial call to display cart items
displayCartItems();

// Example: Adding event listeners to buttons (ensure these button IDs exist on your HTML page)
document.getElementById('add-to-cart-1').addEventListener('click', function() {
    addToCart(1);
});
document.getElementById('add-to-cart-2').addEventListener('click', function() {
    addToCart(2);
});
document.getElementById('add-to-cart-3').addEventListener('click', function() {
    addToCart(3);
});
