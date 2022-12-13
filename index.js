const entrada = require('prompt-sync')();

var nome = entrada("Digite seu nome: ");

var salariobruto = parseFloat(entrada("Digite o Salário Bruto: "));

if (salariobruto > 0 && salariobruto <= 1903.98) {
  var ir = salariobruto * 0.05;
}
else if (salariobruto <= 2826.65) {
  var ir = salariobruto * 0.075;
}
else {
  var ir = salariobruto * 0.15;
}

var salario_liquido = salariobruto - ir;
console.log("Salario Liquido: R$", salario_liquido);


