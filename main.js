let currentSlide = 0;
const slides = document.querySelectorAll('.unique-product');
const totalSlides = slides.length;
const itemsToShow = 3; // Show 3 items per slide

function moveSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - itemsToShow; // Go to last slide if going back from the first
    } else if (currentSlide + itemsToShow > totalSlides) {
        currentSlide = 0; // Go to the first slide if going forward from the last
    }

    const slideWidth = slides[0].clientWidth;
    const newTransformValue = -currentSlide * slideWidth;

    document.querySelector('.unique-product-container').style.transform = `translateX(${newTransformValue}px)`;
}

// You can also set an auto slider if desired
setInterval(() => moveSlide(1), 5000); // Auto slide every 5 seconds



