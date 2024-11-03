import '../css/style.css'

// Cursor functionality if elements exist
const cursor = document.querySelector("#cursor")
const cursorBlur = document.querySelector("#cursor-blur")

if (cursor && cursorBlur) {
    document.addEventListener("mousemove", function(dets) {
        cursor.style.left = dets.x + "px"
        cursor.style.top = dets.y + "px"
        cursorBlur.style.left = dets.x - 250 + "px"
        cursorBlur.style.top = dets.y - 250 + "px"
    })
}