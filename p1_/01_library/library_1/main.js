document.addEventListener("DOMContentLoaded", function() {
    // grid setup
    const gridContainer = document.querySelector(".grid-container");
    const numberOfSquares = 500;

    const randomIndex = Math.floor(Math.random() * numberOfSquares);

    // grid generation
    for (let i = 0; i < numberOfSquares; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

    // blue box  
        if (i === randomIndex) {
            gridItem.classList.add("blue");
            const link = document.createElement("a");
            link.href = "https://camae358.github.io/ci2/p1_/02_shelves/shelf_1/index.html";
            link.appendChild(gridItem);
            gridContainer.appendChild(link);
        } else {
            gridContainer.appendChild(gridItem);
        }
    }
});


