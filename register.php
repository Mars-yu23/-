<?php
header('content-type:text/html;charset="utf-8"');
//从html上发送的数据不一定能传送到服务器端，所以要进行验证
//定义一个统一的返回格式 错误码加提示信息
$responseData = array("code" =>0, "message" =>"");

$username = $_POST["username"];
$password = $_POST["password"];
$repassword = $_POST["repassword"];
$addTime = $_POST["addTime"];

//对接收到的数据做一个简单地验证
if(!$username){
    $responseData["code"] =1;
    $responseData["message"] = "用户名不能为空";
    //将返回的结果 转成jsoncode编码 
    print (json_encode($responseData));
    exit;
}
if(!$password){
    $responseData["code"] =2;
    $responseData["message"] = "密码不能为空";
    print (json_encode($responseData));
    exit;
}
if( $password != $repassword){
    $responseData["code"] =3;
    $responseData["message"] = "两次输入的密码不一致";
    print (json_encode($responseData));
    exit;
}
  //链接数据库
  $link = mysql_connect("localhost","root","123456");

  if(!$link){
      $responseData["code"] = 4;
      $responseData["message"] = "服务器忙";
      print(json_encode($responseData));
      exit;

     
  }
    mysql_set_charset("utf8");
    mysql_select_db("user");

    $sql = "SELECT * FROM userlist WHERE username='{$username}' ";
    $res = mysql_query($sql);

    //获取其中一行的数据进行比对
    //如果没被注册过才能插入数据库

    $row = mysql_fetch_assoc($res);
    if($row){
        $responseData["code"] = 5;
        $responseData["message"] = "该用户已被注册";
        print(json_encode($responseData));
        exit;
    }
    //密码加密操作
    $str =md5(md5(md5($password)."qianfeng")."qingdao");
    $sql2 = "INSERT INTO  userlist (username,password,addTime) VALUES ('{$username}','{$str}',{$addTime})";

    $res = mysql_query($sql2);
    
    if(!$res){

        $responseData['code'] = 6;
        $responseData['message'] = "注册失败";

        print(json_encode($responseData));
        exit;
    }else{
        $responseData['message'] = "注册成功";
        print(json_encode($responseData));
            
    }
    
     mysql_close($link);

?>