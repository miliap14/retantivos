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
var a = document.getElementById("tp_ret1").innerHTML;


var b = document.getElementById("ind_ret1").innerHTML;

function cargar()
{
    //------> LIMPIEZA <---------
    document.getElementById("tp_ret1").innerHTML = "";
    document.getElementById("ind_ret1").innerHTML = "";
    document.getElementById("tp_ret2").innerHTML = "";
    document.getElementById("ind_ret2").innerHTML = "";
    document.getElementById("tp_ret3").innerHTML = "";
    document.getElementById("ind_ret3").innerHTML = "";

    //------> VARIABLES <-------
    var valorCategoria = document.getElementById("categoria");
    categoria = valorCategoria.options[valorCategoria.selectedIndex].text;
    console.log(categoria);
    

    for ( var i = 0; i < valorGanancias.length; i++)
    {
        if (valorGanancias[i].checked) 
        {
            ganancias = valorGanancias[i].value;
            console.log(ganancias);
            
        }
    }

    for ( var i = 0; i < valorCondicion.length; i++)
    {
        if (valorCondicion[i].checked) 
        {
            condicion = valorCondicion[i].value;
            console.log(condicion);
            
        }
    }

    for ( var i = 0; i < valorGrano.length; i++)
    {
        if (valorGrano[i].checked) 
        {
            grano = valorGrano[i].value;
            console.log(grano);
            
        }
    }

    for ( var i = 0; i < valorEmpleador.length; i++)
    {
        if (valorEmpleador[i].checked) 
        {
            empleador = valorEmpleador[i].value;
            console.log(empleador);
            
        }
    }

    //--------------------------
    //---------- CASOS ---------


    //-------> GANANCIAS <---------

    //---- Productores de grano inscriptos en ganancias
    
    if (ganancias == "si" && condicion == "productor")
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
            
            case "INACTIVO":
                document.getElementById("tp_ret1").innerHTML = "GG";
                document.getElementById("ind_ret1").innerHTML = "03";
                break;
        }
    }

    //---- Productores de grano inscriptos en ganancias

    if (ganancias == "no" && condicion == "productor")
    {
        document.getElementById("tp_ret1").innerHTML = "GG";
        document.getElementById("ind_ret1").innerHTML = "04";
    }


    //---- Corredor de grano inscriptos en ganancias    
    if (ganancias == "si" && condicion == "corredor")
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
            
            case "INACTIVO":
                document.getElementById("tp_ret1").innerHTML = "GG";
                document.getElementById("ind_ret1").innerHTML = "07";
                break;
        }
    }

    //---- Corredor de grano NO inscriptos en ganancias  

    if (ganancias == "no" && condicion == "corredor")
    {
        document.getElementById("tp_ret1").innerHTML = "GG";
        document.getElementById("ind_ret1").innerHTML = "08";
    }

    //-------> IVA <---------

    //------ Productor arroz
    if (condicion == "productor" && grano == "arroz")
    {
        switch (categoria) 
        {
            case "1":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "08";
                break;
            
            case "2":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "09";
                break;
            
            case "3":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "10";
                break;
            
            case "INACTIVO":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "11";
                break;
        }
    }

    //------ Productor NO arroz
    if (condicion == "productor" && grano == "no arroz")
    {
        switch (categoria) 
        {
            case "1":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "01";
                break;
            
            case "2":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "02";
                break;
            
            case "3":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "03";
                break;
            
            case "INACTIVO":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "04";
                break;
        }
    }

    //------ Corredor arroz
    if (condicion == "corredor" && grano == "arroz")
    {
        switch (categoria) 
        {
            case "1":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "08";
                break;
            
            case "2":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "08";
                break;
            
            case "3":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "10";
                break;
            
            case "INACTIVO":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "11";
                break;
        }
    }

    //------ Corredor NO arroz
    if (condicion == "corredor" && grano == "no arroz")
    {
        switch (categoria) 
        {
            case "1":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "01";
                break;
            
            case "2":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "01";
                break;
            
            case "3":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "03";
                break;
            
            case "INACTIVO":
                document.getElementById("tp_ret2").innerHTML = "GI";
                document.getElementById("ind_ret2").innerHTML = "04";
                break;
        }
    }

    //-------> EMPLEADOR <----------
    if (empleador == "si") 
    {
        document.getElementById("tp_ret3").innerHTML = "SG";
        document.getElementById("ind_ret3").innerHTML = "01";
    }

    if (empleador == "no")
    {
        document.getElementById("tp_ret3").innerHTML = "";
        document.getElementById("ind_ret3").innerHTML = "";
    }



}

/*
document.getElementById("tp_ret1").innerHTML = "";
document.getElementById("ind_ret1").innerHTML = "";
*/