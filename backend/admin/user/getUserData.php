<?php

require '../../core/init.php';

require '../../core/userData.php';

echo json_encode($global['user']);

$conn->close();