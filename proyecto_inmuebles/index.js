//mis variables de entrada
var mtCuadrados=0;
var tipoInmueble="";
var valorAdm=0;
var valorAseo=0;
var valorGym=0;
var genero="";
var edad=0;
var total=0;
//capturar datos de entrada
mtCuadrados=prompt("Digite los metros cuadrados ");
tipoInmueble=prompt("Digite el tipo de inmueble 'casa' o 'apartamento' ");
genero=prompt("Digite su genero 'masculino' o 'femenino' ");
edad=prompt("Digite su edad");
tipoInmueble=tipoInmueble.toLowerCase();
genero=genero.toLowerCase();
//proceso o calculos


valorAdm=calcularValor(mtCuadrados,tipoInmueble);

function calcularValor(mtCuadrados,tipoInmueble){
    if(tipoInmueble=="casa"){
        return mtCuadrados*1500+100000;
    }
    else if(tipoInmueble=="apartamento"){
        return mtCuadrados*1500+50000;
    }
    else{
        return "tipo de inmueble no valido"
    }
}

valorAseo=aseo(valorAdm,mtCuadrados);

function aseo(valorAdm,mtCuadrados){
    return (valorAdm*0.1)+(mtCuadrados*1000);
}

valorGym=gym(genero,edad);
function gym(genero,edad){
    switch(genero){
        case "masculino":
        if(edad<10){
            return 0;
        }
        else if(edad>=10 && edad<20){
            return 20000;
        }
        else if(edad>=20 && edad<40){
            return 15000;
        }
        else if(edad>=40 && edad<60){
            return 10000;
        }
        else if(edad>60){
            return 0;
        }
        break;


        case "femenino":
        if(edad<10){
            return 0;
        }
        else if(edad>=10 && edad<18){
            return 15000;
        }
        else if(edad>=18 && edad<35){
            return 12000;
        }
        else if(edad>=35 && edad<55){
            return 8000;
        }
        else if(edad>55){
            return 0;
        }
        break;
        
        default:
        break;
    }
        
       
    
}

total=valorAdm+valorAseo+valorGym;
//salidas del sistema
document.write("el valor de la administración es:" + valorAdm + "<br>") ;
document.write("el valor del aseo: " + valorAseo + "<br>");
document.write("el valor del gym es: " + valorGym + "<br>")
document.write("El costo total es: " + total);
