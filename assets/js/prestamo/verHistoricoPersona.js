function verHistoricoPersona(id_persona)
{

	$.post("../controlador/prestamo/controlPrestamo.php?opc=5", {id_persona: id_persona}, function(datos)
    {
    	if (datos.error=="0")
		{
                  $.post(datos.stsVista, function(vista)
                    {
                        $.getScript("../assets/js/prestamo/prestamoOpcionesGenerales.js");
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
                    $("#stsCedula").html(datos.nacionalidad+'-'+datos.cedula);
                    $("#stsPasaporte").html(datos.pasaporte);
                    $("#stsNombre").html(datos.nombre);
                    $("#stsApellido").html(datos.apellido);
                    $("#stsTelefono").html(datos.telefono);
                    $("#intEdad").html(datos.edad);
                    $("#stsOcupacion").html(datos.ocupacion);
                    $("#stsCorreoElectronico").html(datos.correoelectronico);
                    if (datos.sexo='')
                    {
                        sexo="";
                    }
                    else if (datos.sexo='m')
                    {
                        sexo="Masculino";
                    }
                    else if (datos.sexo='f')
                    {
                        sexo="Femenino";
                    }
                    $("#stsSexo").html(sexo);
                    $("#stsEstado").html(datos.nbEstado);
                    $("#stsMunicipio").html(datos.nbMunicipio);
                    $("#stsParroquia").html(datos.nbParroquia);
                    $("#stsDireccion").html(datos.direccion);
                    $("#stsNombreyApellido").html(datos.nombreyapellido);
                    $("#foto").html(datos.direccionFoto);
                    $("#huella").html(datos.direccionHuella);


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
        if (datos.error=="2")
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
                            $(this).dialog('close');
                            $.post("../controlador/acceso/controlAcceso.php?opc=1",function(data)
                            {
                                if (data.error==1)
                                {
                                location.href="../bicicletas";
                                }
                            },"json");
                        }

                    }
                }
            }).html(data.msj);
        }
    }, "json");
}