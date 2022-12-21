const prompt = require("prompt-sync")();


var n1 = parseInt(prompt("Digite o primeiro número: "));

var n2 = parseInt(prompt("Digite o segundo número: "));


if (n1 > 0 && n2 >0){
  if (n1 % 2 == 0 && n2 % 2 == 0) {
    console.log ("Os Números são Pares")
  } else if ((n1 % 2 == 1 && n2 % 2 == 1)){
    console.log ("Os Números são Impares")
  } else {
    console.log ("Existe um número par ou impar")
  }
} else {
  console.log("Existe pelo menos um número negativo ou igual a Zero");
}