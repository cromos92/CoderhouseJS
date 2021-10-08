

class Producto{
    constructor(descripcion,precio,cantidad ) {
        this.descripcion=descripcion;
        this.precio=precio;
        this.cantidad=cantidad;

    }
    MostrarInformacion=function(){
        alert("hola los Datos Ingresados   Son: " +
            "\n descripcion"+this.descripcion+
            "\n precio"+this.precio+
            "\n Cantidad Productos"+this.cantidad

        )};

    mostrarLocalStorage=function (){
        let infoProducts = localStorage.getItem("productosCarrito");
      return JSON.parse(infoProducts);
    }

}

let listaProductos=[];
function actualizarCarrito(){
    let elementosStorage = localStorage.getItem("productosCarrito");
    if (elementosStorage==null) listaProductos=[];
    else listaProductos=JSON.parse(elementosStorage);
    console.log(listaProductos);
    let contador =0;
    for(var i = 0; i < listaProductos.length; i++) {
    contador+=listaProductos[i]['cantidad'];
    }
    document.getElementById("cantCarrito").innerText=contador;

}
function almacenarProducto(evento) {


    let identificador = evento.target.attributes.value.value;
    let titulo = document.getElementById("tituloProducto" + identificador).innerText;
    let precio = document.getElementById("precioProducto" + identificador).innerText;
    let product = new Producto(titulo,precio,1);
    product.MostrarInformacion();
    listaProductos.push(product);
    localStorage.setItem("productosCarrito",JSON.stringify(listaProductos));
   let dataProd= product.mostrarLocalStorage();

    actualizarCarrito();

}

// obtenemos todos los botones, por su clase
var buttons = document.querySelectorAll('.btnEcommerce')
// a cada uno le asignamos el manejador del evento.
for(var i = 0; i < buttons.length; i++) {
    // aqui generas el equivalente a onclick
    buttons[i].addEventListener('click', almacenarProducto);
}