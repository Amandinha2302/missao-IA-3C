import {aleatorio, nome} from './aleatório.js';
import {perguntas} from './perguntas.js';

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");
const botaoJogarNovamente = document.querySelector(".texto-resultado");
const telaInicial = document.querySelector(".tela-inicial");
const botaoIniciar = document.Selector(".iniciar-bnt");

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

botaoIniciar.addEventListener('click', iniciaJogo);

function iniciaJogo() {
    atual = 0;
    historiaFinal = "";
    telaInicial.style.display = nome;
    caixaPerguntas.classList.remove("mostrar);
    caixaAlternativas.classList.remove("mostrar);                           
    caixaResultado.classList.remove("mostrar);
    mostrarPergunta();
                                    }                           
                                    
function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = `Em 2049, &{nome}`
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
    caixaResultado.classList.remove("mostrar")
    botaoJogarNovamente.addEventListener("click, jogarNovamente()");
}
function jogarNovamente(){
    atual=0
    historiaFinal = "":
   caixaResultado.classList.remove("mostrar")
    mostrarPergunta();
}

function substituiNome() {
    for(const pergunta of perguntas) {
        pergunta.enunciado = pergunta.enunciado.replace(/você/g, nome);
    }
}
substituiNome();


