// Toggle home nav
document.querySelectorAll(".barsMenu").forEach((menuToggle) => {
  menuToggle.addEventListener("click", () => {
    const smallNav = menuToggle
      .closest(".myContainer")
      .querySelector(".smallNavLinks");
    smallNav.classList.toggle("open");
    if (menuToggle.classList.contains("open")) {
      menuToggle.classList.remove("open");
      menuToggle.classList.add("close");
    } else {
      menuToggle.classList.remove("close");
      menuToggle.classList.add("open");
    }
  });
});

// Toggle footer
document.querySelectorAll(".showFooterBtn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const footerSection = btn.closest("footer");
    const footerLinks = footerSection.querySelector(".footerLinks");
    const arrowIcon = footerSection.querySelector("#arrowIcon");

    footerLinks.classList.toggle("hidden");
    arrowIcon.classList.toggle("rotate-180");
  });
});

// Toggle footer links
document.querySelectorAll(".footerlinksTitles").forEach((title) => {
  title.addEventListener("click", () => {
    const sectionContent = title.nextElementSibling;
    sectionContent.classList.toggle("hidden");
  });
});
