/* 
3. Conversor de Temperatura
Elabore um programa que leia uma temperatura em graus Celsius e a converta para Fahrenheit. F=9/5​×C+32 
 */
const lerLinha = require('readline-sync')
const Celsius = parseFloat(
  lerLinha.question('Digite a temperatura em graus Celsius: ')
)
const fahrenheit = (9 / 5) * Celsius + 32
console.log(`A temperatura em Fahrenheit é: ${fahrenheit}`)
