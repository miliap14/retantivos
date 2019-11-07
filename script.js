function selectProv() 
{
    var d = document.getElementById("prov");
    var displayText = d.options[d.selectedIndex].value;
    document.getElementById("prov_value").value = displayText;

    switch (displayText) {
        case "SF":
            document.getElementById("prov_value2").value = "10"
            break;

        case " ":
            document.getElementById("prov_value2").value = " "
            break;
    
        default:
            document.getElementById("prov_value2").value = "01";
            break;
    }
}