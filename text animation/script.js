function breakthetext() {
    var h1 = document.querySelector('h1');
    var h1text = h1.textContent;
    let length=h1text.length;
    var splittedh1text = h1text.split("")
    var text = "";
    splittedh1text.forEach((e,idx) => {
        if (idx<=length/2) {
            text += `<span class="first">${e}</span>`;
        }
        else{
            text += `<span class="second">${e}</span>`;
        }

    })
    h1.innerHTML = text;
}
breakthetext();
gsap.from("h1 .first", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    delay: 1,
    stagger: 0.1,
    ease: "back.out(1.7)",
})
gsap.from("h1 .second", {
    opacity: 0,
    y: 50,
    duration: 0.7,
    delay: 1,
    stagger: -0.1,
    ease: "back.out(1.7)",
})
