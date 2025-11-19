/* 
Crie um programa que receba a base e a altura de um retângulo e calcule sua área e perímetro.
A=b×h, P=2×(b+h)
*/

const readlineSync = require('readline-sync')
const base = parseFloat(readlineSync.question('Digite a base do retângulo: '))
const altura = parseFloat(
  readlineSync.question('Digite a altura do retângulo: ')
)

const area = base * altura
const perímetro = 2 * (base + altura)

console.log(`Área: ${area}`)
console.log(`Perímetro: ${perímetro}`)
