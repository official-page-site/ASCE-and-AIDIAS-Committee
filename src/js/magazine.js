alert("Hello")

const yearSelect = document.getElementById('yearSelect');
const popup = document.getElementById('popup');
const selectedYearText = document.getElementById('selectedYear');
const pdfViewer = document.querySelector('.pdf-viewer');

alert("Hello")
// Listen for changes on the year select dropdown
yearSelect?.addEventListener('change', () => {
    if (yearSelect.value) {
        selectedYearText.textContent = yearSelect.options[yearSelect.selectedIndex].text;
        popup.style.display = 'block';
    }
});

// Function to display PDF
window.showPDF = function() {
    popup.style.display = 'none';
    const selectedYear = yearSelect.value;
    const pdfUrl = `${selectedYear}`;  // Corrected template literal

    // Clear previous content
    pdfViewer.innerHTML = '<button class="close-button" onclick="closePDF()">×</button>';

    // Load PDF using PDF.js
    pdfjsLib.getDocument(pdfUrl).promise.then(pdfDoc => {
        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            pdfDoc.getPage(pageNum).then(page => {
                const viewport = page.getViewport({ scale: 1.2 });
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');

                canvas.width = viewport.width;
                canvas.height = viewport.height;
                pdfViewer.appendChild(canvas);

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport,
                };
                page.render(renderContext);
            });
        }
    }).catch(error => {
        console.error("Error loading PDF:", error);
        alert("Failed to load PDF. Please check the file path and ensure the PDF exists.");
    });
}

window.closePDF = function() {
    pdfViewer.innerHTML = '';  // Clear PDF content

    yearSelect.selectedIndex = 0; // Reset the dropdown
};


// Function to download PDF
window.downloadPDF = function() {
    const selectedYear = yearSelect.value;
    const link = document.createElement('a');
    link.href = selectedYear;
    link.download = `magazine_${yearSelect.options[yearSelect.selectedIndex].text}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Function to close popup
window.closePopup = function() {
    popup.style.display = 'none';
}

// Adjust dropdown container based on navbar height
document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector('.header');
    const dropdownContainer = document.querySelector('.dropdown-container');

    if (navbar && dropdownContainer) {
        const navbarHeight = navbar.offsetHeight;
        dropdownContainer.style.top = `${navbarHeight}px`;
    }
});