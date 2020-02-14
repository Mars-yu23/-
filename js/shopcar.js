define(["jquery","jquery-cookie"],function($){
    function show (){
        $(function(){
            sc_num();
            $.ajax({
                type: "get",
                url:"../data/shopcar.json",
                success:function(arr){
                    for(let i =0; i<arr.length;i++){
                        var node = $(`
                        <li  > <a href=""> <img src="${arr[i].img}" alt=""> </a></li>
                        
                        `);
                        node.appendTo(".product-other-images");
                    }

                    

                     
                },
                error:function(msg){
                    console.log(msg);
                }
                      

            })

            $(".product-main-image").mouseenter(function(){
                $(".smallimg").css({
                   display:"none"

                });
                $(".zoomImg").css({
                    opacity:1,
                    zindex:1000,
                    width:750,
                    height:750
                   

                });
              

            }).mouseleave(function(){
                $(".smallimg").css({
                    display:"block"
 
                 });
                $(".zoomImg").css("opacity",0);
             
            }).mousemove(function(ev){
                var l = ev.clientX -$(this).offset().left ;
               
                if(l<=0){
                    l=0;
                }
                if(l>=400){
                    l=400;
                }
                var t =ev.clientY - $(this).offset().top;
                if(t<=0){
                    t=0;
                }
                if(t>=400){
                    t=400;
                }
                $(".zoomImg").css({
                    left:l - 400,
                    top:t -400
                })

            })

            // 给其他图片部分加左右点击的效果
            // var oUl = $(".product-other-images");
            // oUl.innerHTML += oUl.innerHTML;
            //      oUl.css("width",576);
            var alis = $(".product-other-images").find("li");
            var start =0;
            $(".prev").click(function(){
                // if(start >=1){
                //     start -=1;
                // }else{
                //     start = 8;
                // }
                if(start >=0){
                    start +=1;
                }else{
                    start =1;
                }
                
                tab();
                // start +=1;
               
                   
            })
            $(".next").click(function(){
                // if(start >=0){
                //     start -=1;
                // }else{
                //     start =1;
                // }
                if(start <=8){
                    start -= 1;
                }else{
                    start = 1;
                }
                tab();
                tab();
            })

            function tab(){
                // var index = $("li").index();
                // $(".product-other-images").attr("class","liactive");
                var alis = $(".product-other-images").find("li");
                // alis.removeClass("active").eq(iNow).addClass("active");
                $(".product-other-images").find("li").attr("class","").eq(start).attr("class","liactive").siblings("li").css({
                    marginLeft:0,
                    // display:"none"
                });
                //    var s= alis.size();
                //    var y = s-13;
                if(start == alis.size()){
                    alis.eq(0).attr("class","liactive");
                  
                }
                $(".product-other-images").animate({marginLeft:-88 * start},function(){

                    if( start == alis.size()){
                        $(".product-other-images").css({marginLeft:0});
                        start =0;
                    //   alert("asd");
                    }
                })


            }
                  
            // $("#btnfirst").click( function(){
            //     alert("asd");
            // })

            $(".input-group-btn").on("click","button",function(){
             
                var cookieStr = $.cookie('goods');
                var cookieArr = JSON.parse(cookieStr);
                if( this.innerHTML == "+"){
                    cookieArr++;
                }else{
                    cookieArr == 1?alert("数量已经到1了") : cookieArr--;

                }
                $.cookie("",JSON.stringify(cookieArr),{
                    expires :7
                })
                // $(this).siblings("input").html(cookieArr[index].num);
                $(".goodsnumber").html(cookieArr)
            
                if( this.innerHTML == "+"){
                    var ovalue = Number($('.spinner-input').val()) ;
                    $('.spinner-input').val(ovalue*1+1);
                    }else{
                        var ovalue = Number($('.spinner-input').val()) ;
                        $('.spinner-input').val(ovalue*1-1);
    
                    }
              
                
                
                    
                   
                   

            })




            function sc_num(){
                var cookieStr = $.cookie('goods');
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var sum =0;
                    for( var i =0; i <cookieArr.length;i++){
                        sum += cookieArr[i].num;
                    }
                    $(".header_ol").find(".goodsnumber").html(sum);
                }else{
                    $(".header_ol").find(".goodsnumber").html(0);
                }


            }



        })

    }
    return{
        show:show
    }















})