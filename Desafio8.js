var pedMot = prompt('Digite 1-Pedestre e 2-Motorista:');

if (pedMot == 1) {
   alert("Voce é um pedestre.");

   var faixa = prompt('Voce está na faixa de pedestre? 1-Sim ou 2-Não');

   var sema = prompt('O semáforo esta vermelho para os carros? 1-Sim ou 2-Não');
   
   if(faixa ==1&&sema==1){
    alert("Voce pode atravessar a rua.")
   } else {
    alert("Voce não pode atravesar a rua.")
   }
     
} else {
    alert("Voce é um motorista.")

    var cinto = prompt('Voce esta usando cinto de segurança? 1-Sim ou 2-Não');

    var bebida = prompt('Voce bebeu bebida alcoólica? 1-Sim ou 2-Não');

    var sema2 = prompt('O semáforo está verde para os carros? 1-Sim ou 2-Não');

    if(cinto ==1&&bebida==2&&sema2==1){
        alert("Voce pode dirigir.")
       } else {
        alert("Voce não pode dirigir.")
       }
}