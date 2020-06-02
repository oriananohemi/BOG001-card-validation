import validator from './validator.js';

console.log(validator);

document.getElementById("button").addEventListener("click", tomarNumerodeTarjeta )

function tomarNumerodeTarjeta() {
    let numeroDeTarjeta = document.getElementById("inputNumber").value
    if(numeroDeTarjeta == "") {
        alert("ERROR!!.. El campo debe tener un valor numerico");
    } else if (numeroDeTarjeta.length == 15){
        alert("El campo debe contener 16 numeros");
    } else {
        invertirNumeroDeTarjeta(numeroDeTarjeta);
    }
    console.log(numeroDeTarjeta)
}

function invertirNumeroDeTarjeta(numeroDeTarjeta){
    let numeroDeTarjetaInvertido = ""
    let numerosParesPrueba = []
    for(let i = 15; i>=0; i--){
        numeroDeTarjetaInvertido += numeroDeTarjeta[i]
        if(i % 2 == 1) {
            numerosParesPrueba += numeroDeTarjeta[i] 
        }
    }
    console.log(numeroDeTarjetaInvertido)
    console.log(numerosParesPrueba)
}

// function numerosPares(numeroDeTarjetaInvertido){
//     let numberPares = numeroDeTarjetaInvertido.split('')
//     console.log(numberPares)

// }