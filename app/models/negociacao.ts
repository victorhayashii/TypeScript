export class Negociacao{
    //   informa que é uma variavel privada
    private _data: Date;
    private _quantidade: number;
    private _valor: number;

    constructor(data: Date,quantidade: number,valor: number){
        this._data = data;
        this._quantidade= quantidade;
        this. _valor= valor;
    }

    get data(){
        return this.data;
    }
    get quantidade(){
        return this.quantidade;
    }
    get valor(){
        return this.valor;
    }
    get volume(){
        return this.quantidade * this. valor;
    }
}