const form = document.getElementById("contact-me");
const fname = document.getElementById("fname");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("hecho");
  checkInputs();

  this.contact_number.value = (Math.random() * 100000) | 0;
  // these IDs from the previous steps
  emailjs.sendForm("contact_service", "contact_form", this).then(
    function () {
      console.log("SUCCESS!");
      alert("Your message has been sent! =)");
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Your message can't be sent");
    }
  );
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
  formField.className = "form-field error";
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
