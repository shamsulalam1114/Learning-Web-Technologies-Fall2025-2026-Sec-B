let addedFieldCount = 0;
const MAX_FIELDS = 6;

function addField() {
  if (addedFieldCount >= MAX_FIELDS) {
    alert("You have already added the maximum of 6 fields.");
    return; 
  }

  const fieldSelect = document.getElementById("fieldType");
  const selectedValue = fieldSelect.value;
  const selectedText = fieldSelect.options[fieldSelect.selectedIndex].text;
  const container = document.getElementById("dynamic-fields");

  if (selectedValue === "") {
    alert("Please select a field type from the dropdown.");
    return;
  }

  const newFieldDiv = document.createElement("div");
  const newLabel = document.createElement("label");
  const newInput = document.createElement("input");

  newLabel.textContent = selectedText + ": "; 
  newLabel.setAttribute("for", selectedValue);
  newInput.setAttribute("id", selectedValue);
  newInput.setAttribute("name", selectedValue);
  newInput.setAttribute("placeholder", "Enter " + selectedText);
  newInput.setAttribute("class", "data-input");

  if (selectedValue === "email") {
    newInput.type = "email";
  } else if (selectedValue === "password") {
    newInput.type = "password";
  } else if (selectedValue === "phone") {
    newInput.type = "tel";
  } else {
    newInput.type = "text";
  }

  
  newFieldDiv.appendChild(newLabel);
  newFieldDiv.appendChild(newInput);
  newFieldDiv.appendChild(document.createElement("br"));
  newFieldDiv.appendChild(document.createElement("br"));
  container.appendChild(newFieldDiv);

  fieldSelect.options[fieldSelect.selectedIndex].disabled = true;
  fieldSelect.selectedIndex = 0;  
  addedFieldCount++;
}

function saveData() {
  const allInputs = document.querySelectorAll(".data-input");

  if (allInputs.length === 0) {
    alert("No information to save. Please add some fields first.");
    return;
  }

  let collectedData = "Your Registration Info\n\n";

  allInputs.forEach(input => {

    const label = document.querySelector(`label[for='${input.id}']`);

    const labelText = label.textContent;
    const value = input.value;
    collectedData += `${labelText} ${value}\n`;
  });
  alert(collectedData);
}