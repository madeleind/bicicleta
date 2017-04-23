function verHistoricoPersona(id_persona)
{

	$.post("../controlador/persona/controlPersona.php?opc=5", {id_persona: id_persona}, function(datos)
    {
    	if (datos.error=="0")
		{
                  $.post(datos.stsVista, function(vista)
                    {
                        $.getScript("../assets/js/persona/personaOpcionesGenerales.js");
    //vienen del formulario de editar
                    $("#contenido").hide();
                    $("#contenido").html(vista);
                    setTimeout(function(){ $("#contenido").toggle("slow"); }, 650);
                    jQuery('#contenido').ajaxStop(function() 
                    {
                            setTimeout(function(){ $("#contenido").show("slow"); }, 650);
                    });
                     //   $('#respuesta').html(vista);
                     
                        $("#idPersona").html(datos.idPersona);
                        $("#stsCedula").html(datos.cedula);
                        $("#stsNombre").html(datos.nombre);
                        $("#stsApellido").html(datos.apellido);
                        $("#stsTelefono").html(datos.telefono);
                        $("#stsDireccion").html(datos.direccion);
                        $("#stsNombreyApellido").html(datos.nombreyapellido);
                        $("#foto").html(datos.direccionFoto);
                        //$("#foto").html(datos.direccionFoto);


               /* $("#nav").hide();
                $('#overlay').fadeIn('fast', function()
                {
                    $('#box').fadeIn('550');
                });
                $('#boxclose,#botonCancelar').click(function()
                {
                    $("#nav").fadeIn('550');
                    $('#box').fadeOut('500');
                    $('#overlay').fadeOut('500');
                });*/
                
                
                
            });
	}
	if (datos.error==2)
        {
            bootbox.hideAll();
            bootbox.dialog(
            {
                message: datos.msj,
                title: "Sistema Público de Bicicletas",
                buttons:
                {
                    success:
                    {
                        label: "Aceptar",
                        className: "btn-primary",
                        callback: function() 
                        {
                            $.post("../controlador/acceso/controlAcceso.php?opc=1",function(data)
                            {
                                if (data.error==1)
                                {
                                    location.href="../";
                                }
                            },"json");
                        }
                    }
                }
            });
        }
    }, "json");
}