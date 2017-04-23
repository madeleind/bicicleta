$(document).ready(function(){
    
    	//--------------------------------------------------------------------------------------------------
	// FUNCION PARA VALIDAR SOLO LETRAS
	//--------------------------------------------------------------------------------------------------
	$.validator.addMethod("regex",function(value,element,regexp)
        {
            var re= new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },"Solo caracteres alfanumericos");
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
	// BOTON HOME DEL MENU PRINCIPAL
	//------------------------------------------------------------------------------
    $("#menuHome").click(function(){				   
         location.href="";   
    });
    //------------------------------------------------------------------------------
    // FIN DESACTIVA CLICK DERECHO EN PANTALLAS DE FRAME_INICIO E INDEX_PRINCIPAL
    //------------------------------------------------------------------------------
    $("#cerrarSesionEvento").click(function()
    {
        bootbox.dialog(
        {
            message: "\u00BFDesea realmente salir de la aplicaci\u00f3n?",
            title: "Sistema Público de Bicicletas",
            buttons:
            {
                success:
                {
                    label: "No",
                    className: "btn-default",
                },
                primary:
                {
                    label: "Si",
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
    });
//------------------------------------------------------------------------------
    // FIN DESACTIVA CLICK DERECHO EN PANTALLAS DE FRAME_INICIO E INDEX_PRINCIPAL
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    // MENU -- REGISTRAR PRESTAMO 
    //------------------------------------------------------------------------------
   $("#menuRegistrarPrestamo").click(function()
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

    $("#menuConsultarPrestamos").click(function()
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

//*******************REGISTRAR PERSONAS INDEPENDIENTES**************


 $("#menuRegistrarPersonas").click(function()
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
                        $.getScript("../assets/js/persona/personaOpcionesGenerales.js");
                        $("#divCboEstadoPersona").html("<select id='cboEstadosPersona' name='cboEstadosPersona' class='form-control'>"+datos.cboEstados+"</select>");
                        $("#divCboMunicipioPersona").html("<select id='cboMunicipioPersona' name='cboMunicipioPersona' class='form-control'>"+datos.cboMunicipio+"</select>");
                        $("#divCboParroquiaPersona").html("<select id='cboParroquiaPersona' name='cboParroquiaPersona' class='form-control'>"+datos.cboParroquia+"</select>");
                        $("#divCboOcupacionPersona").html("<select id='cboOcupacionPersona' name='cboOcupacionPersona' class='form-control'>"+datos.cboOcupacion+"</select>");
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
   
   
   
   
   
    // CONSULTAR INTERN0
    $("#menuConsultarBicicletas").click(function()
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
 

    $("#menuMantenimientoRutas").click(function()
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
    //------------------------------------------------------------------------------
    // MENU -- MANTENIMIENTO
    //------------------------------------------------------------------------------
$("#menuConsultarDevolucion").click(function()
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
  $(".menuPanelDevolucion").click(function()
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
$("#menuMantenimientoBicicletas").click(function()
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

    //------------------------------------------------------------------------------
    // MENU -- MANTENIMIENTO FIN
    //------------------------------------------------------------------------------
    //------------------------------------------------------------------------------
    // MENU -- REPORTES
    //------------------------------------------------------------------------------

    // REPORTE SOLICITUD FIN    
    // REGISTRAR USUARIO INTERNO
    $("#menuRegistrarUsuarioInterno").click(function()
    {
        $.ajax
        ({ 
            url: "../controlador/usuario/controlUsuarioLogueado.php?opc=0",
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
    });    
    // CONSULTAR USUARIO 
    $("#menuConsultarUsuarios").click(function()
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
    // CARGAR VISTA EDITAR PERFIL USUARIO 
    $("#menuEditarPerfilUsuario").click(function()
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
    });
    // CARGAR VISTA EDITAR PERFIL USUARIO 
    $("#menuCambiarClave").click(function()
    {
        $.ajax
        ({ 
            url: "../controlador/usuario/controlUsuarioLogueado.php?opc=10",
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
                        $("#labelUsuario").html(datos.stsLoginUsuario);
                        $("#labelPreguntaSecreta").html(datos.stsPreguntaSecretaUsuario);
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
    });
    
    $("#menuLiberacion").click(function()
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
    $("#menuAsignacion").click(function()
    {				   
        $.ajax
        ({ 
            url: "../controlador/asignacion/controlAsignacion.php?opc=0",
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
                        $.getScript("../assets/js/asignacion/asignacionOpcionesGenerales.js");

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
    $("#menuReportes").click(function()
    {				   
        $.ajax 
        ({       
            url: "../controlador/reportes/controlReportes.php?opc=0",
            type: "POST",
            data:$("#frmReportes").serialize(),
            dataType:"json",
            success:function(datos)
            {
                if (datos.error==0)
                {	
                    $.post(datos.stsVista,function(data)
                    { 	
                        $("#contenido").html(data);
                        $("#divEstaciones").html("<select  id='cboEstaciones'  class='form-control' width='100% 'name='cboEstaciones'>" + datos.cboEstaciones + "</select>");
                        $("#divOcupacion").html("<select  id='cboOcupacion'  class='form-control' width='100% 'name='cboOcupacion'>" + datos.cboOcupacion + "</select>");
                        $.getScript("../assets/js/reportes/reportesOpcionesGenerales.js");
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
    $("#menuRegistrarSancion").click(function()
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
    });
});