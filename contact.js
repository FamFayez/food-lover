const form = document.getElementById("contactForm");
const userName = document.getElementById("userName");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const message = document.getElementById("message");

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "formControl error";

  const span = formControl.querySelector("span");
  span.innerText = message;
}

function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "formControl ";
}

form.addEventListener("submit", function (e) {
  let isValid = true;
  if (userName.value.trim() === "") {
    showError(userName, "userName is required");
    isValid = false;
  } else {
    showSuccess(userName);
  }

  if (email.value.trim() === "") {
    showError(email, "Email is required");
    isValid = false;
  } else {
    showSuccess(email);
  }

  if (phone.value.trim() === "") {
    showError(phone, " phone is required");
    isValid = false;
  } else {
    showSuccess(phone);
  }

  if (message.value.trim() === "") {
    showError(message, " write message");
    isValid = false;
  } else {
    showSuccess(message);
  }
  if (isValid == false) {
    e.preventDefault();
  }
});
