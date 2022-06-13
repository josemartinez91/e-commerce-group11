// "use strict"
// import { stockProductos } from './stock.js';

const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')
//SEXTO PASO
const botonVaciar = document.getElementById('vaciar-carrito')
//SEXTIMO PASO, MODIFICAR LOS CONTADORES
const contadorCarrito = document.getElementById('contadorCarrito')

//OCTAVO PASO
const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.marca}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    contadorCarrito.innerText = carrito.length
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
}

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})
//SEXTO PASO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
     <img src=${producto.img} alt= "" style="width: 180px">
    <h3>${producto.marca}</h3>
    <p>${producto.modelo}</p>
    <p>Color: ${producto.color}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)

    boton.addEventListener('click', () => {
        agregarAlCarrito(producto.id)
    })
})


const agregarAlCarrito = (prodId) => {


    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) {
        const prod = carrito.map(prod => {
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }

    actualizarCarrito()
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item)

    carrito.splice(indice, 1)
    actualizarCarrito()

    console.log(carrito)
}

// CHECKOUT CARRITO

// let form = document.querySelector('.form-register');
// let progressOptions = document.querySelectorAll('.progressbar__option')

// form.addEventListener('click', function(e){
//     let element = e.target;
//     let isButtonNext = element.classList.contains('step__button--next');
//     let isButtonBack = element.classList.contains('step__button--back');
//     if(isButtonNext || isButtonBack){
//         let currentStep = document.getElementById('step-' + element.dataset.step);
//         let jumpStep = document.getElementById('step-' + element.dataset.to_step);
//         currentStep.addEventListener('animationend', function callback(){
//             currentStep.classList.remove('active');
//             jumpStep.classList.add('active');
//             if(isButtonNext){
//                 currentStep.classList.add('to-left');
//                 progressOptions[element.dataset.to_step - 1].classList.add('active');
//             } else {
//                 jumpStep.classList.remove('to-left');
//                 progressOptions[element.dataset.step - 1].classList.remove('active');
//             }
//             currentStep.removeEventListener('animationend', callback);
//         });
//         currentStep.classList.add('inactive');
//         jumpStep.classList.remove('inactive');
//     }
// })

const stepButtonBack = document.getElementsByClassName('step__button--back');
const stepButtonNext = document.getElementsByClassName('step__button--next');
const progressOptions = [...document.querySelectorAll('.progressbar__option')];
const stepSend = document.getElementsByClassName('step__button-send')
const maxSteps = 4;
let currentStep = 1;

stepButtonNext.addEventListener('click', () => {
    progressOptions[currentStep - 1].classList.add('completed');
    currentStep += 1;
    stepButtonBack.disable = false;
    if (currentStep === maxSteps){
        stepButtonNext.disable = true;
        stepButtonBack.disable = false;
    }
});

stepButtonBack.addEventListener('click', () => {
    progressOptions[currentStep - 2].classList.remove('completed');
    currentStep -= 1;
    stepButtonNext.disable = false;
    stepSend.disable = true;
    if(currentStep === 1){
        stepButtonBack.disable= true;
    }
})

stepSend.addEventListener('click', () => {
    location.reload();
})