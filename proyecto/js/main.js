


let formulario = document.getElementById('formCompras');
formulario.addEventListener("submit",enviarFormulario);
function enviarFormulario(e){
    e.preventDefault();
alert('Formulario Enviado Correctamente');
    location.reload();
}
let montoInput = document.getElementById('cuota');
montoInput.addEventListener('change',calcularCuotas);
function calcularCuotas(){

    let cuota = document.getElementById('cuota').value;

    let monto = document.getElementById('monto').value;

    document.getElementById('montoCuota').value=Math.round(monto/cuota);

    document.getElementById('impuestos').value = calculoImpuestos(monto);
    document.getElementById('montoFinal').value =calculoImpuestos(monto)+parseInt(Math.round(monto/cuota) ) ;

}

let calculoImpuestos = montobruto =>{
    let iva = Math.round( montobruto*0.19);
    return parseInt(iva);
};
