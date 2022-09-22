<?php
require_once 'connect.php';

session_start();

if (empty($_SESSION['re_authenticate'])) {
  $_SESSION['re_authenticate'] = false;
}

$global = array(
  'user_id'  =>  null,
  'authenticated' =>  false,
  'error' => null,
);

require_once 'authenticate.php';