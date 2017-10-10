## Validando Tarjeta
#### **Objetivo del programa**
##### El fin de este programa es poder validar tarjetas de crédito,débito o cualquier otra tarjeta, a través del algoritmo de Luhn.  
##### *Algoritmo de Lunh : método creado para la verificación de números de identificación, como los números de las tarjetas de crédito (Visa, MasterCard) o el IMEI de los teléfonos móviles.*
#### **Algoritmo de programa (Pseudocódigo)**  
##### 1. Crear un funcion llamada 'isValidCard' cuyo parámetro es (CardNumber).  Luego declarar las variable:
##### 1.1. *var cardNumbersUpsideDown = cardNumber.split("").reverse();* con la cual ingresaremos los números de la tarjeta en un array en orden inverso.
##### 1.2. *var j = 1* (como contador de las posiciones pares) y *var sum = 0* (como contador de la suma de los números en las posiciones impares y los nuevos números de las posiciones pares.);
##### 1.3. Después crear un bucle *For*, para recorrer nuestro array y convertir cada valor en un número entero con *parseInt*.
    for(var i = 0 ; i < cardNumbersUpsideDown.length ; i ++){
    cardNumbersUpsideDown[i] = parseInt(cardNumbersUpsideDown[i]);
    }
##### 1.4. Crear una condición dentro del *for* que verifique *Si ( i === j )* para multiplicar por 2 el valor que se encuentra en esa posicion del array:
    if(i === j){
    cardNumbersUpsideDown[i] = parseInt(cardNumbersUpsideDown[i]);
    cardNumbersUpsideDown[j] \*= 2;
    }
##### 1.4.1 Luego de multiplicar \* 2 , crear una condicion dentro de la primera condición que compruebe *Si (El número multiplicado por 2 >= 10)* ; si es TRUE:
+ ##### Convertimos el valor en un string : *elNumeroMultiplicadoPorDos.toString();*
+ ##### Separamos las cifras del número con el método *split* y colocamos como separador comillas vacias:  *elNumeroMultiplicadoPorDos.split('')* ; almacenamos el resultado en *var separateNumbers.*
+ ##### Convertir las cifras en enteros con *parseInt*  : *separateNumbers[en posición 0] = parseInt(separateNumbers[en posición 0])*.
+ ##### Sumar las cifras del número y almacenar su valor en *cardNumbersUpsideDown[posición 'j']*.

##### De otra manera si la condicón es FALSE, aumentar el valor de j en dos : *j += 2*.

##### 1.5. Salir de la primera condición y actualizar el valor de sum aumentadole el valor del array en la posicion i :
     sum += cardNumbersUpsideDown[i]  
##### 1.6. Declarar *var messageToTheUser* = al mensaje que se le retornará al usuario ; utilizar el operardor ternario que verifique ( sum % 10 === 0) , si es TRUE:
     messageToTheUser = '¡Enhorabuena!La tarjeta de crédito es válida'
##### De otra manera
     messageToTheUser = 'Lo siento, pero la tarjeta que ingresaste es inválida
##### 1.7. Colocar messageToTheUser como el valor de retorno de la funcion isValidCard.
##### 2. Crear una funcion de nombre *option* Y cuyo parámetro sea *userOption*
##### 2.1. Crear una condición *SWITCH* cuyo parámetro sea *TRUE* y crear el caso donde comprube si (userOption === 1) si es TRUE:
+ ##### Declarar var userCardNumber = prompt('Ingrese su número de tarjeta'), donde se almacenará el número de tarjeta del usuario.
+ ##### Crear un bucle *for* que recorra *userCardNumber* y convierta cada valor en un número entero con *parseInt*
       for(var i = 0; i < userCardNumber.length ; i++){
       userCardNumber[i]=parseInt(userCardNumber[i]);
       }
+ ##### Si (userCardNumber[i] >=0 || userCardNumber[i] <=0) , continua con el bucle ; de otra manera *userCardNumber = prompt('Ingrese su número de tarjeta (Solo números por favor)')*
+ ##### Fuera del bucle, igualar el valor de *userCardNumber* a userCardNumber.toString();
+ ##### En la siguiente linea crear un *alert* que llame a la *función isValidCard* y le pase como parámetro *userCardNumber*.
+ ##### Por último, colocar la palabra clave *break* ; cerrar el *SWITCH* y la función *option*.
##### 3. Crear un *DO WHILE* que tenga por sentencia:
+ ##### Declarar var menu = 'Por favor escriba 1 para VERIFICAR TARJETA \n Por favor escriba 2 para SALIR';
+ ##### Declarar var userOption = prompt(menu), que almacenára la opción que elija el usuario.
+ ##### Llamar a la función *option* y darle como parámetro *userOption*.
##### Y su condición sea  (userOption !== '2').

#### **Diagrama de Flujo del programa**

<file:///C:/Users/olabo.DESKTOP-OAEP4DQ/Downloads/code2flow_a3021.svg>
