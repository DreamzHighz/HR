<?php

    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "mch";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } 
    mysqli_set_charset($conn,"utf8");

    $strSQL = "SELECT * FROM employees order by emp_id ASC";
    $objQuery = $conn->query($strSQL) or die (mysql_error());
    $result = array();
    while($row = $objQuery->fetch_assoc()) {
           array_push($result,$row) ;
    }
    echo json_encode($result)
    
?>