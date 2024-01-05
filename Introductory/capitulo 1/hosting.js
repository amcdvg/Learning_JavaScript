// /**
//  * Ejemplo 1
//  */
// console.log(x === undefined); // true
// var x = 3;

// /**
//  * Ejemplo 2
//  */
// // devolverá un valor de undefined
// var myVar = "my value";

// (function () {
//   console.log(myVar); // undefined
//   var myVar = "valor local";
// })();

// solved 
/**
 * Ejemplo 1
 */
var x;
console.log(x === undefined); // true
x = 3;

/**
 * Ejemplo 2
 */
var myVar = "my value";

(function () {
  var myVar;
  console.log(myVar); // undefined
  myVar = "valor local";
})();

let xx = 3;
console.log(xx); // ReferenceError


// Elevación de función

/* Declaración de función */

foo(); // "bar"

function foo() {
  console.log("bar");
}

/* Expresión de función */

// baz(); // TypeError: baz no es una función

// var baz = function () {
//   console.log("bar2");
// };

// Const
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";
console.log(MY_OBJECT);

const MY_ARRAY = ["HTML", "CSS"];
MY_ARRAY.push("JAVASCRIPT");
console.log(MY_ARRAY); // registra ['HTML','CSS','JAVASCRIPT'];





