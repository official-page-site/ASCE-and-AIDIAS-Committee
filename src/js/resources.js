let selectedBranch = ""; // Store the selected branch
let selectedYear = ""; // Store the selected year

// Function to handle branch selection
function showBranch(branch) {
    selectedBranch = branch; // Save the branch name
    document.getElementById('yearSelection').style.display = 'block'; // Show the year selection
    updateDisplay(); // Update card visibility
}

// Function to handle year selection
function showYear(year) {
    selectedYear = year; // Save the year ID
    updateDisplay(); // Update card visibility
}

// Function to update the display of cards
function updateDisplay() {
    const cards = document.querySelectorAll('.subject-card');

    // Iterate through all cards to determine their visibility
    cards.forEach(card => {
        const cardBranch = card.getAttribute('data-branch');
        const cardYear = card.getAttribute('data-year');

        // Check if the card matches the selected branch and year
        const matchesBranch = !selectedBranch || cardBranch === selectedBranch;
        const matchesYear = !selectedYear || cardYear === selectedYear;

        // Toggle card visibility
        card.style.display = matchesBranch && matchesYear ? 'block' : 'none';
    });

    // Update selected information
    const selectedInfo = document.getElementById('selected-info');
    selectedInfo.textContent = 
        selectedBranch || selectedYear
            ? `Showing Subjects for ${selectedBranch || "all branches"}, ${getYearName(selectedYear) || "all years"}`
            : 'Please select a branch and year.';
}

// Utility function to convert year ID to user-friendly names
function getYearName(yearId) {
    switch (yearId) {
        case 'year1': return '1st Year';
        case 'year2': return '2nd Year';
        case 'year3': return '3rd Year';
        default: return '';
    }
}

// Initialization (reset selections)
document.addEventListener('DOMContentLoaded', () => {
    updateDisplay();
});
