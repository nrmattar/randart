

async function obtenerParametros() {



    const nombres = [
        "Adán",
        "Abraham",
        "Alejandro",
        "Andrés",
        "Antonio",
        "Benito",
        "Carlos",
        "David",
        "Diego",
        "Eduardo",
        "Enrique",
        "Fernando",
        "Francisco",
        "Gabriel",
        "Gonzalo",
        "Guillermo",
        "Ignacio",
        "Israel",
        "Jacobo",
        "Javier",
        "Jesús",
        "José",
        "Juan",
        "Luis",
        "Manuel",
        "Marcos",
        "Martín",
        "Miguel",
        "Nicolás",
        "Óscar",
        "Pablo",
        "Pedro",
        "Rafael",
        "Raúl",
        "Rodrigo",
        "Samuel",
        "Santiago",
        "Sergio",
        "Tomás",
        "Vicente",
        "Abril",
        "Aitana",
        "Alba",
        "Alicia",
        "Ana",
        "Andrea",
        "Antonia",
        "Beatriz",
        "Clara",
        "Diana",
        "Elena",
        "Elisa",
        "Esperanza",
        "Fátima",
        "Gabriela",
        "Inés",
        "Isabel",
        "Julia",
        "Laura",
        "María",
        "Marta",
        "Natalia",
        "Nerea",
        "Paula",
        "Rocío",
        "Sara",
        "Sofía",
        "Teresa",
        "Valentina",
        "Verónica",
        "Victoria"
    ];
    const apellidos = [

        "Abad",
        "Acuña",
        "Aguilar",
        "Aguirre",
        "Alonso",
        "Álvarez",
        "Amor",
        "Anaya",
        "Aparicio",
        "Aranda",
        "Arcos",
        "Arévalo",
        "Arias",
        "Arroyo",
        "Ayala",
        "Báez",
        "Barbosa",
        "Barrera",
        "Bautista",
        "Beltrán",
        "Bernal",
        "Blanco",
        "Bolívar",
        "Bravo",
        "Cáceres",
        "Cabrera",
        "Calderón",
        "Cano",
        "Cárdenas",
        "Carmona",
        "Carrasco",
        "Castañeda",
        "Castro",
        "Chávez",
        "Córdoba",
        "Cortés",
        "Cruz",
        "Díaz",
        "Domínguez",
        "Duran",
        "Escobar",
        "Espinoza",
        "Fajardo",
        "Fernández",
        "Flores",
        "Fuentes",
        "Gallardo",
        "Galván",
        "García",
        "Gómez",
        "González",
        "Guardado",
        "Guerrero",
        "Hernández",
        "Herrera",
        "Jiménez",
        "Lara",
        "León",
        "López",
        "Luna",
        "Machado",
        "Macías",
        "Martínez",
        "Medina",
        "Méndez",
        "Miranda",
        "Montero",
        "Mora",
        "Morales",
        "Moreno",
        "Narváez",
        "Navarro",
        "Ocampo",
        "Ortega",
        "Páez",
        "Parra",
        "Paz",
        "Pérez",
        "Peña",
        "Peralta",
        "Perez",
        "Ponce",
        "Portillo",
        "Quintero",
        "Ramírez",
        "Reyes",
        "Rivera",
        "Rocha",
        "Rodríguez",
        "Ruiz",
        "Salazar",
        "Sánchez",
        "Santana",
        "Santiago",
        "Sánchez",
        "Serrano",
        "Silva",
        "Solís",
        "Suárez",
        "Tamayo",
        "Téllez",
        "Torres",
        "Trujillo",
        "Ureña",
        "Valdez",
        "Vázquez",
        "Vega",
        "Velázquez",
        "Villa",
        "Villanueva",
        "Yáñez",
        "Zapata",
        "Zavala"

    ];
    const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
    const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];

    const precioAleatorio = Math.floor(Math.random() * (95000 - 10000 + 1)) + 10000;

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    // Obtener el valor del parámetro "Prueba"
    const id = urlParams.get("id");
    const titulo = urlParams.get("titulo");
    const descripcion = urlParams.get("descripcion");
    // Mostrar los valores en el contenido
    const aleatorioDiv = document.getElementById("aleatorio");

    aleatorioDiv.innerHTML =
    `
    <article class="articulo">
    <img src="/images/Imagen (${id}).jpg" alt="" />
    <div class="informacion">
        <h2>${titulo}</h2>
        <div><p><b>Autor:</p></b><p>${nombreAleatorio} ${apellidoAleatorio}</p></div>
        <div><p><b>Descripción:</b></p><p>${descripcion}</p></div>
        <div ><p><b>Precio:</p></b><p class="precio"><b>$ ${precioAleatorio}.-</b></p></div>
        <button class="boton-comprar">Comprar</button>
        <div ><p><a href="galeria.html">Volver</a></p></div>
    </div>
</article>`


}

// Llamar a la función para obtener y mostrar los parámetros
obtenerParametros();


