/* 2 - Use um laço for para calcular a soma dos números pares de 1 a 100. Ao final, exiba o resultado com console.log(). */

var soma = 0;

for(let i = 0; i <= 100; i+=2){
    soma += i;
}

console.log(soma);