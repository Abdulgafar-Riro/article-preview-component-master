const shareBtn = document.getElementById("shareBtn");
const shareIcons = document.getElementById("shareIcons");

// Function to toggle share section
function toggleShare() {
  shareBtn.classList.toggle("active");
  shareIcons.classList.toggle("hidden");
}

// Event listeners
shareBtn.addEventListener("click", toggleShare);
