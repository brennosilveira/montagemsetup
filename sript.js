const opc = document.querySelector('#not-menu')
const btn = document.querySelector('#btnNot') 

const opcdois = document.querySelector('#menu-desk')
const btnSub = document.querySelector('#btnDesk') 

let cpu, memoria, armazenamento, so, monitor = "";
let total = 0;

function menuNot(){
    if(opc.classList.contains('menu-on')){

        opc.classList.remove('menu-on')
        console.log("deu certo")

    }else{
        opc.classList.add('menu-on')
        console.log("deu certo")

    }

    if(opcdois.classList.contains('menu-on')){
         console.log('ok')
         
    }else{
        opcdois.classList.add('menu-on')
    }

}


btn.addEventListener('click', menuNot)




function menuDesk(){
    if(opcdois.classList.contains('menu-on')){

        opcdois.classList.remove('menu-on')
        console.log("deu certo")

    }else{
        opcdois.classList.add('menu-on')
        console.log("deu certo")

    }

    if(opc.classList.contains('menu-on')){
         console.log('ok')
         
    }else{
        opc.classList.add('menu-on')
    }

}


btnSub.addEventListener('click', menuDesk)


document.getElementById('btn').addEventListener('click', function() {
    let nome = document.getElementById('nomeCliente').value;
    if (nome.trim() === "") {
        alert("Por favor, insira seu nome.");
        return;
    }
    document.querySelector('.home-content').style.display = 'none';
    document.getElementById('selecaoProduto').style.display = 'block';
});



function montarMaquina(tipo) {
    let nome = document.getElementById('nomeCliente').value;
    let cpu, memoria, armazenamento, so, monitor = "";

    if (tipo === 'Notebook') {
        cpu = document.getElementById('cpuNotebook').value;
        memoria = document.getElementById('memoriaNotebook').value;
        armazenamento = document.getElementById('armazenamentoNotebook').value;
        so = document.getElementById('soNotebook').value;

    } else if (tipo === 'Desktop') {
        cpu = document.getElementById('cpuDesktop').value;
        memoria = document.getElementById('memoriaDesktop').value;
        armazenamento = document.getElementById('armazenamentoDesktop').value;
        so = document.getElementById('soDesktop').value;
        monitor = document.getElementById('monitorDesktop').value;
    }

    // Cálculo do valor total
    let total = calcularValor([cpu, memoria, armazenamento, so, monitor]);

    let detalhes = `Nome: ${nome} <br> 
    Tipo: ${tipo} <br> 
    CPU: ${cpu} <br> 
    Memória: ${memoria} <br> 
    Armazenamento: ${armazenamento} <br> 
    Sistema Operacional: ${so} <br>`;
    
    if (tipo === 'Desktop') {
        detalhes += `Monitor: ${monitor} <br>`;
    }

    detalhes += `Valor Total: R$ ${total}`;

    document.getElementById('not-menu').style.display = 'none';
    document.getElementById('menu-desk').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('detalhes').innerHTML = detalhes;
}

function calcularValor(opcoes) {
    
    opcoes.forEach(opcao => {
        if (opcao) {
            let valor = opcao.match(/R\$ (\d+)/);
           
        }
    })
}