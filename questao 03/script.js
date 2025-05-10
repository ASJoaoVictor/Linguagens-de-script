/* 3 - Crie um programa que simule um caixa eletrônico. O usuário começa com um saldo de R$ 1000.

O programa deve mostrar um menu com 3 opções:
1 - Sacar dinheiro
2 - Ver saldo
3- Sair
Use prompt() para ler as escolhas do usuário.
Se o usuário escolher 1, peça o valor a sacar. Só permita o saque se houver saldo suficiente.
Se escolher 2, mostre o saldo atual.
Se escolher 3, finalize o programa com uma mensagem de despedida.
Qualquer outra opção deve exibir "Opção inválida".
Use um laço while para manter o programa funcionando até o usuário escolher sair. */

var saldo = 1000;

while(opcao != 3){
    var opcao = Number(prompt("1 - Sacar dinheiro \n2 - Ver saldo \n3- Sair"));
    switch(opcao){
        case 1:
            if(saldo > 0){
                let saque = Number(prompt("Valor que deseja sacar: "));
                if(saque > saldo){
                    alert("Saldo indisponivel");
                }else{
                    saldo -= saque;// saldo = saldo - saque
                    alert(`Saque no valor de R$${saque.toFixed(2)} realizado`);
                }
            }else{
                alert("Saldo indisponivel")
            }
        break;
        case 2:
            alert(`Seu saldo é R$${saldo.toFixed(2)}`);
            break;    
        case 3:
            alert("saindo ....")
            break;
        default:
            alert("Opção invalida")
    }
}



