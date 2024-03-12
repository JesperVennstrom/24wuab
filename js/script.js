function showNav() {
    let closed = document.querySelector(".closed");
    closed.classList.toggle("show");
}


let x = 0;

function goLeft() {
    if (x == 0) {
        document.getElementById("linkImg1").src = "img/green.png";
        document.getElementById("linkImg2").src = "img/blue.png";
        document.getElementById("linkImg3").src = "img/orange.png";
    }else if (x == 1) {
        document.getElementById("linkImg1").src = "img/blue.png";
        document.getElementById("linkImg2").src = "img/orange.png";
        document.getElementById("linkImg3").src = "img/green.png";
    }else {
        document.getElementById("linkImg1").src = "img/orange.png";
        document.getElementById("linkImg2").src = "img/green.png";
        document.getElementById("linkImg3").src = "img/blue.png";
    }
    x++;
    if (x>3) {
        x = 0;
    }
}

function goRight() {
    if (x == 0) {
        document.getElementById("linkImg1").src = "img/orange.png";
        document.getElementById("linkImg2").src = "img/green.png";
        document.getElementById("linkImg3").src = "img/blue.png";
    }else if (x == 1) {
        document.getElementById("linkImg1").src = "img/green.png";
        document.getElementById("linkImg2").src = "img/blue.png";
        document.getElementById("linkImg3").src = "img/orange.png";
    }else {
        document.getElementById("linkImg1").src = "img/blue.png";
        document.getElementById("linkImg2").src = "img/orange.png";
        document.getElementById("linkImg3").src = "img/green.png";
    }
    x++;
    if (x>3) {
        x = 0;
    }
}

arrowRight.addEventListener("click", () => {
    switchLink();
})

arrowLeft.addEventListener("click", () => {
    switchLink();
})