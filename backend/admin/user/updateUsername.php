<?php

require_once '../../core/init.php';

$username = $_GET['username'];

$result = array('success' => false);

if ($global['authenticated'] == 1 AND isset($username)) {
  $stmt = $conn->prepare('UPDATE users SET username=? WHERE user_id=?');
  $stmt->bind_param('si', $username, $global['user_id']);

  $res = $stmt->execute();

  if ($res === true) {
    $result = array('success' => true);
  } else {
    print_r($stmt->error);
  }
}

echo json_encode($result);