
// # Navegar até o diretório do arquivo fonte
// cd C:\Users\igor_\Desktop\novo\WebAcademy-1
// # Compilar o arquivo Java
// javac ArraysDinamicos.java
// # Executar a classe compilada
// java ArraysDinamicos
// [INDIVIDUAL] Crie uma classe chamada "ArraysDinamicos" para demonstrar os recursos 
// disponíveis para manipulação de arrays dinâmicos em Java, contemplando os itens relacionados
// abaixo. Ao final, compartilhe o arquivo fonte (.java) em uma pasta com seu nome no repositório
// de atividades práticas da disciplina. (Entrega: 24/05/2024)

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
public class ArraysDinamicos {

    public static void main(String[] args) {
        List<Integer> numeros = new ArrayList<>();// Criando e inicializando o array dinâmico de inteiros 'numeros'
        numeros.add(5);
        numeros.add(2);
        numeros.add(9);
        numeros.add(7);
        numeros.add(1);

        
        System.out.println("Elementos do array 'numeros' (usando for):");// Imprimindo os elementos do array 'numeros' utilizando um loop for
        for (int i = 0; i < numeros.size(); i++) {
            System.out.print(numeros.get(i) + " ");
        }
        System.out.println();

        
        System.out.println("Elementos do array 'numeros' (usando for-each):");// Imprimindo os elementos do array 'numeros' utilizando um loop for-each
        for (Integer numero : numeros) {
            System.out.print(numero + " ");
        }
        System.out.println();

        
        Collections.sort(numeros);// Ordenando o array 'numeros' em ordem crescente e imprimindo os elementos
        System.out.println("Elementos do array 'numeros' (ordenados):");
        for (Integer numero : numeros) {
            System.out.print(numero + " ");
        }

        System.out.println();

        int indice = Collections.binarySearch(numeros, 9);// Buscando o número 9 no array 'numeros' e imprimindo o resultado
        System.out.println("Índice do número 9 no array 'numeros': " + indice);
        List<Integer> maiores = new ArrayList<>();// Criando um novo array dinâmico de inteiros 'maiores'
        maiores = numeros.subList(numeros.size() - 3, numeros.size());// Copiando os três maiores números do array 'numeros' para o array 'maiores'
        System.out.println("Elementos do array 'maiores':");// Imprimindo os elementos do array 'maiores'
        for (Integer numero : maiores) {
            System.out.print(numero + " ");
        }

        System.out.println();

        boolean saoIguais = numeros.equals(maiores);// Comparando os arrays 'numeros' e 'maiores' e imprimindo o resultado
        System.out.println("Os arrays 'numeros' e 'maiores' são iguais? " + saoIguais);
        Collections.sort(numeros, Collections.reverseOrder());// Imprimindo os elementos do array 'numeros' em ordem decrescente
        System.out.println("Elementos do array 'numeros' (ordem decrescente):");
        for (Integer numero : numeros) {
            System.out.print(numero + " ");
        }

        System.out.println();
    }
}