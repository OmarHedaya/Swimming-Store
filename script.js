const hamburger = document.querySelector(".navbar__hamburger");
const navList = document.querySelector(".navbar__nav-list");
const navItems = document.querySelectorAll(".navbar__nav-item");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("navbar__hamburger--active");
  navList.classList.toggle("navbar__nav-list--active");
});

navItems.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("navbar__hamburger--active");
    navList.classList.remove("navbar__nav-list--active");
  });
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navList.contains(e.target)) {
    hamburger.classList.remove("navbar__hamburger--active");
    navList.classList.remove("navbar__nav-list--active");
  }
});


// 1. Select the necessary elements from the DOM
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.close-btn');
const buttons = document.querySelectorAll('.view-details-btn');

// Elements inside the modal that we need to update
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDescription = document.getElementById('modalDescription');
const modalImage = document.getElementById('modalImage');

// 2. Add click event to EVERY "View Details" button
buttons.forEach(button => {
  button.addEventListener('click', function() {
    // Grab the data from the clicked button's data-* attributes
    const title = this.getAttribute('data-title');
    const price = this.getAttribute('data-price');
    const image = this.getAttribute('data-image');
    const description = this.getAttribute('data-description');

    // Update the modal's HTML content with this data
    modalTitle.textContent = title;
    modalPrice.textContent = price;
    modalImage.src = image;
    modalImage.alt = title;
    modalDescription.textContent = description;

    // Show the modal by changing its display to flex
    modal.style.display = 'flex';
  });
});

// 3. Close the modal when the "X" is clicked
closeBtn.addEventListener('click', function() {
  modal.style.display = 'none';
});

// 4. Close the modal when clicking outside of the white box (on the dark overlay)
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});


// 1. Select all 'Add to Cart' buttons and the counter element
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCounter = document.getElementById('cart-counter');

// 2. Set the initial cart count
let currentCount = 0;

// 3. Loop through every button and attach a click listener
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() {
        
        // Increase the count by 1
        currentCount++;
        
        // Update the counter on the screen (if the element exists)
        if (cartCounter) {
            cartCounter.textContent = currentCount;
        }

        // Optional: Add a quick visual confirmation on the button itself
        const originalText = this.textContent;
        this.textContent = 'Added! ✓';
        
        // Change it back to normal after 1 second (1000 milliseconds)
        setTimeout(() => {
            this.textContent = originalText;
        }, 1000);
        
    });
});