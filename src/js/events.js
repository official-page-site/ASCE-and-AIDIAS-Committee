let items = document.querySelectorAll(".item");
let slide = document.querySelector(".slide");

// Function to move the slider to the clicked item
items.forEach((item, index) => {
	item.addEventListener("click", function () {
		// Move the clicked item to the second position (nth-child(2))
		if (!item.classList.contains("active"))
        {
            reorderSlider(index);
        }
	});
});

// Button event listeners for next and previous
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

// Reorder the slider so that the clicked item becomes the main image (second item in the slider)
function reorderSlider(clickedIndex) {
	document.querySelector(".slide").appendChild(items[0]);
	items = document.querySelectorAll(".item"); // Update NodeList
	applyActiveClass();
}

next.addEventListener("click", function () {
	document.querySelector(".slide").appendChild(items[0]);
	items = document.querySelectorAll(".item"); // Update NodeList
	applyActiveClass();
});

prev.addEventListener("click", function () {
    document.querySelector(".slide").prepend(items[items.length - 1]);
	items = document.querySelectorAll(".item"); // Update NodeList
    applyActiveClass();
});

function applyActiveClass() {
	// Remove 'active' class from all items
	items.forEach((item) => {
		item.classList.remove("active");
	});

	// Add 'active' class to the main item (nth-child(2))
	let currentMainItem = document.querySelector(".item:nth-child(2)");
	currentMainItem.classList.add("active");
}