document.querySelectorAll(".aboutNavBtn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const aboutNav = this.closest("header").querySelector(".aboutNav");
    const aboutNavIcon = this.querySelector("i");

    aboutNav.classList.toggle("hidden");
    aboutNav.classList.toggle("flex");

    if (aboutNavIcon.classList.contains("fa-bars")) {
      aboutNavIcon.classList.remove("fa-bars");
      aboutNavIcon.classList.add("fa-xmark");
    } else {
      aboutNavIcon.classList.remove("fa-xmark");
      aboutNavIcon.classList.add("fa-bars");
    }
  });
});
