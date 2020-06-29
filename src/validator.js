const validator = {
  isValid: (creditCardNumber) => {
    
    const arrayNumeros = creditCardNumber.split('').reverse();
    let acumulador = 0;
    let contArray = 1;
    arrayNumeros.forEach(number => {
      const esPar = contArray % 2;
      if (esPar == 0) {
        let valorTemporal = Number(number) * 2;
        if (valorTemporal >= 10) {
          let tempValueString = valorTemporal.toString();
          let arrayDigitos = tempValueString.split('');
          let valorCalculo = 0;
          arrayDigitos.forEach(digito => {
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
    return (acumulador % 10) == 0;
  },
  maskify: (creditCardNumber) => {
    const tamano = creditCardNumber.length;

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