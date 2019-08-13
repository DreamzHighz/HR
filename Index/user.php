<?php

include '../connectDB.php';
include '../dbFunction.php';

/*
ตรวจสอบว่ามีการส่งข้อมูลเข้ามาหรือไม่ ถ้าไม่มีจะ query ข้อมูลทั้งหมดใน table และส่งกลับในรูปแบบของ json
*/ 

    $strSQL = "SELECT * FROM hr_user order by id_user ASC";
    $objQuery = $conn->query($strSQL) or die (mysql_error());
    $result = array();
    while($row = $objQuery->fetch_assoc()) {
        
           array_push($result,$row) ;
        
    }
    echo json_encode($result)
    // echo fetchSqlToJSON($objQuery); //แปลง object จาก sql result ให้เป็น json
    
?>