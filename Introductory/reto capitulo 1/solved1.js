const definirCompra = (n) =>{
    let din = prompt(`¿Cuánto Dinero tienes, ${n}?`);
    let dinero = parseInt(din)
    if (din >= 0.6 && din < 1 ) return (`${n}, Cómprate el helado de agua, y te sobran `+(dinero-0.6));
    if (din >= 1 && din < 1.6 ) return (`${n}, Cómprate el helado de crema, y te sobran `+(dinero-1));
    if (din >= 1.6 && din < 1.7 ) return (`${n}, Cómprate el helado de heladix , y te sobran `+(dinero-1.6));
    if (din >= 1.7 && din < 1.8 ) return (`${n}, Cómprate el helado de heladocvich, y te sobran `+(dinero-1.7));
    if (din >= 1.8 && din < 2.9 ) return (`${n}, Cómprate el helado de helardo, y te sobran `+(dinero-1.8));
    if (din >= 2.9 ) return (`${n}, Cómprate el helado con cofites o el pote de 1/4 kg, y te sobran `+(dinero-2.9));
    else return (`${n}, lo sentimos, no tenemos algún producto que te alcance, y te sobran `);



}

let cant = prompt('¿cuantos son ustedes?');

for (let step = 0; step < cant; step++){
    let name = prompt('¿cuál es tu nombre?');
    document.write(
        "<br/>"
      )
    console.log(definirCompra(name));
    document.write(definirCompra(name))

}
