<?php
require '../../core/init.php';

echo json_encode(array( 'authenticated' => $global['authenticated'] ));