function anim() {
let crsr = document.querySelector("#cursor");
let main = document.querySelector("main");
let nav = document.querySelector("nav");

main.addEventListener("mousemove",function (dets) {
    crsr.style.left = dets.x  + "px"
    crsr.style.top = dets.y + "px"
})

window.addEventListener("wheel",function (det) {
    if (det.deltaY > 0) {
        nav.style.top = "-100px"; // Hide the nav (adjust value as needed)
    } else {
        nav.style.top = "0px"; // Show the nav
    }
    
})

}

function like () {
let crsr = document.querySelector("#cursor");
let mainImages = document.querySelectorAll(".mainImg")
let hearts = document.querySelectorAll(".heart")
let likes = document.querySelectorAll(".hLike")

mainImages.forEach((mImg, index) => {
    mImg.addEventListener("dblclick", function (e) {
        let heart = hearts[index]; // Get the corresponding heart element
        let like = likes[index]; // Get the corresponding heart element
        like.style.color = "#fa3636"
        heart.style.opacity = "1";
        heart.style.color = "#fa3636";
        heart.style.transform = "scale(1.1)"; // Reset size
        heart.style.transition = "opacity 0.5s ease-in, transform 0.3s ease-in-out";

        // Hide the heart after 1 second
        setTimeout(() => {
        heart.style.opacity = "0";
        }, 1000);
    });

    mImg.addEventListener("mouseenter", function () {
        crsr.style.backgroundColor = "transparent"
        crsr.style.backdropFilter = "blur(1px)"
    })
    mImg.addEventListener("mouseleave", function () {
        crsr.style.mixBlendMode = "difference"
        crsr.style.width = "30px"
        crsr.style.height = "30px"
        crsr.style.backgroundColor = "rgb(255, 255, 255)"
        crsr.style.backdropFilter = "none"


    })
});
likes.forEach((like, index) => {
    like.addEventListener("click", function (e) {
        let heart = hearts[index]; // Get the corresponding heart element
        like.style.color = "#fa3636"
        heart.style.opacity = "1";
        heart.style.color = "#fa3636";
        heart.style.transform = "scale(1.1)"; // Reset size
        heart.style.transition = "opacity 0.5s ease-in, transform 0.3s ease-in-out";


        // Hide the heart after 1 second
        setTimeout(() => {
            heart.style.opacity = "0";

        }, 1000);
    });


});
}

function randImg() {
    let btn = document.querySelector("#btn")
let elem = document.querySelector(".elem")
let imgs = [
    "Assets/img1.jpg",
    "Assets/img3.jpg",
    "Assets/img4.jpg",
    "Assets/img5.jpg",
    "Assets/img6.jpg",
    "Assets/img7.jpg",
    "Assets/img8.jpg",
]
let idx = 0;

btn.addEventListener("click", function () {
    if (idx >= imgs.length) {
        idx =0;
    }
    let x= Math.floor(Math.random()*90) + "%";
    let y=  Math.floor(Math.random()*90) + "%";
    let rot= Math.random()*360 + "deg";
    

   let img = document.createElement("img")
   img.style.position = "absolute"
   img.style.top =  y;
   img.style.left =  x;
   img.style.transform =  `rotate(${rot})`;
   let sImg = elem.appendChild(img)
   sImg.setAttribute("src",imgs[idx])
   idx++;

})
}

anim()// cursor wheel and nav animation
randImg()// random image generator using createElment 
like();// instagram like feature

