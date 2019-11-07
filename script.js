    
    
    var valorCondicion = document.getElementsByClassName("condicion").values;
    var valorActividad =document.getElementsByClassName("actividad").values;
    /*
    var monotributo = document.getElementById("mon").checked;
    var resincr = document.getElementById("res").checked;
    */

function selectProv() 
{
    var d = document.getElementById("prov");
    var displayText = d.options[d.selectedIndex].value;
    //-----------------------------------------
    //---- CARGA DE INDICADOR DE PROVINCIA ----
    //-----------------------------------------

        

        switch (displayText) 
            {
                case "SF":
                    document.getElementById("prov_value").innerHTML = displayText;
                    document.getElementById("prov_value2").innerHTML = "10"
                    break;

                case " ":
                    document.getElementById("prov_value").innerHTML = displayText;
                    document.getElementById("prov_value2").innerHTML = " "
                    break;
            
                default:
                    document.getElementById("prov_value").innerHTML = displayText;
                    document.getElementById("prov_value2").innerHTML = "01";
                    break;
            }

        if (d.options[d.selectedIndex].text == "CHACO" ) 
            {
                document.getElementById("prov_value").innerHTML = displayText;
                document.getElementById("prov_value2").innerHTML = "02";     
            }
        

        //-----------------------------------------
        //--- CARGA DE INDICADOR DE TIPO PERSONA --
        //-----------------------------------------
        /*
        var tipoPersona = document.forms[0]

        for ( var i = 0; i < tipoPersona.length; i++)
        {
            if(tipoPersona[i].checked)
            {
                if(tipoPersona[i].value == "MO")
                {
                    document.getElementById("indicador1").innerHTML = "GM";
                    document.getElementById("indicador2").innerHTML = "02";
                }
                else if (tipoPersona[i].value == "RI")
                {
                    document.getElementById("indicador1").innerHTML = "GB";
                    document.getElementById("indicador2").innerHTML = "01";
                }
            }
        }*/
    

    

   
    

}