
const images = [
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700", 
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700",  
    "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=700",  
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700",  
    "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=700"   
];

let currentIndex = 0;
let autoSlideInterval;

document.addEventListener("DOMContentLoaded", function() {
    const sliderImage = document.getElementById("sliderImage");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    
    sliderImage.src = images[currentIndex];

    
    prevBtn.addEventListener("click", function() {
        currentIndex--;
        
        
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        }
        
        sliderImage.src = images[currentIndex];
    });

    
    nextBtn.addEventListener("click", function() {
        currentIndex++;
        
        
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        
        sliderImage.src = images[currentIndex];
    });

    
    autoSlideInterval = setInterval(function() {
        currentIndex++;
        
        
        if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        
        sliderImage.src = images[currentIndex];
    }, 3000); 

});
