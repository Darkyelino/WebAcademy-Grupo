import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class App {
    public static void main(String[] args) throws Exception {
        // Questao 1
        List<Integer> numeros = new ArrayList<>();
        Collections.addAll(numeros, 5,2,9,7,1);
        // Questão 2
        for( int item : numeros){
            System.out.println(item);
        }
        // Questão 3
        Collections.sort(numeros);
        System.out.println(numeros);
        // Questão 4
        System.out.println(Collections.binarySearch(numeros, 9));
        // Questão 5
        List<Integer> maiores = new ArrayList<>();
        maiores = numeros.subList(2, 5);
        // Questão 6
        System.out.println(maiores);
        System.out.println(numeros.equals(maiores));
        // Questão 7
        Collections.reverse(numeros);
        for(int item : numeros){
            System.out.println(item);
        }
    }
}
