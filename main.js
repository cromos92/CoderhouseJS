


//ejemplo1
let dato1 = prompt("Ingrese un valor mayor a 1000 ");
let resultado=0;
for (let i = 0; i < dato1; i++) {
    resultado +=10+parseInt(dato1)  ;
    console.log("El Resultado es :"+resultado);
}

//ejemplo2
let texto = "";
let result="";
while (texto !=="ESC"){
      texto  = prompt("Ingrese Palabra Secreta");
    result=result+"-"+texto;
    console.log("Palabras Ingresadas:"+result);
}
alert("Palabra Ingresada Correcta");

//EJEMPLO3
let numero =prompt("Ingrese Numero de Palabras a repetir");
for (let i = 0; i < numero; i++) {

    console.log("Hola");
}
