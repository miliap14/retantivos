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

    var a = document.getElementsByName("condicion").values;
    var valorCondicion = a.options[a.selectedIndex].value;
    var b = document.getElementsByName("actividad");
    var valorActividad = b.options[b.selectedIndex].value;
    var monotributo = document.getElementById("mon").checked;
    var resincr = document.getElementById("res").checked;

    if (monotributo && resincr) 
    {
        if (valorCondicion == "MO") 
        {
             document.getElementById("indicador1").innerHTML = "GM";
        } 
        else 
        {
             document.getElementById("indicador1").innerHTML = "GM";
             document.getElementById("indicador2").innerHTML = "02";
        }
    }
    

}