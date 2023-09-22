$.validator.addMethod("pwdRut", function (value, element) {
    return this.optional(element) || /^[0-9]+-[0-9kK]{1}$/.test(value);
}, "Ingresar correctamente el Rut")

$("#formulario").validate({
    rules: {
        Nombre: {
            required: true
        },
        Apellido: {
            required: true
        },
        Rut:{
            required: true,
            pwdRut:true
        },
        Correo:{
            required:true,
            email:true,
        },
        Telefono:{
            required:true,
            maxlength:9,
            minlength:9
        },
        lenguajes:{
            required:true
        },
        radio:{
            required:true
        },
        floatingTextarea:{
            required:true
        }
    },
    messages:{
        lenguajes:{
            required:"Campo Obligatorio"
        },
        radio:{
            required:"Campo Obligatorio"
        },
        Nombre:{
            required:"Campo Obligatorio"
        },
        Apellido:{
            required:"Campo Obligatorio"
        },
        Rut:{
            required:"Campo Obligatorio"
        },
        Correo:{
            required:"Campo Obligatorio"
        },
        Telefono:{
            required:"Campo Obligatorio"
        },
        floatingTextarea:{
            required:"Campo Obligatorio"
        }
    },
    errorPlacement: function(error,element){
        if(element.attr("name") == "lenguajes"){
            error.insertAfter(".checkbox-group");
        }else{
            if(element.attr("name") == "radio"){
                error.insertAfter(".radio-group")
            }else{
                if(element.attr("name") == "floatingTextarea"){
                    error.appendTo(".error-text")
                }else{
                    error.insertAfter(element);
                }
            }
        }
    },
    submitHandler: function(form){
        $(form).hide()
        $("#mensaje-confirmacion").show();
    }
})
function limpiarFormulario(){
    var formulario = document.getElementById("formulario")
    alert("se limpio el formulario")
    formulario.reset()
}