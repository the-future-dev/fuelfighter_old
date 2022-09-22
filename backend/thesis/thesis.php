<?php

require '../core/connect.php';

$thesis_id = (int)$_GET['id'];
$output = false;

$stmt = $conn->prepare("SELECT title, type, content FROM thesis WHERE thesis_id = ?");
$stmt->bind_param('i', $thesis_id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    while ($thesis = $result->fetch_assoc()) {
        $output = array(
            'title'     =>  $thesis['title'],
            'type'      =>  $thesis['type'],
            'content'   =>  $thesis['content'],
        );
    }
}

echo json_encode($output);
$conn->close();
