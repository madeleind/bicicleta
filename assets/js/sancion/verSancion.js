function verSancion(id_persona,id_sancion)
{

    $.post("../controlador/sancion/controlSancion.php?opc=5", {id_persona: id_persona,id_sancion:id_sancion}, function(datos)
    {
    	if (datos.error=="0")
        {
            $.post(datos.stsVista, function(vista)
            {
                $("#contenido").html(vista);
                $.getScript("../assets/js/sancion/sancionOpcionesGenerales.js");
                $("#cboStsNacionalidadEditarSancion").val(datos.stsNacionalidad);
                $("#intCedulaEditarSancion").val(datos.stsCedula);
                $("#stsPasaporteEditarSancion").val(datos.stsPasaporte);
                $("#stsNombreEditarSancion").val(datos.stsNombre);
                $("#stsApellidoEditarSancion").val(datos.stsApellido);
                $("#datFechaSancionEditarSancion").val(datos.datFechaSancion);
                $("#divCboSancionEditar").html("<select id='cboSancionEditar' name='cboSancionEditar' class='form-control'>"+datos.cboSancion+"</select>");
                $("#stsDescripcionEditarSancion").val(datos.stsObservacionSancion);

                if (datos.bolEstatusSancion=='t')
                {
                    $('#intEstatusActivoEditarSacion').prop("checked",true);
                    $('#intEstatusInactivoEditarSacion').prop("checked",false);
                }
                if (datos.bolEstatusSancion=='f')
                {
                    $('#intEstatusActivoEditarSacion').prop("checked",false);
                    $('#intEstatusInactivoEditarSacion').prop("checked",true);
                }
                $("#intIdSancionPersonaEditar").val(datos.intIdPersonaSancion);
                $("#intIdPersonaEditar").val(datos.intIdPersona);
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
function eliminarSancion(id_sancion)
{
    bootbox.dialog
    ({
        message: "Está seguro de eliminar esta sanción?",
        title: "Sistema Público de Bicicletas",
        buttons: 
        {
            success: 
            {
                label: "No",
                className: "btn-default",
                callback: function() 
                {
                   bootbox.hideAll(); 
                }
            },
            danger: 
            {
                label: "Si",
                className: "btn-primary",
                callback: function() 
                {
                    $.post("../controlador/sancion/controlSancion.php?opc=7", {id_sancion:id_sancion}, function(datos)
                    {
                        if (datos.error=="0")
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
                                            $.post("../vista/sancion/consultarSanciones.php",function(data)
                                            {
                                                $("#divConsultarSanciones").css("display","block");
                                                $("#divConsultarSanciones").html(data);
                                                $.getScript("../assets/js/sancion/sancionOpcionesGenerales.js");
                                            });     
                                        }
                                    }
                                }
                            })
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
            },
        }
    });
    
}