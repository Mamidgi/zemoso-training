import java.util.Scanner;

public class DataEncryptionSystem {

    // Method to encrypt a character based on its type
    public static char encryptCharacter(char ch, int shift) {
        if (Character.isUpperCase(ch)) {
            return (char) ('A' + (ch - 'A' + shift) % 26);
        } else if (Character.isLowerCase(ch)) {
            return (char) ('a' + (ch - 'a' + shift) % 26);
        } else if (Character.isDigit(ch)) {
            return (char) ('0' + (ch - '0' + shift) % 10);
        } else {
            return (char) (ch + shift);  // Encrypt special characters including spaces
        }
    }

    // Method to decrypt a character based on its type
    public static char decryptCharacter(char ch, int shift) {
        if (Character.isUpperCase(ch)) {
            return (char) ('A' + (ch - 'A' - shift + 26) % 26);
        } else if (Character.isLowerCase(ch)) {
            return (char) ('a' + (ch - 'a' - shift + 26) % 26);
        } else if (Character.isDigit(ch)) {
            return (char) ('0' + (ch - '0' - shift + 10) % 10);
        } else {
            return (char) (ch - shift);  // Decrypt special characters including spaces
        }
    }

    // Method to encrypt the entire message
    public static String encryptMessage(String message, int shift) {
        StringBuilder encryptedMessage = new StringBuilder();
        for (char ch : message.toCharArray()) {
            encryptedMessage.append(encryptCharacter(ch, shift));
        }
        return encryptedMessage.toString();
    }

    // Method to decrypt the entire message
    public static String decryptMessage(String message, int shift) {
        StringBuilder decryptedMessage = new StringBuilder();
        for (char ch : message.toCharArray()) {
            decryptedMessage.append(decryptCharacter(ch, shift));
        }
        return decryptedMessage.toString();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Read the message to be encrypted
        System.out.println("Enter the message to be encrypted:");
        String message = scanner.nextLine();

        // Define the shift for the Caesar Cipher
        int shift = 3;

        // Encrypt the message
        String encryptedMessage = encryptMessage(message, shift);
        System.out.println("Encrypted Message: " + encryptedMessage);

        // Decrypt the message (for demonstration purposes)
        String decryptedMessage = decryptMessage(encryptedMessage, shift);
        System.out.println("Decrypted Message: " + decryptedMessage);

        scanner.close();
    }
}
 