
function page1(){
    var tl=gsap.timeline();
tl.from("nav h1",{
    y:-20,
    opacity:0,
    duration:0.5,
})
tl.from(".nav-links",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.2,
})
tl.from(".hero",{
    x:-100,
    opacity:0,
    duration:0.5,
},"-=0.5")
tl.from(".hero-right",{
    x:200,
    opacity:0,
    duration:0.5,
},"-=0.5")
tl.from(".brands span",{
    opacity:0,
    duration:0.5,
    stagger:0.2,
})
}
page1();
function page2(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".services",
            start: "top 80%",
            end: "top 20%",
            scrub: 2,
        }
    })

    tl2.from(".section-header",{
        y:100,
        opacity:0,
    })

    tl2.from(".services-grid",{
        y:100,
        opacity:0,
        stagger:0.2,
    })
}

page2();
function page3(){
    var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".services-grid",
        start:"top 10%",
        end:"top 0%",
        scrub:2, 
    }
})

tl3.from(".cta",{
    opacity:0,
    duration:2,
})
tl3.from(".cta-right",{
    y:-30,
    duration:1, 
    delay:0.5,
})
tl3.from(".cta-right",{
    y:-10,
    duration:1,
})
}
page3();
function page4(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger: ".cta",
            start: "top 40%",
            end: "top 0%",
            scrub: 2,
        }
    })

    tl4.from(".section-header1 .tag",{
        y:100,
        opacity:0,
        duration:0.7,
    })
    tl4.from(".section-header1 p",{
        y:100,
        opacity:0,
    },"-=0.7")

    tl4.from(".cases-grid",{
        y:100,
        opacity:0,
        stagger: 0.2,
    })
}
page4();    