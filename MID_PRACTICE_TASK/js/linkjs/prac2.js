document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");
    const studentNameInput = document.getElementById("studentName");
    const studentMarksInput = document.getElementById("studentMarks");
    const errorMsg = document.getElementById("errorMsg");
    const studentTable = document.getElementById("studentTable");

    submitBtn.addEventListener("click", function() {
        
        errorMsg.innerHTML = "";
        
        let studentName = studentNameInput.value.trim();
        let studentMarks = studentMarksInput.value.trim();

        if (studentName === "") {
            errorMsg.innerHTML = "Name field cannot be empty!";
            return;
        }

        let isValidName = true;
        for (let i = 0; i < studentName.length; i++) {
            const char = studentName.charAt(i);
            if (!((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z'))) {
                isValidName = false;
                break;
            }
        }

        if (!isValidName) {
            errorMsg.innerHTML = "Name must contain only letters!";
            return;
        }

        if (studentMarks === "") {
            errorMsg.innerHTML = "Marks field cannot be empty!";
            return;
        }

        if (isNaN(studentMarks)) {
            errorMsg.innerHTML = "Marks must be a number!";
            return;
        }

        let marks = Number(studentMarks);

        if (marks < 0 || marks > 100) {
            errorMsg.innerHTML = "Marks must be between 0 and 100!";
            return;
        }

        const newRow = document.createElement("tr");

        const nameCell = document.createElement("td");
        nameCell.innerHTML = studentName;

        const marksCell = document.createElement("td");
        marksCell.innerHTML = marks;

        newRow.appendChild(nameCell);
        newRow.appendChild(marksCell);

        if (marks > 50) {
            newRow.style.backgroundColor = "green";
        } else {
            newRow.style.backgroundColor = "red";
        }

        studentTable.appendChild(newRow);

        studentNameInput.value = "";
        studentMarksInput.value = "";
    });
});
