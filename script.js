window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500);
    }, 800);
});

/* DARK MODE */
const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme",
        document.body.classList.contains("dark") ? "dark" : "light"
    );
});

if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
}

/* ANIMATION */
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
},{threshold:0.1});

document.querySelectorAll(".card, .about, .gallery").forEach(el=>{
    el.style.opacity="0";
    el.style.transform="translateY(40px)";
    el.style.transition="0.8s";
    observer.observe(el);
});

/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener("click",e=>{
        e.preventDefault();
        document.querySelector(a.getAttribute("href"))
        .scrollIntoView({behavior:"smooth"});
    });
});
