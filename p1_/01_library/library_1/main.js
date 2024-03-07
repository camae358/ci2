document.addEventListener("DOMContentLoaded", function() {
    // grid setup
    const gridContainer = document.querySelector(".grid-container");
    const numberOfSquares = 500;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // blue box index
    let blueBoxIndex = Math.floor(Math.random() * numberOfSquares);

    // grid properties
    for (let i = 0; i < numberOfSquares; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // character selection
        const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));

        // grid content
        gridItem.textContent = randomCharacter;

        // randomize scale
        const randomScale = Math.random() * 0.75 + 0.5;
        gridItem.style.transform = `scale(${randomScale})`;

        // blue box assignment
        if (i === blueBoxIndex) { // random assignment
            gridItem.classList.add("blue", "no-animation");
            const link = document.createElement("a");
            link.href = "https://camae358.github.io/ci2/p1_/02_shelves/shelf_1/index.html";
            link.appendChild(gridItem);
            gridContainer.appendChild(link);
        } else {
            gridContainer.appendChild(gridItem);
        }
    }
});
