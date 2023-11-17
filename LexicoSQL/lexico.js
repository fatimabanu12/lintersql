const fs = require('fs');

// Lee el archivo 'procedure.txt'
fs.readFile('sp.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    //la variable signos_sp es un arreglo que guarda los signos del documento sp.txt
    const signos_sp = [';', ':', "'", '=', '(', ')', '"', '*', '.', ' ', '@', '[', ']', '|','\n','\r',',']
    
    //resultado es un arreglo vacio que va guardar el resultado final
    let resultado = []; 

    //palabra es un string vacio
    let palabra = ""; 


    //entra al ciclo, la variable "i" va a tomar el indice o posicion de cada caracter
    //data.length me indica el tamaño del a informacion que mide 194

    for (let i = 0; i<= data.length; i++) {

        //data[i] toma el caracter y lo va guardar en la constante caracter
        const caracter = data[i];
// n posicion 7 esta incluido en el arreglo signos_sp = no
        if (signos_sp.includes(caracter)) {
            //como palabra ahorita en el recorrido vale "nombre" y nombre no es un string vacio el if da true
            if (palabra !== "") {
                resultado.push(caracter);
                palabra = "";
            }

            resultado.push(caracter);
        } 
//como no se cumplio el if por que n no es un signo entonces n + "" = palabra
        else {
            palabra += caracter;
        }
    }

    console.log(resultado);

});
