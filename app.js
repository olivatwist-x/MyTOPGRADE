var btn = document.getElementsByClassName("btn-slide");
var slide = document.getElementById("slide");

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
    slide.style.transform = "translateX(-2250px)";
    for(i=0; i<4; i++) {
        btn[i].classList.remove("active");
    }
    this.classList.add("active");
}