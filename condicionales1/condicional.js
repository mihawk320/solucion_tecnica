

//EJERCICIO NUMERO 1
document.write("ejercicio Número 1" + "<br>");

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

document.write(total + "<br><br>");


//EJERCICIO NUMERO 2
document.write("Ejercicio Número 2"+ "<br>");

var metros=2;
var kilometros=0;
var decimetros=0;

if(metros % 2 == 0)  { 
    kilometros=metros/1000;
    document.write("Kilometros: "+ kilometros +"<br><br>");
}
else{
        decimetros=metros * 10;
        document.write("decimetros: " + decimetros + "<br><br>");
}

//EJERCICIO NUMERO 3
document.write("Ejercicio número 3" + "<br>");

var edad=15;
var dias;
var horas;
var nombre="Jhon";

if(edad>=18){
    dias=edad*365;
    document.write(nombre + "Ha vivido " + dias + "dias" + "<br><br>");
}

else{
    if(edad%2==0){
        horas= edad*365*24;
        document.write("Ha vivido" + horas + "horas" + "<br><br>");
    }

    else{
        document.write(nombre + " hola" + "<br><br>");
    }
}

//EJERCICIO NUMERO 4 

document.write("Ejercicio número 4" + "<br>");

var N;
var I;
var F;

I=1;
F=1;
N=5;

do{
    F *= I;
    I += 1;
}
while (I<=N);

document.write(F + "<br><br>");

//Ejercicio numero 5

document.write("Ejercicio número 5" + "<br><br>")

var x=0;
var y=0;

function principal() {
    var z=0;
    var z=2;
    var x=3;
    var y=2;

    document.write("Ejecucion primer mostrar: "+x +" "+y+" "+ z+ "<br>");

    mmm(x,z);

    function mmm(a,b){
        var z=0;
        x=a+b;
        b=b*2;
        z=x+b;
        y=y+x*b; 
    
        document.write("Ejecucion mostrar MMM: "+x +" "+b+" "+ z+ "<br>");
    }
    
    document.write("Ejecucion segundo mostrar:  "+x +" "+y+" "+ z+ "<br><br>");
}


console.log(principal(x,y));


//EJERCICIO NUMERO 6 

document.write("Ejercicio Numero 6" + "<br><br>")
var m=0;

function programa(){
    var a=0;
    var b=0;
    m=1;
    a=2;
    b=5;

    document.write("Ejecucion primer mostrar:  "+a +" "+b+" "+ m+ "<br>");

    b=b+ppp(b);

    function ppp(x){
        var m=0;
        var a=0;
        var b=0;
        a=2;
        b=3;

        if(x%2==0){
            m=a*b;
        }

        else{
            m=a+b;
        }
        return(m);
    }

    document.write("Ejecucion segundo mostrar:  "+a +" "+b+" "+ m+ "<br>");

}


console.log(programa(m));



var n=21;
var i=4;
var sp=10;
var cp=3;
var ci=6;

i=1;
sp=0;
cp=0;
ci=0;

do{
    n=21;
    if(n%2==0){
        sp=sp+n
        cp=cp+1
    }
    else{
        ci=ci+1;
    }

    i=i+1;
}
while(i<=5)

document.write(ci/ci+cp)

if(cp!==0){
    document.write(sp/cp)
}

