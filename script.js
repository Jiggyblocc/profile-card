// =========================
// SHOW TIME IN MILLISECONDS
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');

  if (timeElement) {
    // Only run this if the element exists (on index.html)
    function updateTime() {
      timeElement.textContent = Date.now();
    }

    updateTime(); // run once on load
    setInterval(updateTime, 1000); // update every second
  }
});

// =========================
// CONTACT FORM VALIDATION
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");

  // only run this part if we’re on contact.html
  if (!contactForm) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const subjectInput = document.getElementById("contact-subject");
  const messageInput = document.getElementById("contact-message");
  const successMessage = document.querySelector("[data-testid='test-contact-success']");

  // ===== Helper Functions =====
  function showError(input, message) {
    const error = input.nextElementSibling;
    if (error) {
      error.textContent = message;
      error.style.color = "red";
    }
  }

  function clearError(input) {
    const error = input.nextElementSibling;
    if (error) error.textContent = "";
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // ===== Handle Submit =====
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent refresh
    console.log("Form submitted — checking fields...");

    let isValid = true;
    successMessage.textContent = ""; // clear old success message

    // Validate Name
    if (nameInput.value.trim() === "") {
      showError(nameInput, "Full name is required.");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Validate Email
    if (emailInput.value.trim() === "") {
      showError(emailInput, "Email is required.");
      isValid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, "Please enter a valid email address (e.g., name@example.com).");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Validate Subject
    if (subjectInput.value.trim() === "") {
      showError(subjectInput, "Subject is required.");
      isValid = false;
    } else {
      clearError(subjectInput);
    }

    // Validate Message
    if (messageInput.value.trim() === "") {
      showError(messageInput, "Message is required.");
      isValid = false;
    } else if (messageInput.value.trim().length < 10) {
      showError(messageInput, "Message must be at least 10 characters long.");
      isValid = false;
    } else {
      clearError(messageInput);
    }

    // ===== If Valid, Show Success =====
    if (isValid) {
      console.log("✅ Form is valid! Showing success message.");
      successMessage.textContent = "✅ Thank you! Your message has been sent successfully.";
      successMessage.style.color = "green";
      contactForm.reset();
    }
  });
});
