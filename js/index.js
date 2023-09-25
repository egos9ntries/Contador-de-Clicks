let numero = 0
let parrafo = document.getElementById("texto");
parrafo.textContent += ""+ numero;

function Sumar() {
    numero ++;
    let parrafo = document.getElementById("texto");
    parrafo.innerHTML = "Cantidad de clicks realizados: "+ numero;
}
