$(document).ready(function()
{
   $("#btnCancelarEntrega").click(function()
    { 
         $.ajax
        ({ 
            url: "../controlador/consultas/consultarBicicletas.php?opc=0",
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
                        $.getScript("../assets/js/consultas/entregaBiciOpcionesGenerales.js");

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
    $("#btnRegistroEntrega").click(function()
    {
        $.ajax
        ({
            type:"POST",
            url: "../controlador/consultas/consultarBicicletas.php?opc=3",
            dataType:"json",
            data: $("#frmEntregaBicicleta").serialize(),
            async:true,
            success:function(data)
            {
                
                if (data.error==0)
                {
                    bootbox.hideAll();
                    bootbox.dialog(
                    {
                        message: 'Registrada la Entrega Satisfactoriamente',
                        title: "Sistema de Bicicletas",
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
                                        url: "../controlador/consultas/consultarBicicletas.php?opc=0",
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
                                                    $.getScript("../assets/js/consultas/entregaBiciOpcionesGenerales.js");

                                                });
                                            }

                                        }
                                    });
                                }
                            }
                        }
                    });
                }
                else if(data.error==1)
                {
                    bootbox.hideAll();
                    bootbox.dialog(
                    {
                        message: 'Debe seleccionar si desea registrar la entrega',
                        title: "Sistema de Bicicletas",
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
                else if (data.error==2)
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
       
    });
    
});    