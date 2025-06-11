
    // --- Carrusel ---
    const carousel = document.querySelector(".carousel");
    const images = Array.from(carousel.children);
    let index = 0;
    const imgWidth = images[0].offsetWidth; // Obtiene el ancho dinámicamente

    // Solo clona si no están duplicadas
    if (!carousel.classList.contains("cloned")) {
        images.forEach(image => {
            const clone = image.cloneNode(true);
            carousel.appendChild(clone);
        });
        carousel.classList.add("cloned");
    }

    function moveCarousel() {
        index++;
        carousel.style.transform = `translateX(-${index * imgWidth}px)`;

        if (index >= images.length) {
            setTimeout(() => {
                index = 0;
                carousel.style.transition = "none";
                carousel.style.transform = "translateX(0)";
                setTimeout(() => {
                    carousel.style.transition = "transform 0.5s ease-in-out";
                }, 50);
            }, 500);
        }
    }

    setInterval(moveCarousel, 4000);