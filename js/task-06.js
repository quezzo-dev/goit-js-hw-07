const inputOfFormEl = document.querySelector("#validation-input");
const validLength = inputOfFormEl.getAttribute("data-length");

inputOfFormEl.addEventListener("blur", validArea);

function validArea(event) {
  event.currentTarget.value.length === Number(validLength)
    ? (inputOfFormEl.classList = "valid")
    : (inputOfFormEl.classList = "invalid");
}
