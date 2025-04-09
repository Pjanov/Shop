function getCartItems() {
  return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCartItems(items) {
  localStorage.setItem('cart', JSON.stringify(items));
}

function addToCart(id) {
  let cart = getCartItems();
  cart.push(id);
  saveCartItems(cart);
  alert('Добавлено в корзину');
  updateCartCount(); // обновляем счётчик сразу
}

function updateCartCount() {
  const cart = getCartItems();
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    cartCount.innerText = cart.length;
  }
}
