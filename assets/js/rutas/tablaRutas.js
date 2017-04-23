function editarRuta(id_ruta)
{
    $.post("../controlador/rutas/controlRutas.php?opc=4", {id_ruta: id_ruta}, function(datos)
    {
    	if (datos.error=="1")
        {

            //NOMBRE DEL TIPO DE EVENTO
            $("#circuito").html("<select  id='cboCircuito' width='100% 'name='cboCircuito'>"+datos.circuito+"</select>");
            $("#parroquia").html("<select  id='cboParroquia' width='100% 'name='cboParroquia'>"+datos.parroquia+"</select>");
            $("#tipoEstacion").html("<select  id='cboTipoEstacion' width='100% 'name='cboTipoEstacion'>"+datos.cboTipoEstacion+"</select>");
            $("#nomPunto").val(datos.nomRuta);
            $("#sector").val(datos.sector);
            $("#descripcion").val(datos.descripcion);
            $("#idruta").val(id_ruta);
            $("#divEstatusEstacion").css("display","block");
            if (datos.bolEstatusEstacion=='t')
                {
                    $('#bolEstatusEstacionActiva').prop("checked",true);
                    $('#bolEstatusEstacionInactiva').prop("checked",false);
                }
                if (datos.bolEstatusEstacion=='f')
                {
                    $('#bolEstatusEstacionActiva').prop("checked",false);
                    $('#bolEstatusEstacionInactiva').prop("checked",true);
                }
            $("#divFilaBotonModificar").css("display","block");
            
            $("#btnCancelarRuta").attr("disabled",false);
            $("#btnModificarRuta").attr("disabled",false);        
            $("#divFilaBotonRegistar").css("display","none");
            $("#btnRegistrarRuta").attr("disabled",true);
 
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
