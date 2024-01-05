// Concatenate
var greet;
var question;
var words_greet;
greet = '¡Hola!';
question = '¿Cómo está?';

words_greet = greet + ' ' + question

document.write(words_greet)

// Convert string to number 
var number;
var number1;
var number2;
number = '101';
number1 = '59.23';
number2 = '201'

//convert  to int 
number = parseInt(number); // 5
document.write(
    "<br/>"
  )
console.log(number);
document.write(number)

// Metódo altenativo
document.write(
    "<br/>"
  )
document.write(
    (+"1.1") + (+"1.1")
  ); // 2.2


// concatenar numeros como como string
let numero = 53;
let numero2 = 4;
let number_string;
number_string = "" + numero + numero2
document.write(
    "<br/>"
  )
console.log(number_string);
document.write(number_string)

// Función concat
// Solo funciona si una de las variables es string o un array
let numer = '53';
let numer2 = 4;
let number_string2;
number_string2 = numer.concat(numer2)
document.write(
    "<br/>"
  )
console.log(number_string2);
document.write(number_string2)

// Con Backtiks y la variable entre ${}
var name = 'Alexander Moreno';
var new_phrase = `${name} está aprendiendo JavaScript`;
document.write(
    "<br/>"
  );
console.log(new_phrase);
document.write(new_phrase);





