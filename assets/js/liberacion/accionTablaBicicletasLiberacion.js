function marcar(isChecked) 
{
    if(isChecked) 
    {
        $('input[name="chkLiberarCamion[]"]').each(function() 
        { 
            this.checked = true; 
        });
    }
    else 
    {
        $('input[name="chkLiberarCamion[]"]').each(function(){
                this.checked = false;
        });
    }
}

