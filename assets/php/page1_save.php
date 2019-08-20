<?php

include '../../connectDB.php';
include '../../dbFunction.php';

$data = receivePostData($_POST);

/*
ตรวจสอบว่ามีการส่งข้อมูลเข้ามาหรือไม่ ถ้าไม่มีจะ query ข้อมูลทั้งหมดใน table และส่งกลับในรูปแบบของ json
*/ 

    $strSQL = "UPDATE hr_user SET name_user ='".$data['userName']."', position_user ='".$data['position']."', department_user ='".$data['department']."', group_user ='".$data['group']."',
                startdate_user ='".$data['startdate']."', enddate_user ='".$data['enddate']."', last_score_user ='".$data['lastscore']."', day_sickleave_user ='".$data['day_sickleave']."',
                per_sickleave_user ='".$data['per_sickleave']."', day_leave_user ='".$data['day_leave']."', per_leave_user ='".$data['per_leave']."', day_restleave_user = '".$data['day_restleave']."',
                per_restleave_user ='".$data['per_restleave']."', day_late_user ='".$data['day_late']."', per_late_user ='".$data['per_late']."', day_absence_user ='".$data['day_absence']."', 
                per_absence_user ='".$data['per_absence']."', other_leave_user ='".$data['other_leave']."', committee1_user ='".$data['committee1']."', committee2_user ='".$data['committee2']."',
                committee3_user ='".$data['committee3']."', committee4_user ='".$data['committee4']."', committee5_user ='".$data['committee5']."' where id_user ='".$data['userId']."' ";
    $objQuery = $conn->query($strSQL) or die (mysql_error());
    $result = array();
echo($strSQL)
    // echo fetchSqlToJSON($objQuery); //แปลง object จาก sql result ให้เป็น json
    
?>