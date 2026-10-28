let playerName = "";
let playerScore = 0;
let computerScore = 0;
let gameOver = false;

function getPlayerName() {
    let name = prompt("Введіть своє ім'я:");

    while (name !== null && name.trim() === "") {
        name = prompt("Ім'я не може бути порожнім. Введіть його ще раз:");
    }

    if (name === null) {
        return "Гравець";
    }

    return name.trim();
}

function startGame() {
    playerName = getPlayerName();

    playerScore = 0;
    computerScore = 0;
    gameOver = false;

    document.getElementById("playerName").textContent = playerName;
    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    document.getElementById("playerNumber").textContent = "?";
    document.getElementById("computerNumber").textContent = "?";

    document.getElementById("message").textContent =
        "Натисніть кнопку, щоб почати гру.";

    document.getElementById("playButton").disabled = false;
}

function playRound() {
    if (gameOver) {
        return;
    }

    const playerNumber = Math.floor(Math.random() * 100) + 1;
    const computerNumber = Math.floor(Math.random() * 100) + 1;

    document.getElementById("playerNumber").textContent = playerNumber;
    document.getElementById("computerNumber").textContent = computerNumber;

    const message = document.getElementById("message");

    if (playerNumber > computerNumber) {
        playerScore++;
        message.textContent = playerName + " виграв цей раунд!";
    } else if (computerNumber > playerNumber) {
        computerScore++;
        message.textContent = "Комп'ютер виграв цей раунд!";
    } else {
        message.textContent = "Нічия! Цього разу ніхто не отримує бал.";
    }

    document.getElementById("playerScore").textContent = playerScore;
    document.getElementById("computerScore").textContent = computerScore;

    if (playerScore === 3 || computerScore === 3) {
        gameOver = true;

        if (playerScore === 3) {
            message.textContent = playerName + " переміг у грі!";
        } else {
            message.textContent = "Комп'ютер переміг у грі!";
        }

        document.getElementById("playButton").disabled = true;
    }
}

document.getElementById("playButton").addEventListener("click", playRound);

document.getElementById("restartButton").addEventListener("click", startGame);

startGame();
