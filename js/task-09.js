function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorName = document.querySelector(".color");
const changeColorButtonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

changeColorButtonEl.addEventListener("click", () => {
  bodyEl.style.backgroundColor = getRandomHexColor();
  colorName.textContent = `${getRandomHexColor()}`;
});
