<?php

require_once '../../core/init.php';
require_once '../../core/userData.php';

$password_plain = $_GET['password'];
$password_plain_repeat = $_GET['password_repeat'];
$username = $_GET['username'];
$firstname = $_GET['firstname'];
$lastname = $_GET['lastname'];

$result = array('success' => false);

// check if admin ++
if ( $global['user']['permission'] == 2 AND isset($password_plain) AND isset($password_plain_repeat) AND !empty($username)  AND $password_plain === $password_plain_repeat) {
  $password_hashed = password_hash($password_plain, PASSWORD_DEFAULT);

  $result = array('success' => false);

  if ($global['authenticated'] == 1) {
  $stmt = $conn->prepare('INSERT INTO users (username, firstname, lastname, password) VALUES (?,?,?,?)');
    $stmt->bind_param('ssss', $username, $firstname, $lastname, $password_hashed);

    $res = $stmt->execute();

    if ($res === true) {
      $result = array('success' => true);
    } else {
      print_r($stmt->error);
    }
  }
}

echo json_encode($result);