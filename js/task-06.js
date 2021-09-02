const inputOfFormEl = document.querySelector("#validation-input");
const validLength = inputOfFormEl.getAttribute("data-length");

inputOfFormEl.addEventListener("blur", () => {
  if (inputOfFormEl.value.length === Number(validLength)) {
    inputOfFormEl.classList.remove("invalid");
    inputOfFormEl.classList.add("valid");
  } else {
    inputOfFormEl.classList.remove("valid");
    inputOfFormEl.classList.add("invalid");
  }
});
