/* 1 - Use o laço do..while para criar um programa que solicite ao usuário que digite uma senha com prompt() até que ele digite a senha correta.
 Salve a senha correta em uma variável e teste se ela é igual a que foi digitada. */

 var senha = "senha";

do {
    var senhaDigitada = prompt("Digite a senha: ")
} while (senha != senhaDigitada);