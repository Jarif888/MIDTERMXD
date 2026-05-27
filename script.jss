// Dark Mode

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Typing Effect

const text = "Frontend Web Developer";
const typing = document.getElementById("typing");

let index = 0;

function typeEffect() {

  if(index < text.length) {

    typing.innerHTML += text.charAt(index);

    index++;

    setTimeout(typeEffect, 100);
  }
}

typeEffect();

// Contact Form Validation

const form = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {

  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name === "" || email === "" || message === "") {

    formMessage.innerHTML = "Please fill all fields";
    formMessage.style.color = "red";

  } else {

    formMessage.innerHTML = "Message Sent Successfully!";
    formMessage.style.color = "green";

    form.reset();
  }

});
