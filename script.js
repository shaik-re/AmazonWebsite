// Select elements
const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control_prev");
const next_btn = document.querySelector(".control_next");

// Initialize the current slide index
let n = 0;

// Function to update the slide
function changeSlide() {
  if (imgs.length === 0) return; // No images, exit function

  // Hide all images
  imgs.forEach((img) => {
    img.style.display = "none"; // Hide all images
  });

  // Show the current image
  imgs[n].style.display = "block";
}

// Add event listeners for the buttons
if (prev_btn) {
  prev_btn.addEventListener("click", () => {
    n = (n - 1 + imgs.length) % imgs.length; // Move to the previous slide
    changeSlide();
  });
}

if (next_btn) {
  next_btn.addEventListener("click", () => {
    n = (n + 1) % imgs.length; // Move to the next slide
    changeSlide();
  });
}

// Show the first slide initially
changeSlide();

// Horizontal scrolling for product containers
const scrollContainers = document.querySelectorAll(".products");
scrollContainers.forEach((container) => {
  container.addEventListener("wheel", (evt) => {
    evt.preventDefault(); // Prevent default vertical scroll
    container.scrollLeft += evt.deltaY > 0 ? 100 : -100; // Scroll horizontally
  });
});
