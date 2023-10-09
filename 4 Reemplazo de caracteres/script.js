function reemplazarVocales() {
    
    const cadena = document.getElementById("cadena").value;

    const caracterReemplazo = document.getElementById("caracterReemplazo").value;

    const expresionRegular = /[aeiouAEIOU]/g;

    const cadenaReemplazada = cadena.replace(expresionRegular, caracterReemplazo);

    document.getElementById("resultado").textContent = "Cadena con vocales reemplazadas: " + cadenaReemplazada;
}