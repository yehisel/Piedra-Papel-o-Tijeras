


var numeroDeJuegos = parseInt(prompt("Cuántas veces desea jugar o repetir el juego"));

   

function play () {

        //Play with Piedra
    if (usuario == 1 && pc == 1) {
        document.write(`Usted ha Elegido: Piedra  y la maquina piedra <br> ¡Usted Ha empatado!<br><br><br>`); 
        alert("¡Usted Ha empatado!");       
    }else if (usuario == 1 && pc == 2) {
        document.write(`Usted ha Elegido: piedra  y la maquina papel <br> ¡Usted Ha Perdido...!<br><br><br>`);   
        alert("¡Usted Ha perdido!");  
    }else if (usuario == 1 && pc == 3) {
        document.write(`Usted ha Elegido: Piedra  y la maquina Tijera  <br> ¡Usted Ha Ganado !!!..... FELICIDADES .... !!!<br><br><br>`);
        alert("¡Usted Ha ganado!");
    }
    
        //Play with papel
    else if (usuario === 2 && pc === 1) {
        document.write(`Usted ha Elegido: papel y maquina piedra <br> ¡Usted Ha Ganado !!!..... FELICIDADES .... !!!<br><br><br>`); 
        alert("¡Usted Ha Ganado!");
    }else if (usuario === 2 && pc === 2) {
        document.write(`Usted ha Elegido: papel y la maquina papel <br> ¡Usted Ha empatado!<br><br><br>`);
        alert("¡Usted Ha empatado!");
    }else if (usuario === 2 && pc === 3) {
        document.write(`Usted ha Elegido: papel y la maquina tijeras <br> ¡Usted Ha Perdido...!<br><br><br>`);
        alert("¡Usted Ha Perdido!");
    }
     //Play with Tijeras
     else if (usuario === 3 && pc === 1) {
        document.write(`Usted ha Elegido: Tijeras y maquina piedra <br> ¡Usted Ha Perdido !<br><br><br>`); 
        alert("¡Usted Ha Perdido!");
    }else if (usuario === 3 && pc === 2) {
        document.write(`Usted ha Elegido: Tijeras y la maquina papel <br> ¡Usted Ha Ganado!!!..... FELICIDADES .... !!!<br><br><br>`);
        alert("¡Usted Ha Ganado!");
    }else if (usuario === 3 && pc === 3) {
        document.write(`Usted ha Elegido: Tijeras y la maquina tijeras <br> ¡Usted Ha Empatado..!<br><br><br>`);
        alert("¡Usted Ha empatado!");
    }

        

}


for (var i = 0; i < numeroDeJuegos; i++) {
    
    var usuario = parseInt(prompt("Selecciona  1. piedra 2. papel 3. tijera"));
    
    var pc = Math.ceil(Math.random()*3)
   
    play();
} 







    


// var de = parseInt(prompt("Cuántas veces desea jugar o repetir el juego"));
// document.write(numeroDeJuegos)









































/*var numero2 = parseInt(prompt("Ingresar un numero mayor a 0 "))
 
var suma = (numero1 + numero2).toFixed(2)
var resta = (numero1 - numero2).toFixed(2)
var division = (numero1 / numero2).toFixed(2)
var multiplicacion = (numero1 *  numero2).toFixed(2)
var modulo = (numero1 % numero2).toFixed(2)
 
document.write(`suma: ${suma} <br><br>`)
document.write(`resta: ${resta} <br><br>`)  
document.write(`division: ${division} <br><br>`)
document.write(`multiplicacion: ${multiplicacion} <br><br>`)
document.write(`modulo: ${modulo} <br><br>`)*/