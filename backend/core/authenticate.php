<?php

// unset($_SERVER['PHP_AUTH_USER']);
// unset($_SERVER['PHP_AUTH_PW']);

list($_SERVER['PHP_AUTH_USER'], $_SERVER['PHP_AUTH_PW']) = 
  explode(':', base64_decode(substr($_SERVER['HTTP_AUTHORIZATION'], 6)));

if (isset($_SERVER['PHP_AUTH_USER']) && isset($_SERVER['PHP_AUTH_PW']) && $_SESSION['re_authenticate'] == false ) {
	$user = $_SERVER['PHP_AUTH_USER'];
	$pass = $_SERVER['PHP_AUTH_PW'];

	$stmt = $conn->prepare('SELECT `user_id`, `password` FROM `users` WHERE `username` = ?');
	$stmt->bind_param('s', $user);

	if ($stmt->execute()) {

		// bind data from database to variables
		$stmt->bind_result($db_id, $db_password);
		$stmt->store_result();

		// check if only one user is obtained from the database
		if ($stmt->num_rows()) {

			// check if the data from the database is fetched
			if ($stmt->fetch()) {

				// check if password is correct
				if(password_verify($pass, $db_password)) {
					
					// validated successfully
					$global['authenticated'] = true;
					$global['user_id'] = $db_id;
				}
			}
		}
	}
}

if (!$global['authenticated']) {
	$_SESSION['re_authenticate'] = false;
	header('WWW-Authenticate: Basic realm="My Realm"');
	header('HTTP/1.0 401 Unauthorized');
	die (json_encode(array('error' => true, 'message' => 'unauthorized')));
}