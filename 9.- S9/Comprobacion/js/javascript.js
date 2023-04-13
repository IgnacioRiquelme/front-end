function mostrar() {
    document.getElementById("text2").style.display = "block";
}
function ocultar() {
    document.getElementById("text2").style.display = "none";
}
// al hacer click en imagen agrandar
function agrandar() {
    anchura = document.getElementById("img").offsetWidth
    document.getElementById("img").style.width = "100%";
}
function achicaAgranda() {
var imagen = document.getElementById("img");
     if (imagen.style.width === "100%") {
    imagen.style.width = "20%"; // achica la imagen
    } else {
    imagen.style.width = "100%"; // agranda la imagen
     }
    }
function cambiarLetra(){
    document.getElementById('caja3').addEventListener('dblclick', function() { 
        if (this.style.fontSize === '16px') {
            this.style.fontSize = '24px'; 
        } else { this.style.fontSize = '16px'; 
        } 
    });
}