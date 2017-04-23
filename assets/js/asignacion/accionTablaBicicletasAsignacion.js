function marcar(isChecked) 
{
    if(isChecked) 
    {
        $('input[name="chkAsignarEstacion[]"]').each(function() 
        { 
            this.checked = true; 
        });
    }
    else 
    {
        $('input[name="chkAsignarEstacion[]"]').each(function(){
                this.checked = false;
        });
    }
}

