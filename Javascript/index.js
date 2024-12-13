function changeImage(element) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = element.src;
  const thumbImages = document.querySelectorAll(".thumb-img");
  thumbImages.forEach((img) => img.classList.remove("active"));
  element.classList.add("active");
}

// Function to toggle the icon color and show alert
function toggleIcon(button) {
  button.classList.toggle("active-icon");
  alert("Icon clicked: " + button.textContent);
}

// Base price of the product
const basePrice = 165;
const quantityInput = document.getElementById("quantity");
const priceDisplay = document.getElementById("price");
const decreaseBtn = document.getElementById("decrease-btn");
const increaseBtn = document.getElementById("increase-btn");

// Function to update price dynamically
function updatePrice() {
  const quantity = parseInt(quantityInput.value) || 1;
  const totalPrice = basePrice * quantity;
  priceDisplay.textContent = totalPrice;
}

// Event listeners for quantity change
quantityInput.addEventListener("input", updatePrice);

// Event listeners for increase and decrease buttons
decreaseBtn.addEventListener("click", () => {
  let quantity = parseInt(quantityInput.value) || 1;
  if (quantity > 1) {
    quantityInput.value = quantity - 1;
    updatePrice();
  }
});

increaseBtn.addEventListener("click", () => {
  let quantity = parseInt(quantityInput.value) || 1;
  quantityInput.value = quantity + 1;
  updatePrice();
});

// Initialize the price on page load
updatePrice();
$(document).ready(function(){
  $('.slider').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
          {
              breakpoint: 1024,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
              }
          },
          {
              breakpoint: 576,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
              }
          }
      ]
  });
});