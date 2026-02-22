/*gsap.to("#box1",{
    x:1000,
    duration: 3,
    rotate:360,
    delay:1,
    backgroundColor: "blue",

})
gsap.to("#box2",{
    x:1000,
    backgroundColor:"yellow",
    duration: 3,
    rotate:360,
    delay:4,

})
gsap.to("#box3",{
    x:1000,
    backgroundColor:"pink",
    duration: 3,
    rotate:360,
    delay:7,
})

timelines
let tl=gsap.timeline();
tl.to("#box1",{
    x:1000,
    duration: 3,
    rotate:360,
    delay:1,
    backgroundColor: "blue",
})
tl.to("#box2",{
    x:1000,
    backgroundColor:"yellow",
    duration: 3,
    rotate:360,
})
tl.to("#box3",{
    x:1000,
    backgroundColor:"pink",
    duration: 3,
    rotate:360,
})
gsap.from("#page1 .box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
});

gsap.from("#page2 .box", {
  scale: 0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller:"body",
    markers: true,
    start:"top 60%",
  }
});

gsap.from("#page3 .box", {
  scale: 0,
  duration: 2,
  delay: 1,
  rotate: 360,
});
gsap.from("#page2 .box", {
  scale: 0,
  opacity:0,
  duration: 2,
  rotate: 360,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller:"body",
    markers: true,
    start:"top 60%",
    end:"top 30%",
    scrub: 2,
    pin:true,
  }
});*/
gsap.fromTo(".page1 h1",
  { x: "150vw" },  
  {
    x: "-150vw", 
    ease: "none",
    scrollTrigger: {
      trigger: ".page1",
      scroller: "body",
      pin: true,
      start: "top 0%",
      end: "top -300%",
      scrub: 2,
    }
  }
)