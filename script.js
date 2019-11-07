    
    
    
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
}
  


        //-----------------------------------------
        //--- CARGA DE INDICADOR DE TIPO PERSONA --
        //-----------------------------------------
document.getElementById("holis").addEventListener("click", cargar);
var valorCondicion = document.getElementsByName("condicion");
var valorActividad =document.getElementsByName("actividad");
var valorRegimen = document.getElementsByName("regimen");

var condition;
var activity;
var regimen;

function cargar() 
{
    for ( var i = 0; i < valorCondicion.length; i++)
    {
        if(valorCondicion[i].checked)
        {
           condition = valorCondicion[i].value;
        }
    }

    for ( var i = 0; i < valorActividad.length; i++)
    {
        if(valorActividad[i].checked)
        {
            activity = valorActividad[i].value;
        }
    }

    for ( var i = 0; i < valorRegimen.length; i++)
    {
        if(valorRegimen[i].checked)
        {
            regimen = valorRegimen[i].value;
        }
    }

    if( condition == "MO" && activity == "SR")
    {
        document.getElementById("indicador1").innerHTML = "GM";
        document.getElementById("indicador2").innerHTML = "02";
        document.getElementById("indicador3").innerHTML = "IM";
        document.getElementById("indicador4").innerHTML = "02";
    }
    
}