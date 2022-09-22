<?php

$stmt = $conn->prepare('SELECT users.username, users.permission FROM users WHERE `user_id` = ?');
$stmt->bind_param('i', $global['user_id']);
if ($stmt->execute()) {

  // bind data from database to variables
  $stmt->bind_result($username, $permission);
  $stmt->store_result();

  // check if only one user is obtained from the database
  if ($stmt->num_rows()) {

    // check if the data from the database is fetched
    if ($stmt->fetch()) {

      $global['user'] = array(
        'authenticated' => true,
        'username'  =>  $username,
        'permission'  => $permission,
      );
    }
  }
}