import { notValid } from "./email-format";
import { checkIfNotEmpty } from "./required";

export const init = (element) => {

    element.addEventListener('input',  function(event){
    let requiredSpan = document.querySelector('.required');
    let reqiredEmail = document.querySelector('.reqiredEmail');
    requiredSpan.style.display = 'none'
    reqiredEmail.style.display = 'none'

    if(!checkIfNotEmpty(event.target.value)){
        requiredSpan.style.display = 'block'
    }
    if(!notValid(event.target.value)){
        reqiredEmail.style.display = 'block'
    }
})}