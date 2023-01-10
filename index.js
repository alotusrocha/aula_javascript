const prompt = require('prompt-sync')();
var salarios = [];
var soma = 0;
var media;
var qtd_menores = 0;



for (var i = 1; i <= 5; i++) {
  console.log("Pessoa: ", i);
  var nome = prompt('Digite seu Nome: ');
  var salario_bruto = parseFloat(prompt('Digite o valor do Salário Bruto: '));
  var dependentes = parseInt(prompt('Digite o número de dependentes: '));
  for (var j = 1; j <= dependentes; j++) {
    var ganho = parseFloat(prompt("Dgite o ganho mensal: "));
    salario_bruto = salario_bruto + ganho;

  }
  var renda_percapta = salario_bruto / (dependentes + 1);
  if (renda_percapta >= 500) {
    if (salario_bruto > 0 && salario_bruto <= 1903.98) {
      var ir = salario_bruto * 0.05
    } else if (salario_bruto <= 2826.65) {
      var ir = salario_bruto * 0.075;
    } else {
      var ir = salario_bruto * 0.15
    }
  } else {
    var ir = 0;
  }

  var salario_liquido = salario_bruto - ir;

  console.log("Salário Liquido: R$ ", salario_liquido, "\n");

  salarios.push(salario_liquido);

  soma = soma + salario_liquido;
}

media = soma / 5;

for (var i = 0; i <= 4; i++) {
  if (salarios[i] < media) {
    qtd_menores = qtd_menores + 1;
  }
}

console.log("A média de Salário é R$ ", media);
console.log("A quantidade de pessoas com Salário Inferior a média é: ", qtd_menores);