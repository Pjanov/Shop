const urlParams = new URLSearchParams(window.location.search);
const productId = parseInt(urlParams.get('id'));

fetch('products.json')
  .then(res => res.json())
  .then(data => {
    const product = data.products.find(p => p.id === productId);
    if (product) {
      document.getElementById('product-details').innerHTML = `
        <img src="${product.image}" alt="${product.title}" class="w-full h-64 object-contain mb-4">
        <h2 class="text-2xl font-bold mb-2">${product.title}</h2>
        <p class="mb-4">${product.description}</p>
        <p class="text-orange-400 font-bold text-xl mb-4">${product.price} ₽</p>
        <a href="${product.file}" download class="mr-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">Скачать .skp</a>
        <button onclick="addToCart(${product.id})" class="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded">Купить</button>`;
    }
  });

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(id);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert('Добавлено в корзину');
}
