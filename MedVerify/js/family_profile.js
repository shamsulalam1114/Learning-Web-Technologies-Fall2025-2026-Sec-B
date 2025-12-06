// Family Profile Page JavaScript
let familyMembersCount = 3;

// Function to update family member count
function updateFamilyCount() {
    const countElement = document.getElementById("familyMembersCount");
    countElement.innerHTML = familyMembersCount;
}

// Function to add family member
function addFamilyMember() {
    const nameInput = document.getElementById("memberName");
    const relationInput = document.getElementById("memberRelation");
    const ageInput = document.getElementById("memberAge");
    const bloodInput = document.getElementById("memberBlood");
    
    const name = nameInput.value;
    const relation = relationInput.value;
    const age = ageInput.value;
    const blood = bloodInput.value;
    
    if (name === "" || relation === "" || age === "" || blood === "") {
        alert("Please fill all fields!");
        return;
    }
    
    familyMembersCount = familyMembersCount + 1;
    updateFamilyCount();
    
    alert("Family member added successfully!\nName: " + name + "\nRelationship: " + relation);
    
    clearForm();
}

// Function to clear form
function clearForm() {
    document.getElementById("memberName").value = "";
    document.getElementById("memberRelation").value = "";
    document.getElementById("memberAge").value = "";
    document.getElementById("memberBlood").value = "";
}

// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
    updateFamilyCount();
    
    const addBtn = document.getElementById("addMemberBtn");
    const clearBtn = document.getElementById("clearFormBtn");
    
    if (addBtn) {
        addBtn.addEventListener("click", addFamilyMember);
    }
    
    if (clearBtn) {
        clearBtn.addEventListener("click", clearForm);
    }
});
