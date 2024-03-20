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