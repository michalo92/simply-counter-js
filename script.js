const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const counter = document.querySelector(".number");

let number = 0;
counter.textContent = number;

decrease.addEventListener("click", () => {
  number--;
  setNumber(number);
});
increase.addEventListener("click", () => {
  number++;
  setNumber(number);
});
reset.addEventListener("click", (e) => {
  number = 0;
  setNumber(number);
});
function setNumber(number) {
  counter.textContent = number;
}
