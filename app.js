var btn = document.getElementsByClassName("btn-slide");
var slide = document.getElementById("slide");

var chatBtn = document.getElementById("chat-btn");

btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for(i=0; i<4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[1].onclick = function() {
    slide.style.transform = "translateX(-580px)";
    for(i=0; i<4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[2].onclick = function() {
    slide.style.transform = "translateX(-1400px)";
    for(i=0; i<4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

btn[3].onclick = function() {
    slide.style.transform = "translateX(-2300px)";
    for(i=0; i<4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}

if (screen.width <= 390) {
    btn[0].onclick = function() {
        slide.style.transform = "translateX(0px)";
        for(i=0; i<4; i++) {
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    
    btn[1].onclick = function() {
        slide.style.transform = "translateX(-338px)";
        for(i=0; i<4; i++) {
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    
    btn[2].onclick = function() {
        slide.style.transform = "translateX(-687px)";
        for(i=0; i<4; i++) {
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }
    
    btn[3].onclick = function() {
        slide.style.transform = "translateX(-1037px)";
        for(i=0; i<4; i++) {
            btn[i].classList.remove("active");
        }
        this.classList.add("active");
    }
}



// if (window.screen.width <= 390) {

//     console.log ("screen is 390");

// } else if (window.screen.height >= 390) {
//     console.log("screen is larger")
// }
// // console.log(window.screen.height)