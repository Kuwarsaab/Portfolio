(function() {
  emailjs.init("h9CaHHphd5WNUeG1P");
})();

function sendEmail(event) {
  event.preventDefault();
  emailjs.sendForm('service_pogs0ro', 'template_r3qxzws', event.target)
      .then(() => {
          const successMessage = document.getElementById('success-message');
          successMessage.style.display = 'block';
          event.target.reset();
          setTimeout(() => {
              successMessage.style.display = 'none'; 
          }, 1000);
      }, (error) => {
          console.log('FAILED...', error);
      });
}


// Attach the submit event listener directly to the form
document.getElementById('contact-form').addEventListener('submit', sendEmail);

function notification(event){
  event.preventDefault();
  successMessage.style.display = 'block';
  event.target.reset();
  setTimeout(() => {
      successMessage.style.display = 'none';
  }, 2000);
}

document.getElementById('contact-form').addEventListener('submit', notification);

// Loader Animation
function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4200)
}

loaderAnimation()

const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');

menuToggle.addEventListener('click', () => {
    links.classList.toggle('active');
});