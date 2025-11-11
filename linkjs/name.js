document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("btn");
    const username = document.getElementById("username");
    const pError = document.getElementById("pError");

    btn.addEventListener("click", function (event) {
        event.preventDefault();

        const nameValue = username.value.trim();
        let error = "";

        
        if (nameValue === "") {
            error = "Name cannot be empty.";
        }
        
        else if (nameValue.split(" ").length < 2) {
            error = "Name must contain at least two words.";
        }
        
        else if (!/^[a-zA-Z][a-zA-Z.\-\s]*$/.test(nameValue)) {
            error = "Name can only contain letters, dot (.), or dash (-), and must start with a letter.";
        }

        
        if (error !== "") {
            pError.textContent = error;
            pError.style.color = "red";
        } else {
            pError.textContent = "Valid name!";
            pError.style.color = "green";
        }
    });
});