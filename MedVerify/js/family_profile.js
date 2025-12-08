// Family Profile Page JavaScript
let familyMembersCount = 3;
let memberIdCounter = 6575674;

// Function to update family member count
function updateFamilyCount() {
    document.getElementById("familyMembersCount").innerHTML = familyMembersCount;
}

// Function to add new row to table
function addMemberToTable(memberId, name, relation, age, blood) {
    const table = document.getElementById("familyMembersTable");
    
    const newRow = document.createElement("tr");
    
    const idCell = document.createElement("td");
    idCell.innerHTML = memberId;
    newRow.appendChild(idCell);
    
    const nameCell = document.createElement("td");
    nameCell.innerHTML = name;
    newRow.appendChild(nameCell);
    
    const relationCell = document.createElement("td");
    relationCell.innerHTML = relation;
    newRow.appendChild(relationCell);
    
    const ageCell = document.createElement("td");
    ageCell.innerHTML = age;
    newRow.appendChild(ageCell);
    
    const bloodCell = document.createElement("td");
    bloodCell.innerHTML = blood;
    newRow.appendChild(bloodCell);
    
    const actionCell = document.createElement("td");
    actionCell.innerHTML = '<a href="#">View Profile</a>';
    newRow.appendChild(actionCell);
    
    table.appendChild(newRow);
}

// Function to save member to localStorage
function saveMemberToStorage(member) {
    let members = localStorage.getItem("familyMembers");
    
    if (members === null) {
        members = [];
    } else {
        members = JSON.parse(members);
    }
    
    members.push(member);
    localStorage.setItem("familyMembers", JSON.stringify(members));
}

// Function to load members from localStorage on page load
function loadMembersFromStorage() {
    let members = localStorage.getItem("familyMembers");
    
    if (members !== null) {
        members = JSON.parse(members);
        
        for (let i = 0; i < members.length; i++) {
            const member = members[i];
            addMemberToTable(member.id, member.name, member.relation, member.age, member.blood);
            familyMembersCount = familyMembersCount + 1;
            
            if (member.id >= memberIdCounter) {
                memberIdCounter = member.id + 1;
            }
        }
        
        updateFamilyCount();
    }
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
    
    const memberId = memberIdCounter;
    memberIdCounter = memberIdCounter + 1;
    
    const newMember = {
        id: memberId,
        name: name,
        relation: relation,
        age: age,
        blood: blood
    };
    
    addMemberToTable(memberId, name, relation, age, blood);
    
    saveMemberToStorage(newMember);
    
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
    loadMembersFromStorage();
    updateFamilyCount();
    
    document.getElementById("addMemberBtn").addEventListener("click", addFamilyMember);
    document.getElementById("clearFormBtn").addEventListener("click", clearForm);
});
