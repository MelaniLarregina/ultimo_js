/*CLASES*/
class Personas{
    constructor (nombre, dni , edad){
         this.nombre = nombre;
         this.dni = dni;
         this.edad = edad;
    }
 
    get_datos(){
       console.log ("<---------------->");
       console.log ("nombre ",this.nombre);
       console.log ("dni ",this.dni);
       console.log ("edad " ,this.edad);
       console.log ("");
    }
 
    get_nombre(){
       return this.nombre;
    }
 
    get_edad(){
       return this.edad;
    }
 
    get_dni(){
       return this.dni;
    }
 
    darBienvenida(){
       return ("Bienvenido a tu prestamo online inmediato ");
    }
 
    mayor_de_edad (edad){
       if( edad >=18 ){
          alert ("Correcto, es mayor de edad");
          return true;
       }
       else {
          alert ("Error, no es mayor de edad");
          return false;
       }
    }
 }
 
 /*FUNCIONES*/
 
 function intereses_cuotas ( monto , cuotas){
    var interes = 0;
    if( cuotas == 6){
       interes = monto * 0.30; 
    }
    else if  ( cuotas == 9){
       interes = monto * 0.50;
    }
    else if ( cuotas == 12){
       interes = monto * 0.80;
    }
    else if (cuotas == 24){
       interes = monto * 1;
    }
    return interes;
 }
 
 function iva_prestamo ( total ){
    return total * 0.21;
 }
 
 function traerPersonaPorDni(dni_buscado,validos){
    for (let j = 0; j < validos; j++) {
       if(arrayPersonas[j].get_dni() === dni_buscado){
          return arrayPersonas[j];
       }
    }
    return null;
 }
 
 /*CODIGO SUELTO*/
 let seguir = 's';
 let arrayPersonas = new Array();
 let i = 0;
 
 while(seguir === 's'){
    let nombre = prompt ("Ingresa tu nombre y apellido");
    let dni = prompt("Ingrese su documento");
    let edad= prompt("Ingrese su edad");
    let persona = new Personas(nombre,dni,edad);
    alert(persona.darBienvenida() + " " + persona.get_nombre());
 
    if(persona.mayor_de_edad(edad)){
       let monto = prompt ("Ingresa cuanto dinero quieres solicitar:  ");
       monto = parseInt (monto);
 
       let cuotas = prompt ("En cuantas cuotas: 6 , 9 , 12 , 24");
 
       let total = monto + intereses_cuotas (monto , cuotas);
       let total_con_iva = total + iva_prestamo(total);
 
       alert("Pediste:  " + monto);
       alert("Cuotas: " + cuotas);
       alert("Total con intereses: " + total);
       alert("Total con intereses e iva: " + total_con_iva);
       
       arrayPersonas[i] = persona;
       seguir = prompt("Desea seguir? (s/n)");
       i++;
    }
    persona.get_datos();
 }
 
 let dni_buscado = prompt("ingrese el dni de una persona a buscar dentro de la base de datos de prestamos: ");
 let personaBuscada = traerPersonaPorDni(dni_buscado,i);
 
 if(personaBuscada !=null){
    alert(personaBuscada.get_nombre() + ", " + personaBuscada.get_edad() + ", " + personaBuscada.get_dni());
 }else{
    alert("esa persona no existe en la base de datos de prestamos!");
 }