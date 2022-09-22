<?php
require 'core/connect.php';

if(!isset($_GET['id'])) {
    exit('Missing blogpost id');
}
$input_id = $_GET['id'];

$stmt = $conn->prepare('SELECT blogpost_id, author, title, description, date, card_image, banner_image, content FROM blogpost WHERE blogpost_id = ? and status = 1');
$stmt->bind_param('i', $input_id);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $author, $title, $description, $date, $card_image, $banner_image, $content);
$stmt->fetch();

if ($stmt->num_rows === 1) {
    echo json_encode(array(
        'id'            =>  $id,
        'author'        =>  $author,
        'title'         =>  $title,
        'description'   =>  $description,
        'date'          =>  $date,
        'cardImage'    =>   $card_image,
        'bannerImage'  =>   $banner_image,
        'content'       =>  mb_convert_encoding($content, 'UTF-8', 'UTF-8')
    )   ,
        JSON_HEX_QUOT | JSON_HEX_TAG
    );
} else {
    echo json_encode(false);
}

$conn->close();