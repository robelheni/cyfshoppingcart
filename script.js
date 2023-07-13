const cart = document.getElementById('cart');


let cartCount = 0;


const updateCartCount = () => {
  cart.textContent = `Cart (${cartCount})`;
};

const addToCartButtons = document.querySelectorAll('button');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    cartCount++;
    updateCartCount();
  });
});

updateCartCount();
