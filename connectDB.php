<?php

$servername = "172.16.17.1";
$username = "hradmin";
$password = "hradmin1234";
$dbname = "hr";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
mysqli_set_charset($conn,"tis620");
?>