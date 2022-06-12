"use strict"
import {stockProductos} from './stock.js';  



function generateCardProducts (productArray){
    let html = '';
    for(let i = 0; i< productArray.length; i++){
        html += `<div class="col-4">
                    <div class="card">
                        <div class="card-body">
                            <p class="card-title">${productArray[i].marca}</p>
                            <h5 class="card-text">${productArray[i].modelo}</h5>
                            <p>Precio</p>
                            <h5>${productArray[i].precio}0</h5>
                            <button class="btn btn-primary"> Comprar</button>
                        </div>
                    </div>
                </div>`     
    }
    console.log(html);
    const container = document.getElementById('product-container');
    container.innerHTML= html;
}

generateCardProducts(stockProductos);

window.generateCardProducts= generateCardProducts;

