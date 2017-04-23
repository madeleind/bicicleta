function editarUsuario(id)
{
    $.post("../controlador/usuario/controlUsuarioLogueado.php?opc=4",{id:id,op:"m"},function(datos)
    {
        if (datos.error=="0")
        {
            $.post(datos.stsVista,function(vista)
            {
                $('#contenido').html(vista);	
                $('#labelstsUsuarioEditar').html(datos.arrStsLogin);
                $('#cboStsNacionalidadUsuarioEditar').val(datos.arrStsNacionalidad);
                $('#stsNacionalidadUsuarioEditar').val(datos.arrStsNacionalidad);
                $('#intCedulaUsuarioEditar').val(datos.arrIntCedula);
                $('#stsNombreUsuarioEditar').val(datos.arrStsPrimerNombre);
                $('#stsApellidoUsuarioEditar').val(datos.arrStsPrimerApellido);
                $('#stsTelefonoUsuarioEditar').val(datos.arrStsPrimerTelefono);
                $('#stsOtroTelefonoUsuarioEditar').val(datos.arrStsOtroTelefono);
                $('#cboTipoUsuarioEditar').val(datos.arrIntIdTipoUsuario);
                $('#stsCorreoElectronicoUsuarioEditar').val(datos.arrStsCorreoElectronico);
                if (datos.arrIntStatusUsuario=='1')
                {
                    $('#intEstatusUsuarioEditarActivo').prop("checked",true);
                    $('#intEstatusUsuarioEditarInactivo').prop("checked",false);
                }
                if (datos.arrIntStatusUsuario=='0')
                {
                    $('#intEstatusUsuarioEditarActivo').prop("checked",false);
                    $('#intEstatusUsuarioEditarInactivo').prop("checked",true);
                }
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
                        className: "btn-danger",
                        callback: function() 
                        {
                            $.post("../controlador/acceso/controlAcceso.php?opc=1",function(data)
                            {
                                if (data.error==1)
                                {
                                    location.href="../bicicletas";
                                }
                            },"json");
                        }
                    }
                }
            });
        }
    },"json");
}
function permisosUsuario(id)
{
   $.ajax
        ({ 
            url: "../controlador/usuario/controlUsuarioLogueado.php?opc=6",
            type: "POST",
            data:{id:id},
            dataType:"json",
            success:function(datos)
            {
                if (datos.error==0)
                {	
                    $.post(datos.stsVista,function(data)
                    { 	
                        $("#contenido").html(data);
                        $('#labelStsNombreUsuario').html(datos.arrStsPrimerNombre);
                        $('#labelStsApellidoUsuario').html(datos.arrStsPrimerApellido);
                        $('#labelStsUsuario').html(datos.arrStsLogin);
                        if (datos.arrIntTipoUsuario == "1")
                        {
                            $('#labelStsTipoUsuario').html('Interno');
                        }
                        if (datos.arrIntTipoUsuario == "2")
                        {
                            $('#labelStsTipoUsuario').html('Público');
                        }
                        $('#intIdUsuario').val(datos.arrIntIdusuario);
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
                                className: "btn-danger",
                                callback: function() 
                                {
                                    $.post("../controlador/acceso/controlAcceso.php?opc=1",function(data)
                                    {
                                        if (data.error==1)
                                        {
                                            location.href="../bicicletas";
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