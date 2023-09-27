document.addEventListener("DOMContentLoaded", function () {
    const galleryContainer = document.querySelector(".gallery");
    const indicatorsContainer = document.querySelector(".gallery-indicators");
    let currentImageIndex = 0;
    let images; // Esta variable se usará para almacenar las imágenes cargadas.

    // Función para cambiar la imagen
    function changeImage(index) {
        images[currentImageIndex].style.display = "none";
        currentImageIndex = index;
        images[currentImageIndex].style.display = "block";
        updateIndicators();
    }

    // Función para actualizar los indicadores
    function updateIndicators() {
        const indicators = indicatorsContainer.querySelectorAll(".indicator");
        indicators.forEach((indicator, index) => {
            if (index === currentImageIndex) {
                indicator.classList.add("active");
            } else {
                indicator.classList.remove("active");
            }
        });
    }

    // Cargar imágenes desde galeria.html
    fetch("/templates/galeria.html")
        .then(response => response.text())
        .then(html => {
            const tempDiv = document.createElement("div");
            tempDiv.innerHTML = html;
            galleryContainer.innerHTML = ""; // Limpia el contenedor actual de imágenes.

            // Encuentra las imágenes en el contenido de galeria.html y agrégalas al contenedor
            images = tempDiv.querySelectorAll(".flexible-image");
            images.forEach(image => {
                galleryContainer.appendChild(image);
            });

            // Crea los indicadores
            images.forEach((image, index) => {
                const indicator = document.createElement("span");
                indicator.classList.add("indicator");
                if (index === currentImageIndex) {
                    indicator.classList.add("active");
                }

                // Agrega un evento clic para cambiar a la imagen correspondiente
                indicator.addEventListener("click", function () {
                    changeImage(index);
                });

                indicatorsContainer.appendChild(indicator);
            });

            // Muestra la primera imagen y sus indicadores
            images[currentImageIndex].style.display = "block";

            // Redirige al usuario a la página de la galería al hacer clic en el contenedor de imágenes
            galleryContainer.addEventListener("click", function () {
                window.location.href = "/templates/galeria.html";
            });

            // Cambia la imagen cada 5 segundos (5000 ms)
            setInterval(function () {
                const nextIndex = (currentImageIndex + 1) % images.length;
                changeImage(nextIndex);
            }, 5000);
        })
        .catch(error => {
            console.error("Error al cargar las imágenes:", error);
        });
});

