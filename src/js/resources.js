function redirectTo(file) {
    window.location.href = "/src/pages/resources/" + file; // Redirects to the specified HTML file
}

function toggleDropdown(button) {
    const content = button.nextElementSibling;
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}

let selectedBranch = ""; // Store the selected branch
let selectedYear = ""; // Store the selected year

function showBranch(branch) {
    selectedBranch = branch; // Save the branch name

    // Show the year selection panel
    document.getElementById('yearSelection').style.display = 'block';

    // Hide all year panels initially
    document.querySelectorAll('.year-panel').forEach(panel => panel.style.display = 'none');

    // Update the content header to reflect the branch selection
    const contentHeader = document.getElementById('selected-info');
    contentHeader.innerHTML = `<h3>Branch: ${selectedBranch}</h3>`;
}

function showYear(yearId) {
    selectedYear = yearId; // Save the year ID

    // Hide all year panels
    document.querySelectorAll('.year-panel').forEach(panel => panel.style.display = 'none');
    
    // Display the selected year panel
    document.getElementById(yearId).style.display = 'block';

    // Update the content header to reflect the branch and year selection
    const contentHeader = document.getElementById('selected-info');
    contentHeader.innerHTML = `<h3>Branch: ${selectedBranch}, Year: ${getYearName(selectedYear)}</h3>`;
}

// Utility function to get a user-friendly year name
function getYearName(yearId) {
    switch (yearId) {
        case "year1":
            return "1st Year";
        case "year2":
            return "2nd Year";
        case "year3":
            return "3rd Year";
        default:
            return "";
    }
}
