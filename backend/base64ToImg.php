<?php
require_once 'core/connect.php';

$blog_data = array();
$blog_data['id'] =  (int)$_GET['id'] ?? 0;

$stmt = $conn->prepare('SELECT blogpost_id, banner_image FROM blogpost WHERE blogpost_id = ? and status = 1');
$stmt->bind_param('i', $blog_data['id']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $card_image);
$stmt->fetch();

if ($stmt->num_rows === 1) {
    $blog_data['cardImage'] = $card_image;
}

$conn->close();

header("Content-Type: image/jpeg");
echo base64_decode(preg_replace('#data:image/[^;]+;base64,#', '', $blog_data['cardImage']));
exit;