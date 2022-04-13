// Pegar o que o usuario digitou e guardar em uma variavel
const nomeTimeA = prompt("Digite o nome do Time A"); //variavel tipo String
const nomeTimeB = prompt("Digite o nome do Time B"); //variavel tipo String

// Variaveis com os dados
let pontoA = 0; //variavel tipo Number
let pontoB = 0; //variavel tipo Number
let setA = 0;   //variavel tipo Number
let setB = 0;   //variavel tipo Number

// Variaveis com elementos HTML
const nomeTimeA_HTML = document.getElementById("nomeTimeA");
const nomeTimeB_HTML = document.getElementById("nomeTimeB");

const pontuacaoA_HTML = document.getElementById("pontuacaoA");
const pontuacaoB_HTML = document.getElementById("pontuacaoB");

const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");

// Pegando das variaveis e colocando na tela os nomes dos Times
nomeTimeA_HTML.innerText = nomeTimeA;
nomeTimeB_HTML.innerText = nomeTimeB;

function zerarPlacar() { //funcao para zerar o placar ao completar Set
    pontoA = 0;
    pontoB = 0;
    pontuacaoA_HTML.innerText = 0;
    pontuacaoB_HTML.innerText = 0;
}

function idClickPontoA() {
    pontoA++; //ou pontoA = pontoA +1;
    pontuacaoA_HTML.innerText = pontoA;

    if (pontoA >= 25 && pontoA - pontoB >= 2) {
        setA++;
        setA_HTML.innerText = setA;

        zerarPlacar();
    }
}

function idClickPontoB() {
    pontoB++; //ou pontoB = pontoB +1;
    pontuacaoB_HTML.innerText = pontoB;

    if (pontoB >= 25 && pontoB - pontoA >= 2) {
        setB++;
        setB_HTML.innerText = setB;

        zerarPlacar();
    }
}

pontuacaoA_HTML.addEventListener("click", idClickPontoA);
pontuacaoB_HTML.addEventListener("click", idClickPontoB);