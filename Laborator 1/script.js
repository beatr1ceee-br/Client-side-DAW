function showMessage(carName) {
    alert(
        "Ai selectat " + carName +
        ". În curând vei putea vedea mai multe informații despre această mașină."
    );
}

function showAboutMessage() {
    alert(
        "AutoDrive este un proiect realizat pentru laboratorul de Client-side DAW."
    );
}

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    // Nu reîncărcăm pagina
    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Mulțumim, " + name +
        "! Mesajul tău a fost trimis cu succes."
    );

    // Golim formularul
    contactForm.reset();
});

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
        navLinks.style.flexDirection = "column";
        navLinks.style.position = "absolute";
        navLinks.style.top = "80px";
        navLinks.style.right = "0";
        navLinks.style.background = "#101318";
        navLinks.style.padding = "25px";
        navLinks.style.width = "200px";
    }

});
```
