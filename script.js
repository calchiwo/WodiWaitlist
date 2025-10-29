const form = document.getElementById("waitlist-form");
const successMessage = document.getElementById("success-message");

// Listen for form submission via Netlify
form.addEventListener("submit", () => {
  // Wait briefly to allow Netlify to process submission
  setTimeout(() => {
    form.classList.add("hidden");
    successMessage.classList.remove("hidden");
  }, 100);
});
