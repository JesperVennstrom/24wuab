let navChecker = 1
function showNav() {
    let closed = document.querySelector(".closed");
    closed.classList.toggle("show");
    navChecker++;
}

document.getElementById("menuButton").addEventListener("click", () => {
    showNav();
})
addEventListener("scroll", () => {
    if(navChecker%2 === 0) {
        showNav();
    }
})

let cardNbr = "";
function flipCard() {
    let card = document.querySelector(cardNbr);
    card.classList.toggle("isFlipped");
}
document.querySelector(".card1Inner").addEventListener("click", () => {
    cardNbr = ".card1Inner";
    flipCard();
})
document.querySelector(".card2Inner").addEventListener("click", () => {
    cardNbr = ".card2Inner";
    flipCard();
})
document.querySelector(".card3Inner").addEventListener("click", () => {
    cardNbr = ".card3Inner";
    flipCard();
})