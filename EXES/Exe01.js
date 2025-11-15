/*
1. Positivo, Negativo ou Zero
Crie um programa que leia um número e informe se ele é positivo, negativo ou igual a zero.
*/
const readlineSync = require("readline-sync");
const input = readlineSync.question("Digite um número: ");
const number = parseFloat(input);

// Validate input
if (isNaN(number)) {
  console.log("Por favor, digite um número válido.");
} else {
  console.log(checkNumber(number));
}

function checkNumber(num) {
  if (num === 0) {
    return "É ZERO";
  } else if (num > 0) {
    return "É POSITIVO";
  } else {
    return "É NEGATIVO";
  }
}
