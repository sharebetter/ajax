<?php 
//header('Access-Control-Allow-Origin:*'); 有dataType: "jsonp" 或为3.html时不需要
$callback=$_GET['callback'];
$data=array('a'=>1,'b'=>2,'c'=>3);
echo $callback.'('.json_encode($data).')';
 ?>