const counter = document.querySelector(".number");
const btn = document.querySelectorAll(".button");

let number = 0;
counter.textContent = number;

btn.forEach((el) => {
  if (el.id === "decrease") {
    el.addEventListener("click", () => {
      number--;
      counter.textContent = number;
    });
  }
  if (el.id === "reset") {
    el.addEventListener("click", () => (counter.textContent = number = 0));
  }
  if (el.id === "increase") {
    el.addEventListener("click", () => {
      number++;
      counter.textContent = number;
    });
  }
});
