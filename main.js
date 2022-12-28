//variable simula base de datos
const productos = [
  {
    id: 1,
    nombre: "Pan",
    cantidad: 1,
    desc: "Pan integro de arroz libre de gluten",
    precio: 500,
    img: "./img/pan.webp",
  },
  {
    id: 2,
    nombre: "Empanadas",
    cantidad: 1,
    desc: "Empanadas como las de la abuela",
    precio: 700,
    img: "./img/empanadas.webp",
  },
  {
    id: 3,
    nombre: "Pizza",
    cantidad: 1,
    desc: "Pizza lista pra disfrutar con el mejor sabor",
    precio: 900,
    img: "./img/pizza.webp",
  },
  {
    id: 4,
    nombre: "Sandwch",
    cantidad: 1,
    desc: "Los mejores sabores en tu paladar",
    precio: 1100,
    img: "./img/sandwch.jpg",
  },
];


//variables
const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('carrito-contenedor')
let carrito = [];



//recorrer el array para mostrar en el DOM
productos.forEach((producto) => {
  const div = document.createElement("div");
  div.innerHTML = `
<div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <div class="card">

            <img class="rounded mx-auto d-block product" src="${producto.img}" alt="">
            <div class="card-body">
            
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">${producto.desc}</p>
              <p class="card-text">$${producto.precio}</p>
              <button id="agregar${producto.id}" type="button" class="btn btn-primary">Comprar</button>
              
            </div>
          </div>
        </div>

        `;
  contenedorProductos.appendChild(div);
  //variable para boton agregar
  const boton = document.getElementById(`agregar${producto.id}`)
  //llama a la funcion (agregarAlCarrito)
  boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
  })



});

//agregar al carrito
const agregarAlCarrito = (prodId) => {

  //aumentar la cantidad
  const existe = carrito.some(prod => prod.id === prodId) //comprobar si esta en el carrito

  if (existe) { //si ya esta actualizar
    const prod = carrito.map(prod => { //creamos un nuevo arreglo para suma cantidad
      if (prod.id === prodId) {
        prod.cantidad++
      }
    })
  } else { //si no esta agregar al carrito
    const item = productos.find((prod) => prod.id === prodId)// agregar al carrito
    carrito.push(item)
  }

  actualizarCarrito() //llamar actualizarCarrito
}

const actualizarCarrito = () => {

  carrito.forEach((prod) => { //por cada producto se crea un div

    const div = document.createElement('div')
    div.className = ('productoEnCarrito')
    div.innerHTML = `
<div class="container">
<p class="card-text">${prod.nombre}</p>
<p class="card-text">Cantidad: <span id="cantidad">${prod.cantidad}</p>
<button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar btn btn-danger"><i class="fas fa-trash-alt"></i>Eliminar</button>
</div>
`
    contenedorCarrito.appendChild(div)
    localStorage.setItem('carrito', JSON.stringify(carrito))
  })
  //total y contador de carrito
  contadorCarrito.innerText = carrito.length
  precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
  console.log(carrito)
}

// eliminar del carrito
const eliminarDelCarrito = (prodId) => {
  const item = carrito.find((prod) => prod.id === prodId)

  const indice = carrito.indexOf(item) //busca el elemento y devuelve su indice.

  carrito.splice(indice, 1) // borramos  
  actualizarCarrito() //llamar a  actualizarCarrito

}




