/* 
3. Conversor de Temperatura
Elabore um programa que leia uma temperatura em graus Celsius e a converta para Fahrenheit. F=9/5​×C+32 
 */
let lerLinha = require("readline-sync");
let celsius = parseFloat(lerLinha.question("Digite a temperatura em graus Celsius: "));
let fahrenheit = (9/5) * celsius + 32;
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`);