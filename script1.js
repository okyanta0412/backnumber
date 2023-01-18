let imagesItems = [...document.querySelectorAll(".img-wrap")]
console.log(imagesItems);
let titles1 = [...document.querySelectorAll("h")];
let titles = [...document.querySelectorAll("h2")];
let ps = [...document.querySelectorAll("p")];
let p1s = [...document.querySelectorAll("p1")];
let p2s = [...document.querySelectorAll("p2")];
let p3s = [...document.querySelectorAll("p3")];
let titleMessage = document.querySelector(".title");
let nav = document.querySelector("#navArea");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector("#mask");


btn.onclick = () => {
    nav.classList.toggle("open");
};

mask.onclick = () => {
    nav.classList.toggle("open");
};

let setItemActive = (entries) => {
    //console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add("active")
        }else{
            entry.target.classList.remove("active");

        }
    });
};

let options = {
    rootMargin: "0px",
    threshold: 0.1, 
};

//API
let observer = new IntersectionObserver(setItemActive, options);

observer.observe(titleMessage);

imagesItems.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(./img/${index + 2}.jpg)`;
    index % 2 == 0 ? (item.style.left = "50%") : (item.style.left = "5%");
    observer.observe(item);
});

titles1.map((title1, index) => {
    index % 2 == 0 ? (title1.style.left = "40%") : (title1.style.left = "35%");
    observer.observe(title1);
});

titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "45%") : (title.style.left = "35%");
    observer.observe(title);
});

ps.map((p, index) => {
    index % 2 == 0 ? (p.style.left = "45%") : (p.style.left = "35%");
    observer.observe(p);
});

p1s.map((p1, index) => {
    index % 2 == 0 ? (p1.style.left = "45%") : (p1.style.left = "35%");
    observer.observe(p1);
});

p2s.map((p2, index) => {
    index % 2 == 0 ? (p2.style.left = "28%") : (p2.style.left = "70%");
    observer.observe(p2);
});

p3s.map((p3, index) => {
    index % 2 == 0 ? (p3.style.left = "41.55%") : (p3.style.left = "70%");
    observer.observe(p3);
});


