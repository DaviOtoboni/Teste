
let slideIndex = 0;
let slideTimeout;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(showSlides, 6000); // Muda o slide a cada 6 segundos
}

function plusSlides(n) {
    slideIndex += n - 1; // Ajusta o índice para próximo ou anterior
    showSlides(); // O showSlides já reinicia o timeout
}