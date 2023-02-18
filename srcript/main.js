const humburgerMenu = document.getElementById("humburger-menu");
const overlay = document.querySelector(".overlay");
const overlayClose = document.getElementById("overlay-close");

// Function to open the overlay
function openOverlay() {
  overlay.classList.add("show");
}

// Function to close the overlay
function closeOverlay() {
  overlay.classList.remove("show");
}

// Event listener to open the overlay when humburger menu is clicked
humburgerMenu.addEventListener("click", openOverlay);

// Event listener to close the overlay when overlay close button is clicked
overlayClose.addEventListener("click", closeOverlay);

// Event listener to close the overlay when anywhere outside the overlay is clicked
overlay.addEventListener("click", function(event) {
  if (event.target === overlay) {
    closeOverlay();
  }
});
