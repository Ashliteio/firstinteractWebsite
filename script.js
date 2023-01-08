const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return "Impossible age!";
}
const age1 = calcFactAge(2015);
console.log(age1);

const text = `Lisbon is the capital of Portugal.`;
console.log(text);

const str = `The current fact is "${text}". It is ${calcFactAge(
  2015
)} years old, It is provably `;
console.log(str);
