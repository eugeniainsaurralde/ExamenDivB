function mostrar() {
    let nacionalidad,
        resultado,
        edad,
        cepa;

    let porcentajePositivas,
        porcentajeNegativas,
        contpositivos = 0,
        contNegativos = 0;

    let contAlfa = 0,
        contBeta = 0,
        contDelta = 0,
        CepaMasEncontrada;

    let EdadMayorExtContagiado,
        flagMayorEXTContagiado = 1;

    let cantArgDelta = 0;



    for (i = 0; i < 8; i++) {
        

        nacionalidad = prompt("Ingrese su nacionalidad").toLowerCase();
        while (nacionalidad != "argentina" && nacionalidad != "extranjero") {
            nacionalidad = prompt("ERROR.Ingrese su nacionalidad").toLowerCase();
        }

        resultado = prompt("Ingrese su resultado").toLowerCase();
        while (resultado != "positivo" && resultado != "negativo") {
            resultado = prompt("ERROR.Ingrese su resultado").toLowerCase();
        }

        edad = parseInt(prompt("Ingrese su edad"));
        while (isNaN(edad) || edad < 18 || edad > 65) {
            edad = parseInt(prompt("ERROR.Ingrese su edad"));
        }


        
        cepa = prompt("Ingrese la cepa").toLowerCase();
        while (cepa != "alfa" && cepa != "beta" && cepa != "delta" && cepa != "ninguna") {
            cepa = prompt("ERROR.Ingrese su cepa").toLowerCase();
        }
        while (resultado == "negativo" && cepa !="ninguna" ){
            cepa = prompt("ERROR. Ingrese ninguna").toLowerCase();
        }




        if (resultado == "positivo") {
            contpositivos++;
            //PUNTO D
            if (nacionalidad == "extranjero" && flagMayorEXTContagiado == 1 || edad > EdadMayorExtContagiado) {
                EdadMayorExtContagiado = edad;
                flagMayorEXTContagiado = 0;
            }
            //PUNTO E
            if (nacionalidad == "Argentina" && cepa == "delta") {
                cantArgDelta++;
            }
        }
        else {
            contNegativos++;

        }

        if (cepa == "alfa") {
            contAlfa++;

        }
        else if (cepa == "delta") {
            contDelta++;
        }
        else {
            contBeta++;
        }






    }
    //PUNTO A
    porcentajeNegativas = contNegativos * 100 / 8;
    //PUNTO B
    porcentajePositivas = contpositivos * 100 / 8;
    //PUNTO C
    if (contAlfa > contBeta && contAlfa > contDelta) {
        CepaMasEncontrada = "Alfa";
    }
    else if (contDelta > contAlfa && contDelta > contBeta) {
        CepaMasEncontrada = "Delta";
    }
    else {
        CepaMasEncontrada = "Beta";
    }


    document.write("a) Porcentaje de positivos: " + porcentajePositivas +
        "<br>" + "b) Porcentaje negativos: " + porcentajeNegativas +
        "<br>" + "c) Cepa mas encontrada: " + CepaMasEncontrada +
        "<br>" + "d) Edad del mayor extranjero contagiado: " + EdadMayorExtContagiado+
        "<br>" + "e) Cantidad de Argentinos contagiados con la variable delta: "+ cantArgDelta

    )



}
