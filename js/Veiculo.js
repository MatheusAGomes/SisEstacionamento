export default class Veiculo{
    constructor(id,placa,marca,cor,NomeDoProprietrario,date){
        this._id = id;
        this._placa = placa
        this._marca = marca
        this._cor = cor
        this._NomeDoProprietario = NomeDoProprietrario
        this._entrada = new Date();
    }

    get id(){
        return this._id;
    }
    get placa()
    {
        return this._placa;
    }
    get entrada(){
        return this._entrada
    }
    get marca()
    {
        return this._marca;
    }
    get cor()
    {
        return this._cor;
    }
    get NomeDoProprietario()
    {
        return this._NomeDoProprietario;
    }
    get entrada(){
        return this._entrada
    }
    calcularValorPago()
    {
        console.log('a')
    }
}
