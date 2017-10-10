function isValidCard (cardNumber) {
  var cardNumbersUpsideDown = cardNumber.split("").reverse(); // array de numeros al revés
  var j= 1; // contador de posiciones pares (impares en js)
  var sum  = 0; // almacenar la suma de los numeros de la tarjeta
  for(var i = 0 ; i < cardNumbersUpsideDown.length ; i ++){ // bucle para recorrer el array
    cardNumbersUpsideDown[i] = parseInt(cardNumbersUpsideDown[i]); // convertir en un entero el número en esa posición

    // si encontramos una posicion par (impar en js)
    if(i === j){
      cardNumbersUpsideDown[j] *= 2; // multiplicar por 2 los numeros de las posiciones pares(impares en js)

      if(cardNumbersUpsideDown[j] >= 10 ){ // si la multiplicación es mayor o igual a 10
        cardNumbersUpsideDown[j]=cardNumbersUpsideDown[j].toString(); // convertir el numero en string
        var separateNumbers = cardNumbersUpsideDown[j].split(''); // separar las cifras del numero
        //convertir las cifras en numeros enteros con parseInt
        separateNumbers[0] = parseInt(separateNumbers[0]);
        separateNumbers[1] = parseInt(separateNumbers[1]);
        cardNumbersUpsideDown[j]=separateNumbers[0]+separateNumbers[1]; // sumar las cifras
      }
       j +=2; // De lo contrario si la multiplicación es menor que 10 aumentar j en 2
    }
    sum += cardNumbersUpsideDown[i]; // suma de numeros en posiciones impares y nuevos numeros en posiciones pares
  }
   var messageToTheUser; // mensaje que se retornará al usuario
   sum % 10 === 0 ? messageToTheUser = '¡Enhorabuena!La tarjeta de crédito es válida' :
                  messageToTheUser = 'Lo siento, pero la tarjeta que ingresaste es inválida';
 return messageToTheUser; //retornar el mensaje
}

// función para realizar la actividad que desea el usuario
function option (userOption){
  switch(true){
    case( userOption === '1'): // Si es 1 ...
      var userCardNumber = prompt('Ingrese su número de tarjeta'); //pedir al usuario su número de tarjeta
      for(var i = 0; i < userCardNumber.length ; i++){
        userCardNumber[i]=parseInt(userCardNumber[i]);
        if(userCardNumber[i] >=0 || userCardNumber[i] <=0){ //Si es un número
              //continua con el bucle
        } else { // de otra manera ...
           userCardNumber = prompt('Ingrese su número de tarjeta (Solo números por favor)');  //seguir pidiendo un número de tarjeta
        }
      }
    userCardNumber=userCardNumber.toString(); // Convertir en una cadena el número de tarjeta
    alert(isValidCard(userCardNumber)); // invocar un alert indique el mensaje de la función isValidCard
    break;
  }
}

// bucle para preguntarle al usuario que desea realizar
do {
  var menu = 'Por favor escriba 1 para VERIFICAR TARJETA \n Por favor escriba 2 para SALIR';
  var userOption = prompt(menu) ;   // opcion elejida por el usuario
  option(userOption);  // llamar a la función userOption

}while( userOption !== '2' );  // seguir preguntando mientras no desee salir del programa
