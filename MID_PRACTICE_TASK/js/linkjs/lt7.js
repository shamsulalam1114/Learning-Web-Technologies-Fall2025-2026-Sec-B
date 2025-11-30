
let currentFontSize = 16;

document.addEventListener("DOMContentLoaded", function() {
    const sampleText = document.getElementById("sampleText");
    const changeBgBtn = document.getElementById("changeBgBtn");
    const increaseFontBtn = document.getElementById("increaseFontBtn");
    const centerTextBtn = document.getElementById("centerTextBtn");
    const resetBtn = document.getElementById("resetBtn");

   
    function changeBackgroundColor() {
        sampleText.style.backgroundColor = "#ffeb3b";
    }

   
    function increaseFontSize() {
        currentFontSize = currentFontSize + 2;
        sampleText.style.fontSize = currentFontSize + "px";
    }

   
    function centerText() {
        sampleText.style.textAlign = "center";
    }

    
    function resetStyle() {
        sampleText.style.backgroundColor = "";
        sampleText.style.fontSize = "";
        sampleText.style.textAlign = "";
        currentFontSize = 16;
    }

    changeBgBtn.addEventListener("click", changeBackgroundColor);
    increaseFontBtn.addEventListener("click", increaseFontSize);
    centerTextBtn.addEventListener("click", centerText);
    resetBtn.addEventListener("click", resetStyle);
});
