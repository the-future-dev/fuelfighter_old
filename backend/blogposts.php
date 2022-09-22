<?php
require 'core/connect.php';

$limit = isset($_GET['limit']) ? $_GET['limit'] : 999999;

$stmt = $conn->prepare('SELECT blogpost.blogpost_id as id, author, title, description, date, card_image as `image` FROM blogpost WHERE blogpost.status = 1 ORDER BY blogpost.date DESC LIMIT ? ');
$stmt->bind_param('s', $limit);
$stmt->execute();

$result = $stmt->get_result();

$output = array();

while ($row = $result->fetch_assoc()) {
    $output[] = $row;
}

echo json_encode($output);

$conn->close();