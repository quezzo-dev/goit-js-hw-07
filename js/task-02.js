const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const listEl = document.querySelector("#ingredients");

const addEl = (array) =>
  array.map((el) => {
    const itemEl = document.createElement("li");
    itemEl.textContent = el;
    return itemEl;
  });

listEl.append(...addEl(ingredients));
