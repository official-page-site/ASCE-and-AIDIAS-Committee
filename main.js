// import './style.css'

// GSAP is not included by default, so we'll comment out the GSAP-related code
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

// Commented out GSAP animations since GSAP is not included
/*
gsap.to("#main",{
    backgroundColor : "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})
*/