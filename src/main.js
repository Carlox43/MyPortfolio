import { translations } from "./translations.js";
import "./form.js";
import "./carrusel.js"
import "./email-config.js"

document.addEventListener("DOMContentLoaded", () => {
    /* ------------------ LOADER ------------------ */
    window.addEventListener("load", () => {
        setTimeout(() => {
            document.querySelector(".loader-container")?.classList.add("fade-out");
        }, 1000);
    });

    /* ------------------ AOS ------------------ */
    if (typeof AOS !== "undefined") {
        AOS.init({
            duration: 800,
            easing: "ease-in-out",
            once: true,
            mirror: false,
        });
    }

    /* ------------------ PARTICLES ------------------ */
    if (typeof particlesJS !== "undefined") {
        particlesJS("particles-js", {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: "#1abc9c" },
                shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false },
                },
                size: {
                    value: 3,
                    random: true,
                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false },
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#9b59b6",
                    opacity: 0.4,
                    width: 1,
                },
                move: { enable: true, speed: 2, direction: "none", out_mode: "out" },
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: { enable: true, mode: "grab" },
                    onclick: { enable: true, mode: "push" },
                    resize: true,
                },
                modes: {
                    grab: { distance: 140, line_linked: { opacity: 1 } },
                    push: { particles_nb: 4 },
                },
            },
        });
    }

    /* ------------------ NAVBAR + SCROLL ------------------ */
    window.addEventListener("scroll", () => {
        document.querySelector(".navbar")?.classList.toggle("scrolled", window.scrollY > 50);
        document.querySelector(".back-to-top")?.classList.toggle("active", window.scrollY > 50);
    });

    /* ------------------ BARRAS DE HABILIDADES ------------------ */
    const animateProgressBars = () => {
        document.querySelectorAll(".progress")?.forEach((bar) => {
            const width = bar.getAttribute("data-width");
            bar.style.width = `${width}%`;
        });
    };

    const skillsSection = document.querySelector("#skills");
    if (skillsSection) {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => entry.isIntersecting && animateProgressBars()),
            { threshold: 0.2 }
        );
        observer.observe(skillsSection);
    }

    /* ------------------ MENÚ HAMBURGUESA ------------------ */
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger?.addEventListener("click", () => {
        navLinks?.classList.toggle("active");
        const icon = hamburger.querySelector("i");
        if (icon) {
            icon.classList.toggle("fa-bars");
            icon.classList.toggle("fa-times");
        }
    });

    document.querySelectorAll(".nav-links a")?.forEach((link) =>
        link.addEventListener("click", () => {
            navLinks?.classList.remove("active");
            const icon = hamburger.querySelector("i");
            icon?.classList.remove("fa-times");
            icon?.classList.add("fa-bars");
        })
    );

    /* ------------------ IDIOMA ------------------ */
    const languageToggle = document.querySelector(".language-toggle");
    const languageText = document.querySelector(".language-text");
    let currentLanguage = localStorage.getItem("preferredLanguage") || "es";

    function changeLanguage(lang) {
        currentLanguage = lang;
        const texts = translations[lang];
        document.querySelectorAll("[data-i18n]")?.forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (!texts[key]) return;
            if (["INPUT", "TEXTAREA"].includes(el.tagName)) el.placeholder = texts[key];
            if (typeof updateErrorMessages !== 'undefined') {
                updateErrorMessages(lang);
            }
            else el.textContent = texts[key];
        });
        languageText.textContent = lang === "es" ? "EN" : "ES";
        localStorage.setItem("preferredLanguage", lang);
    }

    languageToggle?.addEventListener("click", () => {
        changeLanguage(currentLanguage === "es" ? "en" : "es");
    });

    changeLanguage(currentLanguage);

    /* ------------------ TEMA ------------------ */
    const themeToggle = document.querySelector(".theme-toggle");
    let currentTheme = localStorage.getItem("preferredTheme") || "dark";

    function changeTheme(theme) {
        currentTheme = theme;
        document.body.classList.toggle("light-theme", theme === "light");
        const icon = themeToggle.querySelector("i");
        icon.className = theme === "dark" ? "fas fa-adjust" : "fas fa-sun";
        localStorage.setItem("preferredTheme", theme);
    }

    themeToggle?.addEventListener("click", () => {
        changeTheme(currentTheme === "dark" ? "light" : "dark");
    });

    changeTheme(currentTheme);
});
