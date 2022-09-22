<?php

require_once '../../core/init.php';

$password_plain = $_GET['password'];
$password_plain_repeat = $_GET['password_repeat'];

$result = array('success' => false);

if ( isset($password_plain) AND isset($password_plain_repeat) AND $password_plain === $password_plain_repeat) {
  $password_hashed = password_hash($password_plain, PASSWORD_DEFAULT);

  $result = array('success' => false);

  if ($global['authenticated'] == 1) {
    $stmt = $conn->prepare('UPDATE users SET password=? WHERE user_id=?');
    $stmt->bind_param('si', $password_hashed, $global['user_id']);

    $res = $stmt->execute();

    if ($res === true) {
      $result = array('success' => true);
    } else {
      print_r($stmt->error);
    }
  }
}

echo json_encode($result);