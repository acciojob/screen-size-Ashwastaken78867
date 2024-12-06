//your JS code here. If required.
// Function to update the size info
function updateWindowSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const sizeInfoDiv = document.getElementById('sizeInfo');
  sizeInfoDiv.innerHTML = `<h1>Width: ${width} and Height: ${height}</h1>`;
}

// Initialize the size on page load
updateWindowSize();

// Add an event listener for window resize
window.addEventListener('resize', updateWindowSize);
