const categories = document.querySelector("#categories");
const categoriesLength = categories.children.length;
console.log(`Number of categories: ${categoriesLength}`);

const item = document.querySelectorAll(".item");
item.forEach((elem) => {
  const title = elem.firstElementChild.textContent;
  console.log(`Category: ${title}`);
  const elementLength = elem.lastElementChild.children.length;
  console.log(`Elements: ${elementLength}`);
});
