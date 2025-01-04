(function() {
  // Initialize EmailJS with the public key
  emailjs.init("h9CaHHphd5WNUeG1P");
})();

// Add event listener for form submission
function sendEmail(event) {
  event.preventDefault(); // Prevent default form submission
  // if (!window.env) { // Ensure 'env' variable is set, or remove this check
  //     console.error('Environment variables not loaded.');
  //     return;
  // }
  emailjs.sendForm('service_pogs0ro', 'template_r3qxzws', event.target)
      .then(() => {
          // Show success message
          const successMessage = document.getElementById('success-message');
          successMessage.style.display = 'block'; // Show the success message

          // Reset the form fields
          event.target.reset();

          // Hide the success message after 1 second
          setTimeout(() => {
              successMessage.style.display = 'none'; // Hide the success message
          }, 1000); // 1 second
      }, (error) => {
          console.log('FAILED...', error);
      });
}

// Attach the submit event listener directly to the form
document.getElementById('contact-form').addEventListener('submit', sendEmail);

// Loader Animation
function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 700)
}

loaderAnimation()