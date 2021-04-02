var corMudada = false;
var reflexoIniciado = false;
var corTrocada = false;
var tempoDecorrido;
var tempoClicado;
var tempoAtual;
var erroAconteceu = false;

const delay = ms => new Promise(res => setTimeout(res, ms));

const mudarCor = async () => {
    cor = "hsl(" + Math.random() * 360 + ", 100%, 75%)";
    document.body.style.backgroundColor = cor;
}


function testarReflexo() {
    document.getElementById('explicacao').style.display = 'none';
    if (reflexoIniciado == false) {
        iniciarReflexo();
    }
    else {
        pararReflexo();
    }

}
const iniciarReflexo = async () => {
    reflexoIniciado = true;
    var numeroAleatorio = Math.random() * (4 - 1) + 1;
    numeroAleatorio = numeroAleatorio * 1000;
    document.getElementById('botaoTestar').value = 'Parar';
    await delay(numeroAleatorio);
    if (erroAconteceu == false){
    corMudada = true;
    mudarCor();
    tempoClicado = new Date().getTime() / 1000;
    }
    else{ erroAconteceu = false;}
}

function adicionarVariavelaTabela(variavel, tabela) {
    var tabela = document.getElementById(tabela).getElementsByTagName('tbody')[0];

    // Insert a row at the end of table
    var tupla = tabela.insertRow();

    // Insert a cell at the end of the row
    var celula = tupla.insertCell();

    // Append a text node to the cell
    var texto = document.createTextNode(variavel);
    celula.appendChild(texto);

}

function pararReflexo() {
    if (reflexoIniciado == false) {
        alert('Aperte no botão iniciar primeiro!');
    }
    else {
        if (corMudada == false) {
            alert('A cor ainda não foi mudada!');
            erroAconteceu = true;
            document.body.style.backgroundColor = '#222222'; // Reinicia as variáveis
            reflexoIniciado = false;
            corMudada = false;
            document.getElementById('botaoTestar').value = 'Iniciar';
            
        } else {
            tempoAtual = new Date().getTime() / 1000;
            reflexoIniciado = false;
            tempoDecorrido = tempoAtual - tempoClicado;

            var variavel = parseFloat(tempoDecorrido).toFixed(4); // Acrescenta o resultado à tabela
            adicionarVariavelaTabela(variavel, 'tabela');

            document.body.style.backgroundColor = '#222222'; // Reinicia as variáveis
            reflexoIniciado = false;
            corMudada = false;
            document.getElementById('botaoTestar').value = 'Iniciar';
            
        }
    }
}