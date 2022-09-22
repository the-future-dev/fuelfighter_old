<?php
require_once '../core/connect.php';

$output = array();

$result = $conn->query('SELECT id, shortcode FROM instagram_posts ORDER BY id DESC');
while ($row = $result->fetch_assoc()) {
  $output[] = array(
    'id'  => $row['id'],
    'shortcode' => $row['shortcode'],
  );
}

echo json_encode($output);

$conn->close();