// for (const ingredient of ingredients) {
//   const element = document.createElement("li");
//   element.textContent = ingredient;
//   element.classList.add("item");
// }
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
const elements = ingredients.map((elem) => {
  const listEl = document.createElement("li");
  listEl.textContent = elem;
  listEl.classList.add("item");

  return listEl;
});

list.append(...elements);
