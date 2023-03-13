import { NegociacaoController } from "./controllers/negociacao-controller.js";
//estancia um objeto a partir do controller
const controller = new NegociacaoController();
//captura o elemento form
const form = document.querySelector('.form');
//adiciona um evento á este elemento usando arrow function
form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.adiciona();
});
