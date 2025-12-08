
let totalVerifications = 12;
let upcomingAppointment = "Oct 24";
let totalReports = 5;


function updateCardNumbers() {
    const verificationsElement = document.getElementById("verificationsCount");
    const appointmentsElement = document.getElementById("appointmentsCount");
    const reportsElement = document.getElementById("reportsCount");
    
    verificationsElement.innerHTML = totalVerifications;
    appointmentsElement.innerHTML = upcomingAppointment;
    reportsElement.innerHTML = totalReports;
}


function increaseVerifications() {
    totalVerifications = totalVerifications + 1;
    updateCardNumbers();
}


function increaseReports() {
    totalReports = totalReports + 1;
    updateCardNumbers();
}


function resetCounts() {
    totalVerifications = 12;
    upcomingAppointment = "Oct 24";
    totalReports = 5;
    updateCardNumbers();
}


function changeCardColor(cardId, color) {
    const card = document.getElementById(cardId);
    card.style.background = color;
}


document.addEventListener("DOMContentLoaded", function() {

    updateCardNumbers();
    

    const addVerificationBtn = document.getElementById("addVerificationBtn");
    const addReportBtn = document.getElementById("addReportBtn");
    const resetBtn = document.getElementById("resetBtn");
    

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
