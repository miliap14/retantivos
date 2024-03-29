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
var valorProductor = document.getElementsByName("productor");

var condition;
var activity;
var IVA;
var productor;

function cargar() 
{
    //-------------------------------------------
    //------ LIMPIAMOS -----
    //-------------------------------------------

    document.getElementById("ex1").innerHTML = "";
    document.getElementById("ex2").innerHTML = "";
    document.getElementById("ex3").innerHTML = "";
    
    for (var i = 1; i < 9; i++)
    {
        var apuntador = "indicador" + i.toString();
        document.getElementById(apuntador).innerHTML = "";
    }

    for (var i = 1; i < 17; i++)
    {
        var apuntador = "tip" + i.toString();
        document.getElementById(apuntador).innerHTML = "";
    }

    for (var i = 1; i < 17; i++)
    {
        var apuntador = "ind" + i.toString();
        document.getElementById(apuntador).innerHTML = "";
    }

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

    for ( var i = 0; i < valorProductor.length; i++)
    {
        if(valorProductor[i].checked)
        {
           productor = valorProductor[i].value;
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

    var d = document.getElementById("prov");
    var displayText = d.options[d.selectedIndex].value;

    if ( IVA == "si" && ( displayText == "SF" || displayText =="CF" ||displayText == "CB" ) )
    {
        if ( activity == "SP")
        {
            var dia = new Date();
            var mes = new Date();
            var anio = new Date();
            var corr_mes = mes.getUTCMonth() + 1;
            document.getElementById("ex1").innerHTML = "0";
            document.getElementById("ex2").innerHTML = "100";
            document.getElementById("ex3").innerHTML = "5";
            document.getElementById("ex4").innerHTML = dia.getDate() + "." + corr_mes + "." + anio.getUTCFullYear();
            document.getElementById("ex5").innerHTML = "31.12.9999"
        }
        else
        {
            document.getElementById("ex1").innerHTML = "0";
            document.getElementById("ex2").innerHTML = "100";
            document.getElementById("ex3").innerHTML = "1";
        }
    }

    if ( displayText == "T.F" )
    {
        document.getElementById("indicador1").innerHTML = "Tierra del Fuego no lleva tilde en ningún indicador";
        document.getElementById("indicador2").innerHTML = "";
        document.getElementById("indicador3").innerHTML = "";
        document.getElementById("indicador4").innerHTML = "";
        document.getElementById("indicador5").innerHTML = "";
        document.getElementById("indicador6").innerHTML = "";
        document.getElementById("indicador7").innerHTML = "";
        document.getElementById("indicador8").innerHTML = "";
        document.getElementById("indicador8").innerHTML = "";
        document.getElementById("ex1").innerHTML = "";
        document.getElementById("ex2").innerHTML = "";
        document.getElementById("ex3").innerHTML = "";
    }

    if (productor == "si")
    {
        //-----> TIPO
        document.getElementById("tip1").innerHTML = "PA";
        document.getElementById("tip2").innerHTML = "PB";
        document.getElementById("tip3").innerHTML = "PD";
        document.getElementById("tip4").innerHTML = "PE";
        document.getElementById("tip5").innerHTML = "PF";
        document.getElementById("tip6").innerHTML = "PH";
        document.getElementById("tip7").innerHTML = "PJ";
        document.getElementById("tip8").innerHTML = "PK";
        document.getElementById("tip9").innerHTML = "PM";
        document.getElementById("tip10").innerHTML = "PN";
        document.getElementById("tip11").innerHTML = "PP";
        document.getElementById("tip12").innerHTML = "PQ";
        document.getElementById("tip13").innerHTML = "PS";
        document.getElementById("tip14").innerHTML = "PU";
        document.getElementById("tip15").innerHTML = "PV";
        document.getElementById("tip16").innerHTML = "PX";

        //----> INDICADORES RESPECTIVOS AL TIPO

        document.getElementById("ind1").innerHTML = "02";
        document.getElementById("ind2").innerHTML = "02";
        document.getElementById("ind3").innerHTML = "11";
        document.getElementById("ind4").innerHTML = "02";
        document.getElementById("ind5").innerHTML = "02";
        document.getElementById("ind6").innerHTML = "02";
        document.getElementById("ind7").innerHTML = "01";
        document.getElementById("ind8").innerHTML = "01";
        document.getElementById("ind9").innerHTML = "02";
        document.getElementById("ind10").innerHTML = "03";
        document.getElementById("ind11").innerHTML = "02";
        document.getElementById("ind12").innerHTML = "02";
        document.getElementById("ind13").innerHTML = "02";
        document.getElementById("ind14").innerHTML = "02";
        document.getElementById("ind15").innerHTML = "01";
        document.getElementById("ind16").innerHTML = "02";
    }
}