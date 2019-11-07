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
var valorIva = document.getElementsByName("conIVA");

var condition;
var activity;
var IVA;

function cargar() 
{
    //-------------------------------------------
    //------ LIMPIAMOS -----
    //-------------------------------------------

    document.getElementById("indicador1").innerHTML = "";
    document.getElementById("indicador2").innerHTML = "";
    document.getElementById("indicador3").innerHTML = "";
    document.getElementById("indicador4").innerHTML = "";
    document.getElementById("indicador5").innerHTML = "";
    document.getElementById("indicador6").innerHTML = "";
    document.getElementById("indicador7").innerHTML = "";
    document.getElementById("indicador8").innerHTML = "";
    document.getElementById("indicador8").innerHTML = "";

    //-------------------------------------------
    //--- OBTENEMOS LOS VALORES DE LOS CHECK ----
    //-------------------------------------------

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

    for ( var i = 0; i < valorIva.length; i++)
    {
        if(valorIva[i].checked)
        {
            IVA = valorIva[i].value;
        }
    }

    for ( var i = 0; i < valorRegimen.length; i++)
    {
        if(valorRegimen[i].checked && valorRegimen[i].value == "si" && IVA == "no")
        {
            document.getElementById("indicador5").innerHTML = "SG";
            document.getElementById("indicador6").innerHTML = "01";
        }
    }

    

    //-------------------------------------------
    //----- DATOS PARA MONOTRIBUTO --------------
    //-------------------------------------------

    if( condition == "MO" && activity == "SR" )
    {
        document.getElementById("indicador1").innerHTML = "GM";
        document.getElementById("indicador2").innerHTML = "02";
        document.getElementById("indicador3").innerHTML = "IM";
        document.getElementById("indicador4").innerHTML = "02";
    }

    if( condition == "MO" && activity == "BU")
    {
        document.getElementById("indicador1").innerHTML = "GM";
        document.getElementById("indicador2").innerHTML = "01";
        document.getElementById("indicador3").innerHTML = "IM";
        document.getElementById("indicador4").innerHTML = "01";
    }

    if( condition == "MO" && activity == "SP")
    {
        document.getElementById("indicador1").innerHTML = "ERROR";
        document.getElementById("indicador2").innerHTML = "No puede ser Monotributista";
        document.getElementById("indicador3").innerHTML = "Y seleccionar Servicio profesional";
    }

    //------------------------------------------
    //---- DATOS PARA RESPONSABLE INSCRIPTO ----
    //------------------------------------------

    if( condition == "RI" && activity == "SR" )
    {
        document.getElementById("indicador1").innerHTML = "GB";
        document.getElementById("indicador2").innerHTML = "01";
        document.getElementById("indicador3").innerHTML = "IV";
        document.getElementById("indicador4").innerHTML = "01";
    }
    
    if( condition == "RI" && activity == "BU")
    {
        document.getElementById("indicador1").innerHTML = "GA";
        document.getElementById("indicador2").innerHTML = "07";
        document.getElementById("indicador3").innerHTML = "IS";
        document.getElementById("indicador4").innerHTML = "01";
    }

    if( condition == "RI" && activity == "SP")
    {
        document.getElementById("indicador1").innerHTML = "GA";
        document.getElementById("indicador2").innerHTML = "08";
        document.getElementById("indicador3").innerHTML = "IV";
        document.getElementById("indicador4").innerHTML = "01";
    }
}