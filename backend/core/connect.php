<?php
$servername = 'fuelfighter.mysql.domeneshop.no';
$username = 'fuelfighter';
$password = 'Ormen-Pusen-hoved-57-lunte';
$database = 'fuelfighter';

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
}

$conn->set_charset("utf8");
?>