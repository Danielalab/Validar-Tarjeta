function isValidCard (cardNumber){
  var cardNumbersUpsideDown = cardNumber.split("").reverse(); // array de numeros al revés
  var j= 1; // contador de posiciones pares (impares en js)
  var sum  = 0; // almacenar la suma de los numeros de la tarjeta
  for(var i = 0 ; i < cardNumbersUpsideDown.length ; i ++){
    cardNumbersUpsideDown[i] = parseInt(cardNumbersUpsideDown[i]);
    // si encontramos una posicion par
    if(i === j){
      cardNumbersUpsideDown[j] *= 2; // multiplicar por 2 los numeros de las posiciones pares(impares en js)

      if(cardNumbersUpsideDown[j] >= 10 ){
        cardNumbersUpsideDown[j]=cardNumbersUpsideDown[j].toString(); // convertir el numero en string
        var separateNumbers = cardNumbersUpsideDown[j].split(''); // separar las cifras del numero
        //convertir las cifras en numeros enteros
        separateNumbers[0] = parseInt(separateNumbers[0]);
        separateNumbers[1] = parseInt(separateNumbers[1]);
        cardNumbersUpsideDown[j]=separateNumbers[0]+separateNumbers[1]; // suma de cifras
      }
       j +=2;
    }
    sum += cardNumbersUpsideDown[i]; // suma de numeros en posiciones impares y nuevos numeros en posiciones pares
  }
   var messageToTheUser; // mensaje que se retornará al usuario
   sum % 10 === 0 ? messageToTheUser = '¡Enhorabuena!La tarjeta de crédito es válida' :
                  messageToTheUser = 'Lo siento, pero la tarjeta que ingresaste es inválida';
 return messageToTheUser;
}



function option (userOption){
  switch(true){
    case( userOption === '1'):
      var userCardNumber = prompt('Ingrese su número de tarjeta');
      for(var i = 0; i < userCardNumber.length ; i++){
        userCardNumber[i]=parseInt(userCardNumber[i]);
        if(userCardNumber[i] >=0 || userCardNumber[i] <=0){

        } else {
           userCardNumber = prompt('Ingrese su número de tarjeta (Solo números por favor)');
        }
      }
      userCardNumber=userCardNumber.toString();
      alert(isValidCard(userCardNumber));
      break;
  }
}



do {
  var menu = 'Por favor escriba 1 para VERIFICAR TARJETA \n Por favor escriba 2 para SALIR';
  var userOption = prompt(menu) ;
  option(userOption);

}while( userOption !== '2' );
