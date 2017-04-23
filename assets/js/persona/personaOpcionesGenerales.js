$(document).ready(function()
{
     $("#cboTipoDocumentacionPersona").change(function(datos)
    {

        opElegida = $(this).val();
        if (opElegida=="1")
        {    
            $("#divCedulaPersona").css("display","block");
            $("#cedulaPersona").val("");
            $("#pasaportePersona").val("");
            $("#divPasaportePersona").css("display","none");
        }
        else if (opElegida=="2")
        {
           $("#divCedulaPersona").css("display","none");
           $("#divPasaportePersona").css("display","block");
           $("#cedulaPersona").val("");
           $("#pasaportePersona").val("");
        }
        else if (opElegida=="")
        {
           $("#divCedulaPersona").css("display","none");
           $("#divPasaportePersona").css("display","none");
           $("#cedulaPersona").val("");
           $("#pasaportePersona").val("");
        }
    });
    $("#fechaNacimientoPersona").datepicker( {
        changeMonth : true,
        changeYear : true,
        yearRange: '-110:-18'
    }, $.datepicker.regional['es']); 
    $("#fechaNacimientoPersonaWeb").datepicker( {
        changeMonth : true,
        changeYear : true,
        yearRange: '-110:-18'
    }, $.datepicker.regional['es']); 
    //REGISTRAR persona   
    $("#frmRegPersona").submit(function(e)
    {
        bootbox.dialog(
        {
            message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
            title: "Sistema Público de Bicicletas",
        });
        var formObj = $(this);
        var formURL = formObj.attr("action");
        // var formObj = $("#frmRegistrarInspeccion").serialize();
        var formData = new FormData(this);
           $.ajax
                ({
                    url: formURL,
                    type: "POST",
                    dataType: "json",
                    //data: $("#frmRegistrarInspeccion").serialize(), //new FormData($("#frmRegistrarInspeccion").serialize()),
                    data:  formData,
                    mimeType:"multipart/form-data",
                    contentType: false,
                    cache: false,
                    processData:false,
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
                                                url: "../controlador/persona/controlPersona.php?opc=0",
                                                type: "POST",
                                                data:"",
                                                dataType:"json",
                                                success:function(datos)
                                                {
                                                    if (datos.error==0)
                                                    {	
                                                        $.post(datos.stsVista,function(data)
                                                        { 	
                                                            $("#contenido").html(data);
                                                            $("#divCboEstadoPersona").html("<select id='cboEstados' name='cboEstados' class='form-control'>"+datos.cboEstados+"</select>");
                                                            $("#divCboMunicipioPersona").html("<select id='cboMunicipioPersona' name='cboMunicipioPersona' class='form-control'>"+datos.cboMunicipio+"</select>");
                                                            $("#divCboParroquiaPersona").html("<select id='cboParroquiaPersona' name='cboParroquiaPersona' class='form-control'>"+datos.cboParroquia+"</select>");
                                                            $("#divCboOcupacionPersona").html("<select id='cboOcupacionPersona' name='cboOcupacionPersona' class='form-control'>"+datos.cboOcupacion+"</select>");
                                                            $.getScript("../assets/js/persona/personaOpcionesGenerales.js");

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
    e.preventDefault();
});
    function limpiarWeb()
    {
        $("#cedulaPersona").val('');
        $("#pasaportePersona").val('');
        $("#nombrePersona").val('');
        $("#apellidoPersona").val('');
        $("#telefonoPersona").val('');
        $("#direccionPersona").val('');
        $("#fechaNacimientoPersonaWeb").val("");
        $("#edadPersona").val("");
        $("#correoElectronicoPersona").val("");
        $("#sexoF").prop("checked",false);
        $("#sexoM").prop("checked",false);
        $("#idPersonaRegistrar").val('');
    }
    
$("#frmRegPersonaWeb").submit(function(e)
    {
        bootbox.dialog(
        {
            message: "Procesando. Espere...<center><img width='50px' height='50px' src='../../assets/img/loading.gif'/></center>",
            title: "Sistema Público de Bicicletas",
        });
        var formObj = $(this);
        var formURL = formObj.attr("action");
        // var formObj = $("#frmRegistrarInspeccion").serialize();
        var formData = new FormData(this);
           $.ajax
                ({
                    url: formURL,
                    type: "POST",
                    dataType: "json",
                    //data: $("#frmRegistrarInspeccion").serialize(), //new FormData($("#frmRegistrarInspeccion").serialize()),
                    data:  formData,
                    mimeType:"multipart/form-data",
                    contentType: false,
                    cache: false,
                    processData:false,
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
                                                url: "../../controlador/persona/controlPersonaWeb.php?opc=0",
                                                type: "POST",
                                                data:"",
                                                dataType:"json",
                                                success:function(datos)
                                                {
                                                    if (datos.error==0)
                                                    {	
                                                        $.post(datos.stsVista,function(data)
                                                        { 	
                                                            $("#contenido").html(data);
                                                            $("#divCboEstadoPersona").html("<select id='cboEstados' name='cboEstados' class='form-control'>"+datos.cboEstados+"</select>");
                                                            $("#divCboMunicipioPersona").html("<select id='cboMunicipioPersona' name='cboMunicipioPersona' class='form-control'>"+datos.cboMunicipio+"</select>");
                                                            $("#divCboParroquiaPersona").html("<select id='cboParroquiaPersona' name='cboParroquiaPersona' class='form-control'>"+datos.cboParroquia+"</select>");
                                                            $("#divCboOcupacionPersona").html("<select id='cboOcupacionPersona' name='cboOcupacionPersona' class='form-control'>"+datos.cboOcupacion+"</select>");
                                                            $.getScript("../../assets/js/persona/personaOpcionesGenerales.js");
                                                            limpiarWeb();
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
                    }
     }); 
    e.preventDefault();
});
$("#fechaNacimientoPersona").change(function(datos)
    {
        
        fechaNacimiento = $(this).val();
        if (fechaNacimiento!="")
        {    
            $.post("../controlador/prestamo/controlPrestamo.php?opc=13",{feNac:fechaNacimiento},function(data)
            {
                if (data.error == 0)
                {
                    $("#edadPersona").val("");
                    $("#edadPersona").val(data.intEdad);

                }
            },"json");
        }
        else
        {
            $("#edadPersona").val("");
        }
    });
    $("#fechaNacimientoPersonaWeb").change(function(datos)
    {
        
        fechaNacimiento = $(this).val();
        if (fechaNacimiento!="")
        {    
            $.post("../../controlador/persona/controlPersonaWeb.php?opc=6",{feNac:fechaNacimiento},function(data)
            {
                if (data.error == 0)
                {
                    $("#edadPersona").val("");
                    $("#edadPersona").val(data.intEdad);

                }
            },"json");
        }
        else
        {
            $("#edadPersona").val("");
        }
    });
    cargarEstado();
    function cargarEstado()
    {
        $("#cboEstadosPersona").change(function(datos)
        {
            idEstado = $(this).val();

            $.post("../controlador/prestamo/controlPrestamo.php?opc=11",{idEstado:idEstado},function(data)
            {
                if (data.error == 0)
                {
                    $("#divCboMunicipioPersona").html("<select id='cboMunicipioPersona' class='form-control' name='cboMunicipioPersona' >"+data.cboMunicipios+"</select>");
                    $("#divCboParroquiaPersona").html("<select id='cboParroquiaPersona' class='form-control' name='cboParroquiaPersona'><option value='' selected='selected'>-Seleccione-</option></select>");
                    cargarMunicipio();
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
            },"json");
        });
    }
    function cargarMunicipio()
    {
        $("#cboMunicipioPersona").change(function(datos)
        {
            idMunicipio = $(this).val();
            $.post("../controlador/prestamo/controlPrestamo.php?opc=12",{idMunicipio:idMunicipio},function(data)
            {
                if (data.error == 0)
                {
                    $("#divCboParroquiaPersona").html("<select id='cboParroquiaPersona' class='form-control' name='cboParroquiaPersona' >"+data.cboParroquias+"</select>");
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
            },"json");
        });
    }
    
});	/*fin de $(document).ready(function() */