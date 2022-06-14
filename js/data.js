// const stepButtonBack = document.getElementsByClassName('step__button--back');
// const stepButtonNext = document.getElementsByClassName('step__button--next');
// const progressOptions = document.querySelectorAll('.progressbar__option');
// const stepSend = document.getElementsByClassName('step__button-send')
// const maxSteps = 4;
// let currentStep = 0;

// console.log(progressOptions);

// for(const nextStep of stepButtonNext){
//     nextStep.addEventListener('click', () => {
//         progressOptions[currentStep - 1].classList.add('active');
//         currentStep += 1;

//         const currentForm = document.querySelector(`#step-${currentStep}`);
//         console.log(currentForm);
//         stepButtonBack.disable = false;
//         if (currentStep < maxSteps){
//             stepButtonNext.disable = true;
//             stepButtonBack.disable = false;
//         }
//     });
// }

// // stepButtonNext.addEventListener('click', () => {
// //     progressOptions[currentStep - 1].classList.add('completed');
// //     currentStep += 1;
// //     stepButtonBack.disable = false;
// //     if (currentStep === maxSteps){
// //         stepButtonNext.disable = true;
// //         stepButtonBack.disable = false;
// //     }
// // });
// for(const backStep of stepButtonBack){
//     backStep.addEventListener('click', () => {
//         progressOptions[currentStep - 2].classList.remove('completed');
//         currentStep -= 1;
//         stepButtonNext.disable = false;
//         stepSend.disable = true;
//         if(currentStep === 1){
//             stepButtonBack.disable= true;
//         }
//     })
// }
// // stepButtonBack.addEventListener('click', () => {
// //     progressOptions[currentStep - 2].classList.remove('completed');
// //     currentStep -= 1;
// //     stepButtonNext.disable = false;
// //     stepSend.disable = true;
// //     if(currentStep === 1){
// //         stepButtonBack.disable= true;
// //     }
// // })

// stepSend[0].addEventListener('click', () => {
//     location.reload();
// })

let form = document.querySelector('.form-register');
let progressOptions = document.querySelectorAll('.progressbar__option')

form.addEventListener('click', function(e){
    let element = e.target;
    let isButtonNext = element.classList.contains('step__button--next');
    let isButtonBack = element.classList.contains('step__button--back');
    if(isButtonNext || isButtonBack){
        let currentStep = document.getElementById('step-'+ element.dataset.step);
        let jumpStep = document.getElementById('step-'+ element.dataset.to_step);
        console.log(currentStep);
        console.log(jumpStep);
        currentStep.addEventListener('animationend', function callback(){
            currentStep.classList.remove('active');
            jumpStep.classList.add('active');
            if(isButtonNext){
                currentStep.classList.add('to-left');
                progressOptions[element.dataset.to_step - 1].classList.add('active');
            } else {
                jumpStep.classList.remove('to-left');
                progressOptions[element.dataset.step - 1].classList.remove('active');
            }
            currentStep.removeEventListener('animationend', callback);
        });
        currentStep.classList.add('inactive');
        jumpStep.classList.remove('inactive');
    }
})