function editarRuta(id_ruta)
{
    $.post("../controlador/rutas/controlRutas.php?opc=4", {id_ruta: id_ruta}, function(datos)
    {
    	if (datos.error=="1")
        {

            //NOMBRE DEL TIPO DE EVENTO
            $("#circuito").html("<select  id='cboCircuito' width='100% 'name='cboCircuito'>"+datos.cboCircuitos+"</select>");
                        $("#nomPunto").val(datos.nomRuta);
                        $("#sector").val(datos.sector);
                        $("#descripcion").val(datos.descripcion);
                        $("#idruta").val(id_ruta);
            $("#divFilaBotonModificar").css("display","block");
            $("#btnCancelarRuta").attr("disabled",false);
            $("#btnModificarRuta").attr("disabled",false);        
            $("#divFilaBotonRegistar").css("display","none");
            $("#btnRegistrarRuta").attr("disabled",true);
 
        }
    }, "json");
    
    
    
}
