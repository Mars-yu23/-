define(["jquery"],function($){
    function show(){

        $(function(){
            $.ajax({
                type: "get",
                url:"../data/content5.json",
                success:function(arr){
                   
                    for(let i=0; i<arr.length; i++ ){
                      

                        var node2 = $(`
                        <li class="zx-more-fenlei "><a href="">${arr[i].li}</a>
                        <div class="zx-more-fenlei-content " >
                            <div class="content-classfy" >
                        
                            </div>
                        </div>

                        </li>
                        `);
                        node2.appendTo(".zx-more .zx-more_list");

                        var arrChild =arr[i].childs;

                        for(let i=0; i<arrChild.length; i++ ){
                           
                            // var arrChild =arr[i].childs;
                            var node4 = $(`
                        
                            <a   href=""  >
                                <aside class="content4-classfy-dl"  >
                                     <div class="goods-img"><img  class="shadow" src="${arrChild[i].img}" alt=""></div>
                                     <h2  class="goods-name">${arrChild[i].ad}</h2>
                                     <div  class="goods-ad">${arrChild[i].minad}</div>
                                     <div  class="goods-pir">${arrChild[i].char}<strong>${arrChild[i].price}</strong></div>
                                </aside>
                            </a>
                      
                            `);
                            node4.appendTo( node2.find(".content-classfy"));
                        }

                    }

                 
                },
                error:function(msg){
                    console.log(msg);
                }

            })
            // $(".zx-more").find("li").css("display","block")


            $(".zx-more_list").on("mouseenter","li",function(ev){
                 var e = ev ||window.event;  
                  var alis=  $(".zx-more_list").find("li");
                  alis.attr('class',"");
                  $(this).addClass("li_active");
                 
                  var index = $(this).index();
               
                 
                  if(index >= 1 && index <=3){
                    $(this).find("a").css({color:"#fc6628",
                    borderBottom:"3px solid #fc6628"
                }
                        
                  );
                // $(this).find(".content-classfy").css("display", "block").eq($(this).index).css("display","none");
                $(this).find(".content-classfy").css({display:"block",
                    display: "flex",
                   justifycontent:"space-between",
                   alignitems: "center"
            });              

                  }
              
                 
                 
               

             
                


                // $(this). css({display: "block",position:"relitive"}).eq($(this).index).css("display","none");
               

              


               
                // $()
               
                // alert("asd")
               
              
                // $(".li_active").css(" borderColor","#fc6628");
                // var index = $(this).index();
               

                // if(index >= 0 && index <= 3){
                   
                //     $(".li_active").css("Color","#fc6628");
                   
                //     $(".li_active").find(".content4-classfy-a").css({display: "block"});
                // }

            })
            
            $(".zx-more_list").on("mouseleave","li",function(ev){
                // var e = ev ||window.event;  
                // var alis=  $(".zx-more_list").find("li");
                // alis.attr('class',"")
            //    $(".li_active").find(".content-classfy").css({display: "none"}).eq($(this).index());
            // $(this).removeClass(".content-classfy");
            var index = $(this).index();
            if(index >= 1 && index <=3){
                $(this).find("a").css({color:"#fc6628",
                borderBottom:"3px solid white"
            }
                    
              );
                $(this).find(".content-classfy").css("display","none");
              
        //   $(".content-classfy").eq($(this).index()).css("display","none");
            }
               

        })
    })



    
    }

    return {
        show:show
    }




})