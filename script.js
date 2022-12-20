const form = document.getElementById("contact-me");
const fname = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  //trim to remove whitespace
  const fnameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value;

  if (fnameValue === "") {
    setErrorFor(fname, "Please enter your name");
  } else {
    setSuccessFor(fname);
  }

  if (emailValue === "") {
    setErrorFor(email, "Please enter an email");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Please enter a valid email address");
  } else {
    setSuccessFor(email);
  }

  if (messageValue === "") {
    setErrorFor(message, "Please enter your message");
  } else {
    setSuccessFor(message);
  }
}

function setErrorFor(input, message) {
  const formField = input.parentElement;
  const small = formField.querySelector("small");
  formField.className = "form-field error";
  small.innerText = message;
}

function setSuccessFor(input) {
  const formField = input.parentElement;
  formField.classname = "form-control success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
