<?php
require '../core/connect.php';

function get_group_data($conn, $group) {
    $stmt = $conn->prepare("SELECT thesis_id, title, description, type from thesis WHERE group_name = ?");
    $stmt->bind_param('s', $group);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows === 0) {
        return false;
    }

    $thesises = [];

    while ($thesis = $result->fetch_assoc()) {
        $thesises[] = array(
            'id'            =>  $thesis['thesis_id'],
            'title'         =>  $thesis['title'],
			'description'   =>  $thesis['description'],
			'type'			=>	$thesis['type'],
        );
    }

    return $thesises;
}

$group_name = $_GET['group_name'];
$output = false;
if (isset($group_name)) {
    $group_data = get_group_data($conn, $group_name);
    if ($group_data !== false) {
        $output = $group_data;
    }
}

echo json_encode($output);
$conn->close();