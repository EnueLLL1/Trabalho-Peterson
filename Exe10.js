/* 
Faça um programa que leia um valor em segundos e converta para o formato horas, minutos e segundos.
*/

const readlineSync = require("readline-sync")
const segundos = parseInt(readlineSync.question("Digite o valor em segundos: "));

const horas = Math.floor(segundos / 3600);
const minutos = Math.floor((segundos % 3600) / 60);
const segundosRestantes = segundos % 60;

console.log(`${horas} Horas, ${minutos} Minutos e ${segundosRestantes} Segundos.`);