const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", onInput);
function onInput() {
  text.style.fontSize = "24px";
}
