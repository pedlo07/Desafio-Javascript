var valor = [1, 4, 5, 7, 12];
let par = 0;
let impar = 0;
let positivo = 0;
let negativo = 0;

for (i = 0; i < 5; i++){
    if(valor[i] % 2 == 0){
        par++;
        console.log(valor [i] + "é um numero par.");
    } else if (valor[i] % 2 != 0){
        impar++;
        console.log(valor [i] + "é um numero impar.");
    } else if (valor[i] > 0){
        positivo++;
        console.log(valor [i] + "é um numero positivo.");
    } else if (valor[i] < 0){
        negativo++;
        console.log(valor [i] + "é um numero negativo.");
    }

    console.log("Par: ", par, "Impar: ", impar, "Positivo: ", positivo, "Negativo: ", negativo);
}
