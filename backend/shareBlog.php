<?php
require_once 'core/connect.php';

$blog_data = array();
$blog_data['id'] =  (int)$_GET['id'] ?? 0;

$stmt = $conn->prepare('SELECT blogpost_id, title, description FROM blogpost WHERE blogpost_id = ? AND status = 1');
$stmt->bind_param('i', $blog_data['id']);
$stmt->execute();
$stmt->store_result();
$stmt->bind_result($id, $title, $description);
$stmt->fetch();

if ($stmt->num_rows === 1) {
    $blog_data['title'] = $title;
    $blog_data['description'] = $description;
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="shortcut icon" href="favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="DNV GL FuelFighter, student project at NTNU" />
    
    <meta property="og:title" content="DNV GL FUEL FIGHTER: <?php echo $blog_data['title'] ?>" />
    <meta property="og:description" content="<?php echo $blog_data['description'] ?>" />
    <meta property="og:image" content="<?php echo "http://www.fuelfighter.no/backend/base64ToImg.php?id=".$blog_data['id'] ?>" />
    <meta property="og:type" content="article" />
    
    <title>DNV GL Fuel Fighter</title>
  </head>
  <script>
    window.location.href = "https://www.fuelfighter.no/#/blog/post?id=<?php echo $blog_data['id'] ?>";
  </script>
</html>