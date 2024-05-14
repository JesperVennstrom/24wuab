let navChecker = 1
function showNav() {
    let closed = document.querySelector(".closed");
    closed.classList.toggle("show");
    navChecker++;
}

function showPopup(item) {
    let popup = document.querySelector(".popup");
    popup.classList.toggle("removed");
}

document.getElementById("menuButton").addEventListener("click", () => {
    showNav();
})
addEventListener("scroll", () => {
    if(navChecker%2 === 0) {
        showNav();
    }
})
document.querySelector(".mod").addEventListener("click", () => {
    showPopup("1");
})
document.getElementById("X").addEventListener("click", () => {
    showPopup("X");
})