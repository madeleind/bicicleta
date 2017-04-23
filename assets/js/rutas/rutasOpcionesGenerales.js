$(document).ready(function()
{
    
    $("#circuito").change(function(datos)
    {
            circuito = $(this).val();
            $.post("../controlador/rutas/controlRutas.php?opc=1",{circuito:circuito},function(data)
            {
                    if (data.error == 0)
                    {
                            $("#parroquia").html("<select id='cboParroquia' name='cboParroquia'onchange='buscar_latitud_longitud(0,0,cboParroquia.value);'>"+data.cboParroquia+"</select>");
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
    
    
     $("#btnRegistrarRuta").click(function(datos)
		{
		$('#frmRegRuta').validate
                ({
                    errorClass: "errorValidar",
                    rules:
                            {
                            
                                nomPunto:
                                        {
                                            required: true,
                                            regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                        },
                                        circuito:
                                        {
                                            required: true,
                                            regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                        },
                                        tipoEstacion:
                                        {
                                            required: true,
                                        },
                                        parroquia:
                                        {
                                            required: true,
                                            regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                        },
                                        sector:
                                        {
                                            required: true,
                                            regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                        },
                                        descripcion:
                                                {
                                            required: true,
                                            regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                        },
                                
                            },
                    messages:
                            {
		                    	 nomPunto:
				                         {
                                                             required: "*Campo Obligatorio",
				                             regex: "*Sin caracteres especiales"
				
				                         },
                                                        circuito:
				                        {
                                                            required: "*Campo Obligatorio",
				                            regex: "*Sin caracteres especiales"
				
				                        },
                                                        tipoEstacion:
                                                        {
                                                            required: "*Campo Obligatorio"
                                                        },
                                                          parroquia:
				                         {
				                    		 required: "*Campo Obligatorio",
				                             regex: "*Sin caracteres especiales"
				
				                         },
                                                          sector:
				                         {
				                    		 required: "*Campo Obligatorio",
				                             regex: "*Sin caracteres especiales"
				
				                         },
                                                         descripcion:
				                         {
				                    		 required: "*Campo Obligatorio",
				                             regex: "*Sin caracteres especiales"
				
				                         },
                            },
                            
                            submitHandler: function()
                            {
                            bootbox.dialog(
                            {
                                message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
                                title: "Sistema Público de Bicicletas",
                            });
                            $.ajax
                            ({
                                url: "../controlador/rutas/controlRutas.php?opc=2",
                                type: "POST",
                                dataType: "json",
                                data: $("#frmRegRuta").serialize(),
                                success: function(data)
                                {
                                    if (data.error==0)
                                    {
                                        bootbox.hideAll();
                                        $.ajax
                                        ({ 
                                            url: "../controlador/rutas/controlRutas.php?opc=0",
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
                                                        $.getScript("../assets/js/rutas/rutasOpcionesGenerales.js");
                                                        $("#circuito").html("<select  id='cboCircuito' width='100% 'name='cboCircuito'>"+datos.cboCircuitos+"</select>");
                                                        $("#tipoEstacion").html("<select  id='cboTipoEstacion' width='100% 'name='cboTipoEstacion'>"+datos.cboTipoEstacion+"</select>");

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
                                    }
                                    if (data.error == "1")
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
}

                            
    });
});
    
     $("#btnModificarRuta").click(function(datos)
		{
		$('#frmRegRuta').validate
                ({
                    errorClass: "errorValidar",
                    rules:
                            {
                            
                                nomPunto:
                                {
                                    required: true,
                                    regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                },
                                circuito:
                                {
                                    required: true,
                                    regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                },
                                parroquia:
                                {
                                    required: true,
                                    regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                },
                                sector:
                                {
                                    required: true,
                                    regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                },
                                tipoEstacion:
                                {
                                    required: true
                                },
                                descripcion:
                                        {
                                    required: true,
                                    regex: "^[a-zA-Z0-9-#.,/() áéíóúñ ÁÉÍÓÚÑ]+$"
                                },
                                
                            },
                    messages:
                            {
                                nomPunto:
                                {
                                    required: "*Campo Obligatorio",
                                    regex: "*Sin caracteres especiales"

                                },
                                 circuito:
                                {
                                    required: "*Campo Obligatorio",
                                    regex: "*Sin caracteres especiales"

                                },
                                 parroquia:
                                {
                                    required: "*Campo Obligatorio",
                                    regex: "*Sin caracteres especiales"

                                },
                                 sector:
                                {
                                    required: "*Campo Obligatorio",
                                    regex: "*Sin caracteres especiales"

                                },
                                tipoEstacion:
                                {
                                    required: "*Campo Obligatorio",
                                },
                                descripcion:
                                {
                                    required: "*Campo Obligatorio",
                                    regex: "*Sin caracteres especiales"

                                },
                            },
                            
                            submitHandler: function()
                    {
                            bootbox.dialog(
                            {
                                message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
                                title: "Sistema Público de Bicicletas",
                            });
                            $.ajax
                            ({
                                url: "../controlador/rutas/controlRutas.php?opc=5",
                                type: "POST",
                                dataType: "json",
                                data: $("#frmRegRuta").serialize(),
                                success: function(data)
                                {
                                    
                                    if (data.error == "0")
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
                                                                url: "../controlador/rutas/controlRutas.php?opc=0",
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
                                                                            $.getScript("../assets/js/rutas/rutasOpcionesGenerales.js");
                                                                            $("#circuito").html("<select  id='cboCircuito' width='100% 'name='cboCircuito'>"+datos.cboCircuitos+"</select>");
                                                                            $("#tipoEstacion").html("<select  id='cboTipoEstacion' width='100% 'name='cboTipoEstacion'>"+datos.cboTipoEstacion+"</select>");

                                                                        });
                                                                    }

                                                                }
                                                            });
                                                        }
                                                    }
                                                }
                                            });
                                        }
                                        if (data.error==1)
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
    
                
                
    $('#btnCancelarRuta').click(function()
    {
        $.ajax
        ({ 
            url: "../controlador/rutas/controlRutas.php?opc=0",
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
                        $.getScript("../assets/js/rutas/rutasOpcionesGenerales.js");
                        $("#circuito").html("<select  id='cboCircuito' width='100% 'name='cboCircuito'>"+datos.cboCircuitos+"</select>");
                        $("#tipoEstacion").html("<select  id='cboTipoEstacion' width='100% 'name='cboTipoEstacion'>"+datos.cboTipoEstacion+"</select>");
                        
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
    
    
});	/*fin de $(document).ready(function() */