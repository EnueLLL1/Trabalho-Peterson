/*
1. Positivo, Negativo ou Zero
Crie um programa que leia um número e informe se ele é positivo, negativo ou igual a zero.
*/
const readlineSync = require("readline-sync");
const input = readlineSync.question("Digite um número: ");
const number = parseFloat(input);

// VALIDAÇÃO DO INPUT
if (isNaN(number)) {
  console.log("Por favor, digite um número válido.");
} else {
  console.log(checkNumber(number));
}

function checkNumber(num) {
  return num > 0 ? "É POSITIVO" : num < 0 ? "É NEGATIVO" : "NÚMERO IGUAL A 0";
}
