const visor = document.getElementById("visor");

function adicionar(valor) {
  if (visor.value == "0") {
    visor.value = valor;
  } else {
    visor.value += valor;
  }
}

function limpar() {
  visor.value = "0";
}

function calcular() {
  try {
    // A função eval() do JavaScript é um truque mágico que resolve expressões matemáticas em texto!
    visor.value = eval(visor.value);
  } catch (erro) {
    visor.value = "Erro";
  }
}
