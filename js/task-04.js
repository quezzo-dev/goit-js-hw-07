const decrementBtn = document.querySelector("[data-action=decrement]");

const incrementBtn = document.querySelector("[data-action=increment]");

const currentValueRef = document.querySelector("#value");

let newValueRef = 0;

decrementBtn.addEventListener("click", () => {
  newValueRef -= 1;
  currentValueRef.textContent = newValueRef;
});

incrementBtn.addEventListener("click", () => {
  newValueRef += 1;
  currentValueRef.textContent = newValueRef;
});
