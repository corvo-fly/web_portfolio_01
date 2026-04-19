const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");

            navItems.forEach(link => {
                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + id) {
                    link.classList.add("active");
                }
            });
        }
    });
}, {
    threshold: 0.6
});

sections.forEach(section => observer.observe(section));
