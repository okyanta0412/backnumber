let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");

btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
};


document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    gsap.to(".circle",{
        x: mouseX,
        y: mouseY,
        stagger: -0.1,
    });
});