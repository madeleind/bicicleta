$(document).ready(function()
{
   $("#btnCancelarDevolucion").click(function()
    { 
        $.ajax
        ({ 
            url: "../controlador/devolucion/controlDevolucion.php?opc=0",
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
                        $.getScript("../assets/js/devolucion/devolucionBicicletaOpcionesGenerales.js");

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
   $('#btnRegistrarDevolucion').click(function()
    {
        $('#frmConsultarPrestamo').validate
        ({
            errorClass : "errorValidar",
            rules :
            {
                'chkDevolverIdPrestamo[]':
                {
                    required: true
                }
            },
            messages :
            {
                'chkDevolverIdPrestamo[]':
                {
                    required : "*Seleccione al menos una Bicicleta para devolver"   
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
                    url: "../controlador/devolucion/controlDevolucion.php?opc=3",
                    type: "POST",
                    dataType: "json",
                    data: $("#frmConsultarPrestamo").serialize(),
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
                                                url: "../controlador/devolucion/controlDevolucion.php?opc=0",
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
                                                            $.getScript("../assets/js/devolucion/devolucionBicicletaOpcionesGenerales.js");

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
    $('#btnRegistrarSancion').click(function()
    {
        $('#frmRegistrarSancion').validate
        ({
            errorClass : "errorValidar",
            rules :
            {
                'cboSancion':
                {
                    required: true
                },
                stsObservacionSancion:
                {
                    required: true
                }
            },
            messages :
            {
                'cboSancion':
                {
                    required : "*Campo Obligatorio"   
                },
                stsObservacionSancion:
                {
                    required : "*Campo Obligatorio"   
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
                    url: "../controlador/devolucion/controlDevolucion.php?opc=4",
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
                                           $.ajax
                                                ({ 
                                                url: "../controlador/devolucion/controlDevolucion.php?opc=0",
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
                                                            $.getScript("../assets/js/devolucion/devolucionBicicletaOpcionesGenerales.js");

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
});    