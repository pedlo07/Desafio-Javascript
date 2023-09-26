var nome = prompt('Digite seu nome: ');

var Idade = prompt('Digite sua Idade. ');

var python = prompt('Voce é um estudante de python? 1-[Sim] ou 2-[Não].');

if (Idade > 18){
    alert(nome + "Você pode comprar ingresso.")

    var ingre = prompt('Escolha a sua entrada: 1-VIP ou 2-Padrão.')

    if(ingre == 1&&python == 1){
        alert(nome + ", seu ingresso foi reservado com sucesso \n",
        "por voce ")
    }
} else {
    alert(nome + "Você não pode comprar ingresso.")
}