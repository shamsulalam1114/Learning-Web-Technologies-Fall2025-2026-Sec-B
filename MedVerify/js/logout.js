// Logout Page JavaScript

// Function to display current time
function displayLogoutTime() {
    const timeElement = document.getElementById("timeDisplay");
    const currentDate = new Date();
    
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    const timeString = hours + ":" + minutes + ":" + seconds;
    timeElement.innerHTML = timeString;
}

// Function to login again
function loginAgain() {
    alert("Redirecting to login page...");
    window.location.href = "dashboard.html";
}

// Function to go to homepage
function goHome() {
    alert("Redirecting to homepage...");
    window.location.href = "dashboard.html";
}

// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
    displayLogoutTime();
    
    const loginBtn = document.getElementById("loginAgainBtn");
    const homeBtn = document.getElementById("goHomeBtn");
    
    if (loginBtn) {
        loginBtn.addEventListener("click", loginAgain);
    }
    
    if (homeBtn) {
        homeBtn.addEventListener("click", goHome);
    }
});
