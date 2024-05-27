import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class ArraysDinamicos {
    public static void main(String[] args) {
//Crie um array dinâmico de inteiros com o nome numeros, e valores 5, 2, 9, 7 e 1.
        List<Integer> numeros = new ArrayList<>();
        Collections.addAll(numeros, 5,2,9,7,1);
//Imprima os elementos do array numeros utilizando um loop for ou for-each.
        for (int item : numeros) {
            System.out.println(item);
        }
//Utilize o método sort() da classe java.util.Collections para ordenar o array numeros em ordem crescente e imprima os elementos do array numeros.
        Collections.sort(numeros);
        System.out.println("Array números ordenado de forma crescente: " + numeros);
//Utilize o método binarySearch() da classe java.util.Collections para buscar o número 9 no array numeros e imprima na tela o resultado da busca.
        System.out.println("O resultado da busca pelo número 9 foi o índice: " + Collections.binarySearch(numeros, 9));
//Crie um novo array dinâmico de inteiros chamado maiores.
        List<Integer> maiores = new ArrayList<>();
//Utilize o método subList() para copiar os três maiores números do array numeros para o array maiores, e imprima os elementos do array maiores.
        System.out.println("Os três maiores números do array números são:");
        maiores = numeros.subList(numeros.size() - 3, numeros.size());
        System.out.println(maiores);
        System.out.println();
//Utilize o método equals() para comparar os arrays numeros e maiores e imprima na tela o resultado da comparação.
        boolean comparacao = numeros.equals(maiores);
        System.out.println("Array numeros e Array maiores são iguais? " + comparacao);
        System.out.println();
//Imprima na tela os elementos do array numeros em ordem decrescente.
        Collections.sort(numeros, Collections.reverseOrder());
        System.out.println("Array números ordenado de forma decrescente: ");
        for (Integer numero : numeros) {
            System.out.println(numero + " ");
        }




    }

}


