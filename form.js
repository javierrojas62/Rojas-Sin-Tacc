//variables form
let nombreForm = document.getElementById('nombre')
let emailForm = document.getElementById('email')


//eventos
nombreForm.addEventListener("input", function () {
    if (nombreForm.value === "") {
        console.log("Ingrese Nombre")
    }
})

emailForm.addEventListener("input", function () {
    if (emailForm.value === "") {
        console.log("Ingrese correo")
    }
})

let miFormulario = document.getElementById('miFormulario')

let info = document.getElementById('info')

// mostrar info
const mostrarInfo = miFormulario.addEventListener("submit", function (e) {
    e.preventDefault();
    info.innerHTML = `
  <div class = "alert alert-warning" role="alert">
  <h5>muchas gracias ${nombreForm.value} por tu compra, te enviamos el compobante a:${emailForm.value}</h5>
  </div>
  `
})

