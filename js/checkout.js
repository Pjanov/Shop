document.getElementById('checkout-form').addEventListener('submit', function(e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setTimeout(() => {
    alert('Спасибо за заказ! Мы свяжемся с вами по Email.');
    localStorage.removeItem('cart');
    window.location.href = 'index.html';
  }, 500);
});