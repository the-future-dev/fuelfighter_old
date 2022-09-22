<?php
require 'core/connect.php';

$offset = $_GET['offset'] ?? 0;
$limit = $_GET['limit'] ?? 1;

$output = array(
  'exist' => true,
  'data'  => null,
);

$stmt = $conn->prepare('SELECT blogpost.blogpost_id as id, author, title, description, date, card_image as `image` FROM blogpost WHERE blogpost.status = 1 ORDER BY blogpost.date DESC LIMIT ?, ? ');
$stmt->bind_param('ii', $offset, $limit);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 0) {
  $output['exist'] = false;
} else {
  while ($row = $result->fetch_assoc()) {
    $output['data'][] = $row;
  }
}




echo json_encode($output);

$conn->close();