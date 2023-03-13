import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController{
    private inputData : HTMLInputElement;
    private inputQuantidade : HTMLInputElement;
    private inputValor: HTMLInputElement;

    constructor(){
        this.inputData = document.querySelector('#data') ;
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');

    }

    adiciona(){
        const exp = /-/g;
        const date = new Date('111-11-11');
        const negociacao = new Negociacao(this.inputData, this.inputQuantidade, this.inputValor);
        console.log(negociacao);
        
    }









}