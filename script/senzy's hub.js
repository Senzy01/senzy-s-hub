// For the add-to-cart functionality (just an example)
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
      alert('Item added to cart!');
  });
});

// For gender selection and other functionalities, you can expand here

const priceOptions = [33.30, 39.90, 40.00, 25.00, 28.99, 34.50, 41.50, 37.77, 36.99, 30.00, 37.33, 43.00, 28.22, 40.34, 36.80, 23.85];

document.querySelectorAll('.pricetag').forEach(tag => {
    const randomPrice = priceOptions[Math.floor(Math.random() * priceOptions.length)];
    tag.textContent = `$${randomPrice.toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
});