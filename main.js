const menuToggle = document.querySelector(".barsMenu");
const smallNav = document.querySelector(".smallNavLinks");

menuToggle.addEventListener("click", () => {
  smallNav.classList.toggle("open");
  menuToggle.classList.toggle("open");
});

const discoverToggle = document.querySelector(".discoverToggle");
const footerLinks = document.querySelector(".footerLinks");
const arrowIcon = document.querySelector("#arrowIcon");

discoverToggle.addEventListener("click", () => {
  footerLinks.classList.toggle("hidden");
  arrowIcon.classList.toggle("rotate-180");
});

const sectionTitles = document.querySelectorAll(".footerSectionTitle");
sectionTitles.forEach((title) => {
  title.addEventListener("click", () => {
    if (window.innerWidth < 768) {
      const sectionContent = title.nextElementSibling;
      sectionContent.classList.toggle("hidden");
    }
  });
});

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    767: { slidesPerView: 2 },
    1020: { slidesPerView: 3 },
    1280: { slidesPerView: 4 },
  },
});

// Example: Active class toggle on click
const links = document.querySelectorAll(".swiperLink");
links.forEach((link) => {
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("active", "border-b-red-500"));
    link.classList.add("active", "border-b-red-500");
  });
});
