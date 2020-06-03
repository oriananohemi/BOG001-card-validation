import validator from './validator.js';

document.getElementById("button").addEventListener("click", tomarNumerodeTarjeta)

function tomarNumerodeTarjeta() {
    let numeroDeTarjeta = document.getElementById("inputNumber").value
    if(numeroDeTarjeta == "") {
        alert("ERROR!!.. El campo debe tener un valor numerico");
    } else if (numeroDeTarjeta.length !== 16){
        alert("El campo debe contener 16 numeros");
    } else {
        let valido = validator.isValid(numeroDeTarjeta)
        if(valido) {
            validator.maskify(numeroDeTarjeta)
            console.log(validator.maskify(numeroDeTarjeta))
        } else {
            alert("Tarjeta de Credito No valido")
        }
    }
  }

console.log(validator);