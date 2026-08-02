/*====================================================
  24 THE COMPLETE SOLUTION
  Premium Website Script
====================================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*=========================================
      PRELOADER
    =========================================*/

    const preloader = document.getElementById("preloader");

    window.addEventListener("load", function () {

        if (preloader) {

            preloader.style.opacity = "0";

            preloader.style.visibility = "hidden";

            preloader.style.transition = "0.6s";

            setTimeout(() => {

                preloader.remove();

            }, 600);

        }

    });

    /*=========================================
      STICKY NAVBAR
    =========================================*/

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            navbar.classList.add("shadow");

            navbar.style.padding = "12px 0";

        } else {

            navbar.classList.remove("shadow");

            navbar.style.padding = "18px 0";

        }

    });

    /*=========================================
      BACK TO TOP
    =========================================*/

    const backToTop = document.getElementById("backToTop");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 300) {

            backToTop.classList.add("active");

        } else {

            backToTop.classList.remove("active");

        }

    });

    backToTop.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*=========================================
      SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*=========================================
      ACTIVE MENU
    =========================================*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar .nav-link");

    window.addEventListener("scroll", function () {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 120;

            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

    /*=========================================
      COUNTER ANIMATION
    =========================================*/

    const counters = document.querySelectorAll(".counter");

    let started = false;

    function startCounter() {

        counters.forEach(counter => {

            const target = Number(counter.innerText);

            let count = 0;

            const speed = target / 80;

            function update() {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.ceil(count);

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = target;

                }

            }

            update();

        });

    }

    window.addEventListener("scroll", function () {

        const counterSection = document.querySelector(".counter-section");

        if (!counterSection) return;

        const top = counterSection.offsetTop - 500;

        if (window.scrollY > top && !started) {

            started = true;

            startCounter();

        }

    });

    /*=========================================
      HERO PARALLAX
    =========================================*/

    window.addEventListener("scroll", function () {

        const hero = document.querySelector(".hero-section");

        if (hero) {

            hero.style.backgroundPositionY = window.pageYOffset * 0.4 + "px";

        }

    });

    /*=========================================
      FADE IN ELEMENTS
    =========================================*/

    const fadeElements = document.querySelectorAll(".fade-in");

    function reveal() {

        fadeElements.forEach(el => {

            const windowHeight = window.innerHeight;

            const revealTop = el.getBoundingClientRect().top;

            if (revealTop < windowHeight - 120) {

                el.classList.add("active");

            }

        });

    }

    reveal();

    window.addEventListener("scroll", reveal);

    /*=========================================
      SERVICE CARD HOVER
    =========================================*/

    const cards = document.querySelectorAll(".service-card");

    cards.forEach(card => {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-12px)";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0)";

        });

    });

    /*=========================================
      BUTTON RIPPLE EFFECT
    =========================================*/

    document.querySelectorAll(".btn").forEach(button => {

        button.addEventListener("click", function (e) {

            const circle = document.createElement("span");

            const diameter = Math.max(this.clientWidth, this.clientHeight);

            circle.style.width = circle.style.height = diameter + "px";

            circle.style.left = e.offsetX - diameter / 2 + "px";

            circle.style.top = e.offsetY - diameter / 2 + "px";

            circle.classList.add("ripple");

            const ripple = this.getElementsByClassName("ripple")[0];

            if (ripple) {

                ripple.remove();

            }

            this.appendChild(circle);

        });

    });

});

/*====================================================
  RIPPLE STYLE
====================================================*/

const style = document.createElement("style");

style.innerHTML = `

.btn{
position:relative;
overflow:hidden;
}

.ripple{
position:absolute;
border-radius:50%;
transform:scale(0);
background:rgba(255,255,255,.5);
animation:ripple .6s linear;
pointer-events:none;
}

@keyframes ripple{
to{
transform:scale(4);
opacity:0;
}
}

`;

document.head.appendChild(style);
