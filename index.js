
const botonAmburguesa = document.querySelector(".botonAmburguesa")
const cabeceraLista = document.querySelector(".cabeceraLista")

botonAmburguesa.addEventListener("click", () => {
    cabeceraLista.classList.toggle("cabeceraLista_Visible");
})