function toggleMenu() {
    document.getElementById("navbar").classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("menu-toggle").addEventListener("click", toggleMenu);
});

function updateDateTime(){
    const now = new Date();
    const el = document.getElementById("dateTime");
    if (el) {
        el.innerText = now.toLocaleString();
    }
}

setInterval(updateDateTime, 1000);
console.log("JS is working");