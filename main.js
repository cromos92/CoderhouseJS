


//ejemplo1
let dato1 = prompt("Ingrese un valor mayor a 1000 ");
let estado=(dato1 >1000);
    if (estado){
        alert("dato ingresado correctamente");
    } else {
        alert("dato erroneo");
}
    //ejemplo 2
let dato2 = prompt("Ingrese palabra secreta");
let estado2=(dato2.toUpperCase()=="HOLA");
if (estado2){
    alert("Palabra ingresada correctamente");
} else {
    alert("Palabra ingresada no coincide");
}

//ejemplo 3
let dato3 = prompt("Ingrese un valor de 10 a 50");
let estado3=(dato3 >9 && dato3<51);
if (estado3){
    alert("dato ingresado correctamente");
} else {
    alert("dato erroneo");
}