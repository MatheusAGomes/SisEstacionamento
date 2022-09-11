import Carro from "./Carro.js";
import Moto from "./Moto.js";
import Estacionamento from "./Estacionamento.js";
import Veiculo from "./Veiculo.js";


let est = new Estacionamento(20);

//divs
const divhome = document.getElementById('corpoHome')
const divcad = document.getElementById('corpoCad')
const divrel = document.getElementById('corpoRelatorio')
const divlib = document.getElementById('corpoLiberar')
const divSaldo = document.getElementById('corpoSaldo')


/*
const divsaldo = 
*/
//botoes
const saldoBtn = document.getElementById("saldoBtn")
const estacionarBtn = document.getElementById("estacionarBtn")
const cadastrarBtn = document.getElementById("cadastrarBtn")
const liberarBtn = document.getElementById("liberarBtn")
const radioMoto = document.getElementById("radioMoto")
const radioCarro = document.getElementById("radioCarro")
const voltarBtnCad = document.getElementById("voltarBtnCad")
const relatorioBtn = document.getElementById("relatorioBtn")
const verificarBtn = document.getElementById("verificarBtn")
const voltarBtnLib = document.getElementById("voltarBtnLib")
const voltarBtnRel = document.getElementById("voltarBtnRel")
const voltarBtnSaldo = document.getElementById("voltarBtnSaldo")
const rel = document.getElementById("rel")
const relBtn = document.getElementById("relBtn")





function estacionar() {
    const date = new Date();
    if (document.getElementById("radioMoto").checked == true) {
        const moto = new Moto(
        est._vagasocupadas,
        document.getElementById("inputPlaca").value,
        document.getElementById("inputMarca").value,
        document.getElementById("inputCor").value,
        document.getElementById("inputNomeProp").value );
        est.estacionar(moto,date);
        document.getElementById("inputPlaca").value = ''
        document.getElementById("inputMarca").value = ''
        document.getElementById("inputCor").value = ''
        document.getElementById("inputNomeProp").value = ''
        document.getElementById("radioMoto").checked = false
        
    }
    else
    {
        if (document.getElementById("radioCarro").checked == true) {
            const carro = new Carro(
                est._vagasocupadas,
                document.getElementById("inputPlaca").value,
                document.getElementById("inputNumeroportas").value,
                document.getElementById("inputMarca").value,
                document.getElementById("inputCor").value,
                document.getElementById("inputNomeProp").value);
                
                est.estacionar(carro,date);

                document.getElementById("inputPlaca").value = ''
                document.getElementById("inputNumeroportas").value = '' 
                document.getElementById("inputMarca").value = ''
                document.getElementById("inputCor").value = ''
                document.getElementById("inputNomeProp").value = ''
                document.getElementById("radioCarro").checked = false;
               

            }
        else
        {
            alert("Opção de veiculo nao selecionada")
        }
    }
    

    
   
    
}




function desabilitar() {
    
        document.getElementById("inputNumeroportas").disabled = true;
        document.getElementById("inputNumeroportas").style.background = 'gray'
  
    
    
}
function habilitar() {
    
        document.getElementById("inputNumeroportas").disabled = false;
        document.getElementById("inputNumeroportas").style.background = 'white'

    
    
}

function verificarExistencia(placa){
   var a = null ; 
    est._arrayposicao.forEach( function procurarelemento(element,value){
        console.log(element.Veiculo.placa)
        if (element.Veiculo.placa == placa) {
            console.log(value)
            a = value
        }
    
});
if (a != null) {
    return a
}
else
{
    return -1

}

}

function procurar() {
    let palavra = rel.value
    if(palavra == '')
    {
        document.getElementById("listaRelatorio").innerHTML = '';
        est.gerarRelatorio()
    }
    else
    {
        document.getElementById("listaRelatorio").innerHTML = '';
        
        console.log(est._arrayhistorico)
        console.log(est._arrayposicao)
        
        var arrayFiltrado = est._arrayposicao.filter((objeto)=>{return objeto.Veiculo.placa == palavra})
        let lista = document.getElementById("listaRelatorio").innerHTML;
        console.log(arrayFiltrado)
         for (let index = 0; index < arrayFiltrado.length; index++) {
            lista += `<p class="listaRelatorio">  ${arrayFiltrado[index].Veiculo.placa} &nbsp;&nbsp;${arrayFiltrado[index].Veiculo.NomeDoProprietario} &nbsp;&nbsp;${arrayFiltrado[index].Veiculo.entrada.toLocaleString()} &nbsp;&nbsp; Momento Atual </p>`;
         }



        var arrayFiltrado = est._arrayhistorico.filter((objeto)=>{return objeto.a.placa == palavra})
        //console.log(arrayFiltrado[0].a)
         for (let index = 0; index < arrayFiltrado.length; index++) {
            lista += `<p class="listaRelatorio">  ${arrayFiltrado[index].a.placa} &nbsp;&nbsp;${arrayFiltrado[index].a.NomeDoProprietario} &nbsp;&nbsp;${arrayFiltrado[index].a.entrada.toLocaleString()} &nbsp;&nbsp; ${arrayFiltrado[index].date.toLocaleString()}  </p>`;
         }
         document.getElementById("listaRelatorio").innerHTML = lista;
         
    }
}


function showcad(){
    divcad.style.display = "flex";
    divlib.style.display = "none";
    divrel.style.display = "none";
    divhome.style.display = "none";
    divSaldo.style.display = "none";

}
function showHome(){
    divhome.style.display = "flex";
    divlib.style.display = "none";
    divrel.style.display = "none";
    divcad.style.display = "none";
    divSaldo.style.display = "none";

}
function showRelatorio() {
    divcad.style.display = "none";
    divlib.style.display = "none";
    divrel.style.display = "flex";
    divhome.style.display = "none";
    divSaldo.style.display = "none";

    
}
function showLiberar() {
    divcad.style.display = "none";
    divlib.style.display = "flex";
    divrel.style.display = "none";
    divhome.style.display = "none";
    divSaldo.style.display = "none";
}
function showSaldo() {
    divcad.style.display = "none";
    divlib.style.display = "none";
    divrel.style.display = "none";
    divhome.style.display = "none";
    divSaldo.style.display = "flex";
    
}
radioMoto.addEventListener('change',()=>{
    desabilitar()
})
radioCarro.addEventListener('change',()=>{
    habilitar()
})
liberarBtn.addEventListener('click',()=>{
    showLiberar()
    est.gerarCarrosEst()
    
})
estacionarBtn.addEventListener('click', () => {
    estacionar()
})
cadastrarBtn.addEventListener('click',() => {
    showcad()
})
voltarBtnCad.addEventListener('click',() => {
    showHome()
    habilitar()
    document.getElementById("inputPlaca").value = ''
    document.getElementById("inputMarca").value = ''
    document.getElementById("inputCor").value = ''
    document.getElementById("inputNomeProp").value = ''
    document.getElementById("radioMoto").checked = false
    document.getElementById("radioCarro").checked = false;

})
voltarBtnLib.addEventListener('click',() => {
    showHome()
    document.getElementById("verificarInput").value = ''
})
voltarBtnRel.addEventListener('click',() => {
    showHome()
    document.getElementById("rel").value = ''
})
voltarBtnSaldo.addEventListener('click',() => {
    showHome()
})
relatorioBtn.addEventListener('click',()=>{
    showRelatorio()
    est.gerarRelatorio()
})
saldoBtn.addEventListener('click',()=>{
    showSaldo()
    est.gerarSaldo();
})
relBtn.addEventListener('click',()=>{
    procurar();
    document.getElementById("rel").value = ''
})
verificarBtn.addEventListener('click',()=>{
    const placa = document.getElementById("verificarInput").value
    let index = verificarExistencia(placa)
    console.log(index)
   if( index != -1)
   {
        est.liberar(index)
        console.log(est._vagasocupadas)
   }
   else
   {
    alert("Placa nao encontrada")
   }
   est.gerarCarrosEst()
   document.getElementById("verificarInput").value = ''

})



