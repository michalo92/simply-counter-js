const counter = document.querySelector(".number");
const btn = document.querySelectorAll(".button");

let number = 0;
counter.textContent = number;

btn.forEach((el) =>
  el.addEventListener("click", () => {
    if (el.id === "decrease") {
      number--;
      counter.textContent = number;
    }
    if (el.id === "reset") {
      counter.textContent = number = 0;
    }
    if (el.id === "increase") {
      number++;
      counter.textContent = number;
    }
  })
);
