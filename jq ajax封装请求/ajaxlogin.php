<?php
$user = $_POST["user"];
$pass = $_POST["password"];

if($user=="test" && $pass=="test123"){
$arr = array ('status'=>1,'stoken'=>'safas');
}else{
// return 0;
$arr = array ('status'=>0);

}
echo json_encode($arr);
?>