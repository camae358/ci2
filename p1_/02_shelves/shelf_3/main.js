document.addEventListener("DOMContentLoaded", function() {
  const gridContainer = document.querySelector(".grid-container");
  const numberOfSquares = 14;


  for (let i = 0; i < numberOfSquares; i++) {
      const gridItem = document.createElement("div");
      gridItem.classList.add("grid-item");
      gridItem.addEventListener("click", function() {

          window.location.href = "/Users/ecamarillo/Documents/GitHub/ci2/p1_/04_matrix/index.html";
      });
      gridContainer.appendChild(gridItem);
  }
});
