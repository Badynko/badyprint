const images = document.querySelectorAll(".post-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".lightbox-close");
const prevBtn = document.querySelector(".lightbox-prev");
const nextBtn = document.querySelector(".lightbox-next");
const lightboxTitle = document.getElementById("lightbox-title");

let currentIndex = 0;
let imgArray = Array.from(images);

function openLightbox(index) {
  const img = imgArray[index];
  lightbox.style.display = "flex";
  lightboxImg.src = img.src;
  lightboxCaption.textContent = img.dataset.caption || ""; // popis pod obrázkom
  lightboxTitle.textContent = img.alt || ""; // nadpis nad obrázkom
  currentIndex = index;
}

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    openLightbox(index);
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imgArray.length) % imgArray.length;
  openLightbox(currentIndex);
});

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % imgArray.length;
  openLightbox(currentIndex);
});

// zavretie lightboxu klávesou ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightbox.style.display = "none";
  }
  if (e.key === "ArrowRight") {
    nextBtn.click();
  }
  if (e.key === "ArrowLeft") {
    prevBtn.click();
  }
});
