<?php

include '../../connectDB.php';
include '../../dbFunction.php';

$data = receivePostData($_POST);

/*
ตรวจสอบว่ามีการส่งข้อมูลเข้ามาหรือไม่ ถ้าไม่มีจะ query ข้อมูลทั้งหมดใน table และส่งกลับในรูปแบบของ json
*/ 

    $strSQL = "UPDATE hr_user SET score1_user ='".$data['finalPoint1']."', score2_user ='".$data['finalPoint2']."', total_score_user ='".$data['finalPoint3']."' where id_user ='".$data['userId']."'";
    $objQuery = $conn->query($strSQL) or die (mysql_error());
    $result = array();
echo($strSQL)
    // echo fetchSqlToJSON($objQuery); //แปลง object จาก sql result ให้เป็น json
    
?>