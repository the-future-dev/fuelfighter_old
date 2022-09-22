<?php

require '../../core/init.php';

$result = array('success'  => false);

if ($id = $_GET['id']) {
  $stmt = $conn->prepare('DELETE FROM blogpost WHERE blogpost_id=?');
  $stmt->bind_param('i', $id);
  if ($stmt->execute()) {
    $result = array('success'  => true);
  }
}

echo json_encode($result);