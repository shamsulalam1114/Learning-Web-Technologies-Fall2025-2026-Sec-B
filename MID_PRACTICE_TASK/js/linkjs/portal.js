document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = document.getElementById("username");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm_password");
  const msg = document.getElementById("pError");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Clear previous error message
    msg.innerHTML = "";
    msg.style.color = "red";

    // Get input values
    let username = usernameInput.value.trim();
    let email = emailInput.value.trim();
    let phone = phoneInput.value.trim();
    let password = passwordInput.value;
    let confirmPassword = confirmPasswordInput.value;

    // Validate Name
    if (username === "") {
      msg.innerHTML = "Please type your name first!";
      return;
    }

    // Validate Email - must contain @ and .
    if (email === "") {
      msg.innerHTML = "Please type your email first!";
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      msg.innerHTML = "Email must contain @ and .";
      return;
    }

    if (email.startsWith("@") || email.endsWith("@") || email.endsWith(".")) {
      msg.innerHTML = "Please enter a valid email address!";
      return;
    }

    // Validate Phone Number - must contain only digits
    if (phone === "") {
      msg.innerHTML = "Please type your phone number first!";
      return;
    }

    if (isNaN(phone) || phone.includes(".") || phone.includes(" ")) {
      msg.innerHTML = "Phone number must contain only digits!";
      return;
    }

    // Validate Password - must be at least 6 characters
    if (password === "") {
      msg.innerHTML = "Please type your password first!";
      return;
    }

    if (password.length < 6) {
      msg.innerHTML = "Password must be at least 6 characters!";
      return;
    }

    // Validate Confirm Password
    if (confirmPassword === "") {
      msg.innerHTML = "Please type your confirm password first!";
      return;
    }

    // Password and Confirm Password must match
    if (password !== confirmPassword) {
      msg.innerHTML = "Password and Confirm Password must match!";
      return;
    }

    // If all validations pass
    msg.innerHTML = "Registration Successful!";
    msg.style.color = "green";  });
});