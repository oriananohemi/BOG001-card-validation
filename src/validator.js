const validator = {
  isValid: (creditCardNumber) => {
    let arrayNumeros = creditCardNumber.split("").reverse();
    let acumulador = 0;
    for (let i = 1; i < arrayNumeros.length - 1; i++) {
      let esPar = (i + 1) % 2;

      if (esPar == 0) {
        let valorTemporal = parseInt(arrayNumeros[i]) * 2;
        if (valorTemporal >= 10) {
          let tempValueString = "" + valorTemporal + "";
          let arrayDigitos = tempValueString.split("");
          let valorCalculo = 0;
          arrayDigitos.forEach((element) => {
            valorCalculo += Number(element);
          });
          console.log(valorCalculo);
          acumulador = acumulador + valorCalculo;
          console.log(acumulador, valorCalculo);
        } else {
          acumulador = acumulador + valorTemporal;
        }
      } else {
        acumulador = acumulador + parseInt(arrayNumeros[i]);
      }
    }
    return acumulador % 10 == 0;
  },
  maskify: () => {
    // let numerosAEnmascarar = creditCardNumber.length - 4;
    // let numerosEnmascarados = numerosAEnmascarar.replace(/\d/g, "#");
    // let arrayNumeros = creditCardNumber.split("");
    // let ultimosCuatro = arrayNumeros.slice(-4);
    // let numerosAEnmascarar = [];
    // let numerosSinEnmascarar = [];
    // for (let i = 0; i < 16; i++) {
    //   if (i < 12) {
    //     numerosAEnmascarar += creditCardNumber[i];
    //   } else {
    //     numerosSinEnmascarar += creditCardNumber[i];
    //   }
    // }
    // let numerosEnmascarados = numerosAEnmascarar.replace(/\d/g, "#");
    // console.log(numerosEnmascarados);
    // return numerosEnmascarados + numerosSinEnmascarar;
    // return numerosEnmascarados + ultimosCuatro;
  },
};

export default validator;
