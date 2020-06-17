const productos =[
  {
    id:10,
    nombre:"Chaqueta flores clara",
    imagen:"modeloPrincipal.jpeg",
    valor:"$90.000"
  },
  
  
  {
    id:1,
    nombre:"Chaqueta Modelo 1",
    imagen:"modelo1.jpeg",
    valor:"$50.000"
  },
  

  {
    id:2,
    nombre:"Chaqueta Modelo 2",
    imagen:"modelo2.jpeg",
    valor:"$55.000"
  },


  {
    id:3,
    nombre:"Chaqueta Modelo 3",
    imagen:"modelo3.jpeg",
    valor:"$60.000"
  },
  

  {
    id:4,
    nombre:"Chaqueta Modelo 4",
    imagen:"modelo4.jpeg",
    valor:"$65.000"
  },
  

  {
    id:5,
    nombre:"Chaqueta Modelo 5",
    imagen:"modelo5.jpeg",
    valor:"$70.000"
  },
  

  {
    id:6,
    nombre:"Chaqueta Modelo 6",
    imagen:"modelo6.jpeg",
    valor:"$75.000"
  }
];

function confirmacion(id){
  let productoSeleccionado = productos.find(function(producto) { return producto.id == id });
  localStorage.setItem('producto', JSON.stringify(productoSeleccionado));
  window.location = "confirmar.html";
}

function cargaInicial(){
  let producto = localStorage.getItem('producto');
  producto = JSON.parse(producto);
  document.getElementById("nombre").innerText = producto.nombre
  document.getElementById("valor").innerText = producto.valor
  document.getElementById("imagen").src = "imagenes/"+producto.imagen
}