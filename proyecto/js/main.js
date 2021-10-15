

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

     $("#cantCarrito").text(contador) ;
}

function almacenarProducto(idNumero) {

    let titulo = $("#tituloProducto"+idNumero).text();
    let precio =$("#tituloProducto"+idNumero).text();
    let product = new Producto(titulo,precio,1);
    product.MostrarInformacion();
    listaProductos.push(product);
    localStorage.setItem("productosCarrito",JSON.stringify(listaProductos));
   let dataProd= product.mostrarLocalStorage();
    actualizarCarrito();

}

$( ".btnEcommerce" ).click(function() {
    console.log(this.value);
    almacenarProducto(this.value)
});
$()
