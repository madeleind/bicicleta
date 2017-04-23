$(document).ready(function()
{
     $("#datFechaSancionEditarSancion").datepicker( {
        changeMonth : true,
        changeYear : true,
        //yearRange: '-110:-18'
    }, $.datepicker.regional['es']); 
    $("#cboTipoDocumentacionSancionado").change(function(datos)
    {

        opElegida = $(this).val();
        if (opElegida=="1")
        {    
            $("#divCedulaSancionado").css("display","block");
            $("#cedulaSancionado").val("");
            $("#pasaporteSancionado").val("");
            $("#divPasaporteSancionado").css("display","none");
        }
        else if (opElegida=="2")
        {
           $("#divCedulaSancionado").css("display","none");
           $("#divPasaporteSancionado").css("display","block");
           $("#cedulaSancionado").val("");
           $("#pasaporteSancionado").val("");
        }
        else if (opElegida=="")
        {
           $("#divCedulaSancionado").css("display","none");
           $("#divPasaporteSancionado").css("display","none");
           $("#cedulaSancionado").val("");
           $("#pasaporteSancionado").val("");
        }
    });
    $("#btnBuscarSancionado").click(function()
    {
        bootbox.hideAll();
        bootbox.dialog(
        {
            message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
            title: "Sistema Público de Bicicletas",
        });
        $.ajax
            ({                                                       
            url: "../controlador/sancion/controlSancion.php?opc=1",
            type: "POST",
            data: $("#frmBuscarSancionado").serialize(),
            dataType:"json",
            success:function(datos)
            {
                if (datos.error==0)
                {	
                    bootbox.hideAll();
                    $("#divDatosPersona").css("display","block");
                    $("#numCedulaCliente").html(datos.cedula);
                    $("#numPasaporte").html(datos.pasaporte);
                    $("#intIdPersona").val(datos.id_persona);
                    $("#stsNombreCliente").html(datos.nombre);
                    $("#stsApellidoCliente").html(datos.apellido);
                    $("#NumTelefonoCliente").html(datos.telefono);
                    $("#intEdad").html(datos.edad);
                    $.post("../vista/sancion/consultarSanciones.php",function(data)
                    {
                        $("#divConsultarSanciones").css("display","block");
                        $("#divConsultarSanciones").html(data);
                        $.getScript("../assets/js/sancion/sancionOpcionesGenerales.js");
                    });
                    
                }
                if (datos.error=="1")
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
                                    $("#divDatosPersona").css("display","none");
                                    $("#divConsultarSanciones").css("display","none");
                                }

                            }
                        }
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
            }
        }); 
    });
        
    $("#boxRegistrarSancion").click(function()
    {
        idPersona=$("#intIdPersona").val();
        $.post("../controlador/sancion/controlSancion.php?opc=3",function(data)
        {
            bootbox.hideAll();
            bootbox.dialog(
            {
                title: 'Registra Sanción',
                message:'<form  class="form-horizontal" method="post" id="frmRegistrarSancion" name="frmRegistrarSancion">'+
                            '<div class="row">'+
                                '<div class="form-group">'+
                                    '<label class="col-lg-3 col-md-3 col-sm-3 col-xs-5 control-label">Sanción:</label>'+
                                       '<div class="col-lg-6 col-md-3 col-sm-3 col-xs-5 control-label">'+
                                            '<select id="cboSancion" name="cboSancion" class="form-control">'+data.cboSancion+'</select>'+
                                        '</div>'+ 
                                '</div>'+
                                '<div class="form-group">'+
                                    '<label class="col-lg-3 col-md-3 col-sm-3 col-xs-5 control-label">Observación:</label>'+
                                    '<div class="col-lg-6 col-md-3 col-sm-3 col-xs-5 control-label">'+
                                        '<textarea type="text" name="stsObservacionSancion" id="stsObservacionSancion" size="30" class="form-control"></textarea>'+
                                        '<input type="hidden" id="intIdPersona" name="intIdPersona" value="'+idPersona+'">'+
                                    '<div>'+ 
                                '</div>'+
                            '</div>'+
                        '</form>',
                buttons:
                {
                    success: 
                    {
                        label: "Registrar",
                        className: "btn-primary",
                        callback: function () 
                        {
                            $.ajax
                            ({ 
                                url: "../controlador/sancion/controlSancion.php?opc=4",
                                type: "POST",
                                dataType: "json",
                                data: $("#frmRegistrarSancion").serialize(),
                                success: function(data)
                                {
                                    if (data.error=="0")
                                    {
                                        bootbox.hideAll();
                                        bootbox.dialog(
                                        {
                                            message: data.msj,
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
                                        }); 

                                    }
                                    if (data.error=="1")
                                    {
                                        bootbox.hideAll();
                                        bootbox.dialog(
                                        {
                                            message: data.msj,
                                            title: "Sistema Público de Bicicletas",
                                            buttons:
                                            {
                                                success:
                                                {
                                                    label: "Aceptar",
                                                    className: "btn-primary",
                                                    callback: function() 
                                                    {

                                                    }

                                                }
                                            }
                                        });    
                                    }
                                    if (data.error==2)
                                    {
                                        bootbox.hideAll();
                                        bootbox.dialog(
                                        {
                                            message: data.msj,
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
                                }
                            });
                        }
                    }
                }
            });
        },'json');
    });
    $("#btnBuscarSancionado").click(function()
    {
        bootbox.hideAll();
        bootbox.dialog(
        {
            message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
            title: "Sistema Público de Bicicletas",
        });
        $.ajax
            ({                                                       
            url: "../controlador/sancion/controlSancion.php?opc=1",
            type: "POST",
            data: $("#frmBuscarSancionado").serialize(),
            dataType:"json",
            success:function(datos)
            {
                if (datos.error==0)
                {	
                    bootbox.hideAll();
                    $("#divDatosPersona").css("display","block");
                    $("#numCedulaCliente").html(datos.cedula);
                    $("#numPasaporte").html(datos.pasaporte);
                    $("#intIdPersona").val(datos.id_persona);
                    $("#stsNombreCliente").html(datos.nombre);
                    $("#stsApellidoCliente").html(datos.apellido);
                    $("#NumTelefonoCliente").html(datos.telefono);
                    $("#intEdad").html(datos.edad);
                    $.post("../vista/sancion/consultarSanciones.php",function(data)
                    {
                        $("#divConsultarSanciones").css("display","block");
                        $("#divConsultarSanciones").html(data);
                        $.getScript("../assets/js/sancion/sancionOpcionesGenerales.js");
                    });
                    
                }
                if (datos.error=="1")
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
                                    $("#divDatosPersona").css("display","none");
                                    $("#divConsultarSanciones").css("display","none");
                                }

                            }
                        }
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
            }
        }); 
    });
    $('#btnCancelarEditarSancion').click(function()
    {
        bootbox.hideAll();
        bootbox.dialog(
        {
            message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
            title: "Sistema Público de Bicicletas",
        });
        $.ajax
            ({                                                       
            url: "../controlador/sancion/controlSancion.php?opc=1",
            type: "POST",
            data: $("#frmEditarSancion").serialize(),
            dataType:"json",
            success:function(datos)
            {
                if (datos.error==0)
                {	
                    bootbox.hideAll();
                    $.post("../vista/sancion/buscarSancionado.php",function(data)
                    {
                        $("#contenido").html(data);
                        $("#divDatosPersona").css("display","block");
                        $("#numCedulaCliente").html(datos.cedula);
                        $("#numPasaporte").html(datos.pasaporte);
                        $("#intIdPersona").val(datos.id_persona);
                        $("#stsNombreCliente").html(datos.nombre);
                        $("#stsApellidoCliente").html(datos.apellido);
                        $("#NumTelefonoCliente").html(datos.telefono);
                        $("#intEdad").html(datos.edad);
                        $.post("../vista/sancion/consultarSanciones.php",function(dat)
                        {
                            $("#divConsultarSanciones").css("display","block");
                            $("#divConsultarSanciones").html(dat);
                        });
                        $("#divConsultarSanciones").css("display","block");
                        $("#divConsultarSanciones").html(data);
                        $.getScript("../assets/js/sancion/sancionOpcionesGenerales.js");
                    });
                }
                if (datos.error=="1")
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

                                }

                            }
                        }
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
            }
        }); 
    });
    $('#btnEditarSancion').click(function()
    {
        $('#frmEditarSancion').validate
        ({
            errorClass : "errorValidar",
            rules :
            {
                cboSancionEditar:
                {
                    required: true
                },
                stsDescripcionEditarSancion:
                {
                    required: true
                }
            },
            messages :
            {
                cboSancionEditar:
                {
                    required: '*Campo Obligatorio'
                },
                stsDescripcionEditarSancion:
                {
                    required: '*Campo Obligatorio'
                }
                
            },
            submitHandler:function()
            {
                bootbox.dialog(
                {
                    message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
                    title: "Sistema Público de Bicicletas",
                });
                $.ajax
                ({ 
                    url: "../controlador/sancion/controlSancion.php?opc=6",
                    type: "POST",
                    dataType: "json",
                    data: $("#frmEditarSancion").serialize(),
                    success: function(data)
                    {
                        if (data.error=="0")
                        {
                            bootbox.hideAll();
                            bootbox.dialog(
                            {
                                message: data.msj,
                                title: "Sistema Público de Bicicletas",
                                buttons:
                                {
                                    success:
                                    {
                                        label: "Aceptar",
                                        className: "btn-primary",
                                        callback: function() 
                                        {
                                            $.ajax 
                                            ({       
                                                url: "../controlador/sancion/controlSancion.php?opc=0",
                                                type: "POST",
                                                //data:$("#frmBuscarSancionado").serialize(),
                                                dataType:"json",
                                                success:function(datos)
                                                {
                                                    if (datos.error==0)
                                                    {	
                                                        $.post(datos.stsVista,function(data)
                                                        { 	
                                                            $("#contenido").html(data);
                                                            $.getScript("../assets/js/sancion/sancionOpcionesGenerales.js");
                                                        });
                                                    } 
                                                    if (datos.error==2)
                                                    {
                                                        bootbox.hideAll();
                                                        bootbox.dialog(
                                                        {
                                                            message: datos.msj,
                                                            title: "Sistema de Prestamo de Bicicletas",
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
                                                }
                                           });
                                        }
                                        
                                    }
                                }
                            }); 

                        }
                        if (data.error=="1")
                        {
                            bootbox.hideAll();
                            bootbox.dialog(
                            {
                                message: data.msj,
                                title: "Sistema Público de Bicicletas",
                                buttons:
                                {
                                    success:
                                    {
                                        label: "Aceptar",
                                        className: "btn-primary",
                                        callback: function() 
                                        {

                                        }
                                        
                                    }
                                }
                            });    
                        }
                        if (data.error==2)
                        {
                            bootbox.hideAll();
                            bootbox.dialog(
                            {
                                message: data.msj,
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
                    }
                });
            }    
        });
    });
    

    
});	/*fin de $(document).ready(function() */