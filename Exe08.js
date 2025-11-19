/* 
Crie um programa que calcule e exiba a soma dos números de 1 até um valor N informado pelo usuário.
*/

const readlineSync = require("readline-sync");
const valor = parseInt(readlineSync.question("Insira o valor: "));

let soma = 0;
for (let i = 1; i <= valor; i++) {
  soma += i;
}
console.log(`A soma dos números de 1 até ${valor} é: ${soma}`);
