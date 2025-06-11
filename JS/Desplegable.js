// --- Menú desplegable ---
    const toggle = document.getElementById("menu-toggle");
    const submenu = document.getElementById("submenu");

    // Mostrar u ocultar el submenú al hacer clic en "Menú"
    toggle.addEventListener("click", function (e) {
        e.preventDefault();
        submenu.classList.toggle("show");
    });

    // Cierra el menú si haces clic fuera de él
    document.addEventListener("click", function (event) {
        if (!toggle.contains(event.target) && !submenu.contains(event.target)) {
            submenu.classList.remove("show");
        }
    });
