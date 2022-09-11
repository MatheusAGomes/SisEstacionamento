export default class Estacionamento{
     
    constructor(numerodevagas = 20){
        this._vagas = numerodevagas;
        this._vagasocupadas = 0;
        this._saldo = 0;
        this._arrayposicao = []
        this._arrayhistorico= []
    }
    get vagas(){
    return this._vagas
    }
    set vagas(vagas){
        this._vagas = vagas
    }


    get vagasocupadas(){
        return this._vagasocupadas
    }
    set vagasocupadas(vagasocupadas){
        this._vagasocupadas = vagasocupadas
    }
    get posicao(){
        return this._posicao
    }
    get arrayposicao()
    {
        return this._arrayposicao
    }
    get saldo()
    {
        return this._saldo
    }

    alterarsaldo(valor){
        this._saldo = valor + this._saldo;
    }

    estacionar(Veiculo,horaEntrada){
        if (this._vagasocupadas < 20) {
            this._vagasocupadas = this._vagasocupadas + 1;
            this._arrayposicao.push({Veiculo})
            

        }
        else
        {
            alert("Estacionamento lotado!")
        }
    }
    liberar(iddoveiculo,horaSaida)
    {   
        let index = iddoveiculo;
        const date = new Date()

        console.log(this._arrayposicao[index])

    
        let a = this._arrayposicao[index].Veiculo
        let valorPago = a.calcularValorPago()
        this.alterarsaldo(valorPago); 
        console.log(this._saldo)
        this._arrayhistorico.push({a,date,valorPago})
        console.log(this._arrayhistorico)
        this._arrayposicao.splice(index, 1);
        this._vagasocupadas = this.vagasocupadas - 1;


    }
    gerarRelatorio() {
        document.getElementById("listaRelatorio").innerHTML = ''
        let lista = document.getElementById("listaRelatorio").innerHTML;
         for (let index = 0; index < this._arrayposicao.length; index++) {
            lista += `<p class="listaRelatorio">  ${this._arrayposicao[index].Veiculo.placa} &nbsp;&nbsp;${this._arrayposicao[index].Veiculo.NomeDoProprietario} &nbsp;&nbsp;${this._arrayposicao[index].Veiculo.entrada.toLocaleString()}&nbsp;&nbsp; Momento Atual  </p>`;
         }
         for (let index = 0; index < this._arrayhistorico.length; index++) {
            lista += `<p class="listaRelatorio">  ${this._arrayhistorico[index].a.placa} &nbsp;&nbsp;${this._arrayhistorico[index].a.NomeDoProprietario} &nbsp;&nbsp;${this._arrayhistorico[index].a.entrada.toLocaleString()}&nbsp;&nbsp; ${this._arrayhistorico[index].date.toLocaleString()}  </p>`;
         }
       document.getElementById("listaRelatorio").innerHTML = lista;
    }
    gerarCarrosEst(){
        document.getElementById("listarLib").innerHTML = ''
        let lista = document.getElementById("listarLib").innerHTML;
        console.log(this._arrayposicao)
        console.log(this._arrayhistorico)

         for (let index = 0; index < this._arrayposicao.length; index++) {
            lista += `<p class="listarLib">  ${this._arrayposicao[index].Veiculo.placa} &nbsp;&nbsp;${this._arrayposicao[index].Veiculo.NomeDoProprietario} &nbsp;&nbsp;${this._arrayposicao[index].Veiculo.entrada.toLocaleString()}  </p>`;
         }
         document.getElementById("listarLib").innerHTML = lista;
    }
    gerarSaldo(){
        document.getElementById("listaSaldo").innerHTML = ''
        let lista = document.getElementById("listaSaldo").innerHTML;
        lista += `<p>Saldo: $${this._saldo}</p>`
        lista += `<p>PLACA    DONO    ENTRADA     SAIDA   VALOR</p>`
        for (let index = 0; index < this._arrayhistorico.length; index++) {
            lista += `<p class="linha">  ${this._arrayhistorico[index].a.placa} &nbsp;&nbsp;${this._arrayhistorico[index].a.NomeDoProprietario} &nbsp;&nbsp;${this._arrayhistorico[index].a.entrada.toLocaleString()}&nbsp;&nbsp; ${this._arrayhistorico[index].date.toLocaleString()}&nbsp;&nbsp; ${this._arrayhistorico[index].valorPago}  </p>`;
         }
         document.getElementById("listaSaldo").innerHTML = lista;

    }

  
}


