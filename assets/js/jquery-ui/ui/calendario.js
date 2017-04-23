/* CALENDARIO */
	jQuery(function($){
		   $.datepicker.regional['es'] = {
		      closeText: 'Cerrar',
		      prevText: '<Ant',
		      nextText: 'Sig>',
		      currentText: 'Hoy',
		      monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
		      monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
		      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
		      dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
		      dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
		      weekHeader: 'Sm',
		      dateFormat: 'dd/mm/yy',
		      firstDay: 1,
		      isRTL: false,
		      showMonthAfterYear: false,
		      yearSuffix: ''};
		   $.datepicker.setDefaults($.datepicker.regional['es']);
		});
/* FIN DE CALENDARIO */

jQuery(function($)
{
    $.timepicker.regional['es'] = 
    {
        hourText: 'Hora',
        minuteText: 'Minutos',
        amPmText: ['AM', 'PM'],
        showLeadingZero: false,
        showNowButton: false,
        showCloseButton: false,
        deselectButtonText: 'Borrar',
        showDeselectButton: true
    }
    $.timepicker.setDefaults($.timepicker.regional['es']);
});