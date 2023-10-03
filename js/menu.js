const menu = document.querySelector("#menu");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    menu.classList.add("visible");
    cerrar.classList.add("visible");
    abrir.classList.remove("visible");
    abrir.classList.add("invisible");
})

cerrar.addEventListener("click", () => {
    menu.classList.remove("visible");
    cerrar.classList.remove("visible");
    cerrar.classList.add("invisible");
    abrir.classList.add("visible");
})