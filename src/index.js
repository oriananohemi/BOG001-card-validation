import validator from "./validator.js";

let tarjeta = document.getElementById("tarjeta");

tarjeta.addEventListener("click", () =>{
  tarjeta.classList.toggle("active");
})

document
  .getElementById("button")
  .addEventListener("click", tomarNumerodeTarjeta);

function tomarNumerodeTarjeta() {
  let numeroDeTarjeta = document.getElementById("inputNumber").value;
  let nombreDeTarjeta = document.getElementById("inputName").value;
  if (numeroDeTarjeta == "") {
    alert("ERROR!!.. El campo debe tener un valor numerico");
  } else {
    let valido = validator.isValid(numeroDeTarjeta);
    if (valido) {
      document.getElementById("numero").innerHTML = `${validator.maskify(
        numeroDeTarjeta
      )}`;
      document.getElementById("nombre").innerHTML = nombreDeTarjeta;
      console.log(validator.maskify(numeroDeTarjeta));
    } else {
      alert("Tarjeta de Credito No valido");
    }
  }
}

console.log(validator);
