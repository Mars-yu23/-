<?php
header('content-type:text/html;charset="utf-8"');
$responseData = array("code" => 0, "message" => "");

	// var_dump($_POST);
	$username = $_POST['username'];
	$password = $_POST['password'];

if(!$username){
    $responseData["code"] = 1;
    $responseData["message"] = "用户名不能为空";
    echo json_encode($responseData);
    exit;
}
if(!$password){
    $responseData["code"] = 2;
    $responseData["message"] = "密码不能为空";
    echo json_encode($responseData);
    exit;
}
$link =mysql_connect("localhost","root","123456");
if(!$link){
    $responseData["code"]= 3;
    $responseData["message"] = "服务器忙";
    echo json_encode($responseData);
    exit;
}
mysql_set_charset("utf8");
mysql_select_db("user");
$str = md5(md5(md5($password)."qingdao")."qingdao");

// 登录成功
$sql = "SELECT * FROM userlist WHERE username = '{$username}' AND password = '{$str}'";

$res = mysql_query($sql);

$row = mysql_query($sql);

// 取一行数据
$row = mysql_fetch_assoc($res);
if(!$row){

    $responseData["code"] = 4;
    $responseData["message"] = "用户名或密码错误";
    echo json_encode($responseData);
		exit;

}else{
    $responseData["message"] = "登录成功";
		echo json_encode($responseData);
}


mysql_close($link);


?>