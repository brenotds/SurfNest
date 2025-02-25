function menuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');

  menuButton.addEventListener("click", () => {
    const isActive = menuList.classList.contains("active");
    menuList.classList.toggle("active", !isActive);
    menuButton.classList.toggle("active", !isActive);
  });

  document.onclick = function (e) {
    if (!menuList.contains(e.target) && !menuButton.contains(e.target)) {
      menuList.classList.remove("active");
      menuButton.classList.remove("active");
    }
  };
}

menuMobile();
