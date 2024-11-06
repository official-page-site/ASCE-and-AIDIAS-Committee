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