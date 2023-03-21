const validationInputEl = document.querySelector("#validation-input");

validationInputEl.addEventListener("blur", (event) =>
  Number(validationInputEl.dataset.length) !== event.currentTarget.value.length
    ? validationInputEl.classList.add("invalid")
    : validationInputEl.classList.replace("invalid", "valid")
);
