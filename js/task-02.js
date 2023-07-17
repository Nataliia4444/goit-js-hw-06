const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const list = document.querySelector("#ingredients");
for (const ingredient of ingredients) {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  list.append(element);
}

console.log(list);
