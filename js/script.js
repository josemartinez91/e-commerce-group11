"use strict"
import {stockProductos} from './stock.js';  



function generateCardProducts (productArray){
    let html = '';
    for(let i = 0; i< productArray.length; i++){
        html += `<div class="col-4">
                    <div class="card style="width: 18rem;">
                        <div class="text-center conteiner-img">
                        <img src="${productArray[i].img}" alt="img" style="width: 150px" >
                        </div>
                        <div class="card-body">
                            <p class="card-title">${productArray[i].marca}</p>
                            <h5 class="card-text">${productArray[i].modelo}</h5>
                            <p>Precio</p>
                            <h5>${productArray[i].precio}0</h5>
                            <div class="d-flex justify-content-end"> 
                                <button class="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg></i></button>
                            </div>
                            
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

