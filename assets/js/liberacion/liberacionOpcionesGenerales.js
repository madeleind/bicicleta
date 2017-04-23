$(document).ready(function()
{
    $('#btnRegistrarLiberacionBicicleta').click(function()
    {
        $('#frmLiberarBicicletas').validate
        ({
            errorClass : "errorValidar",
            rules :
            {
                'chkLiberarCamion[]':
                {
                    required: true
                }
            },
            messages :
            {
                'chkLiberarCamion[]':
                {
                    required : "*Seleccione al menos una Bicicleta para liberar"   
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
                    url: "../controlador/liberacion/controlLiberacion.php?opc=2",
                    type: "POST",
                    dataType: "json",
                    data: $("#frmLiberarBicicletas").serialize(),
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
                                                url: "../controlador/liberacion/controlLiberacion.php?opc=0",
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
                                                            $.getScript("../assets/js/liberacion/liberacionOpcionesGenerales.js");

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