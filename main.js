


let cantidadItems =parseInt(prompt("Ingrese Cantidad de productos a comprar(Neto)"));
let cuotas =parseInt(prompt("Ingrese Cantidad de Cuotas"));
console.log(cuotas,cantidadItems);
let aplazar =prompt("¿Quieres Aplazar la deuda por 1 mes 'Si' o 'No' ? costo del servicio 5% valor total");
let Subscripcion =prompt("¿Quieres Subscribirte a Nuestra empresa  'Si' o 'No' ? Y Obten un 10% de descuento en tu primera compra");
const calcularIva =(x)=> {return Math.round( x*0.19);};
//funcion para calcular los precios de la canidad de productos aleotario
const precioItem = (max,min)=> { return Math.floor(Math.random() * (max - min)) + min;};
//funcion para valir las opciones de Si o No, para validar que sean extrictamente las palabras mencionadas
const ValidarSiEsNumero =(input) =>{
    return !isNaN(input) && typeof input === 'number';
}
const validacionMenu = (variableEvaluar,mensaje)=> {
    let status = false;
    while (status==false){
        switch (variableEvaluar){
            case  "Si":
                status=true;
                break;
            case  "No":
                status=true;
                break;
            default:
                variableEvaluar =prompt(mensaje);
                break;
        }
    }
}

const validacionCuotasProductos = (valor,mensaje)=>{
    let status =false;
    while (status==false){

        if (ValidarSiEsNumero(valor) && valor>0){
            status=true;
            break;
        }
        valor =parseInt( prompt(mensaje));
    }
};
validacionMenu(aplazar,"Opcion Ingresada Incorrecta, porfavor indicar Si o No para aplazar la deuda");
validacionMenu(Subscripcion,"Opcion Ingresada Incorrecta, porfavor indicar Si o No para Subscribir y adquirir descuentos");

validacionCuotasProductos(cuotas,"Error la cantidad de cuotas tiene que ser mayor a 0");
validacionCuotasProductos( cantidadItems,"Error la cantidad de Productos a vender tiene que ser mayor a 0");
let totalProductos=0;
//Recorro la cantidad de productos y sumo valores aleatorios de acuerdo a la cantidad de productos
for (let i = 0; i <cantidadItems; i++) {
    totalProductos+=precioItem(1000,30000);
    console.log("Precio Producto Nª:"+i+" "+totalProductos);
}
let costoAplazar=0;
if (aplazar=="Si"){
    costoAplazar=Math.round( totalProductos*0.05);
}
let costoSubscribir=0;
if (Subscripcion=="Si"){
    costoSubscribir=Math.round( totalProductos*0.1);
}


console.log("Costo Subscribir: "+costoSubscribir);
console.log("Costo Aplazar: "+costoAplazar);
const subTotal=costoSubscribir+costoAplazar+totalProductos;
console.log("SubTotal: "+subTotal);
console.log("IVA: "+calcularIva(subTotal));

let totalFinal=subTotal+calcularIva(subTotal)+costoAplazar-costoSubscribir;
console.log("TotalPagar: "+totalFinal);
let valorCuota = Math.round(totalFinal/cuotas);
console.log("Pagado en "+cuotas+" cuotas cada una con un valor de:"+valorCuota);