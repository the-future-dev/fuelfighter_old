<?php

require '../../core/init.php';

$shortcode = $_GET['shortcode'];

$stmt = $conn->prepare('INSERT INTO instagram_posts (shortcode) VALUES (?)');
$stmt->bind_param('s', $shortcode);

if ($stmt->execute()) {
  echo json_encode(true);
} else {
  echo json_encode(false);
}

$conn->close();