// Function to handle menu click
function menuClick(menuId) {
    const menuItem = document.getElementById(menuId);
    const contentDisplay = document.getElementById("contentDisplay");
    const menuLink = menuItem.querySelector("a");
    
    // Get current click count
    let clickCount = parseInt(menuItem.getAttribute("data-count"));
    clickCount = clickCount + 1;
    
    // Update click count
    menuItem.setAttribute("data-count", clickCount);
    
    // Display content based on menu clicked
    const menuText = menuLink.innerHTML;
    contentDisplay.innerHTML = "You clicked on: " + menuText + " (Clicked " + clickCount + " times)";
    
    // Apply visual emphasis based on click count
    if (clickCount >= 5) {
        menuItem.style.backgroundColor = "#ff5722";
        menuItem.style.fontWeight = "bold";
        menuItem.style.color = "white";
    } else if (clickCount >= 3) {
        menuItem.style.backgroundColor = "#ffeb3b";
        menuItem.style.fontWeight = "bold";
    } else if (clickCount >= 1) {
        menuItem.style.backgroundColor = "#e0e0e0";
    }
    
    // Reorder menu items
    reorderMenu();
}

// Function to reorder menu based on click count
function reorderMenu() {
    const menuList = document.getElementById("menuList");
    const menuItems = Array.from(menuList.getElementsByTagName("li"));
    
    // Sort menu items by click count (descending)
    menuItems.sort(function(a, b) {
        const countA = parseInt(a.getAttribute("data-count"));
        const countB = parseInt(b.getAttribute("data-count"));
        return countB - countA;
    });
    
    // Clear the menu list
    menuList.innerHTML = "";
    
    // Add sorted items back to the list
    for (let i = 0; i < menuItems.length; i++) {
        menuList.appendChild(menuItems[i]);
    }
}

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function() {
    const resetBtn = document.getElementById("resetBtn");
    
    // Reset button functionality
    resetBtn.addEventListener("click", function() {
        const menuList = document.getElementById("menuList");
        const menuItems = menuList.getElementsByTagName("li");
        const contentDisplay = document.getElementById("contentDisplay");
        
        // Reset all menu items
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].setAttribute("data-count", "0");
            menuItems[i].style.backgroundColor = "";
            menuItems[i].style.fontWeight = "";
            menuItems[i].style.color = "";
        }
        
        // Reset content display
        contentDisplay.innerHTML = "Welcome to the Patient Management Portal. Click on any menu item to view content.";
        
        // Reorder menu to original order
        reorderMenu();
    });
});
