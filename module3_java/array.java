import java.util.ArrayList;

public class ArrayListExample {

    public static void main(String[] args) {

        ArrayList<String> students =
                new ArrayList<>();

        students.add("Alice");
        students.add("Bob");
        students.add("Charlie");

        for (String s : students) {
            System.out.println(s);
        }
    }
}