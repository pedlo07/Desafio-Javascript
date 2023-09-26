import java.util.ArrayList;
import java.util.Scanner;

public class Desafio6 {
    public static void main(String[] args) {
        Integer par = 0, impar = 0, positivo = 0, negativo = 0, zero = 0;
        Scanner scanner = new Scanner(System.in);
        ArrayList<Integer> lista = new ArrayList<Integer>();

        for (int i = 1; i <= 5; i++) {
            System.out.println("Digite o numero " + i);
            int info = scanner.nextInt();
            lista.add(info);
        }
        for (int x : lista) {
            if (x % 2 == 0) {
                System.out.println(x + " é par");
                par++;
            } else {
                System.out.println(x + " é impar");
                impar++;
            }
            if (x > 0) {
                System.out.println(x + " é positivo");
                positivo++;
            } else if (x < 0) {
                System.out.println(x + " é negativo");
                negativo++;
            } else {
                System.out.println(x + " é zero");
                zero++;
            }
        }

        System.out.println("Numeros pares: " + par);
        System.out.println("Numeros impares: " + impar);
        System.out.println("Numeros positivos: " + positivo);
        System.out.println("Numeros negativos: " + negativo);
        System.out.println("Zeros: " + zero);
    }
}
