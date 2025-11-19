/* 
Elabore um programa que peça usuário e senha. 
Caso sejam iguais a “admin” e “1234”, exiba “Login realizado com sucesso”, caso contrário, mostre “Usuário ou senha incorretos”.
*/

const readlineSync = require("readline-sync");
const usuário = readlineSync.question("Digite uma usuário: ");
const senha = readlineSync.question("Digite a senha: ");

function verificarLogin(usuário, senha) {
  return usuário.toLowerCase() === "admin" && senha === "1234"
    ? "Login realizado com sucesso"
    : "Usuário ou senha incorretos"
}

console.log(verificarLogin(usuário, senha));