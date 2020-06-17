import validator from "./validator.js";

let tarjeta = document.getElementById("tarjeta"),
formulario = document.getElementById("formulario"),
logoMarca = document.getElementById("logoMarca"),
 modal = document.getElementById("myModal");

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

function loadModal(){
   modal.style.display = "block";
}

document.getElementById("close").addEventListener("click", () =>{
  modal.style.display = "none";
} )

document
  .getElementById("button")
  .addEventListener("click", tomarNumerodeTarjeta);

function tomarNumerodeTarjeta() {
  let numeroDeTarjeta = document.getElementById("inputNumber").value;
  let nombreDeTarjeta = document.getElementById("inputName").value;
  if (numeroDeTarjeta == "") {
    loadModal()
  } else {
    let valido = validator.isValid(numeroDeTarjeta);
    if(valido){
      document.getElementById("numero").innerHTML = `${validator.maskify(
        numeroDeTarjeta
      )}`;
      document.getElementById("nombre").innerHTML = nombreDeTarjeta;
      document.getElementById("firma").innerHTML = nombreDeTarjeta;
      const imagen = document.createElement('img');
      if(numeroDeTarjeta.charAt(0) == 4){
          imagen.src = 'imagenes/visa.png';
        } else if(numeroDeTarjeta.charAt(0) == 5){
          imagen.src = 'imagenes/mastercard.png';
        } else {
          imagen.src = 'imagenes/banco.png';
        }
        logoMarca.appendChild(imagen);
      } else {
      loadModal()
    }
  }
}

console.log(validator);
