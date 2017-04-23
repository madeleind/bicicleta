
function editarBicicleta(id_bicicleta)
{
    $.post("../controlador/mantenimiento/controlMantenimientoBicicletas.php?opc=4", {id_bicicleta: id_bicicleta}, function(datos)
    {
    	if (datos.error=="0")
        {

            //NOMBRE DEL TIPO DE EVENTO
            $("#idBicicleta").val(datos.id_bicicleta[0]);
            $("#stsSerial").val(datos.serial_bicicleta[0]);
            $("#stsMarca").val(datos.marca_bicicleta[0]);
            $("#descripcion").val(datos.descripcion_bicicleta[0]);
            $("#numTamanioRin").val(datos.tamanio_rin_bicicleta[0]);
            $("#divFilaBotonModificar").css("display","block");
            $("#btnCancelarBicicleta").attr("disabled",false);
            $("#btnModificarBicicleta").attr("disabled",false);        
            $("#divFilaBotonRegistar").css("display","none");
            $("#btnRegistarBicicleta").attr("disabled",true);
 
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
    }, "json");
}
/*
 * FIN FUNCIONES DE LA TABLA TIPO DE EVENTOS
 */

    /* --------------------------------------------------------------------------- */
    /* --------------- FUNCION PARA INGRESAR UNA NUEVO FIRMA --------------------- */
    /* --------------------------------------------------------------------------- */  
    function adjuntarFirma()
    {
        $("#mostrarFirma").css('display','none');
        $("#adjuntarFirma").css('display','block');
        $("#modImgServidor").val('1');
        
    }
    
    /* --------------------------------------------------------------------------- */
    /* --------------- FIN FUNCION PARA INGRESAR UNA NUEVO FIRMA ----------------- */
    /* --------------------------------------------------------------------------- */ 