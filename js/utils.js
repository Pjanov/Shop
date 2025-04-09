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
  }