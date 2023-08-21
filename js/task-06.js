const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onBlur);
function onBlur(event) {
  if (
    event.currentTarget.value.trim().length === Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("valid");
    inputEl.classList.remove("invalid");
  } else if (
    event.currentTarget.value.trim().length !== Number(inputEl.dataset.length)
  ) {
    inputEl.classList.add("invalid");
    inputEl.classList.remove("valid");
  }
}
