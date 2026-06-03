import java.io.FileWriter;

public class FileWriting {

    public static void main(String[] args) {

        try {

            FileWriter writer =
                    new FileWriter("output.txt");

            writer.write("Hello Java");

            writer.close();

            System.out.println("File written");

        } catch (Exception e) {

            System.out.println(e);
        }
    }
}