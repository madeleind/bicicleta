<?php
//compruebo que los caracteres sean los permitidos 
/*function caracteres($valor)
{
	$tamanioCadena=strlen($valor);
	$permitidos = "abcdefghijklmnopqrstuvwxyzáéíóúÁÉÍÓÚABCDEFGHIJKLMNOPQRSTUVWXYZ-_"; 
   	for ($i=0; $i<$tamanioCadena; $i++)
   	{ 
	    if (strpos($permitidos, substr($valor,$i,$tamanioCadena))===false)
	    { 
		    return false; //error
	    } 
		else
		{ 
	   		return true;  
		}
   	}
} */
function cleanupArray($arr)
{
	foreach($arr as $key=> $value)
	{
		if(empty($value)) unset($arr[$key]);
	}
	return $arr;
}
function RandomString($length=10,$uc=TRUE,$n=TRUE,$sc=FALSE)
{
	$source = 'abcdefghijklmnopqrstuvwxyz';
	if($uc==1) $source .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	if($n==1) $source .= '1234567890';
	if($sc==1) $source .= '|@#~$%()=^*+[]{}-_';
	if($length>0){
		$rstr = "";
		$source = str_split($source,1);
		for($i=1; $i<=$length; $i++){
			mt_srand((double)microtime() * 1000000);
			$num = mt_rand(1,count($source));
			$rstr .= $source[$num-1];
		}

	}
	return $rstr;
}
function caracteres($valor)
{

	if (preg_match("/[^a-zA-ZñáéíóúüÑÁÉÍÓÚÜ ]/",$valor) )
   	{
   		return false;
   	}	
   	else
   	{
   		return true;
   	}
	
	/*if(eregi("^[A-ZñáéíóúüÑÁÉÍÓÚÜ ]{0,200}$",$valor))
   	{
   		return true;
   	}	
   	else
   	{
   		return false;
   	}*/
}

function numerico($valor)
{
	if (is_numeric($valor))
	{	
		return true;
	} 
	else
	{
		return false;
	}
	/*$permitidos = "1234567890"; 
   	for ($i=0; $i<strlen($valor); $i++)
   	{ 
	    if (strpos($permitidos, substr($valor,$i,1))===false)
	    { 
		    return false; //error
	    } 
		else
		{ 
	   		return true;  
		}
   	}*/
}
function alfanumerico($valor)
{
	$msj = "";
	if (!preg_match("/[A-Z]/",$valor) )
   	{
   		$msj = "debe tener al menos una letra";
   	}
   	if (!preg_match("/[0-9]/",$valor) )
   	{
    	if ($msj == "")
    	{
    		$msj= "debe tener al menos un caracter numérico";
    	}	  
    	else
    	{
    		$msj= $msj . ", debe tener al menos un caracter numérico";
    	}
   	}
   	return $msj;	 
}
function primeroCadena($valor)
{
	return $primero = $valor[0]; 
   	
}
// Funcion que convierte la fecha en formato aaaa-mm-dd
function arregla_fecha($f)
    {
	$aux="";
    $aux="$f[6]$f[7]$f[8]$f[9]-$f[3]$f[4]-$f[0]$f[1]";
	$f=$aux;
	return $f;
  }
// fin de la Funcion que convierte la fecha en formato aaaa-mm-dd

// funcion que permite colocar la fecha a  formato dd/mm/aaaa
function devuelve_fecha($f)
    {
      $aux="";
      $aux="$f[8]$f[9]/$f[5]$f[6]/$f[0]$f[1]$f[2]$f[3]";
      $f=$aux;
      return $f;
    }
// Fin de la funcion que permite colocar la fecha con este formato dd/mm/aaaa

// funcion que permite colocar la fecha a  formato dd/mm/aaaa h:i:s
function devuelve_fecha_hora($f)
    {
        $aux="";
        $aux="$f[8]$f[9]/$f[5]$f[6]/$f[0]$f[1]$f[2]$f[3] $f[11]$f[12]:$f[14]$f[15]:$f[17]$f[18]";
        $f=$aux;
        return $f;
    }
// Fin de la funcion que permite colocar la fecha con este formato dd/mm/aaaa h:i:s
    
    
    function devuelve_hora($f)
        {
            $aux="";
            $aux="$f[11]$f[12]:$f[14]$f[15] ";
            $f=$aux;
            return $f;
        }
// Fin de la funcion que permite colocar la fecha con este formato dd/mm/aaaa h:i:s
    
function check_email_address($email) 
{
	if (preg_match(
	'/^[^0-9][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[@][a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,4}$/',
	$email)) {
	    return true;
	}
	else
	{
		return false;
	}
}   
function check_hotmail($email) 
{
	$email = strtoupper($email);
	$dominio=explode("@",$email);
	if ($dominio[1] != "GMAIL.COM")
	{
	    return true;
	}
	else
	{
		return false;
	}
}
function fechaMenorActual($feEntrante)
{
	$feActual = strtotime(date("Y-m-d H:i:00",time()));
	$feEntrante = strtotime("$feEntrante 00:00:00");
	
	if($feEntrante > $feActual)
	{
	        return false;
	}
	else
	{
	        return true;
	}
}
function fechaMenorActualViaje($feEntrante)
{

	$feActual = strtotime(date("Y-m-d"));
	$feEntrante = strtotime($feEntrante);
	
	if($feEntrante >= $feActual)
	{
	        return false;
	}
	else
	{
	        return true;
	}
	
}
function decimal($nuMoIngresoMensual)
{
	$string = "$nuMoIngresoMensual";  // como string 
	$monto=explode(".",$string);
	$valor = floatval($string);  // como float, double, con coma o como lo llamen 
	if ( $valor>0 && $valor<1 ) 
	{  
		return FALSE; 
	}
	else 
	{ 
		if ( strlen($monto[0])> 5  || strlen($monto[1])> 3 )
			return false;
		else
			return true;
	}
}
function compara_fechas($fecha1,$fecha2)
{
	/*if (preg_match("/[0-9]{1,2}\/[0-9]{1,2}\/([0-9][0-9]){1,2}/",$fecha1))
		list($año1,$mes1,$dia1)=split("/",$fecha1);
	if (preg_match("/[0-9]{1,2}-[0-9]{1,2}-([0-9][0-9]){1,2}/",$fecha1))
		list($año1,$mes1,$dia1)=split("-",$fecha1);
	if (preg_match("/[0-9]{1,2}\/[0-9]{1,2}\/([0-9][0-9]){1,2}/",$fecha2))
		list($año2,$mes2,$dia2)=split("/",$fecha2);
	if (preg_match("/[0-9]{1,2}-[0-9]{1,2}-([0-9][0-9]){1,2}/",$fecha2))
		list($año2,$mes2,$dia2)=split("-",$fecha2);	*/
	if (preg_match("/([0-9][0-9]){1,2}-[0-9]{1,2}-[0-9]{1,2}/",$fecha1))
		list($anio1,$mes1,$dia1)=split("-",$fecha1);
	
	if (preg_match("/([0-9][0-9]){1,2}-[0-9]{1,2}-[0-9]{1,2}/",$fecha2))
		list($anio2,$mes2,$dia2)=split("-",$fecha2);
	
	$dif = mktime(0,0,0,$mes1,$dia1,$anio1) - mktime(0,0,0,$mes2,$dia2,$anio2);
	
	return ($dif);
		
	/*$dif = mktime(0,0,0,$mes1,$dia1,$año1) - mktime(0,0,0, $mes2,$dia2,$año2);
		
	return ($dif);*/                         
}

function compararFechasDias($regreso, $salida)
{
  $valoresRegreso = explode ("/", $regreso);   
  $valoresSalida = explode ("/", $salida); 

  $diaRegreso    = $valoresRegreso[0];  
  $mesRegreso  = $valoresRegreso[1];  
  $anyoRegreso   = $valoresRegreso[2]; 

  $diaSalida   = $valoresSalida[0];  
  $mesSalida = $valoresSalida[1];  
  $anyoSalida  = $valoresSalida[2];

  $diasRegresoJuliano = gregoriantojd($mesRegreso, $diaRegreso, $anyoRegreso);  
  $diasSalidaJuliano = gregoriantojd($mesSalida, $diaSalida, $anyoSalida);     

  if(!checkdate($mesRegreso, $diaRegreso, $anyoRegreso)){
    // "La fecha ".$regreso." no es v&aacute;lida";
    return 0;
  }elseif(!checkdate($mesSalida, $diaSalida, $anyoSalida)){
    // "La fecha ".$salida." no es v&aacute;lida";
    return 0;
  }else{
    return  $diasRegresoJuliano - $diasSalidaJuliano;
  } 

}
function cargarComboHora($name,$atributos)
{
	$cboHora='<select '.$atributos.' id="'.$name.'" name="'.$name.'">';
	$cboHora.='<option value="" >-Hora-</option>';
	for ($i=0;$i<24;$i++)
	{
		$h1=sprintf("%02d",$i).":00";
		$h2=sprintf("%02d",$i).":30";
		$cboHora.= '<option value="'.$h1.'" >'.$h1.'</option>';
		$cboHora.= '<option value="'.$h2.'" >'.$h2.'</option>';
	}
	return $cboHora.= "</select>";
}
function cortarCadena($cantidadCaracateresCortar,$stsCadena)
{
	$descripcion_desformateada = strip_tags($stsCadena);
	$arrayTexto = explode(' ', $descripcion_desformateada);

	$texto = '';
	$contador = 0;

	// Reconstruimos la cadena
	while ($cantidadCaracateresCortar >= strlen($texto) + strlen($arrayTexto[$contador])) {
		$texto .= ' ' . $arrayTexto[$contador];
		$contador++;
	}

	return $textoConstruido = $texto . '...';

}
function comparaHoras($hora1,$hora2)
{
    $horaUno = strtotime( $hora1 ); //18:00
    $horaDos = strtotime( $hora2 ); //19:00

    if( $horaUno > $horaDos ) {
        return false; //echo '$hora1 es mayor a $hora2';
    } else {
        return true;//echo '$hora2 es mayor a $hora1';
    }
}
function clacularEdad($fechaNacimiento)
{
    	list($Y,$m,$d) = explode("-",$fechaNacimiento);
        return $edad = (date("md") < $m.$d ? date("Y")-$Y-1 : date("Y")-$Y);

}

function sumardiasFecha($fecha,$cantidadDias) //  ((Y-m-d),cantidad dias 1 days /1 week/ 1 month)
{
    return $fecha_final= date("Y-m-d", strtotime("$fecha + $cantidadDias")); 
}