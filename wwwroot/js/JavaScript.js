var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var slideIndex1 = 1;
showSlides1(slideIndex1);
function plusSlides1(m) {
    showSlides1(slideIndex1 += m);
}
function currentSlide1(n) {
    showSlides1(slideIndex1 = m);
}
function showSlides1(m) {
    var x;
    var slides1 = document.getElementsByClassName("mySlides1");
    var dots1 = document.getElementsByClassName("dot1");
    if (m > slides1.length) { slideIndex1 = 1 }
    if (m < 1) { slideIndex1 = slides1.length }
    for (x = 0; x < slides1.length; x++) {
        slides1[x].style.display = "none";
    }
    for (x = 0; x < dots1.length; x++) {
        dots1[x].className = dots1[x].className.replace(" active", "");
    }
    slides1[slideIndex1 - 1].style.display = "block";
    dots1[slideIndex1 - 1].className += " active";
}
