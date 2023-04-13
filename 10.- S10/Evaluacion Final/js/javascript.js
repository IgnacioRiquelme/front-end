//ejecutar un evento submit cuando se realice la accion
$(document).ready(function(){
    $("#reserva").submit(function (event){
        //evitando cualquier evento por default que tenga el formulario
        event.preventDefault();

        //obteniendo los valores de los input del html, para el formulario de reserva
        //se estan obteniendo a traves del id
        var nombre = $("#nombreReserva").val();
        var correo = $("#correoReserva").val();
        var telefono = $("#telefonoReserva").val()
        var fecha = $("#fechaReserva").val()
        var hora = $("#tefonoReserva").val()
        var asistentes = $("#asistentesReserva").val()
        var check = $("#exampleCheck1Reserva").prop("checked");

        //validar formulario y si no dar alertas de que los campos no pueden estar vacios y son obligatorios
        if(nombre == ""){
            alert("El campo nombre es obligatorio")
        }else if(correo == "" || correo == null){
            alert("El campo correo es obligatorio")
        }else if(telefono == ""){
            alert("El campo telefono es obligatorio")
        }else if(fecha == ""){
            alert("El campo fecha es obligatorio")
        }else if(hora == ""){
            alert("El campo hora es obligatorio")
        }else if(asistentes == ""){
            alert("El campo asistentes es obligatorio")
        }else if(!check){
            alert("Debe aceptar los terminos y condiciones")
        }
    })
});