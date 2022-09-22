<?php

require_once '../core/connect.php';

$result = $conn->query("SELECT year from teams GROUP BY year");
$output = [];

while($row = $result->fetch_assoc()) {
  $output[] = $row['year'];
}

echo json_encode($output);