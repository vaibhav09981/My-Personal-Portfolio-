var toggle = document.getElementById("menu-toggle");
var items = document.getElementById("menu-content");
// adding check status
updateButtonLabel();
window.addEventListener("resize", updateButtonLabel);
toggle === null || toggle === void 0 ? void 0 : toggle.addEventListener("click", function () {
    items === null || items === void 0 ? void 0 : items.classList.toggle("hidden");
});
function updateButtonLabel() {
    if (window.innerWidth <= 768) {
        toggle.innerHTML = "☰";
    }
    else {
        toggle.innerHTML = "Connect With Me";
    }
}
