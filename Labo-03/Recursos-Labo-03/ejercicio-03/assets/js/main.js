const calculateFactorial = () => {
    let result = 1;
    let a = requestNumber()
    if(a != null){
        for( let i = a; i > 0; i--){
            result *= i;
        }
        return result;

    }
    else {
        return null;
    }

}

const requestNumber = () => {
    let input = prompt("Ingrese un número entero");
    try {
        if(parseInt(input) <= 0 || isNaN(input)){
            throw error;
        }

        return parseInt(input);
    } catch (error) {
        alert("Ingrese un valor válido");
        return null;
    }
}

const main = () => {
    let a = calculateFactorial();
    if(a != null){
        alert(`El factorial es ${a}`);
    }
    

}

main();
