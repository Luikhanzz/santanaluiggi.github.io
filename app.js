let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");

document.querySelectorAll(".addCart").forEach(btn => {
  btn.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;

    btn.textContent = "Agregado ✔";
    btn.style.background = "#008000";

    setTimeout(() => {
      btn.textContent = "Agregar al carrito";
      btn.style.background = "#004734";
    }, 1200);
  });
});
