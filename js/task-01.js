document
  .querySelectorAll(".item h2")
  .forEach((el) =>
    console.log(
      `Категория: ${el.textContent}, Количество элементов: ${el.nextElementSibling.children.length}`
    )
  );
