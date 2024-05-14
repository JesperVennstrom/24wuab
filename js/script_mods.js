let navChecker = 1
function showNav() {
    let closed = document.querySelector(".closed");
    closed.classList.toggle("show");
    navChecker++;
}

function showPopup(item) {
    let popup = document.querySelector(".popup");
    popup.classList.toggle("removed");
    popupElements.forEach((element, i) => {
        if(i===item) {
            element.classList.toggle("removed");
            console.log(element)
        }
    });
}

document.getElementById("menuButton").addEventListener("click", () => {
    showNav();
})
addEventListener("scroll", () => {
    if(navChecker%2 === 0) {
        showNav();
    }
})
const modElements = document.querySelectorAll('.mod');
const popupElements = document.querySelectorAll('.items');

modElements.forEach((element, i) => {
    element.addEventListener('click', (event) => {
        showPopup(i);
        console.log(i);
    });
});

document.getElementById("X").addEventListener("click", () => {
    showPopup("X");
})