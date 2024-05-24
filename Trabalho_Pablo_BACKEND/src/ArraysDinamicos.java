package atividade.src;
import java.util.ArrayList;
import java.util.Collections;

public class ArraysDinamicos {
    public static void main(String[] args) {
        //Crie um array dinâmico de inteiros com o nome numeros, e valores 5, 2, 9, 7 e 1.
        ArrayList<Integer> numeros = new ArrayList<>();

        numeros.add(5);
        numeros.add(2);
        numeros.add(9);
        numeros.add(7);
        numeros.add(1);

        //Imprima os elementos do array numeros utilizando um loop for ou for-each.
        System.out.println("Valores dentro do Array:");
        for(int i = 0; i < numeros.size(); i++){
            System.out.println(numeros.get(i));
        }

        //Utilize o método sort() da classe java.util.Collections para ordenar o array numeros em ordem crescente e imprima os elementos do array numeros.
        Collections.sort(numeros);
        System.out.println("\n");
        System.out.println("Valores dentro do Array, só que agora tá ordenado:");
        for(int i = 0; i < numeros.size(); i++){
            System.out.println(numeros.get(i));
        }

        //Utilize o método binarySearch() da classe java.util.Collections para buscar o número 9 no array numeros e imprima na tela o resultado da busca.
        int posicao = Collections.binarySearch(numeros, 9);
        System.out.println("\n");
        if (posicao >= 0) {
            System.out.println("O número 9 foi encontrado na posição " + (posicao+1) + "º");
        } else {
            System.out.println("O número 9 não foi encontrado.");
        }

        //Ordernar os números pra ficar mais facil
        Collections.sort(numeros, Collections.reverseOrder());
        //Crie um novo array dinâmico de inteiros chamado maiores.
        ArrayList<Integer> maiores = new ArrayList<>(numeros.subList(0, 3));
        //Utilize o método subList() para copiar os três maiores números do array numeros para o array maiores, e imprima os elementos do array maiores.
        System.out.println("\n");
        System.out.println("Três maiores números:");
        for (int numero : maiores) {
            System.out.println(numero);
        }

        //Utilize o método equals() para comparar os arrays numeros e maiores e imprima na tela o resultado da comparação.
        boolean compara = numeros.size() == maiores.size() && numeros.containsAll(maiores);

        System.out.println("\n");
        System.out.println("A igualdade dos dois arrays é igual a " + compara);

        //Imprima na tela os elementos do array numeros em ordem decrescente.
        System.out.println("\n");
        System.out.println("Elementos do array 'numeros' em ordem decrescente:");
        for (int numero : numeros) {
            System.out.println(numero);
        }

    }
}