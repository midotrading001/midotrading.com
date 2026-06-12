window.addEventListener("scroll", () => {
document.querySelector("header").style.boxShadow =
window.scrollY > 50 ? "0 5px 20px rgba(0,0,0,0.5)" : "none";
});