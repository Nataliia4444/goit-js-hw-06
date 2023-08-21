const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
input.addEventListener("input", onInput);
function onInput(event) {
  console.log(event.currentTarget.value);
  text.style.fontSize = `${event.currentTarget.value}px`;
}
