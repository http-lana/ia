const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado : "Um dos maiores medos em relação a inteligencia artificial, é a possivel substituição de empregos e cargos realizados por pessoas, devido sua maior agilidade. Você acredita que em um futuro proximo, humanos serão substituidos e despejados de seus empregos?",
    alternativas: [
        {
            texto: "Sim",
            afirmaçao: "Em um estudo, 56,2% dos entrevistados afirmam temerem um mundo com mais tecnologia. "
        },
        {
            texto:  "Não",
            afirmaçao: "Estima-se que a IA melhora a eficiência e produtividade no ambiente de trabalho em até 40%."
        },
    
    ]
},
{
    enunciado : "Você acredita que a IA pode contribuir positivamente em areas como as: industriais, saúde, educação, etc?",
    alternativas: [
        {
            texto: "Sim",
            afirmaçao: "A tecnologia vem sendo aplicada gradativamente e demonstra resultados promissores e gratificantes."
        },
        {
            texto:  "Não",
            afirmaçao: "Considera-se que 80% de diversas areas sejam automatizadas e regidas por robôs. "

        },
        
    ]
},
{
    enunciado : "Você pensa que com novas tecnologias, a dependencia por ela tende a aumentar?",
    alternativas: [
        {
            texto: "Sim",
            afirmaçao: "O vicío no digital, principalmente nos jovens, gera preocupaçoes em especialistas."
        },
        {
           texto: "Não",
           afirmaçao: "A facilidade e rapidez da IA tende exigir mais tempo utilizando-as."
        },
        
    ]
}

];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

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
        const afirmaçao = opcaoSelecionada.afirmaçao;
        historiaFinal += afirmaçao + " ";
        atual++;
        mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049 ...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();