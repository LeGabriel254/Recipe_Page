document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById("email-submission");
  const feedbackDiv = document.getElementById('form-feedback');
  const userEmail = document.getElementById('user-email'); 

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = userEmail.value.trim();
    let isValid = true;
    let message = [];

    // Basic email validation
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      message.push("Email must contain both '@' and '.' characters.");
    }

    // Reset any existing fade-in animation
    feedbackDiv.classList.remove('fade-in');
    void feedbackDiv.offsetWidth; // Force reflow to re-trigger animation

    // Show feedback div
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Notiffication sent successfully!";
      feedbackDiv.style.color = "#28a745";
      form.reset(); // Clears the input field if valid
    } else {
      feedbackDiv.innerHTML = message.join('<br>');
      feedbackDiv.style.color = "#dc3545";
    }

    // Trigger fade-in animation
    feedbackDiv.classList.add('fade-in');

    // Clear feedback after seconds
    setTimeout(() => {
      feedbackDiv.style.display = "none";
      feedbackDiv.textContent = "";
    }, 2000);
  });
});
