const toggle = document.getElementById("menu-toggle") as HTMLButtonElement;
const items = document.getElementById("menu-content") as HTMLDivElement | null;

// adding check status
updateButtonLabel();
window.addEventListener("resize", updateButtonLabel);

toggle?.addEventListener("click", function(){
    items?.classList.toggle("hidden");
})

function updateButtonLabel(){
    if(window.innerWidth <= 768){
        toggle.innerHTML = "☰";
    }
    else{
        toggle.innerHTML = "Connect With Me";
    }
}