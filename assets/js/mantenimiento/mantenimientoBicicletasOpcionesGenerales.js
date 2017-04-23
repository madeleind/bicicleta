$(document).ready(function()
{
      /*FECHA RESOLUCION*/
    $("#datFechaResolucion").datepicker( {
            changeMonth : true,
            changeYear : true
    }, $.datepicker.regional['es']); 
      /*FECHA GACETA MUNICIPAL*/
    $("#datFechaGacetaMunicipal").datepicker( {
            changeMonth : true,
            changeYear : true
    }, $.datepicker.regional['es']);  
    
    

    /* --------------------------------------------------------------------------- */
    /* ------------ INICIO BOTON REGRISTAR TIPO DE EVENTOS ----------------------- */
    /* --------------------------------------------------------------------------- */
    $('#btnRegistarBicicleta').click(function()
    {
        $('#frmMantenimientoBicicleta').validate
        ({
            errorClass : "errorValidar",
            rules :
            {
                stsSerial:
                {
                    required : true 
                },
                 numTamanioRin:
                {
                    required : true,
                    number:true
                },
                  stsMarca:
                {
                    required : true 
                }
            },
            messages :
            {
                stsSerial:
                {
                    required : "*Campo Obligatorio"   
                },
                 numTamanioRin:
                {
                    required : "*Campo Obligatorio" ,
                    number: "*Campo Numérico"
                },
                  stsMarca:
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
                    url: "../controlador/mantenimiento/controlMantenimientoBicicletas.php?opc=1",
                    type: "POST",
                    dataType: "json",
                    data: $("#frmMantenimientoBicicleta").serialize(),
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
                                                url: "../controlador/mantenimiento/controlMantenimientoBicicletas.php?opc=0",
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
                                                            $.getScript("../assets/js/mantenimiento/mantenimientoBicicletasOpcionesGenerales.js");

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

     $('#btnRegistarBicicleta').click(function()
    {
        $('#frmMantenimientoBicicleta').validate
        ({
            errorClass : "errorValidar",
            rules :
            {
                stsSerial:
                {
                    required : true 
                },
                 numTamanioRin:
                {
                    required : true 
                },
                  stsMarca:
                {
                    required : true 
                }
            },
            messages :
            {
                stsSerial:
                {
                    required : "*Campo Obligatorio"   
                },
                 numTamanioRin:
                {
                    required : "*Campo Obligatorio"   
                },
                  stsMarca:
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
                    url: "../controlador/mantenimiento/controlMantenimientoBicicletas.php?opc=1",
                    type: "POST",
                    dataType: "json",
                    data: $("#frmMantenimientoBicicleta").serialize(),
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
                                                url: "../controlador/mantenimiento/controlMantenimientoBicicletas.php?opc=0",
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
                                                            $.getScript("../assets/js/mantenimiento/mantenimientoBicicletasOpcionesGenerales.js");

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
    
    /* --------------------------------------------------------------------------- */
    /* --------------- FIN BOTON REGRISTAR TIPO DE EVENTOS ----------------------- */
    /* --------------------------------------------------------------------------- */  
    /* --------------------------------------------------------------------------- */
    /* --------------- FUNCION PARA SUBIR INFORMACION AL INPUT ------------------- */
    /* --------------------------------------------------------------------------- */  
    $('#frmMantenimientoTipoEventos').on("click",".editarTipoEvento",function()
    {
        var $d = $(this).parent("tr");     
        var row = $d.parent().children().index($d);
        //NOMBRE DEL TIPO DE EVENTO
        $("#stsNombreTipoEvento").val($("#tablaDatosTipoEventos tbody tr:eq(" + row + ")").find('.classEditarNombreTipoEvento').val());
        $("#idTipoEvento").val($("#tablaDatosTipoEventos tbody tr:eq(" + row + ")").find('.classEditarIdTipoEvento').val());
        $("#divFilaBotonModificar").css("display","block");
        $("#btnCancelarTipoEventos").attr("disabled",false);
        $("#btnModificarTipoEventos").attr("disabled",false);        
        $("#divFilaBotonRegistar").css("display","none");
        $("#btnRegistarTipoEventos").attr("disabled",true);

    });
    /* --------------------------------------------------------------------------- */
    /* ---------------FIN FUNCION PARA SUBIR INFORMACION AL INPUT -----------------*/
    /* --------------------------------------------------------------------------- */      
    /* --------------------------------------------------------------------------- */
    /* --------------INICIO BOTON CANCELAR TIPO DE EVENTOS ----------------------- */
    /* --------------------------------------------------------------------------- */
    $('#btnCancelarBicicleta').click(function()
    { 
        $("#divFilaBotonModificar").css("display","none");
        $("#btnCancelarBicicleta").attr("disabled",true);
        $("#btnModificarBicicleta").attr("disabled",true);
        $("#divFilaBotonRegistar").css("display","block");
        $("#btnRegistarBicicleta").attr("disabled",false);        
        /*$("#stsNombreTipoEvento").val();
        $("#idTipoEvento").val();       */ 
    });
    /* --------------------------------------------------------------------------- */
    /* --------------- FIN BOTON CANCELAR TIPO DE EVENTOS ------------------------ */
    /* --------------------------------------------------------------------------- */
    /* --------------------------------------------------------------------------- */
    /* ------------ INICIO BOTON MODIFICAR TIPO DE EVENTOS ----------------------- */
    /* --------------------------------------------------------------------------- */
    $('#btnModificarBicicleta').click(function()
    {
        $('#frmMantenimientoBicicleta').validate
        ({
            errorClass : "errorValidar",
           rules :
            {
                stsSerial:
                {
                    required : true 
                },
                 numTamanioRin:
                {
                    required : true 
                },
                  stsMarca:
                {
                    required : true 
                }
            },
            messages :
            {
                stsSerial:
                {
                    required : "*Campo Obligatorio"   
                },
                 numTamanioRin:
                {
                    required : "*Campo Obligatorio"   
                },
                  stsMarca:
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
                    url: "../controlador/mantenimiento/controlMantenimientoBicicletas.php?opc=2",
                    type: "POST",
                    dataType: "json",
                    data: $("#frmMantenimientoBicicleta").serialize(),
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
                                                url: "../controlador/mantenimiento/controlMantenimientoBicicletas.php?opc=0",
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
                                                            $.getScript("../assets/js/mantenimiento/mantenimientoBicicletasOpcionesGenerales.js");

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
    })
    /* --------------------------------------------------------------------------- */
    /* --------------- FIN BOTON MODIFICAR TIPO DE EVENTOS ----------------------- */
    /* --------------------------------------------------------------------------- */     
    
    

});	/*fin de $(document).ready(function() */