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
