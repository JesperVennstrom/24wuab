

const images = [
    {
        imageUrl: "img/blue.png"
    },
    {
        imageUrl: "img/orange.png"
    },
    {
        imageUrl: "img/green.png"
    }
]


let index = 1;

function goRightIndex(index) {
    if (index === images.length - 1) {
        return 0;
    } else {
        return index + 1
    }
}

function goLeftIndex(index) {
    if (index === 0) {
        return images.length - 1
    } else {
        return index - 1
    }
}



const parent = document.getElementById("images")
const arrowRight = document.getElementById("arrow_right")
const arrowLeft = document.getElementById("arrow_left")
console.log(parent)

arrowRight.addEventListener("click", () => {
    index = goRightIndex(index)
    mutateDom()
})

arrowLeft.addEventListener("click", () => {
    index = goLeftIndex(index)
    mutateDom()
})

function mutateDom() {
    console.log(index, images)
    parent.innerHTML = ""
    for (const item of images) {
        const index = images.indexOf(item);
        const el = document.createElement("div");
        el.id = `link-${index + 1}`
    
    
        const img = document.createElement("img");
        img.src = item.imageUrl
        img.id = `link-${index +1}`
    
        el.appendChild(img);
    
        parent.appendChild(el)
    }
}

mutateDom()













function showNav() {
    let closed = document.querySelector(".closed");
    closed.classList.toggle("show");
}


// function switchLink() {
//     x = 0;
//     if (x == 0) {
//         document.getElementById("linkImg1").src = "img/orange.png";
//         document.getElementById("linkImg2").src = "img/green.png";
//         document.getElementById("linkImg3").src = "img/blue.png";
//     }else if (x == 1) {
//         document.getElementById("linkImg1").src = "img/green.png";
//         document.getElementById("linkImg2").src = "img/blue.png";
//         document.getElementById("linkImg3").src = "img/orange.png";
//     }else {
//         document.getElementById("linkImg1").src = "img/blue.png";
//         document.getElementById("linkImg2").src = "img/orange.png";
//         document.getElementById("linkImg3").src = "img/green.png";
//     }
//     x += 1;
//     if (x>3) {
//         x = 0;
//     }
// }