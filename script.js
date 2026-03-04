const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".links, .nav-links");
const navbar = document.querySelector(".Navbar, .navbar");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const clickedMenuButton = target.closest(".menu-btn");
    const clickedInsideMenu = target.closest(".links, .nav-links");
    if (!clickedMenuButton && !clickedInsideMenu) {
      navLinks.classList.remove("active");
    }
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 900 && navLinks) {
    navLinks.classList.remove("active");
  }
});

window.addEventListener("scroll", () => {
  if (!navbar) return;

  if (window.scrollY > 10) {
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  } else {
    navbar.style.boxShadow = "none";
  }
});
