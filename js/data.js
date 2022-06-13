const stepButtonBack = document.getElementsByClassName('step__button--back');
const stepButtonNext = document.getElementsByClassName('step__button--next');
const progressOptions = document.querySelectorAll('.progressbar__option');
const stepSend = document.getElementsByClassName('step__button-send')
const maxSteps = 4;
let currentStep = 0;

console.log(progressOptions);

for(const nextStep of stepButtonNext){
    nextStep.addEventListener('click', () => {
        progressOptions[currentStep - 1].classList.add('active');
        currentStep += 1;

        const currentForm = document.querySelector(`#step-${currentStep}`);
        console.log(currentForm);
        stepButtonBack.disable = false;
        if (currentStep < maxSteps){
            stepButtonNext.disable = true;
            stepButtonBack.disable = false;
        }
    });
}

// stepButtonNext.addEventListener('click', () => {
//     progressOptions[currentStep - 1].classList.add('completed');
//     currentStep += 1;
//     stepButtonBack.disable = false;
//     if (currentStep === maxSteps){
//         stepButtonNext.disable = true;
//         stepButtonBack.disable = false;
//     }
// });
for(const backStep of stepButtonBack){
    backStep.addEventListener('click', () => {
        progressOptions[currentStep - 2].classList.remove('completed');
        currentStep -= 1;
        stepButtonNext.disable = false;
        stepSend.disable = true;
        if(currentStep === 1){
            stepButtonBack.disable= true;
        }
    })
}
// stepButtonBack.addEventListener('click', () => {
//     progressOptions[currentStep - 2].classList.remove('completed');
//     currentStep -= 1;
//     stepButtonNext.disable = false;
//     stepSend.disable = true;
//     if(currentStep === 1){
//         stepButtonBack.disable= true;
//     }
// })

stepSend[0].addEventListener('click', () => {
    location.reload();
})
