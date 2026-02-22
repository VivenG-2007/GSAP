var tl = gsap.timeline();
let menu = document.querySelector(".ri-menu-2-line");
let close = document.querySelector(".ri-close-line");
tl.to("#full", { right: "0%", duration: 1 })
tl.from("#full h4", {
    x: 150,
    duration: 0.7,
    stagger: 0.2,
    opacity: 0
})
tl.pause();
menu.addEventListener("click", () => {
    tl.play();
})

close.addEventListener("click", () => {
    tl.reverse();

})