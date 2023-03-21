const counterValue = document.querySelector("#value");
counterValue.textContent = 0;

const onButtonDecrementClick = document.querySelector(
  `button[data-action="decrement"]`
);
const onButtonIncrementClick = document.querySelector(
  `button[data-action="increment"]`
);

const counterDecrement = () =>
  (counterValue.textContent = Number(counterValue.textContent) - 1);
const counterIncrement = () =>
  (counterValue.textContent = Number(counterValue.textContent) + 1);

onButtonDecrementClick.addEventListener("click", counterDecrement);
onButtonIncrementClick.addEventListener("click", counterIncrement);
