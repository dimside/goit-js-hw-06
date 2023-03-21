const categoriesListEl = document.querySelector("#categories");
const categoriesItems = categoriesListEl.children;
console.log("Number of categories:", categoriesItems.length);
console.log("");

[...categoriesItems].forEach((item) => {
  console.log("Category:", item.firstElementChild.textContent);
  console.log("Elements:", item.lastElementChild.children.length);
  console.log("");
});
