document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.querySelector(".grid-container");
  const numberOfSquares = 14;


  for (let i = 0; i < numberOfSquares; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.addEventListener("click", function() {

          window.location.href = "https://camae358.github.io/ci2/p1_/03_text/text_2/index.html";
      });
      gridContainer.appendChild(gridItem);
  }
});
