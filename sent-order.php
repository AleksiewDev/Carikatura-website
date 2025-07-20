<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Събиране на данните от формата
    $name = htmlspecialchars($_POST["fullName"]);
    $email = htmlspecialchars($_POST["emailConfirm"]);
    $address = htmlspecialchars($_POST["address"]);
    $notes = htmlspecialchars($_POST["notes"]);

    // Имейл, на който ще получаваш поръчките
    $to = "YOUR_EMAIL_HERE@example.com"; // ❗ СМЕНИ с твоя имейл

    // Заглавие на имейла
    $subject = "Нова поръчка от сайта за карикатури";

    // Съобщението
    $message = "Име: $name\n";
    $message .= "Имейл: $email\n";
    $message .= "Адрес: $address\n";
    $message .= "Бележки: $notes\n";

    // Заглавки
    $headers = "From: website@yourdomain.com" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "Content-Type: text/plain; charset=UTF-8";

    // Изпращане
    if (mail($to, $subject, $message, $headers)) {
        echo "<h2>✅ Поръчката е изпратена успешно! Ще се свържем с теб скоро.</h2>";
    } else {
        echo "<h2>❌ Възникна проблем при изпращането на поръчката. Моля, опитай отново.</h2>";
    }
} else {
    // Ако не е POST заявка
    echo "<h2>Недопустим достъп до страницата.</h2>";
}
?>
