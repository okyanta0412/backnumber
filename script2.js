const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const headline = document.querySelector(".headline");

let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
};

const tl = gsap.timeline();

tl.fromTo(
    hero, 
    1, 
    { height: "0%" }, 
    { height: "100%", ease: Power2.easeInOut }
    ).fromTo(
        hero, 
        1.2, 
        {width: "100%"}, 
        {width: "80%", ease: Power2.easeInOut}
    ).fromTo(slider, 1.2, {y:"-100%"}, {y:"0%", ease: Power2.easeInOut}, "-=1.2");

