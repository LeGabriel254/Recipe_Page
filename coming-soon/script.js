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

    // Reset fade animation if it's already running
    feedbackDiv.classList.remove('fade-in');
    void feedbackDiv.offsetWidth; // Trigger reflow

    // Show the feedback div
    feedbackDiv.style.display = "block";

    if (isValid) {
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = message.join('<br>');
      feedbackDiv.style.color = "#dc3545"; 
    }

    // Trigger the fade-in effect via CSS class
    feedbackDiv.classList.add('fade-in');

    // Clear feedback message after seconds
    setTimeout(() => {
      feedbackDiv.style.display = "none";
      feedbackDiv.textContent = "";
    }, 1500);
  });
});
