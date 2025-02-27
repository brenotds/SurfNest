"use strict";

function menuMobile() {
  const mobileMenu = document.querySelector(".btn-hamb");
  const navList = document.querySelector(".nav-list");

  mobileMenu.addEventListener("click", () => {
    const isActive = navList.classList.contains("active");
    navList.classList.toggle("active", !isActive);
    mobileMenu.classList.toggle("active", !isActive);
  });
}
menuMobile();

function scrollSmooth() {
  const links = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  links.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
scrollSmooth();

function animaScroll() {
  const content = document.querySelectorAll(".anima-scroll");

  window.addEventListener("scroll", checkContent);

  function checkContent() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    content.forEach((box) => {
      const contentTop = box.getBoundingClientRect().top;

      if (contentTop < triggerBottom) {
        box.classList.add("show");
      }
    });
  }
}
animaScroll();
