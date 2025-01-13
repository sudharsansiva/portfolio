// ================================== toggle icon navbar ==================================
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

// ================================== scroll sections active link ==================================
let sections = document.querySelectorAll("section");  // Use querySelectorAll to select all sections
let navLinks = document.querySelectorAll("header nav a");  // Make sure navLinks is an array of links

window.onscroll = () => {
    let top = window.scrollY;  // Correct capitalization of window
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {  // Fixed the typo
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
            });
        }
    });

    // ================================== sticky navbar ==================================
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    // ================================== remove toggle icon and navbar ==================================
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

// ================================== menu icon toggle ==================================
menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

// ================================== scroll reveal ==================================
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-ing, .service-content, .portfolio-box, .contact form', { origin: 'bottom' });

// ================================== typed.js ==================================
const typed = new Typed(".mutiple-text", {
    strings: ["Mean Stack Developer"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});
