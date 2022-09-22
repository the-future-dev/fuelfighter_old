<?php

$response = false;
$json = file_get_contents('php://input');
$obj = json_decode($json, TRUE);

// send mail
$to = 'post@fuelfighter.no';
$subject = 'DNV GL FuelFighter: Application';
$message = '
  <html>
  <head>
    <title>HTML email</title>
  </head>
  <body>
    <h4>Fornavn</h4> ' . $obj['firstname'] . '
    <h4>Etternavn</h4> ' . $obj['lastname'] . '
    <h4>Description</h4> ' . $obj['email'] . '
    <h4>Email:</h4> ' . $obj['description'] . '
    <h4>Telefon nr:</h4> ' . $obj['phonenumber'] . '
    <h4>Stillinger:</h4> '.implode(", ", $obj['selectedPositions']).'
  </body>
  </html>
';

$headers = array(
  'From: <post@fuelfighter.no>',
  "Reply-To: post@fuelfighter.no",
  "Content-type:text/html;charset=UTF-8",
  "X-Mailer: PHP/" . PHP_VERSION
);
$headers = implode ("\r\n", $headers);

if (mail($to, $subject, $message, $headers)) {
  // bekreftelsesmail
  $to = $obj['email'];
  $subject = 'DNV GL FuelFighter: Application confirmation';
  $message = '
    <h1>Thank you for applying to DNV GL FuelFighter</h1>
    We have recieved your application as:
  ' . $message . '
    <br/>
    If you have any further questions or anything to add, please contact us at post@fuelfighter.no.
  ';

  if(mail($to, $subject, $message, $headers)) {
    $response = true;
  }
}

echo json_encode($response);
