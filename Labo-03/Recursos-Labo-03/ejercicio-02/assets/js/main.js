
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
		if (b != 0) {
			alert(`La suma da: ${parseFloat(a[0] / a[1])}`);
		}
		else {
			throw error;
		}
	} catch (error) {
		alert("Ingrese valores válidos");
	}
};
const requestNumber = (a) => {
	let b = [0,0];
	try {
		for (let i = 0; i < 2; i++) {
			b[i] = parseFloat(prompt("Ingrese un número"));
		}
		return b;
	} catch (error) {
		alert("Ingrese valores válidos");
	}
};

const selectOperation = () => {
	var input = prompt("Ingrese la operación que desea realizar:\n[1] Sumar\n[2] Restar\n[3] Multiplicar\n[4] Dividir")
	return parseInt(input);
};

const main = () => {
	let a = [0, 0];
	a = requestNumber();
	console.log(`${a[0]}, ${a[1]}`);
	if (a[0] === NaN || a[1] === NaN) {
		console.log("No son números válidos");
	}	
	else {
		alert(`${a[0]}, ${a[1]}`);
		switch (parseInt(selectOperation())) {
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

}

main();
