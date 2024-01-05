// Expresiones condicionales
/* Una expresión condicional es un conjunto de instrucciones que se ejecutarán si una 
   condición especificada es verdadera. JavaScript admite dos expresiones condicionales: 
   if...else y switch.*/

   //   if .... else
/*  if (condition) {
    statement_1;
    } else {
    statement_2;
    }   */

    if (10 < 15){
        alert('hola');

    }
    else{
        alert('¡Adios!')
    }


   //if ... else if ... else
/* 
        if (condition_1) {
        statement_1;
        } else if (condition_2) {
        statement_2;
        } else if (condition_n) {
        statement_n;
        } else if.....
        else {
        statement_last;
        }

*/

    var name = 'Alexander';

    if (name == 'Alex'){
        alert('¡Hola Alex!');
    }
    else if (name == 'Alexander'){
        alert('¡Hola Alexander!');
    }
    else{
        alert('¡Hola nuevo usuario!');
    }


/* 
Valores falsos
Los siguientes valores se evalúan como false (también conocidos como valores Falsy (en-US):

false
undefined
null
0
NaN
la cadena vacía ("")
*/


    //Declaración switch
/*
Una instrucción switch permite que un programa evalúe una expresión e intente hacer coincidir el 
valor de la expresión con una etiqueta case. Si la encuentra, el programa ejecuta la declaración 
asociada.

Una instrucción switch se ve así: */

/*
    switch (expression) {
    case label_1:
        statements_1
        [break;]
    case label_2:
        statements_2
        [break;]
        …
    default:
        statements_def
        [break;]
    }
*/
let fruittype = 'Bananas'
switch (fruittype) {
    case "Oranges":
      console.log("Las naranjas cuestan $0.59 la libra.");
      break;
    case "Apples":
      console.log("Las manzanas cuestan $0.32 la libra.");
      break;
    case "Bananas":
      console.log("Los plátanos cuestan $0.48 la libra.");
      break;
    case "Cherries":
      console.log("Las cerezas cuestan $3.00 la libra.");
      break;
    case "Mangoes":
      console.log("Los mangos cuestan $0.56 la libra.");
      break;
    case "Papayas":
      console.log("Los mangos y las papayas cuestan $2.79 la libra.");
      break;
    default:
      console.log(`Lo sentimos, no tenemos ${fruittype}.`);
  }
  console.log("¿Hay algo más que quieras?");
  