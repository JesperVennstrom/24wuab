let navChecker = 1
function showNav() {
    let closed = document.querySelector(".closed");
    closed.classList.toggle("show");
    navChecker++;
}

function showPopup(item) {
    let popup = document.querySelector(".popup");
    popup.classList.toggle("removed");
    let wrapper = document.getElementById("wrapperMods")
    wrapper.classList.toggle("removed");
    scrollTo(top);
    popupElements.forEach((element, i) => {
        if(i===item) {
            element.classList.toggle("removed");
        }
        if(item==="X") {
            if(element.classList.contains("removed") === false) {
                element.classList.toggle("removed");
            }
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