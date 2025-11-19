/* 
Faça um programa que exiba todos os números pares de 0 até um valor informado pelo usuário.
*/

const readlineSync = require("readline-sync")
const input = readlineSync.question("Digite um valor: ");
const maxNumber = parseInt(input);

if (isNaN(maxNumber) || maxNumber < 0) {
  console.log("Por favor, digite um número inteiro não negativo válido.");
} else {
  console.log(`Números pares de 0 até ${maxNumber}:`);
  for (let i = 0; i <= maxNumber; i += 2) {
    console.log(i);
  }
}