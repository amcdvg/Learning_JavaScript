let number = 23;
let number2 =13;
let texto ='13';

document.write(
    "<br/>"
);
document.write('Operadores de comparación');
document.write(
    "<br/><br/>"
);
document.write('let number = '+ number);
document.write(
    "<br/>"
);
document.write('let number2 = '+ number2);
document.write(
    "<br/>"
);
document.write('let texto = ' + `"${texto}"`);
// operator equality
    document.write(
        "<br/><br/>"
    );
   
    document.write('De igualdad')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' == ' + 'number2');
    document.write(
        "<br/> resultado : "
    );
    document.write(number == number2);

// operator inequality
    document.write(
        "<br/><br/>"
    );

    document.write('De no igualdad')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' != ' + 'number2');
    document.write(
        "<br/> resultado : "
    );
    document.write(number != number2);


// operator identity
    // Es strictitamente igual, tanto el valor como el tipo
    document.write(
        "<br/><br/>"
    );
   
    document.write('Estrictamente igual tanto el valor como el tipo')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' === ' + 'texto');
    document.write(
        "<br/> resultado : "
    );
    document.write(number === texto);
    // mientras con el equality no diferencia el tipo
    document.write(
        "<br/>"
    );
   
    document.write('mientras con el equality no diferencia el tipo')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' == ' + 'texto');
    document.write(
        "<br/> resultado : "
    );
    document.write(number == texto);

// operator nonidentity
    // Es strictitamente igual, tanto el valor como el tipo
    document.write(
        "<br/><br/>"
    );
   
    document.write('Estrictamente diferente tanto el valor como el tipo')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' !== ' + 'texto');
    document.write(
        "<br/> resultado : "
    );
    document.write(number !== texto);


// Greater than
    document.write(
        "<br/><br/>"
    );

    document.write('Mayor que')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' > ' + 'number2');
    document.write(
        "<br/> resultado : "
    );
    document.write(
        "<br/>"
    );
    document.write(number > number2);

// Greater than or iqual
    document.write(
        "<br/><br/>"
    );

    document.write('Mayor que o igual')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' >= ' + 'number2');
    document.write(
        "<br/> resultado : "
    );
    document.write(
        "<br/>"
    );
    document.write(number >= number2);

// less than 
    document.write(
        "<br/><br/>"
    );

    document.write('Menor que')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' < ' + 'number2');
    document.write(
        "<br/> resultado : "
    );
    document.write(
        "<br/>"
    );
    document.write(number < number2);

// Less than or iqual
    document.write(
        "<br/><br/>"
    );

    document.write('Menor o igual')
    document.write(
        "<br/>"
    );
    document.write('' + 'number' + ' <= ' + 'number2');
    document.write(
        "<br/> resultado : "
    );
    document.write(
        "<br/>"
    );
    document.write(number <= number2);


// operadores lógicos

document.write(
    "<br/><br/>"
);
document.write('Operadores Lógicos');


//AND Lógico
    document.write(
        "<br/><br/>"
    );

    document.write('AND Lógico')
    document.write(
        "<br/>"
    );
    document.write('' + 'true' + ' && ' + 'true');
    document.write(
        "<br/> resultado : "
    );
  
    document.write(true && true);

//OR Lógico
    document.write(
        "<br/><br/>"
    );

    document.write('OR Lógico')
    document.write(
        "<br/>"
    );
    document.write('' + 'true' + ' || ' + 'false');
    document.write(
        "<br/> resultado : "
    );

    document.write(true || false);

//Not Lógico
    document.write(
        "<br/><br/>"
    );

    document.write('NOT Lógico')
    document.write(
        "<br/>"
    );
    document.write('' + ' ! ' + 'false');
    document.write(
        "<br/> resultado : "
    );

    document.write(! false);