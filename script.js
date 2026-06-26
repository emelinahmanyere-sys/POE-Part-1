document.addEventListener("DOMContentLoaded", function () {

    // MOBILE MENU
    const menuBtn = document.getElementById("menu-toggle");
    const nav = document.getElementById("navbar");

    if (menuBtn && nav) {
        menuBtn.addEventListener("click", function () {
            nav.classList.toggle("active");
        });
    }

    // DATE & TIME
    function updateDateTime() {
        const el = document.getElementById("dateTime");
        if (el) {
            el.innerText = new Date().toLocaleString();
        }
    }

    updateDateTime();
    setInterval(updateDateTime, 1000);

    // FORM VALIDATION
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const message = document.getElementById("message").value;
            const output = document.getElementById("formMessage");

            if (!name || !email || !phone || !message) {
                output.textContent = "Please fill in all fields.";
                output.style.color = "red";
                return;
            }

            output.textContent = "Message sent successfully!";
            output.style.color = "green";

            form.reset();
        });
    }

});

console.log("JS is working");