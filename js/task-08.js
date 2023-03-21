const loginFormEl = document.querySelector(".login-form");

loginFormEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all fields");
  }
  const loginForm = {
    email: email.value,
    password: password.value,
  };
  console.log(loginForm);
  loginFormEl.reset();
});
