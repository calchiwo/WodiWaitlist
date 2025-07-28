document.addEventListener("DOMContentLoaded", function () {
  // Word rotation functionality
  const words = ["extraordinary", "revolutionary", "game-changing", "mind-blowing"];
  let index = 0;
  const wordElement = document.getElementById("rotating-word");

  if (wordElement) {
    setInterval(() => {
      wordElement.style.opacity = 0;
      setTimeout(() => {
        index = (index + 1) % words.length;
        wordElement.textContent = words[index];
        wordElement.style.opacity = 1;
      }, 300);
    }, 3000);
  }

  // Form submission - using CopyxPaste's proven method
  const form = document.getElementById("waitlist-form");
  const message = document.getElementById("form-message");

  if (form && message) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      // Use FormData API like CopyxPaste
      const data = new FormData(form);
      
      try {
        const response = await fetch("/", {
          method: "POST",
          body: data,
        });

        if (response.ok) {
          form.style.display = "none";
          message.textContent = "🎉 Thanks for subscribing!";
          message.style.color = "#1e40af";
        } else {
          throw new Error("Network response was not ok.");
        }
      } catch (error) {
        message.textContent = "❌ Something went wrong. Try again later.";
        message.style.color = "#dc2626";
      }
    });
  }
});
