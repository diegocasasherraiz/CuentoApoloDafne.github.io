function contarHistoria() {
   
    var txtDios = document.getElementById("txtDios");
    var txtNinfa = document.getElementById("txtNinfa");
    var txtLugar = document.getElementById("txtLugar");
    var txtAccion = document.getElementById("txtAccion");
    var txtObjeto = document.getElementById("txtObjeto");
    var txtTransformacion = document.getElementById("txtTransformacion");
    var txtVerboPerseguir = document.getElementById("txtVerboPerseguir");
    var txtImagen = document.getElementById("txtImagen");
    
    var output = document.getElementById("output");

  
    var dios = txtDios.value;
    var ninfa = txtNinfa.value;
    var lugar = txtLugar.value;
    var accion = txtAccion.value;
    var objeto = txtObjeto.value;
    var transformacion = txtTransformacion.value;
    var verboPerseguir = txtVerboPerseguir.value;
    var imagenElegida = txtImagen.value;
    var imagen = ''; 
    
    switch(imagenElegida) {
        case "apolo":
            imagen = '<img src="images/apolopicto.jpg" alt= "Imagen de Apolo" style="width: 4%;"/>';
            break;
        case "dafne":
            imagen = '<img src="images/dafnepicto.jpg" alt= "Imagen de Dafne" style="width: 4%;"/>';
            break;
        default:
            imagen = '<img src="images/default.png" style="width: 50px;"/>';
            break;
    }

    var historia = dios + " era un chico muy fuerte y valiente que se enamoró" + imagen + "de " + ninfa + ", una ninfa que vivía en " + lugar + ". ";
    historia += dios + " intentó hacerle saber a " + ninfa + " que la amaba, pero ella no quería casarse con él. ";
    historia += "Un día, el chico la persiguió porque quería atraparla y confesarle su amor" + imagen + ", pero " + ninfa + " no quería ser atrapada. ";
    historia += " Comenzó a " + verboPerseguir + " tan rápido como pudo por  " + lugar + ", corriendo entre los " + objeto + ". ";
    historia += " Cuando " + ninfa + " se dio cuenta de que " + dios + " estaba a punto de alcanzarla, pidió ayuda a su padre, el dios del río. ";
    historia += " De repente, mientras " + accion + ", la ninfa se transformó en un " + transformacion + " para escapar. ";
    historia += dios + ", triste pero respetuoso, aceptó su destino" + imagen + " y decidió que, aunque no podía tener su amor, siempre honraría a " + ninfa + ". ";
    historia += " Desde entonces, el laurel se convirtió en el símbolo de su amor eterno. <br /> <br />";
    historia += " Y así, " + dios + " y " + ninfa + " permanecieron conectados, aunque de manera diferente " + imagen + " , a través de la naturaleza.";

    output.innerHTML = historia;
}

function borrarOutput() {
    document.getElementById("output").innerHTML = "";
}

function cambiarColor(event) {
    event.preventDefault();
    let output = document.getElementById("output");
    output.style.color = "red";
}
