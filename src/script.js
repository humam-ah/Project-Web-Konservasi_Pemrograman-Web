let slideIndex = 1;
tampilkanSlide(slideIndex);

function gantiSlide(n) {
    tampilkanSlide(slideIndex += n);
}

function tampilkanSlide(n) {
    let slides = document.getElementsByClassName("mySlides");

    if (slides.length === 0) {
        console.error("Tidak ada elemen dengan kelas 'mySlides' yang ditemukan.");
        return;
    }

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}

function slideOtomatis() {
    gantiSlide(1);
    setTimeout(slideOtomatis, 1500);
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(slideOtomatis, 1000); 
});
