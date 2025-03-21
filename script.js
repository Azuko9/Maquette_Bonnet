document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("ongletA");
    const header = document.querySelector("header");

    if (btn && header) { // Vérifie si les éléments existent
        btn.addEventListener("click", function () {
            if (header.classList.contains("header-not-active")) {
                header.classList.remove("header-not-active");
                void header.offsetWidth;
                header.classList.add("header-active");
            } else {
                header.classList.remove("header-active");
                void header.offsetWidth;
                header.classList.add("header-not-active");
            }
        });
    } else {
        console.error("Bouton ou header non trouvé !");
    }

    setTimeout(function () {
        const footer = document.getElementById("footerbutton");
        if (footer) {
            footer.focus();
            console.log("Footer a reçu le focus !");
        } else {
            console.error("Footer non trouvé !");
        }
    }, 5000); // 5000 ms = 5 secondes
});

