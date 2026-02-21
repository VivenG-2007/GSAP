let mouse = document.getElementById("main");
let img = document.querySelector("#main img");
let cursor=document.getElementById("cursor");


mouse.addEventListener("mousemove", function(dets) {
    gsap.to("#cursor", {
        x: dets.clientX,
        y: dets.clientY,
        duration: 0.2,
        ease: "power2.out"
    });
});

img.addEventListener("mouseenter", function() {
    cursor.innerHTML = "<span class='cursor-text'>Read More</span>";
    gsap.to("#cursor", {
        scale: 3
    });
});

img.addEventListener("mouseleave", function() {
    gsap.to("#cursor", {
        scale: 1
    });
});