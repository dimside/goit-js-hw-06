const fontSizeControlEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

fontSizeControlEl.addEventListener(
  "input",
  (event) => (textEl.style.fontSize = `${Number(event.currentTarget.value)}px`)
);
