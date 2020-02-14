
define(["jquery"],function($){

    function show() {
        $(function(){
            //圆圈的li
           
            $.ajax({
                type:"get",
                url:"../data/banner.json",
                success:function(arr){
        
                    for(var i = 0;i<arr.length;i++){
        
                        var node = $(`
                           <li style="float: left;" ><a href=""><img src="${arr[i].img}" alt=""></a></li>
                        `);
                        node.appendTo(".banner_bigimage ol");
                    }
                },
                error:function(msg){
                     alert(msg);
                }
            })
            var alis =$(".banner_tab").find("ul").find("li");
            //轮播图
            var ool = $(".banner_bigimage").find("ol");
            var iNow = 0;
            var timer =null;
            alis.click(function(){
                iNow =$(this).index();
                tab();
            })
             timer = setInterval(function(){
                            iNow++;
                            tab();
                        }, 2000);
                        
              $(".banner_tab").hover(function(){
                 clearInterval(timer);
             }, function(){
                 timer = setInterval(function(){
                     iNow++;
                     tab();
                 }, 2000);
             })
        
             function tab(){
                            document.title = iNow;
                            //iNow切换图片和切换按钮
                           alis.removeClass("active").eq(iNow).addClass("active");
        
                            //下表为5，让下标为0的按钮显示。
                            if(iNow == alis.size()){
                               alis.eq(0).addClass("active");
                            }
        
                        ool.animate({
                               left: -iNow * 1920
                            }, 500, function(){
                                //动画结束，如果是下标识5，切回第0张图片
                                if(iNow ==alis.size()){
                                    iNow = 0;
                                  ool.css("left", 0);
                                }
                            })
             }
             
        })


        
    }
    return {
       show:show
    }






})

