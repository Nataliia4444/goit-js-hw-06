const button = document.querySelectorAll("#counter button");
const btnDecriment = button[0];
const btnIncrement = button[1];

let counterVAlue = 0;
btnDecriment.addEventListener("click", onClickBtnDecriment);
function onClickBtnDecriment() {
  counterVAlue -= 1;
  btnDecriment.textContent = counterVAlue;
}
let counterVAlue2 = 0;
btnIncrement.addEventListener("click", onClickBtnIncrement);
function onClickBtnIncrement() {
  counterVAlue2 += 1;
  btnIncrement.textContent = counterVAlue2;
}
