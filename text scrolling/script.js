
window.addEventListener("wheel", (e) => {
  let val = e.deltaY;
  if (val > 0) {
    gsap.to(".move", {
      x: "-100%",
      duration: 2,
      repeat: -1,
      ease: "none",
      overwrite: "auto",
    });
    gsap.to(".move i", {
      rotate: 0,
      overwrite: "auto",
    });
  } else {
    gsap.to(".move", {
      x: "0%",
      duration: 2,
      repeat: -1,
      ease: "none",
      overwrite: "auto",
    });
    gsap.to(".move i", {
      rotate: 180,
      overwrite: "auto",
    });
  }
});