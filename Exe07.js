/* 
Desenvolva um programa que leia uma palavra e informe quantas vogais ela possui.
*/

const readlineSync = require("readline-sync");
const palavra = readlineSync.question("Digite uma palavra: ");
const vogais = ['a', 'e', 'i', 'o', 'u'];

function contarVogais(palavra) {
  let contador = 0;
  for (let char of palavra.toLowerCase()) {
    if (vogais.includes(char)) {
      contador++;
    }
  }
  console.log(`Número de vogais: ${contador}`);
}
contarVogais(palavra);