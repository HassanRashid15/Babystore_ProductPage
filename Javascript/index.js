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

// Function to update price dynamically
function updatePrice() {
  const quantity = parseInt(quantityInput.value);
  const totalPrice = basePrice * quantity;
  priceDisplay.textContent = totalPrice;
}

// Event listener for quantity change
quantityInput.addEventListener("input", updatePrice);
