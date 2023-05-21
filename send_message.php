<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  $to = "your-email@example.com"; // Replace with your email address
  $subject = "New Message from Contact Form";
  $body = "Name: $name\nEmail: $email\nMessage: $message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    http_response_code(200);
    echo "Message sent successfully!";
  } else {
    http_response_code(500);
    echo "Oops! Something went wrong.";
  }
}
?>
