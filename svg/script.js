var initialpath = `M 0 80 Q 750 100 1510 80`
var finialpath  = `M 0 80 Q 750 100 1510 80`

var string = document.querySelector("#string");

string.addEventListener("mousemove", (e) => {
    var newPath = `M 0 80 Q ${e.x} ${e.y} 1510 80`;

    gsap.to("svg path", {
        attr: { d: newPath },
        ease: "power3.out"
    });
});

string.addEventListener("mouseleave", () => { 
    gsap.to("svg path", {
        attr: { d: finialpath },
        duration: 2.5,
        ease: "elastic.out(1,0.3)",
    });
});