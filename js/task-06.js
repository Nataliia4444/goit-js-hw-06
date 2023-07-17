const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onBlur);
function onBlur(event) {
  if (event.currentTarget.value.length >= inputEl.dataset.length) {
    inputEl.classList.add("valid");
  } else if (event.currentTarget.value.length < inputEl.dataset.length) {
    inputEl.classList.add("invalid");
  }
}
