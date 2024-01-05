(function () {
    "use strict";
    /* Inicio de tu código */
    function greetMe(tuNombre) {
      alert("Hola " + tuNombre);
    }
  
    greetMe("Mundo");
    /* Fin de tu código */
  })();

  

// Gramática y Tipos

     //JavaScript distingue entre mayúsculas y minúsculas (es case-sensitive)

     // Por ejemplo
     let Früh = "foobar";
     let früh = "Basketball";
     // Früh no es igual a la variable früh 

     // *Nota:* ECMAScript también tiene reglas para la inserción automática del punto y coma —IAPC— (ASI en inglés, por sus siglas «Automatic Semicolon Insertion») al final de las declaraciones. (Para obtener más información, consulta la referencia detallada sobre la gramática léxica de JavaScript).
     // se considera una buena práctica escribir siempre un punto y coma después de una declaración

// Comentarios
   //La sintaxis de los comentarios es la misma que en C++ y en muchos otros lenguajes

   //por ejemplo
   // un comentario de una línea

    /* este es un comentario
    * más largo, de varias líneas
    */

    // /* Sin embargo, no puedes /* anidar comentarios */ SyntaxError */

    // #!/usr/bin/env node. Esto se denomina sintaxis de comentario hashbang



// Declaraciones

    // var
    // Declara una variable global, opcionalmente la inicia a un valor.

    // let
    // Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.

    // const
    // Declara un nombre de constante de solo lectura y ámbito de bloque.

// Variables
    // Utiliza variables como nombres simbólicos para valores en tu aplicación. Los nombres de las variables, llamados identificadores, se ajustan a ciertas reglas.

    // Un identificador de JavaScript debe comenzar con una letra, un guión bajo (_) o un signo de dólar ($). Los siguientes caracteres también pueden ser dígitos (0-9).

    // Dado que JavaScript distingue entre mayúsculas y minúsculas, las letras incluyen los caracteres "A" a "Z" (mayúsculas), así como "a" a "z" (minúsculas).


// Declaración de variables
   var string = 'gato';
   let number = 1;
   const dato = 22;


// Evaluar variables

   // undefined and ReferenceError
   var a;
    console.log("El valor de a es " + a); // El valor de a es undefined

    console.log("El valor de b es " + b); // El valor de b es undefined
    var b;
    // Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

    console.log("El valor de c es " + c); // Error de referencia no detectado: c no está definida

    let x;
    console.log("El valor de x es " + x); // El valor de x es undefined

    console.log("El valor de y es " + y); // Error de referencia no detectada: y no está definida
    let y;


    var input;
    if (input === undefined) {
        console.log("El valor de input es " + input);
        } 
    else {
        doThat();
        }


    
    var myArray = [];
    if (!myArray[0]) myFunction();

    // NaN
    // El valor undefined se convierte en NaN cuando se usa en contexto numérico.

    var a;
    a + 2; // Evalúa a NaN

    // null
    // Cuando evalúas una variable null, el valor nulo se comporta como 0 en contextos numéricos y como false en contextos booleanos. Por ejemplo:
    var n = null;
    console.log(n * 32); // Registrará 0 en la consola


//Ámbito de variables
    // Cuando declaras una variable fuera de cualquier función, se denomina variable global, porque está disponible para cualquier otro código en el documento actual. Cuando declaras una variable dentro de una función, se llama variable local, porque solo está disponible dentro de esa función.
    
    if (true) {
        var xx = 5;
      }
      console.log(xx); // x es 5
      
    // Este comportamiento cambia cuando se usa la declaración let
    if (true) {
        let y = 5;
      }
      console.log(y); // ReferenceError: y no está definida
      




        





   

