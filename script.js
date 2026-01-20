const obs = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(() => {
    obs.forEach(el => {
        el.classList.remove("hidden");
        el.classList.add("showen");
    });
});

obs.forEach(el => {
    observer.observe(el);
});
