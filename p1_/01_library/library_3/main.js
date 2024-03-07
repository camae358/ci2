document.addEventListener("DOMContentLoaded", function() {
    // grid setup
    const gridContainer = document.querySelector(".grid-container");
    const numberOfSquares = 50000;
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    // blue box check
    let blueBoxAssigned = false;

    // grid properties
    for (let i = 0; i < numberOfSquares; i++) {
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");

        // character selection
        const randomCharacter = characters.charAt(Math.floor(Math.random() * characters.length));

        // grid content
        gridItem.textContent = randomCharacter;

        // randomize scale
        const randomScale = Math.random() * 0.5 + 0.75; // Random scale between 0.75 and 1.25
        gridItem.style.transform = `scale(${randomScale})`;

        // blue box rng
        if (!blueBoxAssigned && Math.random() < 0.05) { // 5% chance to assign blue box
            gridItem.classList.add("blue", "no-animation");
            const link = document.createElement("a");
            link.href = "https://camae358.github.io/ci2/p1_/02_shelves/shelf_3/index.html";
            link.appendChild(gridItem);
            gridContainer.appendChild(link);
            blueBoxAssigned = true;
        } else {
            gridContainer.appendChild(gridItem);
        }
    }

    // blue box failsafe
    if (!blueBoxAssigned) {
        const randomIndex = Math.floor(Math.random() * numberOfSquares);
        const gridItems = document.querySelectorAll(".grid-item");
        const blueBox = gridItems[randomIndex];
        blueBox.classList.add("blue", "no-animation");
        const link = document.createElement("a");
        link.href = "https://camae358.github.io/ci2/p1_/02_shelves/shelf_3/index.html";
        link.appendChild(blueBox);
        gridContainer.appendChild(link);
    }
});
