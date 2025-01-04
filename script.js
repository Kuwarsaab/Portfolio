document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    sendEmail(e.target);
  });

import emailjs from 'emailjs-com';

const sendEmail = (form) => {
  emailjs.sendForm('service_pogs0ro', 'template_r3qxzws', form, 'h9CaHHphd5WNUeG1P')
    .then((result) => {
      console.log('Email successfully sent!', result.text);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });
};

function loaderAnimation() {
  var loader = document.querySelector("#loader")
  setTimeout(function () {
      loader.style.top = "-100%"
  }, 4000)
}

loaderAnimation()