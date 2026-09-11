document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       SCROLL REVEAL
    ========================= */

    const revealElements = document.querySelectorAll(
        ".feature-card, .screenshot, .about-box, .download, .module"
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (!entry.isIntersecting) {
                    return;
                }

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        observer.observe(element);
    });


    /* =========================
       FAKE GUI TOGGLES
    ========================= */

    const toggles = document.querySelectorAll(".toggle");

    toggles.forEach((toggle) => {

        toggle.addEventListener("click", () => {
            toggle.classList.toggle("on");
        });

    });


    /* =========================
       FAKE GUI CATEGORIES
    ========================= */

    const categories = document.querySelectorAll(".side");

    categories.forEach((category) => {

        category.addEventListener("click", () => {

            categories.forEach((item) => {
                item.classList.remove("active");
            });

            category.classList.add("active");

        });

    });


    /* =========================
       NAVBAR SCROLL
    ========================= */

    const navbar = document.querySelector(".navbar");

    const updateNavbar = () => {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 20) {

            navbar.style.background =
                "rgba(7, 7, 11, 0.88)";

            navbar.style.borderBottomColor =
                "rgba(255, 255, 255, 0.075)";

        } else {

            navbar.style.background =
                "rgba(7, 7, 11, 0.72)";

            navbar.style.borderBottomColor =
                "rgba(255, 255, 255, 0.055)";
        }
    };

    window.addEventListener(
        "scroll",
        updateNavbar,
        { passive: true }
    );

    updateNavbar();


    /* =========================
       SMOOTH ANCHOR SCROLL
    ========================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", (event) => {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });


    /* =========================
       HERO GUI PARALLAX
    ========================= */

    const fakeWindow = document.querySelector(".fake-window");

    if (fakeWindow && window.matchMedia("(pointer: fine)").matches) {

        fakeWindow.addEventListener("mousemove", (event) => {

            const rect = fakeWindow.getBoundingClientRect();

            const x =
                (event.clientX - rect.left) / rect.width - 0.5;

            const y =
                (event.clientY - rect.top) / rect.height - 0.5;

            fakeWindow.style.transform =
                `perspective(1200px)
                 rotateY(${x * 5}deg)
                 rotateX(${y * -4}deg)
                 translateY(-4px)`;
        });

        fakeWindow.addEventListener("mouseleave", () => {

            fakeWindow.style.transform =
                `perspective(1200px)
                 rotateY(-4deg)
                 rotateX(2deg)`;
        });
    }


    /* =========================
       DISABLE BROKEN IMAGE
       EFFECT
    ========================= */

    const images = document.querySelectorAll(".screenshot img");

    images.forEach((image) => {

        image.addEventListener("error", () => {

            image.style.display = "none";

            const parent = image.parentElement;

            if (parent) {

                const placeholder =
                    document.createElement("div");

                placeholder.className = "placeholder";

                placeholder.textContent =
                    "GLOOMWARE";

                parent.appendChild(placeholder);
            }

        });

    });


    /* =========================
       PAGE LOADED
    ========================= */

    document.body.classList.add("loaded");

});
