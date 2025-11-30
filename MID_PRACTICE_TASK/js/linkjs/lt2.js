// Array of image URLs - travel destinations
const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700",  // Mountain
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700",  // Beach
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700",  // Sunset Beach
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700",  // Lake
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700"   // Paris
];

let currentIndex = 0;
let autoSlideInterval;

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const sliderImage = document.getElementById("sliderImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    // Display the first image
    sliderImage.src = images[currentIndex];

    // Previous button click event
    prevBtn.addEventListener("click", function() {
        currentIndex--;
        
        // Loop to last image if at the beginning
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        
        sliderImage.src = images[currentIndex];
    });

    // Next button click event
    nextBtn.addEventListener("click", function() {
        currentIndex++;
        
        // Loop to first image if at the end
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        
        sliderImage.src = images[currentIndex];
    });

    // Automatic slideshow - change image every 3 seconds
    autoSlideInterval = setInterval(function() {
        currentIndex++;
        
        // Loop to first image if at the end
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        
        sliderImage.src = images[currentIndex];
    }, 3000);  // 3000 milliseconds = 3 seconds

});
