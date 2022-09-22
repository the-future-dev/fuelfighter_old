<?php
require '../../core/init.php';
require '../../core/userData.php';

if(!isset($_GET['id'])) {
    exit('Missing blogpost id');
}
$input_id = $_GET['id'];

$stmt = $conn->prepare('SELECT blogpost.blogpost_id as id, author, title, description, date, card_image, banner_image, content, status FROM blogpost WHERE blogpost_id = ?');
$stmt->bind_param('i', $input_id);
$stmt->execute();

$stmt->bind_result($id, $author, $title, $description, $date, $card_image, $banner_image, $content, $status);
$stmt->fetch();

echo json_encode(array(
    'id'            =>  $id,
    'author'        =>  $author,
    'title'         =>  $title,
    'description'   =>  $description,
    'date'          =>  $date,
    'cardImage'     =>  $card_image,
    'bannerImage'   =>  $banner_image,
    'status'        =>  $status,
    'content'       =>  mb_convert_encoding($content, 'UTF-8', 'UTF-8')
)   ,
    JSON_HEX_QUOT | JSON_HEX_TAG
);

$conn->close();