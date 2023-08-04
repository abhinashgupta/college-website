// JavaScript for the contact page
document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Your message has been sent! We will get back to you shortly.");
    contactForm.reset();
  });
});
