<?php
require '../../core/init.php';

$default = array(
  'author'  =>  '',
  'title' =>  '',
  'description' => '',
  'content' =>  '',
  'banner_image'  =>  '',
  'card_image'  =>  '',
  'status'  =>  0,
  'date'  =>  time()*1000,
  'user_id' => $global['user_id']
);

$result = array('blogpostId'  =>  null);

$stmt = $conn->prepare('INSERT INTO blogpost (user_id, date) VALUES (?,?)');
$stmt->bind_param('ii', $default['user_id'], $default['date']);

if ($stmt->execute()) {
  $result = array('blogpostId'  => $stmt->insert_id);
}

echo json_encode($result);