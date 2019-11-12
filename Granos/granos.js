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

}

