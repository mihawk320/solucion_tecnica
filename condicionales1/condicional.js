var cantidad=20;
var precio=2200;
var total=precio * cantidad;
var nombre="piñas";

if(cantidad>10){
    total *= 0.8;
}
else{
    total *=0.9;
}

console.log(total)

/*var metros=2;
var kilometros=0;
var decimetros=0;

if(metros=2%0)  {
    kilometros=metros/1000;
   console.log("kilometros: " + kilometros)
}

else{
        decimetros=metros * 10;
        console.log("decimetros: " + decimetros)
}
*/