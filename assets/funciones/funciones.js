	function validaL(e) 
	{ 
		tecla = (document.all) ? e.keyCode : e.which; 
		//alert(tecla);
		if (tecla==0) return true;
		if (tecla==8) return true; //Tecla de retroceso (para poder borrar) 
		if (tecla==9) return true;
		//if (tecla==32) return true;
		if (tecla==37) return true;
		if (tecla==38) return true;
		if (tecla==39) return true;
		if (tecla==40) return true;
		if (tecla==46) return true;
		//if (tecla==44) return true;
    	// dejar la l�nea de patron que se necesite y borrar el resto 
   		//patron =/[A-Za-z]/; // Solo acepta letras 
   		//patron = /\d/; // Solo acepta n�meros 
		//patron = /\w/; // Acepta n�meros y letras 
		patron = /\D/; // No acepta n�meros 
		te = String.fromCharCode(tecla); 
		return patron.test(te);  
	}
	
	function valida(e) 
	{ 
		tecla = (document.all) ? e.keyCode : e.which; 
		//alert(tecla);
		if (tecla==0) return true;
		if (tecla==8) return true; //Tecla de retroceso (para poder borrar) 
		if (tecla==9) return true;
		//if (tecla==32) return true;
		if (tecla==37) return true;
		if (tecla==38) return true;
		if (tecla==39) return true;
		if (tecla==40) return true;
		if (tecla==46) return true;
		//if (tecla==44) return true;
    	// dejar la l�nea de patron que se necesite y borrar el resto 
   		//patron =/[A-Za-z]/; // Solo acepta letras 
   		patron = /\d/; // Solo acepta n�meros 
		//patron = /\w/; // Acepta n�meros y letras 
		//patron = /\D/; // No acepta n�meros 
		te = String.fromCharCode(tecla); 
		return patron.test(te);  
	}
