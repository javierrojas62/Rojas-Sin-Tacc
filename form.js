// variable y dom
let nombreForm = document.querySelector("#nombre");
let correoForm = document.querySelector("#correo");

// eventos
nombreForm.addEventListener("input", function () {
  // console.log(nombreForm.value);
  if (nombreForm.value === "") {
    console.log("Ingrese un nombre");
  }
});

correoForm.addEventListener("input", function () {
  // console.log(correoForm.value);
  if (correoForm.value === "") {
    console.log("Ingrese un correo");
  }
});

let formulario = document.querySelector("#formulario");

let info = document.querySelector(".info");

// agregar informacion al DOM
const pintarInfo = formulario.addEventListener("submit", function (e) {
  e.preventDefault();
  info.innerHTML = `
  <div class="alert alert-warning h5" role="alert">
<h5> Muchas gracias ${nombreForm.value} por tu compra, te enviamos documentación a: ${correoForm.value} </h5></div>`;
});

