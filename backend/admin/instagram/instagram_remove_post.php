<?php

require '../../core/init.php';
$id = $_GET['id'];

$stmt = $conn->prepare('DELETE FROM instagram_posts WHERE id=?');
$stmt->bind_param('i', $id);

if ($stmt->execute()) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}