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
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      margin: 0,
      arrows:true,
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 3000,
      responsive: {
        0: { items: 1 },
        600: { items: 2 },
        1000: { items: 3 },
        1200: { items: 4 },
      },
    });
  });

$(document).ready(function () {
  $(".custom-carousel").owlCarousel({
    items: 2,
    margin: 15,
    loop: true,
    nav: true, // Enable navigation arrows
    dots: true,
    navText: [
      "<i class='fa fa-chevron-left'></i>",
      "<i class='fa fa-chevron-right'></i>",
    ], // Customize arrows (optional)
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1024: {
        items: 2,
      },
    },
  });
});
