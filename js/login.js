define(["jquery"],function($){
    function show(){
        $(function(){
            
            $(".login-btn").click(function(){
                $.ajax({
                    type: "post",
                    url:"../login.php",
                    data: {
                        username: $('#uname').val(),
                        password: $('#password').val()
                    },
                    success:function(result){
                        var obj = JSON.parse(result);
                        if(obj.code){
                            $(".popover-content").css({
                                display:"block"
                            });
                           
                        }else{
                            $(".popover-content").css({
                                display:"block",
                                color:"green"
                            })
                        }
                        $(".popover-content").html(obj.message);
    
                    },
                    error:function(msg){
                        console.log(msg);
                    }
    
    
                })

            })
          
            // 手机号验证  
            // var username =  $("#uname");         
            // username.blur(function(){
            //     var ouname = $('#uname').val();             
            //         if(/^[1-3]\d{10}$/.test(ouname)){
            //             $("#popover241506").find(".popover-content").html("手机号正确");
                       
                
            //         }else {
                       
            //             $("#popover241506").find(".popover-content").html("手机号错误");
            //         }
            // })
            // 验证码

            var str = numTest(6);
           $("#account_vcode_image").html(str);
           $("#account_vcode_image").click( function(){
            str =numTest(6);
          
            $("#account_vcode_image").html(str);

           })
           var vcode = $("#account_vcode");
           vcode.blur( function(){
               var ovcode = vcode.value;
               if( ovcode.toLowerCase() == str.toLowerCase() ){
                $(".popover-content").html("验证码正确");

               }else{
                $(".popover-content").html("验证码错误");
               }

           })
            //  密码验证

            // var passworded = $("#password");


            // passworded.blur(function(){
            //  var opassworded = $('#password').val();  
            //     if( opassworded.length < 6){
            //         $(".popover-content").html("密码长度为 6~18个字符");
            //     }else{
            //      $(".popover-content").html("请再次输入密码");
            //     }
 
 
            // })
                //    邮箱验证


           function numTest(n){
            var arr = [];
            
            for(var i = 0; i< n;i++ ){
                var num =  parseInt( Math.random()*123);
               if( num  >=0 && num <=9){
                 arr.push(num);
          
               }else if(  num >=65 && num <=90 ||num >= 97 && num  <=123 ){
                   arr.push(String.fromCharCode(num));
          
               }else{
                 i --;
               }
            }
            return arr.join("");
        }
    


            



        })
    }
    return{
        show:show
    }





})