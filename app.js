const btn = document.querySelector("#btn");
const email = document.querySelector("#email");
const emailLabel = document.querySelector("#emailLabel");

function validateEmail(event) {
  event.preventDefault();
  const regex = /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  const isValid = regex.test(email.value.trim());

  if (!isValid) {
    emailLabel.style.display = "block";
  } else {
    emailLabel.style.display = "none";
    email.value = "";
  }
}

btn.addEventListener("click", validateEmail);
