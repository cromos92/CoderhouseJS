// PROYECTO SIMULACION  COMPRA BANCARIA
class Venta{
    constructor(nombreApellido,edad,cantidadProductos,cuotas,montoPagar,subscrito) {
        this.nombreYApellido=nombreApellido;
        this.edad=edad;
        this.cantidadProductos=cantidadProductos;
        this.cuotas=cuotas;
        this.montoPagar=montoPagar;
        this.iva=calcularIva(montoPagar);
        this.neto=parseInt(montoPagar-calcularIva(montoPagar));
        this.subscrito=subscrito;
    }
       MostrarInformacion=function(){
       alert("hola los Datos Ingresados De la Venta Son: " +
           "\n Nombres"+this.nombreYApellido+
           "\n Edad"+this.edad+
           "\n Cantidad Productos"+this.cantidadProductos+
           "\n Cantidad Productos"+this.cuotas +
           "\n Cantidad Productos"+this.montoPagar +
           "\n Cantidad Productos"+this.iva+
           "\n Cantidad Productos"+this.neto+
           "\n Cantidad Productos"+this.subscrito
           )};
}

const calcularIva =(x)=> {return Math.round( x*0.19);};
let nombreyApellido = prompt("Ingrese Nombre y Apellido");
let edad = Number(prompt("Ingrese edad"));
let cantidadItems =parseInt(prompt("Ingrese Cantidad de productos a comprar "));
let cuotas =parseInt(prompt("Ingrese Cantidad de Cuotas"));
let aplazar =prompt("¿Quieres Aplazar la deuda por 1 mes 'Si' o 'No' ? costo del servicio 5% valor total");
let Subscripcion =prompt("¿Quieres Subscribirte a Nuestra empresa  'Si' o 'No' ? Y Obten un 10% de descuento en tu primera compra");

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
const calculoTasaCredito = x=> {
    if (x < 25) return x = 0.250;
    else if(x>=25 && x<45) return x=0.150;
    else return x=0.2;
}
const subTotal=costoSubscribir+costoAplazar+totalProductos;
let costoCredito = calculoTasaCredito(edad);
let totalFinal=subTotal+calcularIva(subTotal)+costoAplazar-costoSubscribir+Math.round(costoCredito);
let valorCuota = Math.round(totalFinal/cuotas);
console.log("Costo Subscribir: "+costoSubscribir);
console.log("Costo Aplazar: "+costoAplazar);
console.log("SubTotal: "+subTotal);
console.log("IVA: "+calcularIva(subTotal));
console.log("TotalPagar: "+totalFinal);
console.log("Pagado en "+cuotas+" cuotas cada una con un valor de:"+valorCuota);
const venta1=new Venta(nombreyApellido,25,cantidadItems,cuotas,totalFinal,Subscripcion);
 venta1.MostrarInformacion();