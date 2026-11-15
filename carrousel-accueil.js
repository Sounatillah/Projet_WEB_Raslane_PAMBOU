const slides = Array.from(
    document.querySelectorAll("#hero-accueil .home-hero__slide")
);

let currentIndex = 0;

if (slides.length > 1) {
    setInterval(() => {
        slides[currentIndex].classList.remove("is-active");

        currentIndex = (currentIndex + 1) % slides.length;

        slides[currentIndex].classList.add("is-active");
    }, 6000);
}