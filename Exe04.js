/* 
Escreva um programa que leia um número e calcule seu fatorial.
Ex: 5! = 5×4×3×2×1 = 120 
*/
const readlineSync = require("readline-sync");
const input = readlineSync.question("Digite um número: ");
const number = parseInt(input);

if (isNaN(number) || number < 0) {
  console.log("Por favor, digite um número inteiro não negativo válido.");
} else {
  console.log(`O fatorial de ${number} é ${factorial(number)}`);
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}