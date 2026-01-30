const photos = document.querySelectorAll(".photo img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const closeBtn = document.querySelector(".close");

// Open lightbox
photos.forEach(photo => {
    photo.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = photo.src;
        lightboxCaption.textContent = photo.nextElementSibling.textContent;
    });
});

// Close lightbox
closeBtn.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeLightbox();
});

function closeLightbox() {
    lightbox.style.display = "none";
}
