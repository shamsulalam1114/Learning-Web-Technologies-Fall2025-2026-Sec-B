let fieldCount = 0;

function addField() {
  if (fieldCount >= 6) {
    alert("Maximum 6 fields allowed.");
    return;
  }

  const choiceInput = document.getElementById("userChoice");
  const userValue = choiceInput.value.trim().toLowerCase();
  const container = document.getElementById("dynamic-fields");

  if (userValue === "") {
    alert("Please type a field name.");
    return;
  }

  if (document.getElementById(userValue)) {
    alert("This field is already added!");
    return;
  }

  let inputType = "text";
  let labelText = "";

  if (userValue === "username") {
    labelText = "User Name";
  } else if (userValue === "email") {
    labelText = "Email Address";
  } else if (userValue === "password") {
    labelText = "Password";
    inputType = "password";
  } else if (userValue === "gender") {
    labelText = "Gender";
  } else if (userValue === "address") {
    labelText = "Address";
  } else if (userValue === "phone") {
    labelText = "Phone Number";
  } else {
    alert("Invalid field! Try: username, email, password, gender, address, phone");
    return;
  }

  const newDiv = document.createElement("div");
  const newLabel = document.createElement("label");
  const newInput = document.createElement("input");

  newLabel.innerHTML = labelText + ": ";
  newInput.id = userValue;
  newInput.type = inputType;
  newInput.className = "data-input";

  newDiv.appendChild(newLabel);
  newDiv.appendChild(newInput);
  newDiv.appendChild(document.createElement("br"));
  newDiv.appendChild(document.createElement("br"));

  container.appendChild(newDiv);

  choiceInput.value = "";
  fieldCount++;
}

function saveData() {
  const allInputs = document.querySelectorAll(".data-input");
  const msg = document.getElementById("pError");

  msg.innerHTML = "";

  if (allInputs.length === 0) {
    alert("Please add fields first.");
    return;
  }

  const username = document.getElementById("username");
  if (username) {
    let name = username.value.trim();
    if (name === "") {
      msg.innerHTML = "Please type your name!";
      return;
    }
    if (name.split(" ").length < 2) {
      msg.innerHTML = "Name must have at least two words.";
      return;
    }
  }

  const email = document.getElementById("email");
  if (email) {
    let emailValue = email.value;
    if (emailValue === "") {
      msg.innerHTML = "Please type your email!";
      return;
    }
    if (!emailValue.includes("@") || !emailValue.includes(".")) {
      msg.innerHTML = "Please enter a valid email!";
      return;
    }
  }

  const password = document.getElementById("password");
  if (password) {
    let pass = password.value;
    if (pass === "") {
      msg.innerHTML = "Please enter a password!";
      return;
    }
    if (pass.length < 6) {
      msg.innerHTML = "Password must be at least 6 characters.";
      return;
    }
  }

  const address = document.getElementById("address");
  if (address) {
    if (address.value.trim() === "") {
      msg.innerHTML = "Please enter your address!";
      return;
    }
  }

  const phone = document.getElementById("phone");
  if (phone) {
    let phoneValue = phone.value.trim();
    if (phoneValue === "") {
      msg.innerHTML = "Please enter your phone number!";
      return;
    }
    if (isNaN(phoneValue)) {
      msg.innerHTML = "Phone number must be digits only.";
      return;
    }
    if (phoneValue.length !== 11) {
      msg.innerHTML = "Phone number must be 11 digits.";
      return;
    }
  }

  const gender = document.getElementById("gender");
  if (gender) {
    let genderValue = gender.value.trim().toLowerCase();
    if (genderValue === "") {
      msg.innerHTML = "Please enter your gender!";
      return;
    }
    if (genderValue !== "male" && genderValue !== "female" && genderValue !== "other") {
      msg.innerHTML = "Gender must be Male, Female, or Other.";
      return;
    }
  }

  msg.innerHTML = "All Data is Valid!";
  msg.style.color = "green";

  let data = "Your Registration Info:\n\n";
  for (let i = 0; i < allInputs.length; i++) {
    data += allInputs[i].id + ": " + allInputs[i].value + "\n";
  }

  alert(data);
}