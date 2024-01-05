var name1  = prompt('¿cuál es tu nombre?')
var name2  = prompt('¿cuál es tu nombre?')
var name3  = prompt('¿cuál es tu nombre?')
var dineroCofla = prompt(`¿cuánto dinero tienes ${name1}?`);
var dineroRoberto = prompt(`¿cuánto dinero tienes ${name2}?`);
var dineroPedro = prompt(`¿cuánto dinero tienes ${name3}?`);

if (dineroCofla > 0.6 && dineroCofla < 1){
    alert(`${name1}, Cómprate el helado de agua`);
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert(`${name1}, Cómprate el helado de crema`);
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert(`${name1}, Cómprate el helado de heladix`);
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert(`${name1}, Cómprate el helado de heladovich`);
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert(`${name1}, Cómprate el helado de helardo`);
}
else if (dineroCofla >= 2.9 ){
    alert(`${name1}, Cómprate el helado con cofites o el pote de 1/4 kg`);

}
else{
    alert(`${name1}, Lo sentimos, no te alcanza para algún helado que tenemos`);
}


if (dineroRoberto > 0.6 && dineroRoberto < 1){
    alert(`${name2}, Cómprate el helado de agua`);
}
else if (dineroRoberto >= 1 && dineroRoberto < 1.6){
    alert(`${name2}, Cómprate el helado de crema`);
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7){
    alert(`${name2}, Cómprate el helado de heladix`);
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8){
    alert(`${name2}, Cómprate el helado de heladovich`);
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9){
    alert(`${name2},Cómprate el helado de helardo`);
}
else if (dineroRoberto >= 2.9 ){
    alert(`${name2}, Cómprate el helado con cofites o el pote de 1/4 kg`);

}
else{
    alert(`${name2}, Lo sentimos, no te alcanza para algún helado que tenemos`);
}


if (dineroPedro > 0.6 && dineroPedro < 1){
    alert(`${name3}, Cómprate el helado de agua`);
}
else if (dineroPedro >= 1 && dineroCofla < 1.6){
    alert(`${name3}, Cómprate el helado de crema`);
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7){
    alert(`${name3}, Cómprate el helado de heladix`);
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8){
    alert(`${name3}, Cómprate el helado de heladovich`);
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9){
    alert(`${name3},Cómprate el helado de helardo`);
}
else if (dineroPedro >= 2.9 ){
    alert(`${name3}, Cómprate el helado con cofites o el pote de 1/4 kg`);

}
else{
    alert(`${name3}, Lo sentimos, no te alcanza para algún helado que tenemos`);
}
