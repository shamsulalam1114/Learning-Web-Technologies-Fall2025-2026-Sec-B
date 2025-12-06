// View Reports Page JavaScript - Generates table dynamically

// JSON Array of dummy reports
const reports = [
    { date: "2023-10-01", name: "CBC Blood Test", doctor: "Dr. Smith", status: "Normal" },
    { date: "2023-09-15", name: "X-Ray Chest", doctor: "City Lab", status: "Critical" },
    { date: "2023-09-10", name: "Urine Test", doctor: "Dr. Johnson", status: "Normal" },
    { date: "2023-08-22", name: "MRI Brain", doctor: "Advanced Imaging Center", status: "Normal" },
    { date: "2023-08-15", name: "Liver Function Test", doctor: "Dr. Williams", status: "Critical" },
    { date: "2023-07-30", name: "ECG", doctor: "Heart Clinic", status: "Normal" }
];

// Function to generate table rows from reports array
function generateReportsTable() {
    const tableBody = document.getElementById("reportsTableBody");
    tableBody.innerHTML = "";
    
    for (let i = 0; i < reports.length; i++) {
        const report = reports[i];
        
        const row = document.createElement("tr");
        
        // Zebra striping - alternate row colors
        if (i % 2 === 1) {
            row.style.backgroundColor = "#f9f9f9";
        }
        
        // Date column
        const dateCell = document.createElement("td");
        dateCell.innerHTML = report.date;
        row.appendChild(dateCell);
        
        // Test Name column
        const nameCell = document.createElement("td");
        nameCell.innerHTML = report.name;
        row.appendChild(nameCell);
        
        // Doctor/Lab column
        const doctorCell = document.createElement("td");
        doctorCell.innerHTML = report.doctor;
        row.appendChild(doctorCell);
        
        // Status column with color coding
        const statusCell = document.createElement("td");
        statusCell.innerHTML = report.status;
        if (report.status === "Normal") {
            statusCell.style.color = "green";
            statusCell.style.fontWeight = "bold";
        } else if (report.status === "Critical") {
            statusCell.style.color = "red";
            statusCell.style.fontWeight = "bold";
        }
        row.appendChild(statusCell);
        
        // Action column with Download button
        const actionCell = document.createElement("td");
        const downloadBtn = document.createElement("button");
        downloadBtn.innerHTML = "Download";
        downloadBtn.style.padding = "5px 15px";
        downloadBtn.style.cursor = "pointer";
        downloadBtn.addEventListener("click", function() {
            downloadReport(report.name, report.date);
        });
        actionCell.appendChild(downloadBtn);
        row.appendChild(actionCell);
        
        tableBody.appendChild(row);
    }
}

// Function to download report (simulated)
function downloadReport(reportName, reportDate) {
    alert("Downloading Report: " + reportName + " from " + reportDate + "...");
}

// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
    generateReportsTable();
});
