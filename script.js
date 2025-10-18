document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  function updateTime() {
    const now = new Date();
    const options = {
      weekday: "long",  // e.g. Monday
      year: "numeric",  // e.g. 2025
      month: "long",    // e.g. October
      day: "numeric",   // e.g. 18
      hour: "2-digit",  // e.g. 08
      minute: "2-digit",
      second: "2-digit",
    };

    // Format and update
    timeElement.textContent = now.toLocaleString("en-US", options);
  }

  // Run immediately
  updateTime();

  // Update every second
  setInterval(updateTime, 1000);
});
