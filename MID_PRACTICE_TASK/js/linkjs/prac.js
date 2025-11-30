function menuClick(menuId) {
    const menuItem = document.getElementById(menuId);
    const contentDisplay = document.getElementById("contentDisplay");
    const menuLink = menuItem.querySelector("a");
    
    let clickCount = parseInt(menuItem.getAttribute("data-count"));
    clickCount = clickCount + 1;
    
    menuItem.setAttribute("data-count", clickCount);
    
    const menuText = menuLink.innerHTML;
    contentDisplay.innerHTML = "You clicked on: " + menuText + " (Clicked " + clickCount + " times)";
    
    reorderMenu();
}

function reorderMenu() {
    const menuList = document.getElementById("menuList");
    const menuItems = Array.from(menuList.getElementsByTagName("li"));
    
    menuItems.sort(function(a, b) {
        const countA = parseInt(a.getAttribute("data-count"));
        const countB = parseInt(b.getAttribute("data-count"));
        return countB - countA;
    });
    
    menuList.innerHTML = "";
    
    for (let i = 0; i < menuItems.length; i++) {
        menuList.appendChild(menuItems[i]);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const resetBtn = document.getElementById("resetBtn");
    
    resetBtn.addEventListener("click", function() {
        const menuList = document.getElementById("menuList");
        const menuItems = menuList.getElementsByTagName("li");
        const contentDisplay = document.getElementById("contentDisplay");
        
        for (let i = 0; i < menuItems.length; i++) {
            menuItems[i].setAttribute("data-count", "0");
        }
        
        contentDisplay.innerHTML = "Welcome to the Patient Management Portal. Click on any menu item to view content.";
        
        reorderMenu();
    });
});
