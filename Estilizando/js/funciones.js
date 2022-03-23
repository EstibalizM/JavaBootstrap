function creaCampos() {

	var objeto_input=document.getElementById('contenedor_campo');
    var input=document.createElement('input');

    objeto_input.appendChild(input);

    input.onblur=validar;

}

function validar() {
     
     var input=document.getElementsByTagName("input")[0].value;

     var aviso=document.getElementById("contenedor_aviso");

 if (input.length<4) {

       aviso.className="alert alert-danger";

       aviso.innerHTML="ERROR FATAL";



 } else {

       aviso.className="alert alert-success";

       aviso.innerHTML="ÉXITO ASEGURADO";

 }





}