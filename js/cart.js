fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items');
    let total = 0;
    cart.forEach(id => {
      const product = data.products.find(p => p.id === id);
      if (product) {
        total += product.price;
        cartContainer.innerHTML += `
          <div class="bg-gray-800 p-4 rounded-xl">
            <h3 class="text-lg font-semibold">${product.title}</h3>
            <p class="text-orange-400">${product.price} ₽</p>
          </div>`;
      }
    });
    document.getElementById('total-price').innerText = `Итого: ${total} ₽`;
  });

document.getElementById('checkout-button').addEventListener('click', () => {
  window.location.href = 'checkout.html';
});