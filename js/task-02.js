const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");

let ingredientsItems = [];
ingredients.forEach((ingredient) => {
  const ingredientEl = document.createElement("li");
  ingredientEl.textContent = ingredient;
  ingredientEl.classList.add("item");
  ingredientsItems.push(ingredientEl);
});
console.log(ingredientsItems);
ingredientsListEl.append(...ingredientsItems);
