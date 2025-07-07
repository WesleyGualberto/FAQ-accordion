// Seleciona todos os botoes dentro do FAQ
var botoes = document.querySelectorAll("button[aria-controls]");

botoes.forEach(function (botao) {
  botao.addEventListener("click", function () {
    var respostaId = botao.getAttribute("aria-controls");
    var resposta = document.getElementById(respostaId);
    var estaAberto = botao.getAttribute("aria-expanded") === "true";

    // Alterna o estado
    botao.setAttribute("aria-expanded", !estaAberto);
    resposta.hidden = estaAberto;

    // Trocar o icone + para -
    var icone = botao.querySelector("img");

    if (estaAberto) {
      icone.src = "assets/images/icon-plus.svg";
      icone.alt = "Ícone para demonstrar quando o card está fechado";
    } else {
      icone.src = "assets/images/icon-minus.svg";
      icone.alt = "Ícone para demonstrar quando o card está aberto";
    }
  });
});
