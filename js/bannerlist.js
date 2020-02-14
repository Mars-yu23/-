define(["jquery"],function($){
    function show(){
        $(function(){
           $.ajax({
            type:"get",
            url:"../data/bannerlist.json",
            success:function(arr){
                for(let i =0; i<arr.length;i++){
                    //  var arr1 = arr[i];
                     var node1 =$(`
                     <dl>
                        <dt><a href="">${arr[i].title}</a></dt>
                        <dd><a href="">${arr[i].classify}</a></dd>
                        <ul class="sid_hover"  style="display: none;" >   
                        </ul>
                    </dl>
                     `);
                     node1.appendTo(".sidebar");
                     var arrChild =arr[i].childs;
                    
                      for(let i=0; i<arrChild.length;i++){
                          var node2 = $(`
                          <div class="data_box">
                              <li class="sid_imgbox" ><img class="sid_img" src="${arrChild[i].images}" alt=""></li class="sid_imgbox">
                              <li class="sid_txtbox"><a href="">${arrChild[i].title}</a></li>
                         </div> 
                          `);
                         node2.appendTo(node1.find(".sid_hover"));
                      }
                }
               
            },
            error:function(msg){
                alert(msg);
            }
           })

        // //    var odl = $(".sidebar");
        //    var odl = $(".sidebar");
            //给侧边框添加移入移出效果
           

            $(".sidebar").on("mouseenter","dl",function(ev){

                $(".sidebar").css("opacity",1);
                var e = ev ||window.event;
                $(this).addClass("sid_active");
                var index = $(this).index();
                if(index >= 0 && index <= 7){
                    $(this).find(".sid_hover").css({display: "block",float:"left",opacity:"1"});

                }
                // $(".sid_active").on("mouseenter","ul",function(){
                  
                //     $(this).addClass("sid_hover");
                //     $(".sid_hover").css("dispaly","none");
                //     document.write("sd");

                // })
                $(".sid_active").css("backgroundColor","white");

            })

            $(".sidebar").on("mouseleave","dl",function(){
                $(".sidebar").css("opacity",0.5);
                
                // alert("ad");
                // $(this).css("backgroundColor","yellow");
                var index = $(this).index();
                if(index >= 0 && index <= 7){
                $(".sid_hover").css({display: "none"});

                }
            })
           


        })






    }
    return {
        show:show
    }



})