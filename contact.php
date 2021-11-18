<?php
header("Access-Control-Allow-Origin: *");

// $to = 'f.steve.renner@gmail.com';
$to = 'reformedbiblechurchtrl@gmail.com';
$boundary = str_replace(" ", "", date('l jS \of F Y h i s A'));

// Takes raw data from the request
$json = file_get_contents('php://input');

// Converts it into a PHP object
$data = json_decode($json);

$firstName = $data->firstName;
$lastName = $data->lastName;
$from = $data->email;
$phoneNumber = $data->phoneNumber;
$message = $data->message;

$subject = "New Reformed Bible Church Contact Form Message from $firstName $lastName";

$body = "
<h3>Name:</h3> <p>" . $firstName . " " . $lastName . "</p>
<h3>Email:</h3> <p>" . $from . "</p>
<h3>Phone Number:</h3> <p>" . $phoneNumber . "</p>
<h3>Message:</h3> <p>" . $message . "</p>
";

$headers = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
$headers .= "From: " . $from . "\r\n" .    
$headers .= "Reply-To: " . $from . "\r\n"; 
$headers .= "X-Mailer: PHP/". phpversion() ."\r\n" ;

print_r($headers);

try {
  mail($to, $subject, $body, $headers);
  echo "Email successfully sent";
} catch(Exception $e) {
  echo "There was an error sending your email: ${$e->getMessage()}";
}



?>