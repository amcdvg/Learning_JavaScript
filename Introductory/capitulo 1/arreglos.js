var sales = "Toyota";

function carTypes(name) {
  if (name === "Honda") {
    return name;
  } else {
    return "Lo sentimos, no vendemos " + name + ".";
  }
}

var car = { myCar: "Saturn", getCar: carTypes("Zubaru"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
document.write(
    "<br/>" + car.myCar
  );
//console.log(car.myCar); // Saturn
document.write(
    "<br/>" + car.getCar
  );

//console.log(car.getCar); // Honda
document.write(
    "<br/>" + car.special
  );
//console.log(car.special); // Toyota


// Además, puedes utilizar un literal numérico o de cadena para el nombre de una propiedad o anidar un objeto dentro de otro. El siguiente ejemplo usa estas opciones.

var car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
document.write(
    "<br/>" 
  );
document.write(
    "<br/>" + car.manyCars.b
  );

//console.log(car.getCar); // Honda
document.write(
    "<br/>" + car[7]
  );

// Otro ejemplo
var unusualPropertyNames = {
    '': 'Una cadena vacía',
    '!': '¡Bang!'
  }
//console.log(inusualPropertyNames.'');   // SyntaxError: Cadena inesperada
console.log(unusualPropertyNames['']);  // Una cadena vacía
//console.log(unusualPropertyNames.!);    // SyntaxError: símbolo inesperado !
console.log(unusualPropertyNames['!']); // ¡Bang!

// longitud de cadenas y listas 
console.log("John's cat".length);

// Cadenas literales
// Creación de cadenas literales básicas
`en JavaScript '\n' es un avance de línea.`;

// Cadenas multilínea
`En JavaScript, las cadenas de plantilla pueden ocupar
 varias líneas, pero las cadenas entrecomillas dobles o
 simples no pueden.`;

// Interpolación de cadenas
var name = "Bob",
  time = "hoy";
`Hola ${name}, ¿cómo estás ${time}?`;

// Construye un prefijo de petición HTTP utilizado para interpretar los reemplazos y la construcción
// POST`http://foo.org/bar?a=${a}&b=${b}
//      Content-Type: application/json
//      X-Credentials: ${credentials}
//      { "foo": ${foo},
//        "bar": ${bar}}`(myOnReadyStateChangeHandler);

var poem = `Las rosas son rojas,
las violetas son azules,
el azúcar es dulce 
y foo también.`;
console.log(poem)
document.write(
    "<br/>" + poem
  );