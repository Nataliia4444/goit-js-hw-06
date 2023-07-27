const button = document.querySelectorAll("#counter button");
const value = document.querySelector("#value");
const btnDecriment = button[0];
const btnIncrement = button[1];

let counterVAlue = 0;
btnDecriment.addEventListener("click", onClickBtnDecriment);
function onClickBtnDecriment() {
  counterVAlue -= 1;
  value.textContent = counterVAlue;
}

btnIncrement.addEventListener("click", onClickBtnIncrement);
function onClickBtnIncrement() {
  counterVAlue += 1;
  value.textContent = counterVAlue;
}
