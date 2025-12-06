// Dashboard Data Variables
let totalVerifications = 12;
let upcomingAppointment = "Oct 24";
let totalReports = 5;

// Function to update card numbers
function updateCardNumbers() {
    const verificationsElement = document.getElementById("verificationsCount");
    const appointmentsElement = document.getElementById("appointmentsCount");
    const reportsElement = document.getElementById("reportsCount");
    
    verificationsElement.innerHTML = totalVerifications;
    appointmentsElement.innerHTML = upcomingAppointment;
    reportsElement.innerHTML = totalReports;
}

// Function to increase verifications count
function increaseVerifications() {
    totalVerifications = totalVerifications + 1;
    updateCardNumbers();
}

// Function to increase reports count
function increaseReports() {
    totalReports = totalReports + 1;
    updateCardNumbers();
}

// Function to reset all counts
function resetCounts() {
    totalVerifications = 12;
    upcomingAppointment = "Oct 24";
    totalReports = 5;
    updateCardNumbers();
}

// Function to change card colors
function changeCardColor(cardId, color) {
    const card = document.getElementById(cardId);
    card.style.background = color;
}

// Wait for page to load completely
document.addEventListener("DOMContentLoaded", function() {
    // Update the numbers when page loads
    updateCardNumbers();
    
    // Get all buttons if they exist
    const addVerificationBtn = document.getElementById("addVerificationBtn");
    const addReportBtn = document.getElementById("addReportBtn");
    const resetBtn = document.getElementById("resetBtn");
    
    // Add event listeners to buttons
    if (addVerificationBtn) {
        addVerificationBtn.addEventListener("click", increaseVerifications);
    }
    
    if (addReportBtn) {
        addReportBtn.addEventListener("click", increaseReports);
    }
    
    if (resetBtn) {
        resetBtn.addEventListener("click", resetCounts);
    }
});
