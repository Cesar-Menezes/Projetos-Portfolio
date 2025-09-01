const perguntas = [
    {
        enunciado: "Há quanto tempo existe vida na Terra?",
        respostas: [
            { id: 1, texto: "8000 anos", correto: false },
            { id: 2, texto: "10000 anos", correto: false },
            { id: 3, texto: "30000 anos", correto: false },
            { id: 4, texto: "6000 anos", correto: true }
        ]
    },
    {
        enunciado: "Por quanto tempo um ser humano pode viver?",
        respostas: [
            { id: 1, texto: "60-80 anos", correto: false },
            { id: 2, texto: "60-70 anos", correto: false },
            { id: 3, texto: "70-80 anos", correto: true },
            { id: 4, texto: "70-90 anos", correto: false }
        ]
    },
    {
        enunciado: "Quais as profissões militares?",
        respostas: [
            { id: 1, texto: "Marinha, Exército e Aeronáutica", correto: true },
            { id: 2, texto: "Motorista, Piloto e Marinheiro", correto: false },
            { id: 3, texto: "Encanador, Eletricista e Pedreiro", correto: false },
            { id: 4, texto: "Policial, Bombeiro e Médico", correto: false }
        ]
    },
    {
        enunciado: "Qual é o maior país da América Latina?",
        respostas: [
            { id: 1, texto: "Colômbia", correto: false },
            { id: 2, texto: "Brasil", correto: true },
            { id: 3, texto: "Argentina", correto: false },
            { id: 4, texto: "Bolívia", correto: false }
        ]
    },
    {
        enunciado: "Qual é a moeda mais forte do mundo?",
        respostas: [
            { id: 1, texto: "Dólar", correto: false },
            { id: 2, texto: "Franco", correto: false },
            { id: 3, texto: "Euro", correto: true },
            { id: 4, texto: "Shekel", correto: false }
        ]
    },
    {
        enunciado: "Qual é a nação mais influente do mundo?",
        respostas: [
            { id: 1, texto: "Estados Unidos", correto: true },
            { id: 2, texto: "Rússia", correto: false },
            { id: 3, texto: "Brasil", correto: false },
            { id: 4, texto: "China", correto: false }
        ]
    }
];

const elementoPergunta = document.getElementById("pergunta");
const botoesResposta = document.getElementById("botoes-resposta");
const botaoProximo = document.getElementById("proximo-botao");

let indicePerguntaAtual = 0;
let pontuacao = 0;

function iniciarQuestionario() {
    indicePerguntaAtual = 0;
    pontuacao = 0; 
    botaoProximo.innerHTML = "Próximo";
    mostrarPergunta();
}

function mostrarPergunta() {
    resetarEstado();
    let perguntaAtual = perguntas[indicePerguntaAtual];
    let numeroPergunta = indicePerguntaAtual + 1;
    elementoPergunta.innerHTML = numeroPergunta + ". " + perguntaAtual.enunciado;

    perguntaAtual.respostas.forEach(resposta => {
        const botao = document.createElement("button");
        botao.innerHTML = resposta.id + ". " + resposta.texto;
        botao.classList.add("botao");
        botoesResposta.appendChild(botao);

        if (resposta.correto) {
            botao.dataset.correto = resposta.correto;
        }

        botao.addEventListener("click", selecionarResposta);
    });
}

function resetarEstado() {
    botaoProximo.style.display = "none";
    while (botoesResposta.firstChild) {
        botoesResposta.removeChild(botoesResposta.firstChild);
    }
}

function selecionarResposta(e) {
    const botaoSelecionado = e.target;
    const estaCorreto = botaoSelecionado.dataset.correto === "true";
    if (estaCorreto) {
        botaoSelecionado.classList.add("correto");
        pontuacao++;
    } else {
        botaoSelecionado.classList.add("incorreto");
    }

    Array.from(botoesResposta.children).forEach(botao => {
        if (botao.dataset.correto === "true") {
            botao.classList.add("correto");
        }
        botao.disabled = true;
    });

    botaoProximo.style.display = "block";
}

function mostrarPontuacao() {
    resetarEstado();
    elementoPergunta.innerHTML = `Você acertou ${pontuacao} de ${perguntas.length}!`;
    botaoProximo.innerHTML = "Jogar novamente";
    botaoProximo.style.display = "block";
}

function lidarComBotaoProximo() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < perguntas.length) {
        mostrarPergunta();
    } else {
        mostrarPontuacao();
    }
}

botaoProximo.addEventListener("click", () => {
    if (indicePerguntaAtual < perguntas.length) {
        lidarComBotaoProximo();
    } else {
        iniciarQuestionario();
    }
});

iniciarQuestionario();
