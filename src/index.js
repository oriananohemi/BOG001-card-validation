import validator from "./validator.js";

let tarjeta = document.getElementById("tarjeta");
let formulario = document.getElementById("formulario")
let logoMarca = document.getElementById("logoMarca")

tarjeta.addEventListener("click", () =>{
  if(tarjeta.classList.contains('active')){
		tarjeta.classList.remove('active');
	}else {
		tarjeta.classList.add('active');
  }
})


for(let i = 1; i<= 12; i++){
  let opcion = document.createElement('option');
  opcion.value = i;
  opcion.innerText = i
  formulario.selectMes.appendChild(opcion)
}

const yearActual = new Date().getFullYear();
for(let i = yearActual; i <= yearActual + 8; i++){
	let opcion = document.createElement('option');
	opcion.value = i;
	opcion.innerText = i;
	formulario.selectYear.appendChild(opcion);
}

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
      if(numeroDeTarjeta.charAt(0) === 4) {
          logoMarca.innerHTML = '';
          const imagen = document.createElement('img');
          imagen.src = 'imagenes/visa.png';
          logoMarca.appendChild(imagen);
        } else if(valorInput[0] == 5){
          logoMarca.innerHTML = '';
          const imagen = document.createElement('img');
          imagen.src = 'imagenes/mastercard.png';
          logoMarca.appendChild(imagen);
        }
    } else {
      alert("Tarjeta de Credito No valido");
    }
  }
}

console.log(validator);
