
define(["jquery"],function($){
    function show(){

        $(function(){

            $.ajax({
                type: "get",
                url:"../data/header.json",
                success:function(arr){
        
                    for(let i =0; i<arr.length;i++){
                          var arr1 = arr[0].child1;
                        var node1 = $(`  
                       
                                <li>
                                    <a id="header_a" href="">
                                        <div class="goods-img">
                                            <img src="${arr1[i].img}" alt="">
                                        </div>
                                        <div class="goods-data">
                                            <div class="goods-name-block">
                                                  <span id="ad_span" >${arr1[i].ad}</span>
                                            </div>
                                            <div class="goods-pri-block">
                                                <span class="new-pri">${arr1[i].char} <span style="font-weight: 700;font-size:10px;">${arr1[i].price}</span> </span>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                        `);
                        node1.appendTo(".nav_active .fenlei-two");
                    }
                    
                    for(let i =0; i<arr[1].child2.length;i++){
                    var arr2 = arr[1].child2;
                    var node2 = $(`  
                       
                    <li>
                        <a id="header_a" href="">
                            <div class="goods-img">
                                <img src="${arr2[i].img}" alt="">
                            </div>
                            <div class="goods-data">
                                <div class="goods-name-block">
                                      <span style="width:170px;font-size:10px; overflow: hidden;text-overflow: ellipsis;">${arr2[i].ad}</span>
                                </div>
                                <div class="goods-pri-block">
                                    <span class="new-pri">${arr2[i].char} <span style="font-weight: 700;font-size:10px;">${arr2[i].price}</span> </span>
                                </div>
                            </div>
                        </a>
                    </li>
            `);
            node2.appendTo(".Blade .fenlei-two");
                    }
                },
                error:function(msg){
                    alert(msg);
                }
        
            })
        
        
               var oBlade =$(".Blade");
        
            var olis = $(".nav_active");
            
              var odiv = $(".datil-block");
        
            // $(".datil-block").css("display","block");
        
        
            olis.mouseover(function(){
                // alert("sadvf");
              
                $(".nav_active .datil-block").css("display","block");
            })
          olis.mouseleave(function(){
                // alert("sadvf");
              
                $(".nav_active .datil-block").css("display","none");
            })
           oBlade.mouseover(function(){
                
              
                $(".Blade .datil-block").css("display","block");
            })
         oBlade.mouseleave(function(){
                // alert("sadvf");
              
                $(".Blade .datil-block").css("display","none");
            })
        
               
               
        
        
        
        })


    }
    return {
        show:show
    }
})




