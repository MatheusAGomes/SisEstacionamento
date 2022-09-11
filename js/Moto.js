import Veiculo from "./Veiculo.js";
export default class Moto extends Veiculo{
    constructor(id, placa, marca, cor, NomeDoProprietrario)
    {
        super(id,placa,marca,cor,NomeDoProprietrario)
    }
    calcularValorPago()
    {
        let segundos = (new Date() -  this._entrada)/ 1000
        console.log(segundos)
        let minutos = segundos/60
        //Moto
         if(minutos <= 30)
         {
            return 0
         }
        if(minutos>30 & minutos<=60)
        {
            return 2
        }
        if(minutos>60 & minutos<=120)
        {
            return 4
        }
        if(minutos>120 & minutos<=180)
        {
            return 6
        }
        if(minutos>180)
        {
            return 10
        }
        
    }
}