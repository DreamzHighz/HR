<?php

include '../connectDB.php';
include '../dbFunction.php';

    $query = mysql_query("SELECT Type_User_type_user_id FROM user = '$id_user'");
    $i = 0;
    $id = array();
    $name = array();
    while($data = mysql_fetch_array($query)){
       //id from result database query
       $id[$i] = $data['User_id'];
       //name from result database query
       $name[$i] = $data['User_name'];
       $i++;
    }
?>