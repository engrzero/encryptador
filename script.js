/* e -->enter
o -->ober
i -->imes
a -->ai 
u -->ufat  */

function encriptar() {
    var mensaje = document.getElementById("inputMsg").value.toLowerCase();
    var msgCifrado = mensaje.replace(/e/igm,"enter");
    msgCifrado = msgCifrado.replace(/o/igm,"ober");
    msgCifrado = msgCifrado.replace(/i/igm,"imes");
    msgCifrado = msgCifrado.replace(/a/igm,"ai");
    msgCifrado = msgCifrado.replace(/u/igm,"ufat");

    var imgElement = document.getElementById("right-Img");
    if (imgElement != null) {
        imgElement.style.display = "none";
    }
    
    var mensajeElement = document.getElementById("mensaje");
    if (mensajeElement != null) {
        mensajeElement.style.display = "none";
    }
    
    document.getElementById("text-msg").innerHTML = msgCifrado;

    var copiarElement = document.getElementById("copiar");
    if (copiarElement != null) {
        copiarElement.style.display = "show";
        copiarElement.style.display = "inherit";
    }
}


function desencriptar() {
    var mensaje = document.getElementById("inputMsg").value.toLowerCase();
    //i es para que afecte tanto mayúsculas como minúsculas -- e else{
    //g es para que toda una linea
    //m es para que afecte a múltiples lineas o parrafo.
    var msgCifrado = mensaje.replace(/enter/igm,"e");
    var msgCifrado = msgCifrado.replace(/ober/igm,"o");
    var msgCifrado = msgCifrado.replace(/imes/igm,"i");
    var msgCifrado = msgCifrado.replace(/ai/igm,"a");
    var msgCifrado = msgCifrado.replace(/ufat/igm,"u");

    var imgElement = document.getElementById("right-Img");
    if (imgElement != null) {
        imgElement.style.display = "none";
    }
    
    var mensajeElement = document.getElementById("mensaje");
    if (mensajeElement != null) {
        mensajeElement.style.display = "none";
    }
    
    document.getElementById("text-msg").innerHTML = msgCifrado;

    var copiarElement = document.getElementById("copiar");
    if (copiarElement != null) {
        copiarElement.style.display = "show";
        copiarElement.style.display = "inherit";
    }
}

function copiar() {
    var contenido = document.querySelector("#text-msg").textContent;
    navigator.clipboard.writeText(contenido)
        .then(() => {
            alert("¡Se copió!");
        })
        .catch(err => {
            console.error("Error al copiar al portapapeles: ", err);
        });
}
