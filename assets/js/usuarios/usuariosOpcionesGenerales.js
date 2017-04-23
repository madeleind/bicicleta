$(document).ready(function()
{
    
    $('#intCedulaUsuario').blur(function()
    {
        var ele1 = $('#cboStsNacionalidadUsuario').val();
        var ele2 = $('#intCedulaUsuario').val();
        $.ajax
        ({
            type:"POST",
            url: "controlador/usuario/controlUsuario.php?opc=13&ele1="+ele1+"&ele2="+ele2,
            dataType:"json",
            data: "",
            async:true,
            success:function(data)
            {
                if (data.error == 0)
                {
                    $("#stsNombreUsuario").val(data.arrStsPrimerNombre);
                    $("#stsApellidoUsuario").val(data.arrStsPrimerApellido);
                    $("#stsTelefonoUsuario").val(data.arrStsPrimerTelefono);
                    $("#stsOtroTelefonoUsuario").val(data.arrStsOtroTelefono);
                    $("#stsCorreoElectronicoUsuario").val(data.arrStsCorreoElectronico);		
                }
                else if (data.error == 1)
                {
                    $("#stsNombreUsuario").val("");
                    $("#stsApellidoUsuario").val("");
                    $("#stsTelefonoUsuario").val("");
                    $("#stsOtroTelefonoUsuario").val("");
                    $("#stsCorreoElectronicoUsuario").val("");
                    
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
    $('#intCedulaUsuarioInterno').blur(function()
    {
        var ele1 = $('#cboStsNacionalidadUsuarioInterno').val();
        var ele2 = $('#intCedulaUsuarioInterno').val();
        $.ajax
        ({
            type:"POST",
            url: "../controlador/usuario/controlUsuario.php?opc=13&ele1="+ele1+"&ele2="+ele2,
            dataType:"json",
            data: "",
            async:true,
            success:function(data)
            {
                if (data.error == 0)
                {
                    $("#stsNombreUsuarioInterno").val(data.arrStsPrimerNombre);
                    $("#stsApellidoUsuarioInterno").val(data.arrStsPrimerApellido);
                    $("#stsTelefonoUsuarioInterno").val(data.arrStsPrimerTelefono);
                    $("#stsOtroTelefonoUsuarioInterno").val(data.arrStsOtroTelefono);
                    $("#stsCorreoElectronicoUsuarioInterno").val(data.arrStsCorreoElectronico);		
                }
                else if (data.error == 1)
                {
                    $("#stsNombreUsuarioInterno").val("");
                    $("#stsApellidoUsuarioInterno").val("");
                    $("#stsTelefonoUsuarioInterno").val("");
                    $("#stsOtroTelefonoUsuarioInterno").val("");
                    $("#stsCorreoElectronicoUsuarioInterno").val("");
                    
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
    //--------------------------------------------------------------------------------------------------
    // FUNCION PARA VALIDAR SOLO LETRAS
    //--------------------------------------------------------------------------------------------------
    $.validator.addMethod("regex",function(value,element,regexp)
    {
        var re= new RegExp(regexp);
        return this.optional(element) || re.test(value);
    },"Solo caracteres alfanumericos");

    $('#intCedulaUsuario').numeric
    ({
        allowNumeric :true
    });
    $('#stsTelefonoUsuario').numeric
    ({
        allowNumeric :true
    });
    $('#stsOtroTelefonoUsuario').numeric
    ({
        allowNumeric :true
    });
    $('#intCedulaUsuarioInterno').numeric
    ({
        allowNumeric :true
    });
    $('#stsTelefonoUsuarioInterno').numeric
    ({
        allowNumeric :true
    });
    $('#stsOtroTelefonoUsuarioInterno').numeric
    ({
        allowNumeric :true
    });
    
    $('#stsTelefonoUsuarioEditar').numeric
    ({
        allowNumeric :true
    });
    $('#stsOtroTelefonoUsuarioEditar').numeric
    ({
        allowNumeric :true
    });
    
    
    $('#frmRegistrarUsuarioPublico').motionCaptcha({
        action: '#fairly-unique-id',
        btnRefresh: '#myRefreshBtn',
        // This message is displayed if the user's browser doesn't support canvas:
        noCanvasMsg: "Tu Navegador no soporta este Captcha - por favor visita un navegador moderno."
    });
    
    // CANCELAR USUARIO PUBLICO
    $("#btnCancelarUsuarioPublico").click(function()
    {
        location.href="index.php";
    });
    // REGISTRAR USUARIO PUBLICO
    $("#btnRegistrarUsuarioPublico").click(function()
    {
        $('#frmRegistrarUsuarioPublico').validate
        ({

        errorClass : "errorValidar",
        rules :
        {
            stsUsuario:
            {
                required : true  
            },
            cboStsNacionalidadUsuario:
            {
                required : true,
            },
            intCedulaUsuario:	
            {
                required : true,
                number : true, 
                minlength: 6

            },
            stsNombreUsuario:
            {
                required : true,
                regex:"^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$"  
            },
            stsApellidoUsuario:
            {
                required : true,
                regex:"^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$"  
            },
            stsTelefonoUsuario:
            {
                required : true,
                number : true,
                minlength: 11
            },
            stsOtroTelefonoUsuario:
            {
                number : true,
                minlength: 11
            },
            stsCorreoElectronicoUsuario:
            {
                required : true,
                email: true
            },
            stsPreguntaSecretaUsuario:
            {
                required : true,
            },
            stsRespuestaSecretaUsuario:
            {
                required : true,
            },
            stsCaptcha:
            {
                required : true,
            }
        },
        messages :
        {
            stsUsuario:
            {
                required : "*Campo Obligatorio" 
            },
            cboStsNacionalidadUsuario:
            {
                required : "*Campo Obligatorio",
            },
            intCedulaUsuario:	
            {
                required :"*Campo Obligatorio",
                number : "*Numérico",
                minlength:"*Mínimo 6 dígitos"

            },
            stsNombreUsuario:
            {
                required : "*Campo Obligatorio",
                regex:"*Solo debe ingresar caracteres"  
            }, 
            stsApellidoUsuario:
            {
                required : "*Campo Obligatorio",
                regex:"*Solo debe ingresar caracteres"    
            },
            stsTelefonoUsuario:
            {
                required :"*Campo Obligatorio",
                number : "*Numérico",
                minlength: "*Mínimo 11 dígitos"
            },
            stsOtroTelefonoUsuario:
            {
                number : "*Numérico",
                minlength: "*Mínimo 11 dígitos"
            },
            stsCorreoElectronicoUsuario:
            {
                required : "*Campo Obligatorio",
                email: "*Correo Electrónico inválido",
            },
            stsPreguntaSecretaUsuario:
            {
                required : "*Campo Obligatorio",
            },
            stsRespuestaSecretaUsuario:
            {
                required : "*Campo Obligatorio",
            },
            stsCaptcha:
            {
                required : "*Campo Obligatorio",
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
                url: "controlador/usuario/controlUsuario.php?opc=1",
                type: "POST",
                dataType: "json",
                data: $("#frmRegistrarUsuarioPublico").serialize(),
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
                                        $("#siimage").attr("src","assets/captcha/securimage_show_example.php?sid="+ Math.random());			
                                        $("#stsCaptcha").val("");
                                        window.location.reload();
                                    }
                                }
                            }
                        });
                                       
                    }
                    if (data.error=="1")
                    {
                           
                        $("#siimage").attr("src","assets/captcha/securimage_show_example.php?sid="+ Math.random());			
                        $("#stsCaptcha").val("");
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
                                        //$("#btnRegistrarUsuarioPublico").prop("disabled", true );
                                       // window.location.reload();
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
    
    // CANCELAR OLVIDO CLAVE
    $("#btnCancelarOlvidoClave1").click(function()
    {
        location.href="index.php";
    });
    $("#btnCancelarOlvidoClave2").click(function()
    {
        location.href="index.php";
    });
    $("#btnBuscarUsuario").click(function()
    {
        if ($('#stsUsuario').val()!="")
        { //VALOR DEL INPUT LOGIN
            var stsLoginUsuarioEncrypt;
            stsLoginUsuarioEncrypt = $().crypt({ method: 'b64enc', source: $('#stsUsuario').val() });
            $('#stsUsuario').val("");
            $('#stsUsuario').val(stsLoginUsuarioEncrypt);
        }   
        $.ajax
        ({ 
            url : "controlador/usuario/controlUsuario.php?opc=3",
            type: "POST",
            data:$("#frmOlvidoClave").serialize(),
            dataType: "json",
            success:function(datos)
            {	
                bootbox.hideAll();
                //alert(datos.error);
                if (datos.error==0)
                { 
                    $('#btnBuscarUsuario').hide();
                    $('#btnCancelarOlvidoClave1').hide();
                    $('#stsRespuestaSecreta').val("");
                    $('#divRespuestaSecreta').css("display","block");
                    $("#stsUsuario").val(datos.stsLoginUsuario);
                    $("#labelPreguntaSecreta").html("<b>"+datos.stsPreguntaSecreta+"</b>");
                }
                if (datos.error==1)
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
                                    $('#btnCancelarOlvidoClave1').show();
                                    $('#btnBuscarUsuario').show();
                                    $('#divRespuestaSecreta').css("display","none");
                                    $("#labelPreguntaSecreta").html(datos.stsPreguntaSecreta+"");  
                                    $("#stsUsuario").val(datos.stsLoginUsuario);
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
    });
     $('#frmOlvidoClave').motionCaptcha(
    {
        action: '#fairly-unique-id',
        btnRefresh: '#refrescarOlvidoClave',
        // This message is displayed if the user's browser doesn't support canvas:
        noCanvasMsg: "Tu Navegador no soporta este Captcha - por favor visita un navegador moderno."
    }); 	
    $("#btnContinuarOlvidoClave").click(function(e)
    {
        e.preventDefault();
        if ($('#stsUsuario').val()!="")
        { //VALOR DEL INPUT LOGIN
            var stsLoginUsuarioEncrypt;
            stsLoginUsuarioEncrypt = $().crypt({ method: 'b64enc', source: $('#stsUsuario').val() });
            $('#stsUsuario').val("");
            $('#stsUsuario').val(stsLoginUsuarioEncrypt);
        }  
        if ($('#stsRespuestaSecreta').val()!="")
        { //VALOR DEL INPUT LOGIN
            var stsLoginUsuarioEncrypt;
            stsLoginUsuarioEncrypt = $().crypt({ method: 'b64enc', source: $('#stsRespuestaSecreta').val() });
            $('#stsRespuestaSecreta').val("");
            $('#stsRespuestaSecreta').val(stsLoginUsuarioEncrypt);
        }
        $.ajax
        ({ 
            url : "controlador/usuario/controlUsuario.php?opc=4",
            type: "POST",
             data:$("#frmOlvidoClave").serialize(),
            dataType: "json",
            success:function(datos)
            {	
                //alert(datos.error);
                if (datos.error==0)
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
                                    location.href="index.php";
                                }
                            }
                        }
                    });

                }
                if (datos.error==1)
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
                                    $("#labelpreguntaSecreta").html(datos.stsPreguntaSecreta+"");
                                    $("#stsUsuario").val(datos.stsLoginUsuario);
                                    $("#stsRespuestaSecreta").val(datos.stsRespuestaSecreta);
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
    // CANCELAR CAMBIAR CLAVE INICIO
    $("#btnCancelarClaveInicio").click(function()
    {
        location.href="index.php";
    });
    $('#frmCambioClaveInicio').motionCaptcha(
    {
        action: '#fairly-unique-id',
        btnRefresh: '#refrescarCambioClaveInicio',
        // This message is displayed if the user's browser doesn't support canvas:
        noCanvasMsg: "Tu Navegador no soporta este Captcha - por favor visita un navegador moderno."
    });
    $("#btnCambiarClaveInicio").click(function()
    {
        $('#frmCambioClaveInicio').validate({
        errorClass : "errorValidar",
        rules :
        {
            stsRespuestaSecreta:	
            {
                required : true                
            },
            stsNuevaClave:
            {
                required : true
            },
            stsConfirmarClave:
            {
                required : true
            }
        },
        messages :
        {
            stsRespuestaSecreta:	
            {
                required:"*Campo Obligatorio",               
            },
            stsNuevaClave:
            {
                 required:"*Campo Obligatorio",
            },
            stsConfirmarClave:
            {
                required:"*Campo Obligatorio",
            }
        },	        
        submitHandler:function()
        {
            bootbox.dialog(
            {
                message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
                title: "Sistema Público de Bicicletas",
            });
   
            if ($('#stsNuevaClave').val()!="")
            { //VALOR DEL INPUT PASSWORD
                var pwEncrypt;
                pwEncrypt = $().crypt({ method: 'b64enc', source: $('#stsNuevaClave').val() });
                $('#stsNuevaClave').val("");
                $('#stsNuevaClave').val(pwEncrypt);
            }
            if ($('#stsConfirmarClave').val()!="")
            { 
                var stsConfirmarClave;
                stsConfirmarClave = $().crypt({ method: 'b64enc', source: $('#stsConfirmarClave').val() });
                $('#stsConfirmarClave').val("");
                $('#stsConfirmarClave').val(stsConfirmarClave);
            }
            if ($('#stsRespuestaSecreta').val()!="")
            { 
                var stsRespuestaSecreta;
                stsRespuestaSecreta = $().crypt({ method: 'b64enc', source: $('#stsRespuestaSecreta').val() });
                $('#stsRespuestaSecreta').val("");
                $('#stsRespuestaSecreta').val(stsRespuestaSecreta);
            }

            $.ajax (
            { 
                url: "controlador/usuario/controlUsuario.php?opc=11",
                type: "POST",
                data: $("#frmCambioClaveInicio").serialize(),
                dataType:"json",
                success:function(datos)	
                {
                    if (datos.error==0)
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
                                        location.href="index.php";
                                    }
                                }
                            }
                        });  
                    }
                    if (datos.error==1)
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
                                        $("#stsNuevaClave").val("");
                                        $("#stsConfirmarClave").val("");
                                        $("#stsRespuestaSecreta").val("");
                                    }
                                }
                            }
                        });  
                    }
                }
            }); 
        }      
    });

    });//FIN ACCION DEL BOTON 
         
    // REGISTRAR USUARIO
    $("#usuarioPubicoRegistrar").click(function()
    {
        $.ajax
        ({ 
            url: "controlador/usuario/controlUsuario.php?opc=0",
            type: "POST",
            data:"",
            dataType:"json",
            success:function(datos)
            {
                if (datos.error==0)
                {	
                    $.post(datos.stsVista,function(data)
                    { 	
                        $("#contenido").hide();	 	    				
                        $("#contenido").html(data);                   
                        $("#contenido").toggle("slow"); 
                        $.getScript("assets/js/usuarios/usuariosOpcionesGenerales.js");
                    });
                }
            }
        });
    });


    $("#olvidoClave").click(function()
    {				   
        $.ajax
        ({ 
            url: "controlador/usuario/controlUsuario.php?opc=2",
            type: "POST",
            data:"",
            dataType:"json",
            success:function(datos)
            {
                if (datos.error==0)
                {	
                    $.post(datos.stsVista,function(data)
                    { 	
                        $("#contenido").hide();	 	    				
                        $("#contenido").html(data);                   
                        $("#contenido").toggle("slow"); 
                        $.getScript("assets/js/usuarios/usuariosOpcionesGenerales.js");
                    });
                }
            }
        });
    });
    // CANCELAR USUARIO PUBLICO
    $("#btnCancelarUsuarioInterno").click(function()
    {
        location.href="";
    });
    // REGISTRAR USUARIO PUBLICO
    $("#btnRegistrarUsuarioInterno").click(function()
    {
        $('#frmRegistrarUsuarioInterno').validate
        ({

        errorClass : "errorValidar",
        rules :
        {
            stsUsuarioInterno:
            {
                required : true 
            },
            cboStsNacionalidadUsuarioInterno:
            {
                required : true
            },
            intCedulaUsuarioInterno:	
            {
                required : true,
                number : true, 
                minlength: 6

            },
            stsNombreUsuarioInterno:
            {
                required : true,
                regex:"^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$"  
            },
            stsApellidoUsuarioInterno:
            {
                required : true,
                regex:"^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$"  
            },
            stsTelefonoUsuarioInterno:
            {
                required : true,
                number : true,
                minlength: 11
            },
            stsOtroTelefonoUsuarioInterno:
            {
                number : true,
                minlength: 11
            },
            stsCorreoElectronicoUsuarioInterno:
            {
                required : true,
                email: true
            },
            stsPreguntaSecretaUsuarioInterno:
            {
                required : true
            },
            stsRespuestaSecretaUsuarioInterno:
            {
                required : true
            }
        },
        messages :
        {
            stsUsuarioInterno:
            {
                required : "*Campo Obligatorio"  
            },
            cboStsNacionalidadUsuarioInterno:
            {
                required : "*Campo Obligatorio"
            },
            intCedulaUsuarioInterno:	
            {
                required :"*Campo Obligatorio",
                number : "*Numérico",
                minlength:"*Mínimo 6 dígitos"

            },
            stsNombreUsuarioInterno:
            {
                required : "*Campo Obligatorio",
                regex:"*Solo debe ingresar caracteres"  
            }, 
            stsApellidoUsuarioInterno:
            {
                required : "*Campo Obligatorio",
                regex:"*Solo debe ingresar caracteres"    
            },
            stsTelefonoUsuarioInterno:
            {
                required :"*Campo Obligatorio",
                number : "*Numérico",
                minlength: "*Mínimo 11 dígitos"
            },
            stsOtroTelefonoUsuarioInterno:
            {
                number : "*Numérico",
                minlength: "*Mínimo 11 dígitos"
            },
            stsCorreoElectronicoUsuarioInterno:
            {
                required : "*Campo Obligatorio",
                email: "*Correo Electrónico inválido"
            },
            stsPreguntaSecretaUsuarioInterno:
            {
                required : "*Campo Obligatorio"
            },
            stsRespuestaSecretaUsuarioInterno:
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
                url: "../controlador/usuario/controlUsuarioLogueado.php?opc=1",
                type: "POST",
                dataType: "json",
                data: $("#frmRegistrarUsuarioInterno").serialize(),
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
                                        window.location.reload();
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
                                        //$("#btnRegistrarUsuarioPublico").prop("disabled", true );
                                       // window.location.reload();
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
                                                location.href="eventos";
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
    // CANCELAR EDITAR USUARIO 
    $("#btnCancelarUsuarioEditar").click(function()
    {
        $.ajax
        ({ 
            url: "../controlador/usuario/controlUsuarioLogueado.php?opc=2",
            type: "POST",
            data:"",
            dataType:"json",
            success:function(datos)
            {
                if (datos.error==0)
                {
                    $.post(datos.stsVista,function(data)
                    {
                        $.getScript("../assets/js/usuarios/usuariosOpcionesGenerales.js");
                        $("#contenido").html(data);
                        jQuery('#contenido').ajaxStop(function() 
                        {
                            setTimeout(function(){ $("#contenido").show("slow"); }, 550);
                        });
                    });
                }

            }
        });
    });
     // REGISTRAR USUARIO PUBLICO
    $("#btnRegistrarUsuarioEditar").click(function()
    {
        $('#frmEditarUsuario').validate
        ({

        errorClass : "errorValidar",
        rules :
        {
            stsNombreUsuarioEditar:
            {
                required : true  
            },
            stsApellidoUsuarioEditar:
            {
                required : true,
                regex:"^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$"  
            },
            stsTelefonoUsuarioEditar:
            {
                required : true,
                number : true,
                minlength: 11
            },
            stsOtroTelefonoUsuarioEditar:
            {
                number : true,
                minlength: 11
            },
            cboTipoUsuarioEditar:
            {
                required : true
            },
            stsCorreoElectronicoUsuarioEditar:
            {
                required : true,
                email: true
            }
    
        },
        messages :
        {
            stsNombreUsuarioEditar:
            {
                required : "*Campo Obligatorio" 
            }, 
            stsApellidoUsuarioEditar:
            {
                required : "*Campo Obligatorio",
                regex:"*Solo debe ingresar caracteres"    
            },
            stsTelefonoUsuarioEditar:
            {
                required :"*Campo Obligatorio",
                number : "*Numérico",
                minlength: "*Mínimo 11 dígitos"
            },
            stsOtroTelefonoUsuarioEditar:
            {
                number : "*Numérico",
                minlength: "*Mínimo 11 dígitos"
            },
            cboTipoUsuarioEditar:
            {
                required :"*Campo Obligatorio"
            },
            stsCorreoElectronicoUsuarioEditar:
            {
                required : "*Campo Obligatorio",
                email: "*Correo Electrónico inválido"
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
                url: "../controlador/usuario/controlUsuarioLogueado.php?opc=5",
                type: "POST",
                dataType: "json",
                data: $("#frmEditarUsuario").serialize(),
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
                                            url: "../controlador/usuario/controlUsuarioLogueado.php?opc=2",
                                            type: "POST",
                                            data:"",
                                            dataType:"json",
                                            success:function(datos)
                                            {
                                                if (datos.error==0)
                                                {
                                                    $.post(datos.stsVista,function(data)
                                                    {
                                                        $.getScript("../assets/js/usuarios/usuariosOpcionesGenerales.js");
                                                        $("#contenido").html(data);
                                                        jQuery('#contenido').ajaxStop(function() 
                                                        {
                                                            setTimeout(function(){ $("#contenido").show("slow"); }, 550);
                                                        });
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
                                        //$("#btnRegistrarUsuarioPublico").prop("disabled", true );
                                       // window.location.reload();
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
                                                location.href="eventos";
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
    // EDITAR PERMISOS USUARIOS 
    $("#btnEditarPermisoUsuario").click(function()
    {
        bootbox.dialog(
        {
            message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
            title: "Sistema Público de Bicicletas",
        });
        $.ajax
        ({ 
            url: "../controlador/usuario/controlUsuarioLogueado.php?opc=7",
            type: "POST",
            dataType: "json",
            data: $("#frmEditarPermisosUsuario").serialize(),
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
                                        url: "../controlador/usuario/controlUsuarioLogueado.php?opc=2",
                                        type: "POST",
                                        data:"",
                                        dataType:"json",
                                        success:function(datos)
                                        {
                                            if (datos.error==0)
                                            {
                                                $.post(datos.stsVista,function(data)
                                                {
                                                    $.getScript("../assets/js/usuarios/usuariosOpcionesGenerales.js");
                                                    $("#contenido").html(data);
                                                    jQuery('#contenido').ajaxStop(function() 
                                                    {
                                                        setTimeout(function(){ $("#contenido").show("slow"); }, 550);
                                                    });
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
    });
    // CANCELAR USUARIO PUBLICO
    $("#btnCancelarEditarPerfil").click(function()
    {
        window.location.reload();
    });
    // REGISTRAR USUARIO PUBLICO
    $("#btnEditarPerfilUsuario").click(function()
    {
        
        $('#frmEditarPerfilUsuario').validate
        ({

        errorClass : "errorValidar",
        rules :
        {
            stsNombreUsuarioEditarPerfil:
            {
                required : true  
            },
            stsApellidoUsuarioEditarPerfil:
            {
                required : true,
                regex:"^[a-zA-Z áéíóúñÁÉÍÓÚÑ]+$"  
            },
            stsTelefonoUsuarioEditarPerfil:
            {
                required : true,
                number : true,
                minlength: 11
            },
            stsOtroTelefonoUsuarioEditarPerfil:
            {
                number : true,
                minlength: 11
            },
            stsCorreoElectronicoUsuarioEditarPerfil:
            {
                required : true,
                email: true
            },
            stsPreguntaSecretaUsuarioEditarPerfil:
            {
                required : true,
            },
            stsRespuestaSecretaUsuarioEditarPerfil:
            {
                required : true,
            }
        },
        messages :
        {
            stsNombreUsuarioEditarPerfil:
            {
                required : "*Campo Obligatorio"  
            }, 
            stsApellidoUsuarioEditarPerfil:
            {
                required : "*Campo Obligatorio",
                regex:"*Solo debe ingresar caracteres"    
            },
            stsTelefonoUsuarioEditarPerfil:
            {
                required :"*Campo Obligatorio",
                number : "*Numérico",
                minlength: "*Mínimo 11 dígitos"
            },
            stsOtroTelefonoUsuarioEditarPerfil:
            {
                number : "*Numérico",
                minlength: "*Mínimo 11 dígitos"
            },
            stsCorreoElectronicoUsuarioEditarPerfil:
            {
                required : "*Campo Obligatorio",
                email: "*Correo Electrónico inválido",
            },
            stsPreguntaSecretaUsuarioEditarPerfil:
            {
                required : "*Campo Obligatorio",
            },
            stsRespuestaSecretaUsuarioEditarPerfil:
            {
                required : "*Campo Obligatorio",
            }
        },	        
        submitHandler:function()
        {
            bootbox.dialog(
            {
                message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
                title: "Sistema Público de Bicicletas",
            });
            if ($('#stsCorreoElectronicoUsuarioEditarPerfil').val()!="")
            { //VALOR DEL INPUT PASSWORD
                var pwEncrypt;
                pwEncrypt = $().crypt({ method: 'b64enc', source: $('#stsCorreoElectronicoUsuarioEditarPerfil').val() });
                $('#stsCorreoElectronicoUsuarioEditarPerfil').val("");
                $('#stsCorreoElectronicoUsuarioEditarPerfil').val(pwEncrypt);
            }
            if ($('#stsPreguntaSecretaUsuarioEditarPerfil').val()!="")
            { 
                var stsPreguntaSectretaUsuario;
                stsPreguntaSectretaUsuario = $().crypt({ method: 'b64enc', source: $('#stsPreguntaSecretaUsuarioEditarPerfil').val() });
                $('#stsPreguntaSecretaUsuarioEditarPerfil').val("");
                $('#stsPreguntaSecretaUsuarioEditarPerfil').val(stsPreguntaSectretaUsuario);
            }
            if ($('#stsRespuestaSecretaUsuarioEditarPerfil').val()!="")
            { 
                var stsRespuestaSecreta;
                stsRespuestaSecreta = $().crypt({ method: 'b64enc', source: $('#stsRespuestaSecretaUsuarioEditarPerfil').val() });
                $('#stsRespuestaSecretaUsuarioEditarPerfil').val("");
                $('#stsRespuestaSecretaUsuarioEditarPerfil').val(stsRespuestaSecreta);
            }
            $.ajax
            ({ 
                url: "../controlador/usuario/controlUsuarioLogueado.php?opc=9",
                type: "POST",
                dataType: "json",
                data: $("#frmEditarPerfilUsuario").serialize(),
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
                                            url: "../controlador/usuario/controlUsuarioLogueado.php?opc=8",
                                            type: "POST",
                                            data:"",
                                            dataType:"json",
                                            success:function(datos)
                                            {
                                                if (datos.error==0)
                                                {	
                                                    $.post(datos.stsVista,function(data)
                                                    { 		    				
                                                        $("#contenido").hide();	 	    				
                                                        $("#contenido").html(data); 
                                                        $("#stsUsuarioEditarPerfil").val(datos.arrStsLogin); 
                                                        $("#cboStsNacionalidadUsuarioEditarPerfil").val(datos.arrStsNacionalidad); 
                                                        $("#stsNacionalidadUsuarioEditarPerfil").val(datos.arrStsNacionalidad); 
                                                        $("#intCedulaUsuarioEditarPerfil").val(datos.arrIntCedula);
                                                        $("#stsNombreUsuarioEditarPerfil").val(datos.arrStsPrimerNombre); 
                                                        $("#stsApellidoUsuarioEditarPerfil").val(datos.arrStsPrimerApellido);
                                                        $("#stsTelefonoUsuarioEditarPerfil").val(datos.arrStsPrimerTelefono); 
                                                        $("#stsOtroTelefonoUsuarioEditarPerfil").val(datos.arrStsOtroTelefono);
                                                        $("#stsCorreoElectronicoUsuarioEditarPerfil").val(datos.arrStsCorreoElectronico); 
                                                        $("#stsPreguntaSecretaUsuarioEditarPerfil").val(datos.arrStsPreguntaSecreta);
                                                        $("#stsRespuestaSecretaUsuarioEditarPerfil").val(datos.arrStsRespuestaSecreta); 
                                                        $("#contenido").toggle("slow"); 
                                                        $.getScript("../assets/js/usuarios/usuariosOpcionesGenerales.js");
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
                                }
                            }
                        });
                    }
                    if (data.error=="1")
                    {
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
                                        $("#stsCorreoElectronicoUsuarioEditarPerfil").val(data.stsCorreoElectronico); 
                                        $("#stsPreguntaSecretaUsuarioEditarPerfil").val(data.stsPreguntaSecreta);
                                        $("#stsRespuestaSecretaUsuarioEditarPerfil").val(data.stsRespuestaSecreta); 
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
   // CANCELAR CAMBIAR CLAVE USUARIO
    $("#btnCancelarClave").click(function()
    {
        window.location.reload();
    });
    $("#btnCambiarClave").click(function()
    {
        $('#frmCambiarClave').validate({
        errorClass : "errorValidar",
        rules :
        {
            stsRespuestaSecreta:	
            {
                required : true                
            },
            stsNuevaClave:
            {
                required : true
            },
            stsConfirmarClave:
            {
                required : true
            }
        },
        messages :
        {
            stsRespuestaSecreta:	
            {
                required:"*Campo Obligatorio",               
            },
            stsNuevaClave:
            {
                 required:"*Campo Obligatorio",
            },
            stsConfirmarClave:
            {
                required:"*Campo Obligatorio",
            }
        },	        
        submitHandler:function()
        {
            bootbox.dialog(
            {
                message: "Procesando. Espere...<center><img width='50px' height='50px' src='../assets/img/loading.gif'/></center>",
                title: "Sistema Público de Bicicletas",
            });
            if ($('#stsNuevaClave').val()!="")
            { //VALOR DEL INPUT PASSWORD
                var pwEncrypt;
                pwEncrypt = $().crypt({ method: 'b64enc', source: $('#stsNuevaClave').val() });
                $('#stsNuevaClave').val("");
                $('#stsNuevaClave').val(pwEncrypt);
            }
            if ($('#stsConfirmarClave').val()!="")
            { 
                var stsConfirmarClave;
                stsConfirmarClave = $().crypt({ method: 'b64enc', source: $('#stsConfirmarClave').val() });
                $('#stsConfirmarClave').val("");
                $('#stsConfirmarClave').val(stsConfirmarClave);
            }
            if ($('#stsRespuestaSecreta').val()!="")
            { 
                var stsRespuestaSecreta;
                stsRespuestaSecreta = $().crypt({ method: 'b64enc', source: $('#stsRespuestaSecreta').val() });
                $('#stsRespuestaSecreta').val("");
                $('#stsRespuestaSecreta').val(stsRespuestaSecreta);
            }

            $.ajax (
            { 
                url: "../controlador/usuario/controlUsuarioLogueado.php?opc=11",
                type: "POST",
                data: $("#frmCambiarClave").serialize(),
                dataType:"json",
                success:function(datos)	
                {
                    if (datos.error==0)
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
                    if (datos.error==1)
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
                                        $("#stsNuevaClave").val("");
                                        $("#stsConfirmarClave").val("");
                                        $("#stsRespuestaSecreta").val("");
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

    });//FIN ACCION DEL BOTON 
});