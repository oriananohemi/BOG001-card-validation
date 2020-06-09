const validator = {
  isValid: (creditCardNumber) => {
    let arrayNumeros = creditCardNumber.split("").reverse();
    let acumulador = 0;
    for (let i = 0; i < arrayNumeros.length - 1; i++) {
      let esPar = (i + 1) % 2;

      if (esPar == 0) {
        let valorTemporal = parseInt(arrayNumeros[i]) * 2;
        if (valorTemporal >= 10) {
          let tempValueString = "" + valorTemporal + "";
          let arrayDigitos = tempValueString.split("");
          let valorCalculo = 0;
          const reducer = (accumulator, currentValue) => accumulator + currentValue;
          valorCalculo = arrayDigitos.reduce(reducer)
          // arrayDigitos.forEach((element) => {
          //   valorCalculo += Number(element);
          // });
          console.log(valorCalculo)
          acumulador = acumulador + valorCalculo;
        } else {
          acumulador = acumulador + valorTemporal;
        }
      } else {
        acumulador = acumulador + parseInt(arrayNumeros[i]);
      }
    }
    return acumulador % 10 == 0;
  },
  maskify: (creditCardNumber) => {
    let tamano = creditCardNumber.length;

    if(tamano > 4){
      let ultimosCuatro = creditCardNumber.slice(-4);

      let cadena = "#" 

      let numerosEnmascarados = cadena.repeat(tamano - 4)
      
      return numerosEnmascarados + ultimosCuatro;
    
    }else {
      
      return creditCardNumber;

    }
  },
};

export default validator;
