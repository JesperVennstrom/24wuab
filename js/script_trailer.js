let navChecker = 1
function showNav() {
    let closed = document.querySelector(".closed");
    closed.classList.toggle("show");
    navChecker++;
}

function showSkeleton() {
    let headskeleton = document.querySelector(".headerTrailer");
    let footskeleton = document.querySelector(".footerTrailer");
    headskeleton.classList.toggle("headOpen");
    footskeleton.classList.toggle("footOpen");


}

document.getElementById("menuButton").addEventListener("click", () => {
    showNav();
})
addEventListener("scroll", () => {
    if(navChecker%2 === 0) {
        showNav();
    }
})

document.querySelector(".headerTrailer").addEventListener("mouseenter", () => {
    showSkeleton();
})
document.querySelector(".footerTrailer").addEventListener("mouseenter", () => {
    showSkeleton();
})

document.querySelector(".headerTrailer").addEventListener("mouseleave", () => {
     showSkeleton();
     if(navChecker%2 === 0) {
        showNav();
    }
})
document.querySelector(".footerTrailer").addEventListener("mouseleave", () => {
    showSkeleton();
    if(navChecker%2 === 0) {
        showNav();
    }
})