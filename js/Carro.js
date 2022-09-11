import Veiculo from "./Veiculo.js";
export default class Carro extends Veiculo{
    constructor(id, placa,numero_portas, marca, cor, NomeDoProprietrario)
    {
        super(id,placa,marca,cor,NomeDoProprietrario)
        this._numero_portas = numero_portas
    }
    calcularValorPago()
    {
        let segundos = (new Date() -  this._entrada)/ 1000
        console.log(segundos)
        let minutos = segundos/60
         //Carro
         if(minutos <= 15)
         {
            return 0
         }
        if(minutos>15 & minutos<=60)
        {
            return 4
        }
        if(minutos>60 & minutos<=120)
        {
            return 8
        }
        if(minutos>120 & minutos<=180)
        {
            return 12
        }
        if(minutos>180)
        {
            return 20
        }
    }
}
