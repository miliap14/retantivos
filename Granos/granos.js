//Variables globales para almacenar respuestas
var categoria;
var ganancias;
var condicion;
var grano;
var empleador;

//variables para los type radio
var valorGanancias = document.getElementsByName("ganancias");
var valorCondicion = document.getElementsByName("condicion");
var valorGrano = document.getElementsByName("grano");
var valorEmpleador = document.getElementsByName("empleador");

//obtención del boton
document.getElementById("holis").addEventListener("click", cargar);

function cargar()
{
    var valorCategoria = document.getElementById("categoria").value;
    categoria = valorCategoria;

    for ( var i = 0; i < valorGanancias.length; i++)
    {
        if (valorGanancias[i].checked) 
        {
            ganancias = valorGanancias[i].value;
        }
    }

    for ( var i = 0; i < valorCondicion.length; i++)
    {
        if (valorCondicion[i].checked) 
        {
            condicion = valorCondicion[i].value;
        }
    }

    for ( var i = 0; i < valorGrano.length; i++)
    {
        if (valorGrano[i].checked) 
        {
            grano = valorGrano[i].value;
        }
    }

    for ( var i = 0; i < valorEmpleador.length; i++)
    {
        if (valorEmpleador[i].checked) 
        {
            empleador = valorEmpleador[i].value;
        }
    }

//--------------------------
//---------- CASOS ---------

//---- Productores de grano inscriptos en ganancias
    if (valorGanancias == "si" && valorCondicion == "productor")
    {
        switch (categoria) 
        {
            case "1":
                document.getElementById("tp_ret1").innerHTML = "GG";
                document.getElementById("ind_ret1").innerHTML = "09";
                break;
            
            case "2":
                document.getElementById("tp_ret1").innerHTML = "GG";
                document.getElementById("ind_ret1").innerHTML = "01";
                break;
            
            case "3":
                document.getElementById("tp_ret1").innerHTML = "GG";
                document.getElementById("ind_ret1").innerHTML = "02";
                break;            
        }
    }

    if (valorGanancias == "si" && valorCondicion == "corredor"9
    {
        switch (categoria) 
        {
            case "1":
                document.getElementById("tp_ret1").innerHTML = "ERROR:";
                document.getElementById("ind_ret1").innerHTML = "No existe corredor de granos categoria 1";
                break;
            
            case "2":
                document.getElementById("tp_ret1").innerHTML = "GG";
                document.getElementById("ind_ret1").innerHTML = "05";
                break;
            
            case "3":
                document.getElementById("tp_ret1").innerHTML = "GG";
                document.getElementById("ind_ret1").innerHTML = "06";
                break;            
        }
    }
}

/*
document.getElementById("tp_ret1").innerHTML = "";
document.getElementById("ind_ret1").innerHTML = "";
*/