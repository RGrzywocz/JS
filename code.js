const gameSummary = {
    games: 0,
    wins: 0,
    loses: 0,
    draws: 0
}
const game = {
    playerHand: "",
    aiHand: "",
    winner: "",
}
const options = document.querySelectorAll("img");
options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach(option => option.style.border = "none");
        option.style.border = "2px solid black";
        game.playerHand = option.dataset.option;
    })
});
const whoWin = () => {
    if (game.playerHand === game.aiHand) {
        return "remis";
    } else if (game.playerHand === "kamien" && game.aiHand === "nozyce" || game.playerHand === "nozyce" && game.aiHand === "papier" || game.playerHand === "papier" && game.aiHand === "kamien")
        return "Ty";
    else
        return "Komputer";
}
const aiOption = () => {
    const rndm = Math.floor(Math.random() * 3);
    switch (rndm) {
        case 0:
            game.aiHand = "papier";
            break;
        case 1:
            game.aiHand = "kamien";
            break;
        case 2:
            game.aiHand = "nozyce";
            break;
    }
}
const drawResults = () => {
    document.querySelector(`[data-summary="your-choice"]`).textContent = game.playerHand;
    document.querySelector(`[data-summary="ai-choice"]`).textContent = game.aiHand;
}
const statsUpdate = () => {
    gameSummary.games++;
    if (game.winner == "remis")
        gameSummary.draws++;
    else if (game.winner == "Ty")
        gameSummary.wins++;
    else if (game.winner == "Komputer")
        gameSummary.loses++;
    document.querySelector("p.wins span").textContent = gameSummary.wins;
    document.querySelector("p.numbers span").textContent = gameSummary.games;
    document.querySelector("p.loses span").textContent = gameSummary.loses;
    document.querySelector("p.draws span").textContent = gameSummary.draws;
}
const endGame = () => {
    options.forEach(option => option.style.border = "none")
    game.winner = "";
    game.playerHand = "";
}
const play = () => {
    if (!game.playerHand) {
        alert('błąd');
        return;
    }
    aiOption();
    const winner = whoWin();
    game.winner = winner;
    document.querySelector('[data-summary="who-win"]').textContent = game.winner;
    drawResults();
    statsUpdate();
    endGame();
}
const btn = document.querySelector("button").addEventListener("click", () => play())