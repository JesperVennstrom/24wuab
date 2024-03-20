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

let x = 0;

function goLeft() {
    x++;
    if (x>3) {
        x = 0;
    }
    switchImg()
}

function goRight() {
    x--;
    if (x<0) {
        x = 3;
    }
    switchImg()
}
function switchImg(){
    if (x == 0) {
        document.getElementById("linkImg1").src = "img/blue.png";
        document.getElementById("linkImg2").src = "img/orange.png";
        document.getElementById("linkImg3").src = "img/green.png";

        document.getElementById("link2").href = "trailer.html";
        document.getElementById("link2").innerText = "Trailer";
    }else if (x == 1) {
        document.getElementById("linkImg1").src = "img/green.png";
        document.getElementById("linkImg2").src = "img/blue.png";
        document.getElementById("linkImg3").src = "img/orange.png";

        document.getElementById("link2").href = "download.html";
        document.getElementById("link2").innerText = "Download";
    }else {
        document.getElementById("linkImg1").src = "img/orange.png";
        document.getElementById("linkImg2").src = "img/green.png";
        document.getElementById("linkImg3").src = "img/blue.png";

        document.getElementById("link2").href = "story.html";
        document.getElementById("link2").innerText = "Story";
    }
}


document.getElementById("arrow_right").addEventListener("click", () => {
    goRight();
})

document.getElementById("arrow_left").addEventListener("click", () => {
    goLeft();
})