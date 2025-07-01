let form = document.getElementById("contactForm");

let nameError = document.getElementById("nameError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");

form.addEventListener("submit", function(event) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let message = document.getElementById("message").value.trim();

  nameError.innerText = "";
  emailError.innerText = "";
  messageError.innerText = "";

  let isValid = true;

  if (name === "") {
    nameError.innerText = "Name is required.";
    isValid = false;
  }

  if (email === "") {
    emailError.innerText = "Email is required.";
    isValid = false;
  }

  if (message === "") {
    messageError.innerText = "Message is required.";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault(); // Stop form submission
  }
});
