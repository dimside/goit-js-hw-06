function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector("#controls").firstElementChild;
const boxesEl = document.querySelector("#boxes");

const buttonCreateEl = document.querySelector("button[data-create]");
const buttonDestroyEl = document.querySelector("button[data-destroy]");

inputEl.addEventListener("input", (event) => {
  buttonCreateEl.dataset.create = event.currentTarget.value;
});

buttonCreateEl.addEventListener("click", createBoxes);

function createBoxes() {
  const amount = buttonCreateEl.dataset.create;
  let width = 30;
  let height = 30;
  const boxes = [];
  for (let i = 1; i <= amount; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = `${width}px`;
    divEl.style.height = `${height}px`;
    divEl.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    boxes.push(divEl);
  }
  boxesEl.append(...boxes);
}

buttonDestroyEl.addEventListener("click", () => (boxesEl.innerHTML = ""));
