<?php
require '../../core/init.php';
require '../../core/userData.php';

$data = json_decode(file_get_contents('php://input'), true);

$result = array('success' => false);

if ($global['authenticated'] == 1) {
  $stmt = $conn->prepare('UPDATE blogpost SET author=?, title=?, content=?, description=?, date=?, status=?, type=?, card_image=?, banner_image=? WHERE blogpost_id=?');
  $stmt->bind_param('ssssiisssi', $data['author'], $data['title'], $data['content'], $data['description'], $data['date'], $data['status'], $data['type'], $data['cardImage'], $data['bannerImage'], $data['id']);

  $res = $stmt->execute();

  if ($res === true) {
    $result = array('success' => true);
  } else {
    print_r($stmt->error);
  }
}

echo json_encode($result);