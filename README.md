## Validando Tarjeta
#### **Objetivo del programa**
##### El fin de este programa es poder validar tarjetas de crédito,débito o cualquier otra tarjeta, a través del algoritmo de Luhn.  
##### *Algoritmo de Lunh : método creado para la verificación de números de identificación, como los números de las tarjetas de crédito (Visa, MasterCard) o el IMEI de los teléfonos móviles.*
#### ** Algoritmo de programa (Pseudocódigo) **  
##### Crear un funcion llamada 'isValidCard' cuyo parámetro es (CardNumber).  Luego declarar las variable:
##### 1. var cardNumbersUpsideDown = cardNumber.split("").reverse(); con la cual ingresaremos los números de la tarjeta en un array en orden inverso.
##### 2. var j = 1 (como contador de las posiciones pares) y var sum = 0 (como contador de la suma de los números en las posiciones impares y los nuevos números de las posiciones pares.);
##### 3. Después crear un bucle For, para recorrer nuestro array
<script type="text/javascript">
  for(var i = 0 ; i < cardNumbersUpsideDown.length ; i ++)
</script>
