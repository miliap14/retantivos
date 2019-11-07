function selectProv() 
{
    var d = document.getElementById("prov");
    var displayText = d.options[d.selectedIndex].value;
    document.getElementById("prov_value").innerHTML = displayText;

    switch (displayText) 
    {
        case "SF":
            document.getElementById("prov_value2").innerHTML = "10"
            break;

        case " ":
            document.getElementById("prov_value2").innerHTML = " "
            break;
    
        default:
            document.getElementById("prov_value2").innerHTML = "01";
            break;
    }

    if (d.options[d.selectedIndex].text == "CHACO" ) 
    {
        document.getElementById("prov_value2").innerHTML = "02";     
    }

    var valorCondicion = document.getElementsByName("condicion").values;
    var valorActividad =document.getElementsByName("actividad").values;
    var monotributo = document.getElementById("mon").checked;
    var resincr = document.getElementById("res").checked;

    if (monotributo == true) 
    {
        if (valorCondicion == "MO") 
        {
             document.getElementById("indicador1").innerHTML = "GM";
        } 
        else 
        {
             document.getElementById("indicador1").innerHTML = "lol";
             document.getElementById("indicador2").innerHTML = "02";
        }
    }
    

}