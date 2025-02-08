document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    let total = 0;

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            const li = document.createElement('li');
            li.textContent = `${name} - ${price}DA`;
            cartItems.appendChild(li);
            total += price;
            cartTotal.textContent = total.toFixed(2);
        });
    });
});
