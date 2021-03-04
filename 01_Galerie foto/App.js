window.addEventListener("DOMContentLoaded", function(e) {
    let buttons = document.querySelectorAll(".button");
    for (let btn of buttons) {
        btn.addEventListener("click", clickedButton);
    }
})

function clickedButton(event) {
    let index = event.target.id.replace("radio", "");

    let buttons = document.querySelectorAll(".button");
    for (let i = 0; i < buttons.length; i++) {
        let btn = buttons[i];
        if (i === parseInt(index)) {
            btn.classList.add("active");
        } else {
            btn.classList.remove("active");
        }
    }

    let slides = document.querySelectorAll(".slide");
    let slide = document.querySelector('#slide' + index);
    slide.classList.add("show");
    slide.classList.remove("hide");

    for (let i = 0; i < slides.length; i++) {
        if (i !== parseInt(index)) {
            let currentSlide = slides[i];
            currentSlide.classList.add("hide");
            currentSlide.classList.remove("show");
        }
    }
}