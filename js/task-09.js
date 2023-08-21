function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btn = document.querySelector(".change-color");
const text = document.querySelector(".color");
btn.addEventListener("click", onClick);
function onClick() {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;
  text.textContent = backgroundColor;
}
