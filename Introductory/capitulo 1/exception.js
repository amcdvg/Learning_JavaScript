//Expresiones de manejo de excepciones

/* 
   Casi cualquier objeto se puede lanzar en JavaScript. Sin embargo, 
   no todos los objetos lanzados son iguales. Si bien es común lanzar números o cadenas 
   como errores, con frecuencia es más efectivo usar uno de los tipos de excepción creados 
   específicamente para este propósito:

    excepciones ECMAScript
    La interfaz DOMException representa un evento anormal (llamado excepción) que ocurre 
    como resultado de llamar a un método o acceder a una propiedad de una API web y la 
    interfaz DOMError describe un objeto de error que contiene un nombre de error.
*/


// Expresión throw

    /* 
    throw expression;
    */

   //  El siguiente código arroja varias excepciones de distintos tipos:

   /*
        throw "Error2"; // tipo String
        throw 42; // tipo Number
        throw true; // tipo Boolean
        throw {
        toString: function () {
            return "¡Soy un objeto!";
        },
        };

   */

// Crea un objeto tipo de UserException
function UserException(message) {
    this.message = message;
    this.name = "UserException";
  }
  
  // Hacer que la excepción se convierta en una bonita cadena cuando se usa como cadena
  // (por ejemplo, por la consola de errores)
  UserException.prototype.toString = function () {
    return `${this.name}: "${this.message}"`;
  };
  
  // Crea una instancia del tipo de objeto y tírala
  throw new UserException("Valor muy alto");

  
    // Declaración try...catch

function getMonthName(mo) {
        mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
        let months = [
          "Ene",
          "Feb",
          "Mar",
          "Abr",
          "May",
          "Jun",
          "Jul",
          "Ago",
          "Sep",
          "Oct",
          "Nov",
          "Dic",
        ];
        if (months[mo]) {
          return months[mo];
        } else {
          throw "InvalidMonthNo"; // aquí se usa la palabra clave throw
        }
      }
let myMonth = 16;
      
try {
    // declaraciones para try
    monthName = getMonthName(myMonth); // la función podría lanzar una excepción
    console.log(monthName)
} catch (e) {
    monthName = "unknown";
    console.log(monthName)
    //logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
    }


// El bloque catch

    try {
        throw "myException"; // genera una excepción
      } catch (err) {
        // declaraciones para manejar cualquier excepción
        logMyErrors(err); // pasa el objeto exception al controlador de errores
      }

// El bloque finally

/*
   El bloque finally contiene instrucciones que se ejecutarán después que se ejecuten los 
   bloques try y catch. Además, el bloque finally ejecuta antes el código que sigue a la 
   declaración try...catch...finally.

*/

        openMyFile();
        try {
        writeMyFile(theData); // Esto puede arrojar un error
        } catch (e) {
        handleError(e); // Si ocurrió un error, manéjalo
        } finally {
        closeMyFile(); // Siempre cierra el recurso
        }

    // otro ejemplo
    function f() {
        try {
          console.log(0);
          throw "bogus";
        } catch (e) {
          console.log(1);
          return true; // esta declaración de retorno está suspendida
          // hasta que el bloque finally se haya completado
          console.log(2); // no alcanzable
        } finally {
          console.log(3);
          return false; // sobrescribe el "return" anterior
          console.log(4); // no alcanzable
        }
        // "return false" se ejecuta ahora
        console.log(5); // inalcanzable
      }
      console.log(f()); // 0, 1, 3, false
      

      

      



