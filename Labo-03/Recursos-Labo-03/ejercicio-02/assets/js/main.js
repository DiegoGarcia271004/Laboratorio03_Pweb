const plus = (a) => {
	try {
		alert(`La suma da: ${parseFloat(a[0] + a[1])}`);
	} catch (error) {
		alert("Ingrese valores válidos");
	}
};

const subtract = (a) => {
	try {
		alert(`La resta da: ${parseFloat(a[0] - a[1])}`);
	} catch (error) {
		alert("Ingrese valores válidos");
	}
};

const multiply = (a) => {
	try {
		alert(`La multiplicación da: ${parseFloat(a[0] * a[1])}`);
	} catch (error) {
		alert("Ingrese valores válidos");
	}
};

const split = (a) => {
	try {
		if (a[1] != 0) {
			alert(`La división da: ${parseFloat(a[0] / a[1])}`);
		} else {
			throw "División por cero no permitida";
		}
	} catch (error) {
		alert("Ingrese valores válidos");
	}
};

const requestNumber = () => {
	let b = [0, 0];
	try {
		for (let i = 0; i < 2; i++) {
			b[i] = parseFloat(prompt("Ingrese un número"));
			if (isNaN(b[i])) {
				throw "Valor no válido";
			}
		}
		return b;
	} catch (error) {
		alert("Ingrese valores válidos");
	}
};

const selectOperation = () => {
	const input = prompt("Ingrese la operación que desea realizar:\n[1] Sumar\n[2] Restar\n[3] Multiplicar\n[4] Dividir");
	return parseInt(input);
};

const main = () => {
	let a = requestNumber();
	if (a === undefined || isNaN(a[0]) || isNaN(a[1])) {
		console.log("No son números válidos");
	} else {
		alert(`Valores ingresados: ${a[0]}, ${a[1]}`);
		switch (selectOperation()) {
			case 1:
				plus(a);
				break;
			case 2:
				subtract(a);
				break;
			case 3:
				multiply(a);
				break;
			case 4:
				split(a);
				break;
			default:
				alert("Ingrese un valor válido");
		}
	}
};

main();