var texto;
var clave;
var salida="";

function cifrarCodigo() {
     texto=document.getElementById("textoCodigo").value;
     clave=document.getElementById("claveSecreta").value;
   
    var longitud=texto.length;
    var resto=clave%26;
    for(let index=0; index<longitud; index++) {
   salida = salida+String.fromCharCode(texto.charCodeAt (index)+resto);
    }
   
    document.getElementById("salidaCodigo").innerHTML=salida;
    salida="";
}
function descifrarCodigo() {
    texto=document.getElementById("textoCodigo").value;
    clave=document.getElementById("claveSecreta").value;
    var longitud=texto.length;
    var resto=clave%26;
    salida="";
    

    for(let index=0; index<longitud; index++){
        salida=salida+String.fromCharCode (texto.charCodeAt(index)-resto);
    }
    document.getElementById("salidaCodigo").innerHTML=salida;
}

