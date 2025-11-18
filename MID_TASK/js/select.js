let addedFieldCount = 0;
const MAX_FIELDS = 6;

function addField() {
  if (addedFieldCount >= MAX_FIELDS) {
    alert("You have already added the maximum of 6 fields.");
    return;
  }

  const choiceInput = document.getElementById("userChoice");
  const userValue = choiceInput.value.trim().toLowerCase();
  const container = document.getElementById("dynamic-fields");

  if (userValue === "") {
    alert("Please type a field name (e.g., username, email, gender).");
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
    inputType = "text";
  } else if (userValue === "email") {
    labelText = "Email Address";
    inputType = "text";
  } else if (userValue === "password") {
    labelText = "Password";
    inputType = "password";
  } else if (userValue === "gender") {
    labelText = "Gender";
    inputType = "text";
  } else if (userValue === "address") {
    labelText = "Address";
    inputType = "text";
  } else if (userValue === "phone") {
    labelText = "Phone Number";
    inputType = "tel";
  } else {
    alert("Invalid field name! Try: username, email, password, gender, address, phone");
    return;
  }

  const newFieldDiv = document.createElement("div");
  const newLabel = document.createElement("label");
  const newInput = document.createElement("input");

  newLabel.textContent = labelText + ": ";
  newLabel.setAttribute("for", userValue);

  newInput.setAttribute("id", userValue);
  newInput.setAttribute("name", userValue);
  newInput.setAttribute("type", inputType);
  newInput.setAttribute("placeholder", "Enter " + labelText);
  newInput.setAttribute("class", "data-input");

  newFieldDiv.appendChild(newLabel);
  newFieldDiv.appendChild(newInput);

  newFieldDiv.appendChild(document.createElement("br"));
  newFieldDiv.appendChild(document.createElement("br"));

  container.appendChild(newFieldDiv);

  choiceInput.value = "";
  addedFieldCount++;
}

function saveData() {
  const allInputs = document.querySelectorAll(".data-input");
  const msg = document.getElementById("pError");

  msg.innerHTML = "";
  msg.style.color = "black";

  if (allInputs.length === 0) {
    alert("No information to save. Please add some fields first.");
    return;
  }

  const emailInput = document.getElementById("email");
  if (emailInput) {
    let email = emailInput.value;
    if (email === "") {
      msg.innerHTML = "Please type your email first!";
      msg.style.color = "red";
      return;
    }
    if (
      !email.includes("@") ||
      email.startsWith("@") ||
      email.endsWith("@") ||
      !email.includes(".") ||
      email.lastIndexOf(".") < email.indexOf("@") + 2 ||
      email.endsWith(".")
    ) {
      msg.innerHTML = "Please enter a valid email address!";
      msg.style.color = "red";
      return;
    }
  }

  const genderInput = document.getElementById("gender"); 

  if (genderInput) {
    
    let genderValue = genderInput.value.trim().toLowerCase();

    if (genderValue === "") {
      msg.innerHTML = "Please enter your gender!";
      msg.style.color = "red";
      return;
    }

    if (genderValue !== "male" && genderValue !== "female" && genderValue !== "other") {
      msg.innerHTML = "Gender must be: Male, Female, or Other";
      msg.style.color = "red";
      return;
    }
  }

  msg.innerHTML = "Validation Successful!";
  msg.style.color = "green";

  let collectedData = "--- Your Registration Info ---\n\n";

  allInputs.forEach(input => {
    const label = document.querySelector(`label[for='${input.id}']`);
    const labelText = label.textContent;
    const value = input.value;
    collectedData += `${labelText} ${value}\n`;
  });


  setTimeout(() => {
    alert(collectedData);
  }, 500);
}