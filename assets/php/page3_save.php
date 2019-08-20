<?php

include '../../connectDB.php';
include '../../dbFunction.php';

$data = receivePostData($_POST);

/*
ตรวจสอบว่ามีการส่งข้อมูลเข้ามาหรือไม่ ถ้าไม่มีจะ query ข้อมูลทั้งหมดใน table และส่งกลับในรูปแบบของ json
*/ 

    $strSQL = "UPDATE hr_user SET committee1_user ='".$data['committee1']."', committee2_user ='".$data['committee2']."', committee3_user ='".$data['committee3']."', committee4_user ='".$data['committee4']."', committee5_user ='".$data['committee5']."' where id_user ='".$data['userId']."'";
    $objQuery = $conn->query($strSQL) or die (mysql_error());
   
    // echo fetchSqlToJSON($objQuery); //แปลง object จาก sql result ให้เป็น json
    
?>