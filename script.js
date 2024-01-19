const startButton = document.getElementById("startButton");
const gameContainer = document.querySelector(".gameContainer");
const schnappiBtn = document.getElementById("schnappiBtn");
const schnappiContainer = document.getElementById("schnappiContainer");

function startGame() {
    // Toggle the visibility of the game container
    gameContainer.style.display = (gameContainer.style.display === "none" || gameContainer.style.display === "") ? "block" : "none";

    // Remove the button
    const startGameDiv = startButton.parentElement;
    startGameDiv.remove();
}

function selectSchnappi() {
    // Hide the game container
    gameContainer.style.display = "none";

    // Toggle the visibility of the schnappiContainer
    schnappiContainer.style.display = (schnappiContainer.style.display === "none" || schnappiContainer.style.display === "") ? "block" : "none";

    // Reset Schnappi's health
    schnappiHealth = 100;
    updateHealthBar();
}
const healthBat = document.getElementById(healthBar)



startButton.addEventListener("click", startGame);
schnappiBtn.addEventListener("click", selectSchnappi);
