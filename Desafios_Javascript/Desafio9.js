var nome = prompt('Digite seu nome: ');

var Idade = prompt('Digite sua Idade. ');


if (Idade >= 18){
    alert(nome + ", Você pode comprar ingresso.")
    
    var python = prompt('Voce é um estudante de python? 1-[Sim] ou 2-[Não].');

    var ingre = prompt('Escolha a sua entrada: 1-VIP com valor de R$50 ou 2-Padrão com valor de R$20.')

    if(ingre == 1&&python == 1){
        alert(nome + " , seu ingresso VIP foi reservado com sucesso, por voce ser estudante de python voce vai pagar metade do preço de R$50. Mostre esse comprovante no local da festa.");
    } if (ingre ==1&&python == 2){
        alert(nome + " , seu ingresso VIP foi reservado com sucesso, Voce vai pagar preço de R$50. Mostre esse comprovante no local da festa.");
    } if(ingre == 2&&python == 1){
        alert(nome + " , seu ingresso padrão foi reservado com sucesso, por voce ser estudante de python voce vai pagar metade do preço de R$20. Mostre esse comprovante no local da festa.");
    } if (ingre ==2&&python == 2){
        alert(nome + " , seu ingresso VIP foi reservado com sucesso voce vai pagar preço de R$20. Mostre esse comprovante no local da festa.");
    }
} else {
    alert(nome + "Você não pode comprar ingresso por ser menor de idade.")
}