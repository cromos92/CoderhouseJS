

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
$( "#btnConsulta" ).click(function() {

    fetch('https://jsonplaceholder.typicode.com/todos/'+$("#inputFind").val())
        .then(response => response.json())
        .then(

            json =>
    {
        $("#resultado1").append("<li>"+json.id+"</li>");
        $("#resultado1").append("<li>"+json.title+"</li>");

    });
    alertify
        .alert("Datos Obtenidos Correctamente", function(){
            alertify.message('OK');
        });
});
$( "#btnConsulta2" ).click(function() {

    fetch('http://hp-api.herokuapp.com/api/characters/')
        .then(response => response.json())
        .then(

            json =>
            {
                for (let i=0;i<json.length;i++){
                    $("#resultado2").append("<li>"+json[i].name+"-"+ json[i].gender+"-" + json[i].house+"</li>");
                }

            });
    alertify
        .alert("Datos Obtenidos Correctamente", function(){
            alertify.message('OK');
        });
});

