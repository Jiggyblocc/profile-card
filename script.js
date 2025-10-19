document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  function updateTime() {
    timeElement.textContent = Date.now();
  }

  updateTime();               // Set time once on page load
  setInterval(updateTime, 1000); // Update every 1 second
});
