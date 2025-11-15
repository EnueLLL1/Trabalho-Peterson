/*
2. Média Ponderada
Desenvolva um programa que receba três notas e calcule a média ponderada, considerando pesos 2, 3 e 5.
*/
let lerLinha = require("readline-sync");
let NOTAS = [];
let PESOS = [2,3,5];

for (let i = 0; i < 3; i++) {
  let nota = parseFloat(lerLinha.question(`Digite a nota ${i + 1}: `));
  NOTAS.push(nota);
}
console.log("Média Ponderada:", calcularMediaPonderada(NOTAS, PESOS));
function calcularMediaPonderada(notas, pesos) {
  let somaPesos = 0;
  let somaNotasPonderadas = 0;

  for (let i = 0; i < notas.length; i++) {
    somaNotasPonderadas += notas[i] * pesos[i];
    somaPesos += pesos[i];
  }

  return somaNotasPonderadas / somaPesos;
}