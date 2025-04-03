let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora do Desafio";

let paragrafo = document.querySelector("p");
paragrafo.innerHTML = "Escolha um número entre 1 e 10";

function verificarChute() {
  console.log("Clicou no botão");
}

function alertaCaixa() {
  alert("Clicou na caixa");
}

function cidadefora() {
  let cidade = prompt("Qual cidade voce mora?");
  alert(`Estive em ${cidade} e lembrei de você!`);
}

function somandoNumeros() {
  let n1 = parseInt(prompt("Digite um número"));
  let n2 = parseInt(prompt("Digite outro número"));
  let soma = n1 + n2;
  alert(`A soma de ${n1} + ${n2} = ${soma}`);
}