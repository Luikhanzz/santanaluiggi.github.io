const zoomBox = document.getElementById("zoomBox");
const zoomImg = document.getElementById("zoomImg");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    zoomImg.src = img.src;
    zoomBox.style.display = "flex";
  });
});

zoomBox.addEventListener("click", () => {
  zoomBox.style.display = "none";
});
