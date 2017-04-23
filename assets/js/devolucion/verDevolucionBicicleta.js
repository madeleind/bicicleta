function marcar(isChecked) 
{
    if(isChecked) 
    {
        $('input[name="chkDevolverIdPrestamo[]"]').each(function() 
        { 
            this.checked = true; 
        });
    }
    else 
    {
        $('input[name="chkDevolverIdPrestamo[]"]').each(function(){
                this.checked = false;
        });
    }
}
function registrarDevolucionBicicleta(id_prestamo)
{

	$.post("../controlador/devolucion/controlDevolucion.php?opc=2", {id_prestamo: id_prestamo}, function(datos)
        {
    	if (datos.error=="0")
	{
                  $.post(datos.stsVista, function(vista)
                    {
                        $.getScript("../assets/js/devolucion/devolucionBicicletaOpcionesGenerales.js");
                //vienen del formulario de editar
                    $("#contenido").hide();
                    $("#contenido").html(vista);
                    setTimeout(function(){ $("#contenido").toggle("slow"); }, 650);
                    jQuery('#contenido').ajaxStop(function() 
                    {
                            setTimeout(function(){ $("#contenido").show("slow"); }, 650);
                    });
                     //   $('#respuesta').html(vista);
                     
                $("#idBicicleta").val(datos.idBicicleta);
                $("#intIdPersona").val(datos.idPersona);
                $("#idPrestamo").val(datos.idPrestamo);
                $("#idRutas").val(datos.idRutas);
                $("#stsSerial").html(datos.stsSerial);
                $("#stsMarca").html(datos.stsMarca);
                $("#intTamanioRin").html(datos.intTamanioRin);
                $("#stsDescripcionBicicleta").html(datos.stsDescripcionBicicleta);
                $("#intIdPersona").val(datos.intIdPersona);
                $("#stsNombreCliente").html(datos.stsNombreCliente);
                $("#stsApellidoCliente").html(datos.stsApellidoCliente);
                $("#numCedulaCliente").html(datos.nacionalidadCliente+'-'+datos.numCedulaCliente);
                $("#numPasaporte").html(datos.numPasaporte);
                
                $("#stsDireccionHabCliente").html(datos.stsDireccionHabCliente);
                $("#intEdad").html(datos.intEdad);
                $("#NumTelefonoCliente").html(datos.NumTelefonoCliente);
                $("#stsNombrePunto").html(datos.stsNombrePunto);
                $("#stsCircuito").html(datos.stsCircuito);
                $("#stsParroquia").html(datos.stsParroquia);
                $("#stsSector").html(datos.stsSector);
                $("#stsDescripcionDelPunto").html(datos.stsDescripcionDelPunto);
                $("#divCboSancion").html("<select id='cboSancion' class='form-control' name='cboSancion'>"+datos.cboSancion+"</select>");
                
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