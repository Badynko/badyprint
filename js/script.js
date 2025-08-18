// SCROLL BUTTON
const scrollButton = document.querySelector(".scroll-button");
window.addEventListener("scroll", () => {
  window.scrollY > 100
    ? scrollButton.classList.add("show-btn")
    : scrollButton.classList.remove("show-btn");
});
scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// LIGHTBOX FUNCTIONALITY
const tiles = document.querySelectorAll(".tile");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const closeBtn = lightbox.querySelector(".lightbox-close");
const prevBtn = lightbox.querySelector(".lightbox-prev");
const nextBtn = lightbox.querySelector(".lightbox-next");

let currentImages = [];
let currentIndex = 0;

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    currentImages = tile.dataset.images.split(",");
    currentIndex = 0;
    lightboxImg.src = currentImages[currentIndex];
    lightbox.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => lightbox.classList.remove("active"));

prevBtn.addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + currentImages.length) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex];
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % currentImages.length;
  lightboxImg.src = currentImages[currentIndex];
});

// Click outside image closes lightbox
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("active");
});
