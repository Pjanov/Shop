fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById('catalog-list');
    data.products.forEach(product => {
      list.innerHTML += `
        <div class="bg-gray-800 p-4 rounded-xl shadow-xl">
          <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-contain mb-4">
          <h3 class="text-lg font-semibold">${product.title}</h3>
          <p class="text-orange-400 font-bold">${product.price} ₽</p>
          <div class="mt-4 flex justify-between">
            <a href="product.html?id=${product.id}" class="bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded">Посмотреть</a>
            <button onclick="addToCart(${product.id})" class="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded">Купить</button>
          </div>
        </div>`;
    });
  });

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Добавлено в корзину');
}