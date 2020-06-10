const validator = {
  isValid: (creditCardNumber) => {
    
    let arrayNumeros = creditCardNumber.split("").reverse();
    var acumulador = 0;
    var contArray = 1;
    arrayNumeros.forEach(number => {
      let esPar = (contArray % 2);
      if (esPar == 0) {
        var valorTemporal = (Number(number) * 2);
        if (valorTemporal >= 10) {
          let tempValueString = valorTemporal.toString();
          let arrayDigitos = tempValueString.split('');
          var valorCalculo = 0;
          arrayDigitos.forEach((digito) => {
            valorCalculo += Number(digito);
          });
          acumulador += valorCalculo;
        } else {
          acumulador += valorTemporal;
        }
      } else {
        acumulador += Number(number);
      }
      contArray++;
    });
    return ((acumulador % 10) == 0);

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