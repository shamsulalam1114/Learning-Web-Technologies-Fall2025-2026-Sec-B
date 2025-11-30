document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("btn");
  const usernameInput = document.getElementById("username");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm_password");
  const msg = document.getElementById("pError");

  btn.addEventListener("click", function (event) {
    event.preventDefault();

    let username = usernameInput.value.trim();
    let email = document.getElementById("email").value;

    if (username === "") {
      msg.innerHTML = "Please type your name first!";
      msg.style.color = "red";
      return;
    }
  

    if (username.split(" ").length < 2) {
      msg.innerHTML = "Name must contain at least two words.";
      msg.style.color = "red";
      return;
    }

    const firstChar = username.charAt(0);
    if (!((firstChar >= 'A' && firstChar <= 'Z') || (firstChar >= 'a' && firstChar <= 'z'))) {
      msg.innerHTML = "Name must start with a letter.";
      msg.style.color = "red";
      return;
    }

    for (let i = 0; i < username.length; i++) {
      const ch = username.charAt(i);
      const isLetter = (ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z');
      const isAllowed = isLetter || ch === '.' || ch === '-' || ch === ' ';

      if (!isAllowed) {
        msg.innerHTML = "Name can only contain letters, dot (.), dash (-), or spaces.";
        msg.style.color = "red";
        return;
      }
    }
    if (email === "") {
      msg.innerHTML = "Please type your email first!";
      msg.style.color = "red";
      return;
    }

    if (
      !email.includes("@") || email.startsWith("@") || email.endsWith("@") ||                         
      !email.includes(".") || email.lastIndexOf(".") < email.indexOf("@") + 2 || email.endsWith(".") ) 
      {
      msg.innerHTML = "Please enter a valid email address!";
      msg.style.color = "red";
      return;
    }
   
    msg.innerHTML = "Form submitted successfully!";
    msg.style.color = "green";

  });
});