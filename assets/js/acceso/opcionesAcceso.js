$(document).ready(function() {

    $('#frmIncioSesion').motionCaptcha({
        action: '#fairly-unique-id',
        btnRefresh: '#refrescarInicioSesion',
        noCanvasMsg: "Tu Navegador no soporta este Captcha - por favor visita un navegador moderno."
    });
	window.history.forward();
    function noBack() { 
         window.history.forward(); 
    }
	//------------------------------------------------------------------------------
	// DESACTIVA CLICK DERECHO EN PANTALLAS DE FRAME_INICIO E INDEX_PRINCIPAL
	//------------------------------------------------------------------------------
	var message = "";
	function clickIE() {
	    if (document.all) {
	        (message);
	        return false;
	    }
	}
	function clickNS(e) {
	    if (document.layers || (document.getElementById && !document.all)) {
	        if (e.which == 2 || e.which == 3) {
	            (message);
	            return false;
	        }
	    }
	}
	if (document.layers) {
	    document.captureEvents(Event.MOUSEDOWN);
	    document.onmousedown = clickNS;
	} else {
	    document.onmouseup = clickNS;
	    document.oncontextmenu = clickIE;
	}
	document.oncontextmenu = new Function("return false");
	
	//------------------------------------------------------------------------------
	// FIN DESACTIVA CLICK DERECHO EN PANTALLAS DE FRAME_INICIO E INDEX_PRINCIPAL
	//------------------------------------------------------------------------------
	//--------------------------------------------------------------------------------------------------
	// FUNCION PARA HACER RESET AL FORMULARIO
	//--------------------------------------------------------------------------------------------------
	jQuery.fn.reset = function ()
        {
            $(this).each (function() { this.reset(); });
	}
	//--------------------------------------------------------------------------------------------------
	// FUNCION PARA VALIDAR SOLO LETRAS
	//--------------------------------------------------------------------------------------------------
	$.validator.addMethod("regex",function(value,element,regexp)
        {
            var re= new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },"Solo caracteres alfanumericos");
	//--------------------------------------------------------------------------------------------------
	// ACCESO AL SISTEMA (USUARIO Y CLAVE)
	//--------------------------------------------------------------------------------------------------
	$("#btnIniciarSesion").click(function()
        {
            $('#frmIncioSesion').validate({
            errorClass : "errorValidar",
            rules :
            {
                stsLoginUsuario:	
                {
                    required : true                
                },
                stsClave:
                {
                    required : true
                },
                cboEstacion:	
                {
                    required : true                
                }
            },
            messages :
            {
                stsLoginUsuario:
                {
                    required:"*Campo Obligatorio"
                },
                stsClave:
                {
                    required:"*Campo Obligatorio"
                },
                cboEstacion:	
                {
                    required : "*Campo Obligatorio"  
                }
            },	        
            submitHandler:function()
            {
                bootbox.dialog(
                {
                    message: "Iniciando Sesión. Espere...<center><img width='50px' height='50px' src='assets/img/loading.gif'/></center>",
                    title: "Sistema Público de Bicicletas",
                    
                }); 
                
                //alert($('#stsLoginUsuario').val());

                if ($('#stsLoginUsuario').val()!="")
                { //VALOR DEL INPUT LOGIN
                    var stsLoginEncrypt;
                    stsLoginEncrypt = $().crypt({ method: 'b64enc', source: $('#stsLoginUsuario').val() });
                    $('#stsLoginUsuario').val("");
                    $('#stsLoginUsuario').val(stsLoginEncrypt);
                }   
                if ($('#stsClave').val()!="")
                { //VALOR DEL INPUT PASSWORD
                    var pwEncrypt;
                    pwEncrypt = $().crypt({ method: 'b64enc', source: $('#stsClave').val() });
                    $('#stsClave').val("");
                    $('#stsClave').val(pwEncrypt);
                }
                /*if ($('#cboEstacion').val()!="")
                { //VALOR DEL INPUT PASSWORD
                    var estacionEncrypt;
                    estacionEncrypt = $().crypt({ method: 'b64enc', source: $('#cboEstacion').val() });
                    $('#cboEstacion').val("");
                    $('#cboEstacion').val(estacionEncrypt);
                }*/
                $.ajax 
                ({ 	
                    url : "controlador/acceso/controlAcceso.php?opc=0",
                    type: "POST",
                    dataType:"html",
                    data: $("#frmIncioSesion").serialize(),
                    success: function(data)
                    {
                        //alert(data);
                        // ACCESO SATISFACTORIO
                        if (data=="Exito") 
                        {
                            location="vista/principal.php";		
                        } 
                        else if (data=="Inactivo")
                        {
                            $("#frmIncioSesion").reset();
                            bootbox.hideAll();
                            bootbox.dialog(
                            {
                                message: "Usuario inactivo!!",
                                title: "Sistema Público de Bicicletas",
                                buttons:
                                {
                                    success:
                                    {
                                        label: "Aceptar",
                                        className: "btn-primary",
                                        callback: function() 
                                        {
                                            $("#btnIniciarSesion").prop("disabled", true );
                                            window.location.reload();
                                        }
                                    }
                                }
                            }); 
                            //alert('Acceso denegado - Usuario inactivo!!');
                        }
                        else if(data=="Usuario Incorrecto") 
                        { 
                            $("#frmIncioSesion").reset();
                            bootbox.hideAll();
                            bootbox.dialog(
                            {
                                message: "Revise su usuario y su clave!!",
                                title: "Sistema Público de Bicicletas",
                                buttons:
                                {
                                    success:
                                    {
                                        label: "Aceptar",
                                        className: "btn-primary",
                                        callback: function() 
                                        {
                                            $("#btnIniciarSesion").prop("disabled", true );
                                            window.location.reload();
                                        }
                                    }
                                }
                            }); 
                        }
                        else if(data=="Cambiar")
                        { 
                            //alert('Es necesario que haga un cambio de clave al entrar!!');
                            $("#frmIncioSesion").reset();
                            bootbox.hideAll();
                            bootbox.dialog(
                            {
                                title: "Sistema Público de Bicicletas - Debe cambiar su Clave",
                                message:'Debe cambiar su clave antes de iniciar sesión.', 
                                buttons:
                                {
                                    
                                    main: 
                                    {
                                        label: "Cancelar",
                                        className: "btn-default",
                                        callback: function() 
                                        {
                                        
                                        }
                                    },    
                                    success:
                                    {
                                        label:"Aceptar",
                                        className: "btn-primary",
                                        callback: function() 
                                        {
                                            $.ajax
                                            ({ 
                                                url: "controlador/usuario/controlUsuario.php?opc=5",
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
                                                            $("#labelUsuario").html(datos.stsLoginUsuario);
                                                            $("#labelPreguntaSecreta").html(datos.stsPreguntaSecretaUsuario);
                                                            $.getScript("assets/js/usuarios/usuariosOpcionesGenerales.js");
                                                        });
                                                    }
                                                }
                                            });  
                                        }
                                    }
                                }
                            });
                            //location="vista/index.php";	
                        } 
                        else if(data=="ErrorClave") 
                        {
                            $("#frmIncioSesion").reset();
                            bootbox.hideAll();
                            //alert('Acceso denegado - Clave Incorrecta!!');
                            bootbox.dialog(
                            {
                                message: "Clave Incorrecta!!",
                                title: "Sistema de Público de Bicicletas",
                                buttons:
                                {
                                    success:
                                    {
                                        label: "Aceptar",
                                        className: "btn-primary",
                                        callback: function() 
                                        {
                                            $("#btnIniciarSesion").prop("disabled", true );
                                            window.location.reload();
                                        }
                                    }
                                }
                            });
                            
                        } 
                        else if(data=="ErrorLogeo")
                        {
                            $("#frmIncioSesion").reset();
                            bootbox.hideAll();
                            //alert('Acceso denegado - Error en acceso intente nuevamente!!');
                            bootbox.dialog(
                            {
                                message: "Error en acceso intente nuevamente!!",
                                title: "Sistema Público de Bicicletas",
                                buttons:
                                {
                                    success:
                                    {
                                        label: "Aceptar",
                                        className: "btn-primary",
                                        callback: function() 
                                        {
                                            $("#btnIniciarSesion").prop("disabled", true );
                                            window.location.reload();
                                        }
                                    }
                                }
                            });
                        }
                        else if(data=="noPermiso")
                        {
                            $("#frmIncioSesion").reset();
                            bootbox.hideAll();
                            //alert('Acceso denegado - No tiene permisos en el sistema');
                            bootbox.dialog(
                            {
                                message: "No tiene permisos. Obtenga sus permisos para acceder al sistema!!",
                                title: "Sistema Público de Bicicletas",
                                buttons:
                                {
                                    success:
                                    {
                                        label: "Aceptar",
                                        className: "btn-primary",
                                        callback: function() 
                                        {
                                            $("#btnIniciarSesion").prop("disabled", true );
                                            window.location.reload();
                                        }
                                    }
                                }
                            });
                        }
                    }	
                });		    	
            }		
        });

    });//FIN ACCION DEL BOTON ENTRAR
         
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
}); //FIN DE LA FUNCION READY