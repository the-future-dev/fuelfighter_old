<?php
require '../../core/init.php';
require '../../core/userData.php';

$query = $conn->query('SELECT blogpost_id as id, user_id, author, title, date, status, type FROM blogpost ORDER BY blogpost.date DESC');
$result = array();

while ($row = $query->fetch_assoc()) {
    $editable = ($global['user_id'] == $row['user_id'] || $global['user']['permission'] == 2 ? true : false);

    $result[] = array(
        'id'        =>  $row['id'],
        'author'    =>  $row['author'],
        'title'     =>  $row['title'],
        'date'      =>  $row['date'],
        'status'    =>  $row['status'],
	'type'	    =>  $row['type'],
        'editable'  =>  $editable,
    );
}

echo json_encode($result);

$conn->close();