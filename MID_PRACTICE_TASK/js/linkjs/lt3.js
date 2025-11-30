// Variable to track current mode
let isDarkMode = false;

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.getElementById("body");
    const header = document.getElementById("header");
    const content = document.getElementById("content");
    const mainTable = document.getElementById("mainTable");
    const footer = document.getElementById("footer");

    // Theme toggle button click event
    themeToggle.addEventListener("click", function() {
        
        if (isDarkMode) {
            // Switch to Light Mode
            body.style.backgroundColor = "#ffffff";
            body.style.color = "#000000";
            
            header.style.backgroundColor = "#f0f0f0";
            header.style.color = "#000000";
            
            content.style.backgroundColor = "#ffffff";
            content.style.color = "#000000";
            
            mainTable.style.backgroundColor = "#ffffff";
            mainTable.style.color = "#000000";
            mainTable.style.borderColor = "#000000";
            
            footer.style.backgroundColor = "#f0f0f0";
            footer.style.color = "#000000";
            
            themeToggle.innerHTML = "Switch to Dark Mode";
            isDarkMode = false;
            
        } else {
            // Switch to Dark Mode
            body.style.backgroundColor = "#1a1a1a";
            body.style.color = "#ffffff";
            
            header.style.backgroundColor = "#2c2c2c";
            header.style.color = "#ffffff";
            
            content.style.backgroundColor = "#1a1a1a";
            content.style.color = "#ffffff";
            
            mainTable.style.backgroundColor = "#2c2c2c";
            mainTable.style.color = "#ffffff";
            mainTable.style.borderColor = "#ffffff";
            
            footer.style.backgroundColor = "#2c2c2c";
            footer.style.color = "#ffffff";
            
            themeToggle.innerHTML = "Switch to Light Mode";
            isDarkMode = true;
        }
    });
});
