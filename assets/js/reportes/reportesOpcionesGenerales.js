$(document).ready(function()
{
    $('#timeHoraDesde').timepicker({
        showPeriod: true,
        showLeadingZero: true
    }, $.timepicker.regional['es']);
    $('#timeHoraHasta').timepicker({
        showPeriod: true,
        showLeadingZero: true
    }, $.timepicker.regional['es']);
    //FECHA DESDE
    $("#datFechaDesde").datepicker({
        changeMonth: true,
        changeYear: true
    }, $.datepicker.regional['es']);

    //FECHA HASTA
    $("#datFechaHasta").datepicker({
        changeMonth: true,
        changeYear: true
    }, $.datepicker.regional['es']);
    
    $("#cboReportes").change(function(datos)
    {
        var intTipoReportes;
        intTipoReportes=$("#cboReportes").val();
        if (intTipoReportes=="")
        {
            $("#divCboEstacion").css("display","none");
            $("#divCboOcupacion").css("display","none");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divFechaDesdeHasta").css("display","none");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#cboEstaciones").val("");
            $("#datFechaDesde").val("");
            $("#datFechaHasta").val("");
            $("#cboDatAnioDesde").val("");
            $("#cboDatAnioHasta").val("");
            $("#timeHoraDesde").val("");
            $("#timeHoraHasta").val("");
            $("#cboOcupacion").val("");
        }    
        if (intTipoReportes==1)
        {
            $("#divCboEstacion").css("display","block");
            $("#divCboOcupacion").css("display","block");
            $("#divFechaDesdeHasta").css("display","block");
            $("#divHoraDesdeHasta").css("display","block");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#cboDatAnio").val("");
            $("#cboDatAnioDesde").val("");
            $("#cboDatAnioHasta").val("");
        }
        if (intTipoReportes==2)
        {
            $("#divCboEstacion").css("display","none");
            $("#divCboOcupacion").css("display","none");
            $("#divFechaDesdeHasta").css("display","none");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#divAnioDesdeHasta").css("display","block");
            $("#cboDatAnio").val("");
        } 
        if (intTipoReportes==3)
        {
            $("#divCboEstacion").css("display","block");
            $("#divCboOcupacion").css("display","none");
            $("#divFechaDesdeHasta").css("display","none");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","block");
        } 
        if ((intTipoReportes==4) || (intTipoReportes==5))
        {
            $("#divCboEstacion").css("display","none");
            $("#divCboOcupacion").css("display","none");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divFechaDesdeHasta").css("display","none");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#cboEstaciones").val("");
            $("#datFechaDesde").val("");
            $("#datFechaHasta").val("");
            $("#cboDatAnioDesde").val("");
            $("#cboDatAnioHasta").val("");
            $("#timeHoraDesde").val("");
            $("#timeHoraHasta").val("");
            $("#cboOcupacion").val("");
        }
        if ((intTipoReportes==6))
        {
            $("#divCboEstacion").css("display","block");
            $("#divCboOcupacion").css("display","block");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divFechaDesdeHasta").css("display","block");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#cboEstaciones").val("");
            $("#datFechaDesde").val("");
            $("#datFechaHasta").val("");
            $("#cboDatAnioDesde").val("");
            $("#cboDatAnioHasta").val("");
            $("#timeHoraDesde").val("");
            $("#timeHoraHasta").val("");
            $("#cboOcupacion").val("");
        }
        if ((intTipoReportes==7))
        {
            $("#divCboEstacion").css("display","none");
            $("#divCboOcupacion").css("display","none");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divFechaDesdeHasta").css("display","block");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#cboEstaciones").val("");
            $("#datFechaDesde").val("");
            $("#datFechaHasta").val("");
            $("#cboDatAnioDesde").val("");
            $("#cboDatAnioHasta").val("");
            $("#timeHoraDesde").val("");
            $("#timeHoraHasta").val("");
            $("#cboOcupacion").val("");
        }
        if ((intTipoReportes==8))
        {
            $("#divCboEstacion").css("display","block");
            $("#divCboOcupacion").css("display","none");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divFechaDesdeHasta").css("display","block");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#cboEstaciones").val("");
            $("#datFechaDesde").val("");
            $("#datFechaHasta").val("");
            $("#cboDatAnioDesde").val("");
            $("#cboDatAnioHasta").val("");
            $("#timeHoraDesde").val("");
            $("#timeHoraHasta").val("");
            $("#cboOcupacion").val("");
        }
        if ((intTipoReportes==9))
        {
            $("#divCboEstacion").css("display","none");
            $("#divCboOcupacion").css("display","none");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divFechaDesdeHasta").css("display","block");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#cboEstaciones").val("");
            $("#datFechaDesde").val("");
            $("#datFechaHasta").val("");
            $("#cboDatAnioDesde").val("");
            $("#cboDatAnioHasta").val("");
            $("#timeHoraDesde").val("");
            $("#timeHoraHasta").val("");
            $("#cboOcupacion").val("");
        }
        if ((intTipoReportes==10))
        {
            $("#divCboEstacion").css("display","none");
            $("#divCboOcupacion").css("display","none");
            $("#divHoraDesdeHasta").css("display","none");
            $("#divFechaDesdeHasta").css("display","block");
            $("#divAnioDesdeHasta").css("display","none");
            $("#divAnio").css("display","none");
            $("#cboEstaciones").val("");
            $("#datFechaDesde").val("");
            $("#datFechaHasta").val("");
            $("#cboDatAnioDesde").val("");
            $("#cboDatAnioHasta").val("");
            $("#timeHoraDesde").val("");
            $("#timeHoraHasta").val("");
            $("#cboOcupacion").val("");
        }
    });
    $("#btnCancelarReporte").click(function() 
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
    $("#btnGenerarReporte").click(function() 
    {
        $('#frmVistaReportes').validate
        ({
            errorClass : "errorValidar",
            rules :
            {
                'cboReportes':
                {
                    required: true
                },
                'datFechaDesde':
                {
                    required: true
                },
                'datFechaHasta':
                {
                    required: true
                }                
            },
            messages :
            {
                'cboReportes':
                {
                    required: "Reportes"
                },
                'datFechaDesde':
                {
                    required : "Fecha desde"   
                },
                'datFechaHasta':
                {
                    required : "Fecha hasta"   
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
                    url: "../controlador/reportes/controlReportes.php?opc=1",
                    type: "POST",
                    dataType: "json",
                    data: $("#frmVistaReportes").serialize(),
                    success: function(data)
                    {
                        if (data.error=="0")
                        {
                            bootbox.hideAll();
                            if (data.intIdReporte==1)
                            {    
                                window.open("../vista/reportes/resultadoReportePrestamo.php"+"?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta+"&idEstacion="+data.idEstacion+"&horaDesde="+data.horaDesde+"&horaHasta="+data.horaHasta+"&idOcupacion="+data.intIdOcupacion); 
                            }
                            if (data.intIdReporte==2)
                            { 
                                
                                $.ajax
				({ 
                                    url: "../vista/reportes/resultadoReportePrestamoMes.php"+"?anioDesde="+data.anioDesde+"&anioHasta="+data.anioHasta,
                                    type: "POST",
                                    dataType: "json",
                                    //data: $("#frmActividadEstadisticas").serialize(),
                                    success: function(datos)
                                    {
                                        if (datos.error==0)
                                        {
                                            //alert(datos.resultadoTabla);
                                            $.post("../vista/reportes/resultadoReportePrestamoMesGrafico.php",function(dato)
                                            {
                                                $("#contenido").html(dato);
                                                $("#resultadoTabla").html(datos.resultadoTabla);
                                                $.getScript("../assets/js/reportes/reportesOpcionesGenerales.js");
                                                var categorias;
                                                if ((data.anioDesde==2015) && (data.anioHasta==2015))
                                                {
                                                    categorias =['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                                                    titulo ='de '+data.anioDesde;
                                                    
                                                }
                                                else
                                                {    
                                                    categorias =['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                                                    titulo ='de '+data.anioDesde+ ' al '+data.anioHasta;
                                                }
                                                //Grafica que se muestra en la pagina
                                                var oGrafica = new Highcharts.Chart
                                                ({
                                                    data: {
                                                        table: 'datatable'
                                                    },
                                                    chart: 
                                                    {
                                                        renderTo: "containerGrafico",
                                                        type: 'line',
                                                    },
                                                    title: 
                                                    {
                                                        text: 'Préstamos totales mes a mes '+titulo
                                                    },
                                                    legend: 
                                                    {
                                                        verticalAlign: 'top',
                                                        layout: 'vertical',
                                                        x: 0,
                                                        y: 100,
                                                        align: 'right',
                                                        borderWidth: 0,
                                                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                                                        shadow: true
                                                    },
                                                    xAxis: 
                                                    {
                                                        //labels : { y : 20, rotation: -60 },
                                                        categories: categorias
                                                    },
                                                    yAxis:
                                                    [{ // Primary yAxis
                                                        labels:
                                                        {
                                                            format: '{value}',
                                                            style: 
                                                            {
                                                                color: '#1A5CB6'
                                                            }
                                                        },
                                                        title:
                                                        {
                                                            text: 'Préstamos',
                                                            style: 
                                                            {
                                                                color: '#1A5CB6'
                                                            }
                                                        }
                                                    }, 
                                                        { // Secondary yAxis
                                                            title: 
                                                            {
                                                                text: '',
                                                                style: 
                                                                {
                                                                    color: Highcharts.getOptions().colors[0]
                                                                }
                                                            },
                                                            labels:
                                                            {
                                                                format: '{value}',
                                                                style: 
                                                                {
                                                                    color: Highcharts.getOptions().colors[0]
                                                                }
                                                            },
                                                            opposite: true
                                                        }
                                                    ],
                                                    credits:
                                                    {
                                                        enabled: false
                                                    },
                                                    exporting: 
                                                    {
                                                        enabled: false 
                                                    },
                                                    plotOptions:
                                                    {
                                                        line: 
                                                        {
                                                            dataLabels: 
                                                            {
                                                                enabled: true
                                                            }
                                                            //enableMouseTracking: false
                                                        }
                                                    },
                                                    tooltip:
                                                    {
                                                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                                        '<td style="padding:0"><b>{point.y:.0f} Préstamos</b></td></tr>',
                                                        footerFormat: '</table>',
                                                        shared: true,
                                                        useHTML: true
                                                    },
                                                    series: datos.resultadoGrafico
                                                });
                                                $("#svgGraficoMes").val(oGrafica.getSVG());
                                                $("#btnGenerarPdfMes").click(function() 
                                                { 
                                                    var svg = $("#svgGraficoMes").val();
                                                    var oCanvas = document.createElement('canvas');
                                                    canvg(oCanvas, svg);
                                                    var oImagen = oCanvas.toDataURL("image/png");
                                                    oImagen.replace('data:image/png;base64', '');
                                                    $('#imagenGraficoMes').attr('value', oImagen);
                                                    $.ajax
                                                    ({ 
                                                        url: "reportes/sesionReportePrestamoMes.php",
                                                        type: "POST",
                                                        dataType: "json",
                                                        data:$("#sesionReporteMes").serialize(),
                                                        success: function(datos)
                                                        {
                                                            if (datos.error== 0)
                                                            {
                                                                window.open("reportes/reporteGraficoMesPDF.php?anioDesde="+data.anioDesde+"&anioHasta="+data.anioHasta);

                                                            }

                                                        }
                                                    });	

                                                });
                                            })
                                            
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
                            if (data.intIdReporte==3)
                            { 
                                
                                $.ajax
				({ 
                                    url: "../vista/reportes/resultadoReportePrestamoMesRuta.php"+"?anio="+data.anio+"&idEstacion="+data.idEstacion,
                                    type: "POST",
                                    dataType: "json",
                                    //data: $("#frmActividadEstadisticas").serialize(),
                                    success: function(datos)
                                    {
                                        if (datos.error== 0)                                                            
                                        {   
                                            
                                            $.post("../vista/reportes/resultadoReportePrestamoMesRutaGrafico.php",function(dato)
                                            {
                                                
                                                $("#contenido").html(dato);
                                                $("#resultadoTabla").html(datos.resultadoTabla);
                                                $.getScript("../assets/js/reportes/reportesOpcionesGenerales.js");
                                                var categorias;
                                                if (data.anio!=2015)
                                                {
                                                    categorias =['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio','Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                                                }
                                                else
                                                    categorias =['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
                                                //Grafica que se muestra en la pagina
                                                var oGrafica = new Highcharts.Chart
                                                ({
                                                    chart: 
                                                    {
                                                        renderTo: "containerGrafico",
                                                        type: 'line',
                                                    },
                                                    title: 
                                                    {
                                                        text: 'Préstamos totales mes a mes por Ruta ' +datos.nbRuta+' de '+datos.anio
                                                    },
                                                    legend: 
                                                    {
                                                        verticalAlign: 'top',
                                                        layout: 'vertical',
                                                        x: 0,
                                                        y: 100,
                                                        align: 'right',
                                                        borderWidth: 0,
                                                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF')
                                                        //shadow: true
                                                    },
                                                    xAxis: 
                                                    {
                                                        //labels : { y : 20, rotation: -60 },
                                                        categories: categorias
                                                    },
                                                    yAxis:
                                                    [{ // Primary yAxis
                                                        labels:
                                                        {
                                                            format: '{value}',
                                                            style: 
                                                            {
                                                                color: '#1A5CB6'
                                                            }
                                                        },
                                                        title:
                                                        {
                                                            text: 'Préstamos',
                                                            style: 
                                                            {
                                                                color: '#1A5CB6'
                                                            }
                                                        }
                                                    }, 
                                                        { // Secondary yAxis
                                                            title: 
                                                            {
                                                                text: '',
                                                                style: 
                                                                {
                                                                    color: Highcharts.getOptions().colors[0]
                                                                }
                                                            },
                                                            labels:
                                                            {
                                                                format: '{value}',
                                                                style: 
                                                                {
                                                                    color: Highcharts.getOptions().colors[0]
                                                                }
                                                            },
                                                            opposite: true
                                                        }
                                                    ],
                                                    plotOptions:
                                                    {
                                                        line: 
                                                        {
                                                            dataLabels: 
                                                            {
                                                                enabled: true
                                                            }
                                                            //enableMouseTracking: false
                                                        }
                                                    },
                                                    credits:
                                                    {
                                                        enabled: false
                                                    },
                                                    exporting: 
                                                    {
                                                        enabled: false 
                                                    },
                                                        tooltip:
                                                    {
                                                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                                        '<td style="padding:0"><b>{point.y:.0f} Préstamos</b></td></tr>',
                                                        footerFormat: '</table>',
                                                        shared: true,
                                                        useHTML: true
                                                    },
                                                    series: datos.resultadoGrafico
                                                });
                                                $("#svgGraficoMesRuta").val(oGrafica.getSVG());
                                                $("#btnGenerarPdfMesRuta").click(function() 
                                                { 
                                                    var svg = $("#svgGraficoMesRuta").val();
                                                    var oCanvas = document.createElement('canvas');
                                                    canvg(oCanvas, svg);
                                                    var oImagen = oCanvas.toDataURL("image/png");
                                                    oImagen.replace('data:image/png;base64', '');
                                                    $('#imagenGraficoMesRuta').attr('value', oImagen);


                                                    $.ajax
                                                    ({ 
                                                        url: "reportes/sesionReportePrestamoMesRuta.php",
                                                        type: "POST",
                                                        dataType: "json",
                                                        data:$("#sesionReporteMesRuta").serialize(),
                                                        success: function(datos)
                                                        {
                                                            if (datos.error== 0)
                                                            {
                                                                window.open("reportes/reporteGraficoMesRutaPDF.php?ruta="+data.idEstacion+"&anio="+data.anio);

                                                            }

                                                        }
                                                    });	

                                                });
                                            }) 
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
                            if (data.intIdReporte==4)
                            {    
                                window.open("reportes/resultadoReporteListadoPersona.php"); 
                            }
                            if (data.intIdReporte==5)
                            {    
                                window.open("reportes/resultadoReportePersonasRangoEdad.php"); 
                            }
                            if (data.intIdReporte==6)
                            {    
                                window.open("../vista/reportes/resultadoReporteRankingUsuarioPrestamo.php"+"?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta+"&idEstacion="+data.idEstacion+"&idOcupacion="+data.intIdOcupacion); 
                            }
                            if (data.intIdReporte==7)
                            {  
                                var oGrafica;
                                $.ajax
				({ 
                                    url: "../vista/reportes/resultadoReportePrestamosDiarios.php"+"?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta,
                                    type: "POST",
                                    dataType: "json",
                                    success: function(datos)
                                    {
                                        if (datos.error== 0)                                                            
                                        {   
                                            $.post("../vista/reportes/resultadoReportePrestamosDiariosGrafico.php",function(dato)
                                            {
                                                $("#contenido").html(dato);
                                                $("#resultadoTabla").html(datos.resultadoTabla);
                                                $.getScript("../assets/js/reportes/reportesOpcionesGenerales.js");
                                                oGrafica= new Highcharts.StockChart(
                                                {
                                                    chart:
                                                    {
                                                        renderTo : 'containerGrafico'
                                                    },
                                                    rangeSelector:
                                                    {
                                                        selected: 2
                                                    },
                                                    title:
                                                    {
                                                        text : "<b>Préstamo Diarios desde el "+data.fechaDesde+ " hasta el "+data.fechaHasta+'</b>'
                                                    },
                                                    yAxis:
                                                    {
                                                        opposite: false
                                                    },
                                                    plotOptions: 
                                                    {
                                                        series: 
                                                        {
                                                            dataLabels: 
                                                            {
                                                                enabled: true
                                                            },
                                                            marker: 
                                                            {
                                                               enabled: true ,
                                                               radius: 4
                                                            },
                                                            enableMouseTracking: false
                                                        }
                                                    },
                                                    legend:
                                                    {
                                                        enabled: true,
                                                        align: 'right',
                                                        backgroundColor: '#FFFFFF',
                                                        layout: 'vertical',
                                                        verticalAlign: 'top',
                                                        y: 100
                                                        //shadow: true
                                                    },
                                                    tooltip:
                                                    {
                                                        shared:true,
                                                        dateTimeLabelFormats: 
                                                        {
                                                            millisecond:"%A, %b %e, %Y",
                                                            second:"%A, %b %e, %Y",
                                                            minute:"%A, %b %e, %Y",
                                                            hour:"%A, %b %e, %Y",
                                                            day:"%A, %b %e, %Y",
                                                            week:"Week from %A, %b %e, %Y",
                                                            month:"%B %Y",
                                                            year:"%Y"
                                                        }
                                                    },
                                                    credits:
                                                    {
                                                        enabled: false
                                                    },
                                                    exporting: 
                                                    {
                                                        enabled: false 
                                                    },     
                                                    series : [{
                                                        name : 'Prestámos',
                                                        data : datos.resultadoGrafico
                                                        
                                                    }]
                                                });
                                                $("#btnGenerarPdfPrestamosDiarios").click(function() 
                                                { 
                                                    $("#svgGraficoPrestamosDiarios").val(oGrafica.getSVG());
                                                    var svg = $("#svgGraficoPrestamosDiarios").val();
                                                    var oCanvas = document.createElement('canvas');
                                                    canvg(oCanvas, svg);
                                                    var oImagen = oCanvas.toDataURL("image/png");
                                                    //alert(oImagen);
                                                    oImagen.replace('data:image/png;base64', '');
                                                    $('#imagenGraficoPrestamosDiarios').attr('value', oImagen);
                                                    $.ajax
                                                    ({ 
                                                        url: "reportes/sesionReportePrestamosDiarios.php",
                                                        type: "POST",
                                                        dataType: "json",
                                                        data:$("#sesionReportePrestamosDiarios").serialize(),
                                                        success: function(datos)
                                                        {
                                                            if (datos.error== 0)
                                                            {
                                                                window.open("reportes/reporteGraficoPrestamosDiariosPDF.php?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta);

                                                            }

                                                        }
                                                    });	

                                                });
                                            }) 
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
                            if (data.intIdReporte==8)
                            {  
                                var oGrafica;
                                $.ajax
				({ 
                                    url: "../vista/reportes/resultadoReportePrestamosDiariosRuta.php"+"?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta+"&idEstacion="+data.idEstacion,
                                    type: "POST",
                                    dataType: "json",
                                    success: function(datos)
                                    {
                                        if (datos.error== 0)                                                            
                                        {   
                                            $.post("../vista/reportes/resultadoReportePrestamosDiariosRutaGrafico.php",function(dato)
                                            {
                                                $("#contenido").html(dato);
                                                $("#resultadoTabla").html(datos.resultadoTabla);
                                                $.getScript("../assets/js/reportes/reportesOpcionesGenerales.js");
                                                oGrafica= new Highcharts.StockChart(
                                                {
                                                    chart:
                                                    {
                                                        renderTo : 'containerGrafico'
                                                    },
                                                    rangeSelector: 
                                                    {
                                                        selected: 4
                                                    },

                                                    yAxis: 
                                                    {
                                                        opposite: false
                                                    },
                                                    title:
                                                    {
                                                         text : "<b>"+datos.resultadoTituloReporte+"</b>"
                                                    },
             
                                                    plotOptions: 
                                                    {
                                                        series: 
                                                        {
                                                            dataLabels: 
                                                            {
                                                                enabled: true
                                                            },
                                                            
                                                            marker: 
                                                            {
                                                               enabled: true ,
                                                               radius: 5
                                                            },
                                                            enableMouseTracking: false
                                                        }
                                                    },
                                                    legend:
                                                    {
                                                            enabled: true,
                                                            align: 'center',
                                                            backgroundColor: '#FFFFFF',
                                                            layout: 'horizontal',
                                                            //verticalAlign: 'top'
                                                            //y: 100
                                                            //shadow: true
                                                    },
                                                    credits:
                                                    {
                                                        enabled: false
                                                    },
                                                    exporting: 
                                                    {
                                                        enabled: false 
                                                    },     
                                                    series : datos.resultadoGrafico
                                                });
                                                $("#btnGenerarPdfPrestamosDiariosRuta").click(function() 
                                                { 
                                                    $("#svgGraficoPrestamosDiariosRuta").val(oGrafica.getSVG());
                                                    var svg = $("#svgGraficoPrestamosDiariosRuta").val();
                                                    var oCanvas = document.createElement('canvas');
                                                    canvg(oCanvas, svg);
                                                    var oImagen = oCanvas.toDataURL("image/png");
                                                    //alert(oImagen);
                                                    oImagen.replace('data:image/png;base64', '');
                                                    $('#imagenGraficoPrestamosDiariosRuta').attr('value', oImagen);
                                                    $.ajax
                                                    ({ 
                                                        url: "reportes/sesionReportePrestamosDiariosRuta.php",
                                                        type: "POST",
                                                        dataType: "json",
                                                        data:$("#sesionReportePrestamosDiariosRuta").serialize(),
                                                        success: function(datos)
                                                        {
                                                            if (datos.error== 0)
                                                            {
                                                                window.open("reportes/reporteGraficoPrestamosDiariosRutaPDF.php?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta+"&idEstacion="+data.idEstacion);

                                                            }

                                                        }
                                                    });	

                                                });
                                            }) 
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
                            if (data.intIdReporte==9)
                            {    
                                window.open("../vista/reportes/resultadoReporteOrigenDestinoPrestamos.php"+"?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta); 
                            }
                            if (data.intIdReporte==10)
                            { 
                                
                                $.ajax
				({ 
                                    url: "../vista/reportes/resultadoReporteTiemposEntrePrestamoDevolucion.php"+"?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta,
                                    type: "POST",
                                    dataType: "json",
                                    success: function(datos)
                                    {
                                        if (datos.error==0)
                                        {
                                            //alert(datos.resultadoTabla);
                                            $.post("../vista/reportes/resultadoReporteTiemposEntrePrestamoDevolucionGrafico.php",function(dato)
                                            {
                                                $("#contenido").html(dato);
                                                $("#resultadoTabla").html(datos.resultadoTabla);
                                                $.getScript("../assets/js/reportes/reportesOpcionesGenerales.js");
                                                //Grafica que se muestra en la pagina
                                                
                                                var oGrafica = new Highcharts.Chart
                                                ({
                                                    chart: 
                                                    {
                                                        renderTo: "containerGrafico",
                                                        type: 'line'
                                                    },
                                                    title: 
                                                    {
                                                        text: "<b>Tiempos entre Préstamo y Devolución desde el "+data.fechaDesde+ " hasta el "+data.fechaHasta+"</b>"
                                                    },
                                                    legend: 
                                                    {
                                                        verticalAlign: 'top',
                                                        layout: 'vertical',
                                                        x: 0,
                                                        y: 100,
                                                        align: 'right',
                                                        borderWidth: 0,
                                                        backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
                                                        shadow: true
                                                    },
                                                    xAxis: 
                                                    {
                                                        categories: datos.categorias,
                                                        title: 
                                                        {
                                                            text: 'Rango de Horas'
                                                        }
                                                    },
                                                    yAxis:
                                                    [{  // Primary yAxis
                                                        labels:
                                                        {
                                                            format: '{value}',
                                                            style: 
                                                            {
                                                                color: '#1A5CB6'
                                                            }
                                                        },
                                                        title:
                                                        {
                                                            text: ' Cant. Préstamos',
                                                            style: 
                                                            {
                                                                color: '#1A5CB6'
                                                            }
                                                        }
                                                    }, 
                                                        {// Secondary yAxis
                                                            title: 
                                                            {
                                                                text: '',
                                                                style: 
                                                                {
                                                                    color: Highcharts.getOptions().colors[0]
                                                                }
                                                            },
                                                            labels:
                                                            {
                                                                format: '{value}',
                                                                style: 
                                                                {
                                                                    color: Highcharts.getOptions().colors[0]
                                                                }
                                                            },
                                                            opposite: true
                                                        }
                                                    ],
                                                    credits:
                                                    {
                                                        enabled: false
                                                    },
                                                    exporting: 
                                                    {
                                                        enabled: false 
                                                    },
                                                    plotOptions:
                                                    {
                                                        line: 
                                                        {
                                                            dataLabels: 
                                                            {
                                                                enabled: true
                                                            }
                                                            //enableMouseTracking: false
                                                        }
                                                    },
                                                    tooltip:
                                                    {
                                                        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                                                        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                                                        '<td style="padding:0"><b>{point.y:.0f} Préstamos</b></td></tr>',
                                                        footerFormat: '</table>',
                                                        shared: true,
                                                        useHTML: true
                                                    },
                                                    series: datos.resultadoGrafico
                                                });
                                                $("#svgGraficoTiempoEntreDevolucion").val(oGrafica.getSVG());
                                                $("#btnGenerarPdfTiempoEntreDevolucion").click(function() 
                                                { 
                                                    var svg = $("#svgGraficoTiempoEntreDevolucion").val();
                                                    var oCanvas = document.createElement('canvas');
                                                    canvg(oCanvas, svg);
                                                    var oImagen = oCanvas.toDataURL("image/png");
                                                    oImagen.replace('data:image/png;base64','');
                                                    $('#imagenGraficoTiempoEntreDevolucion').attr('value', oImagen);
                                                    $.ajax
                                                    ({ 
                                                        url: "reportes/sesionReporteTiemposEntrePrestamoDevolucion.php",
                                                        type: "POST",
                                                        dataType: "json",
                                                        data:$("#sesionReporteTiempoEntreDevolucion").serialize(),
                                                        success: function(datos)
                                                        {
                                                            if (datos.error== 0)
                                                            {
                                                                window.open("reportes/reporteGraficoTiempoEntrePrestamoDevolucionPDF.php?fechaDesde="+data.fechaDesde+"&fechaHasta="+data.fechaHasta);

                                                            }

                                                        }
                                                    });	

                                                });
                                                
                                            })
                                            
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
});	/*fin de $(document).ready(function() */