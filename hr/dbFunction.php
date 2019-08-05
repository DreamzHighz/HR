<?php
/*
================filename:dbFunction.php===============
descripiton: this file created for database function library
created by: Nattapat Pruangpharch
email: nattapat@mfessolutions.com
created date: 21/10/2016
release verion: 1.0
updated by: -
updated date: -
email: -

[standard version 1.0]

=======================================================
*/

function fetchSqlToJSON($result){
  $resultArray = array();
  while($obResult = mysql_fetch_array($result)){
    array_push($resultArray,$obResult);
  }
  return json_encode($resultArray);
}

function genSqlQurey($type,$table,$array,$idIndex){
  if ($type == 'insert') {
    $sqlstr = "insert into ".$table."(";
    foreach($array as $key => $value) {
      if ($key == "type") {
        continue;
      }
      $sqlstr = $sqlstr.$key.",";
    }
    $sqlstr = substr($sqlstr,0,-1).") values(";
    foreach($array as $key => $value) {
      if ($key == "type") {
        continue;
      }
      $sqlstr = $sqlstr."'".$value."',";
    }
    $sqlstr = substr($sqlstr,0,-1).");";
    return $sqlstr;
  }

  if ($type == 'update') {
    $sqlstr = "update ".$table." set ";
    foreach($array as $key => $value) {
      if ($key == "type") {
        continue;
      }
      if ($key == $idIndex) {
        continue;
      }
      $sqlstr = $sqlstr.$key." = '".$value."',";
    }
    $sqlstr = substr($sqlstr,0,-1);
    $sqlstr = $sqlstr." where ".$idIndex. "="."'".$array[$idIndex]."';";
    return $sqlstr;
  }
}


function receivePostData($post){
  foreach($post as $Arrs => $value) {  $p[$Arrs] = $value; }
  return $post;
}

?>
