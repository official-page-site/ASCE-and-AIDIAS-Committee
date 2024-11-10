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


function showBranch(branch) {
    document.getElementById('yearSelection').style.display = 'block';

    // Hide all year panels initially
    document.querySelectorAll('.year-panel').forEach(panel => panel.style.display = 'none');
}

function showYear(yearId) {
    // Hide all year panels
    document.querySelectorAll('.year-panel').forEach(panel => panel.style.display = 'none');
    
    // Display selected year panel
    document.getElementById(yearId).style.display = 'block';
}
