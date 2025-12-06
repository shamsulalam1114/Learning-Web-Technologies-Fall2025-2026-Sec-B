// Reports Page JavaScript
let totalReports = 5;
let verifiedReports = 4;

// Function to update report counts
function updateReportCounts() {
    const totalReportsElement = document.getElementById("totalReportsCount");
    const verifiedReportsElement = document.getElementById("verifiedReportsCount");
    
    totalReportsElement.innerHTML = totalReports;
    verifiedReportsElement.innerHTML = verifiedReports;
}

// Function to refresh reports
function refreshReports() {
    alert("Refreshing reports...");
    updateReportCounts();
}

// Function to upload new report
function uploadReport() {
    totalReports = totalReports + 1;
    alert("New report uploaded successfully!");
    updateReportCounts();
}

// Wait for page to load
document.addEventListener("DOMContentLoaded", function() {
    updateReportCounts();
    
    const uploadBtn = document.getElementById("uploadReportBtn");
    const refreshBtn = document.getElementById("refreshBtn");
    
    if (uploadBtn) {
        uploadBtn.addEventListener("click", uploadReport);
    }
    
    if (refreshBtn) {
        refreshBtn.addEventListener("click", refreshReports);
    }
});
