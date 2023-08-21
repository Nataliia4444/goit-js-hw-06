const form = document.querySelector(".login-form");
const button = document.querySelector(".login-form > button");
form.addEventListener("submit", onSubmit);
function onSubmit(event) {
  event.preventDefault();
  const password = event.currentTarget.elements.password.value;
  const email = event.currentTarget.elements.email.value;
  if (password === "" || email === "") {
    alert("Всі поля повинні бути заповнені!");
  } else {
    const data = {
      email,
      password,
    };
    console.log(data);
    form.reset();
  }
}
