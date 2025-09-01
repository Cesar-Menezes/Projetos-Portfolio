const visor = document.querySelector(".visor");
const botoes = document.querySelectorAll("button");
const operadores = ["%", "*", "/", "-", "+", "="];
let expressao = "";

const calcular = (valorBotao) => {
    if (valorBotao === "=" && expressao !== "") {
        try {
            // substitui todos os % por /100 antes de calcular
            expressao = eval(expressao.replaceAll("%", "/100"));
        } catch {
            expressao = "Erro";
        }
    } else if (valorBotao === "AC") {
        expressao = "";
    } else if (valorBotao === "DEL") {
        expressao = expressao.toString().slice(0, -1);
    } else {
        if (expressao === "" && operadores.includes(valorBotao)) return;
        expressao += valorBotao;
    }
    visor.value = expressao;
};

botoes.forEach(botao => {
    botao.addEventListener("click", (e) => calcular(e.target.dataset.valor));
});
