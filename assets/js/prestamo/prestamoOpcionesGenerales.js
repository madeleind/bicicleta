$(document).ready(function()
{
    $("#cboTipoDocumentacion").change(function(datos)
    {

        opElegida = $(this).val();
        if (opElegida=="1")
        {    
            $("#divCedula").css("display","block");
            $("#cedula").val("");
            $("#pasaporte").val("");
            $("#divPasaporte").css("display","none");
        }
        else if (opElegida=="2")
        {
           $("#divCedula").css("display","none");
           $("#divPasaporte").css("display","block");
           $("#cedula").val("");
           $("#pasaporte").val("");
        }
        else if (opElegida=="")
        {
           $("#divCedula").css("display","none");
           $("#divPasaporte").css("display","none");
           $("#cedula").val("");
           $("#pasaporte").val("");
        }
    });
 $("#fechaNacimiento").datepicker( {
        changeMonth : true,
        changeYear : true,
        yearRange: '-110:-18'
    }, $.datepicker.regional['es']); 
 //REGISTRAR PRESTAMO   
    $("#frmRegPrestamo").submit(function(e)
    {
       /* bootbox.dialog(
        {
            message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
            title: "Sistema Público de Bicicletas",
        });*/
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
                                                url: "../controlador/prestamo/controlPrestamo.php?opc=0",
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
                                                            $("#divCboEstado").html("<select id='cboEstados' name='cboEstados' class='form-control'>"+datos.cboEstados+"</select>");
                                                            $("#divCboMunicipio").html("<select id='cboMunicipio' name='cboMunicipio' class='form-control'>"+datos.cboMunicipio+"</select>");
                                                            $("#divCboParroquia").html("<select id='cboParroquia' name='cboParroquia' class='form-control'>"+datos.cboParroquia+"</select>");
                                                            $("#divCboOcupacion").html("<select id='cboOcupacion' name='cboOcupacion' class='form-control'>"+datos.cboOcupacion+"</select>");
                                                            $.getScript("../assets/js/prestamo/prestamoOpcionesGenerales.js");

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
    
    $("#fechaNacimiento").change(function(datos)
    {
        
        fechaNacimiento = $(this).val();
        if (fechaNacimiento!="")
        {    
            $.post("../controlador/prestamo/controlPrestamo.php?opc=13",{feNac:fechaNacimiento},function(data)
            {
                if (data.error == 0)
                {
                    $("#edad").val("");
                    $("#edad").val(data.intEdad);

                }
            },"json");
        }
        else
        {
            $("#edad").val("");
        }
    });
    cargarEstado();
    function cargarEstado()
    {
        $("#cboEstados").change(function(datos)
        {
            idEstado = $(this).val();

            $.post("../controlador/prestamo/controlPrestamo.php?opc=11",{idEstado:idEstado},function(data)
            {
                if (data.error == 0)
                {
                    $("#divCboMunicipio").html("<select id='cboMunicipio' class='form-control' name='cboMunicipio' >"+data.cboMunicipios+"</select>");
                    $("#divCboParroquia").html("<select id='cboParroquia' class='form-control' name='cboParroquia'><option value='' selected='selected'>-Seleccione-</option></select>");
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
        $("#cboMunicipio").change(function(datos)
        {
            idMunicipio = $(this).val();
            $.post("../controlador/prestamo/controlPrestamo.php?opc=12",{idMunicipio:idMunicipio},function(data)
            {
                if (data.error == 0)
                {
                    $("#divCboParroquia").html("<select id='cboParroquia' class='form-control' name='cboParroquia' >"+data.cboParroquias+"</select>");
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
    $("#btnCancelarHistorioPersona").click(function()
    {				   
        $.ajax
        ({ 
            url: "../controlador/prestamo/controlPrestamo.php?opc=16",
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
                        $.getScript("../assets/js/prestamo/prestamoOpcionesGenerales.js");

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
    }); 
});	/*fin de $(document).ready(function() */