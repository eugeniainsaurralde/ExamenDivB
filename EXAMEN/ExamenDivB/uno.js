
function mostrar() {
	let nombre,
		edad,
		sexo,
		vacuna,
		dosis,
		seguir;

	let mayorEdad,
		nombreMayorEdad,
		vacunaMayorEdad,
		flagMayorEdad = 1;

	let promEdadRusa,
		acumEdadRusa = 0;


	let porcentajeAmericanaMayoresEdad,
		contAmericana = 0,
		contAmericanaMayoresEdad = 0;

	let contPersonas = 0,
		porcentajeVacunadosDosDosis,
		ContVacunadosDosDosis = 0;

	let contRusa = 0,
		contChina = 0,
		vacunaMenosInoculada;




	do {

		contPersonas++;

		nombre = prompt("Ingrese su nombre").toLowerCase();
		while (nombre.length <= 3 || nombre.length >= 10) {
			nombre = prompt("ERROR. Ingrese su nombre").toLowerCase();
		}

		edad = parseInt(prompt("Ingrese su edad"));
		while (isNaN(edad) || edad < 12) {
			edad = parseInt(prompt("ERROR.Ingrese su edad"));
		}

		sexo = prompt("Ingrese su sexo (“F”, “M”)").toLowerCase();
		while (sexo == "" || sexo != "f" && sexo != "m") {
			sexo = prompt("ERROR. Ingrese su sexo").toLowerCase();
		}

		vacuna = prompt("Ingrese su vacuna (“China”, “Rusa”, “Americana”)").toLowerCase();
		while (vacuna == "" || vacuna != "china" && vacuna != "rusa" && vacuna != "americana") {
			vacuna = prompt("ERROR. Ingrese su vacuna").toLowerCase();
		}
		while (edad > 12 || edad < 17 && vacuna != "americana") {
			vacuna = prompt("ERROR. Ingrese vacuna americana").toLowerCase();
		}

		dosis = prompt("Ingrese que dosis se aplicara (p / s)").toLowerCase();
		while (dosis == "" || dosis != "p" && dosis != "s") {
			dosis = prompt("ERROR. Ingrese que dosis se aplicara (p / s)").toLowerCase();
		}



		//PUNTO B
		if (sexo == "f" && flagMayorEdad == 1 || edad > mayorEdad) {
			mayorEdad = edad;
			nombreMayorEdad = nombre;
			vacunaMayorEdad = vacuna;
			flagMayorEdad = 0;
		}

		switch (vacuna) {
			case "rusa":
				contRusa++;
				acumEdadRusa = edad + acumEdadRusa;

				break;
			case "china":
				contChina++;

				break;
			case "americana":

				contAmericana++;

				if (edad > 17) {
					contAmericanaMayoresEdad++;
				}

				break;
		}

		if (dosis == "s") {
			ContVacunadosDosDosis++;
		}


		seguir = prompt("Desea seguir acumulando datos?").toLowerCase();
	} while (seguir == "si");



	//PUNTO A
	promEdadRusa = acumEdadRusa / contRusa;

	//PUNTO C
	porcentajeAmericanaMayoresEdad = contAmericanaMayoresEdad * 100 / contAmericana;

	//PUNTO D
	porcentajeVacunadosDosDosis = ContVacunadosDosDosis * 100 / contPersonas;

	//PUNTO E
	if (contRusa < contAmericana && contRusa < contChina) {
		vacunaMenosInoculada = "Rusa";
	}
	else if (contAmericana < contRusa && contAmericana < contChina) {
		vacunaMenosInoculada = "Americana";
	}
	else {
		vacunaMenosInoculada = "China";
	}



	document.write("a) El promedio de edad de vacunados con la vacuna rusa es: " + promEdadRusa +
		"<br>" + "b) El nombre de la mujer vacunada de mayor edad es: " + nombreMayorEdad + " con la vacuna " + vacunaMayorEdad +
		"<br>" + "c) El porcentaje de mayores de edad vacunados con la vacuna americana es: " + porcentajeAmericanaMayoresEdad +
		"<br>" + "d) El porcentaje que ya tiene ambas dosis es: " + porcentajeVacunadosDosDosis +
		"<br>" + "e) La vacuna menos inoculada fue: " + vacunaMenosInoculada);



}
