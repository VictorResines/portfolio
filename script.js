const form = document.getElementById("contact-me");
console.log(form);
const fname = document.getElementById("fname");
console.log(fname);
const email = document.getElementById("email");
console.log(email);
const message = document.getElementById("message");
console.log(message);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hecho");
  checkInputs();
});

function checkInputs() {
  //trim to remove whitespace
  const fnameValue = fname.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value;

  if (fnameValue === "") {
    console.log("Please enter your name");
    setErrorFor(fname, "Please enter your name");
  } else {
    setSuccessFor(fname);
    console.log("Success");
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
  const formItem = input.parentElement.parentElement;
  const small = formItem.querySelector("small");
  formItem.className = "form-item error";
  formField.className ='form-field error'
  small.innerText = message;
}

function setSuccessFor(input) {
  const formField = input.parentElement;
  const formItem = input.parentElement.parentElement;
  formField.className = "form-field success";
  formItem.className = "form-item";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
