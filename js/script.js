const scrollButton = document.querySelector(".scroll-button");

if (scrollButton) {
  // Zobrazenie / skrytie tlačidla pri scrollovaní
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      scrollButton.classList.add("show-btn");
    } else {
      scrollButton.classList.remove("show-btn");
    }
  });

  // Posun hore
  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
