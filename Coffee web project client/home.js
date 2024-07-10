const header = document.querySelector('header')
        const menuBtn = document.querySelector('#menu-btn')
        const closeMenuBtn = document.querySelector('#close-menu-btn')

        //Toggle mobile menu on menu button click
        menuBtn.addEventListener("click", () => {
            header.classList.toggle("show-mobile-menu");
        });

        //Toggle mobile menu on close menu button click
        closeMenuBtn.addEventListener("click", () => {
            menuBtn.click();
            
        });

const btn = document.getElementsByClassName("btn");
const slide = document.getElementById("slide")
const slides = document.querySelectorAll(".slide-col");
const totalSlides = slides.length;
let currentIndex = 0;
let slideInterval;

// Function to update slide position
function updateSlidePosition() {
    const slideWidth = document.querySelector('.slide-container').offsetWidth;
    slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

// Function to go to the next slide
function goToNextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
}

// Function to go to the previous slide
function goToPrevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
}

// Event listeners for buttons
btn[0].onclick = function() {
    goToPrevSlide();
    resetSlideInterval();
};

btn[1].onclick = function() {
    goToNextSlide();
    resetSlideInterval();
};

// Auto-slide functionality
function startSlideInterval() {
    slideInterval = setInterval(goToNextSlide, 4000); // Change slide every 3 seconds
}

function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
}

// Start auto-slide on page load
startSlideInterval();

// Update slide position on window resize
window.addEventListener('resize', updateSlidePosition);

// Initial setup to show the first image
updateSlidePosition();




function updateSlidePosition() {
        const slideWidth = document.querySelector('.slide-container').offsetWidth;
        
    slide.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

btn[0].onclick = function() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlidePosition();
};

btn[1].onclick = function() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlidePosition();
};

// Call updateSlidePosition on window resize to adjust slide position
window.addEventListener('resize', updateSlidePosition);

// Initial setup to show the first image
updateSlidePosition();