// DARK MODE
function toggleMode() {
    document.documentElement.classList.toggle("dark");

    if (document.documentElement.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// PARALLAX
document.addEventListener("mousemove", e => {
    const l1 = document.getElementById("layer1");
    const l2 = document.getElementById("layer2");

    if(l1 && l2){
        l1.style.transform = `translate(${e.clientX/20}px, ${e.clientY/20}px)`;
        l2.style.transform = `translate(${e.clientX/40}px, ${e.clientY/40}px)`;
    }
});

// CAROUSEL
function scrollProjects(direction) {
    document.getElementById("projectCarousel")
        .scrollBy({ left: direction * 300, behavior: "smooth" });
}