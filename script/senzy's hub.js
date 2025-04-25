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

// Show popup after 3 seconds
setTimeout(() => {
  document.getElementById("senzy-popup").style.display = "flex";
}, 3000); // 3000 milliseconds = 3 seconds

// Cancel button
document.getElementById("cancel-btn").addEventListener("click", () => {
  document.getElementById("senzy-popup").style.display = "none";
});

// Done button
document.getElementById("done-btn").addEventListener("click", function () {
  this.classList.toggle("done-active");
  if (this.classList.contains("done-active")) {
    this.innerText = "✓ Done";
    this.style.background = "#007BFF";
    this.style.color = "#fff";
  } else {
    this.innerText = "✓ Done";
    this.style.background = "black";
    this.style.color = "#fff";
  }
});

// Preference buttons toggle
document.querySelectorAll(".pref-btn").forEach(btn => {
  btn.addEventListener("click", function () {
    btn.classList.toggle("selected");
  });
});

// Check for any auto-scrolling JavaScript
window.scrollTo(0, document.body.scrollHeight);

// Select all buttons with the class 'pref-btn'
const buttons = document.querySelectorAll('.pref-btn');

// Loop through each button and add an event listener
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Toggle the 'active' class on the clicked button
    button.classList.toggle('active');
     });
    });


