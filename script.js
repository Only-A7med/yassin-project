const cart = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
            <button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalElement.textContent = total.toFixed(2);
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function addToCart(itemName, price) {
    cart.push({ name: itemName, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${itemName} has been added to your cart.`);
}

function checkout() {
    alert('Proceeding to checkout...');
}

renderCart();
