define(["jquery"],function($){
    function show (){
        $(function(){
            $.ajax({
                type: "get",
                url:"../data/content.json",
                success:function(arr){

                    for(let i =0; i<arr.length;i++){
                        var arr1 = arr[0];
                        var node1 = $(`
                             
                            <section class="zx-title-name">
                            <dl>
                                <dt>${arr1.title}</dt><dd>${arr1.mintitle}</dd>
                            </dl>
                            </section>

                        `);
                        node1.appendTo(".content1")

                    }
                    for(let i =0; i<arr[0].child1.length;i++){
                        var arr2 = arr[0].child1;
                        var node2 = $(`
                        <a href=""><img class="shadow" src="${arr2[i].img}" alt=""></a>                                

                        `);
                        node2.appendTo(".todayrecommend_aside");
                    }
                    for(let i =0; i<arr.length;i++){
                        var arr3 = arr[1];
                        var node4 = $(`
                        <a href=""><img  class="shadow" src="${arr3.outimg}" alt=""></a>

                        `);

                        var node3 = $(`
                             
                            <section class="zx-title-name">
                            <dl>
                                <dt>${arr3.title}</dt><dd>${arr3.mintitle}</dd>
                            </dl>
                            </section>

                        `);
                        node3.appendTo(".content2");
                        node4.appendTo(".boutiquereCommend_left");

                    }

                        for(let i =0; i<arr[1].child2.length;i++){
                            var arr4 = arr[1].child2;
                            var node2 = $(`
                            <div class="boutiquereCommend_Phone">
                            <a href="" >
                        <dl>
                             <dt class="sale-goods-img"><img  class="shadow" src="${arr4[i].img}" alt=""></dt>
                             <h2  class="sale-goods-name">${arr4[i].ad}</h2>
                             <dt  class="sale-goods-ad">${arr4[i].minad}</dt>
                             <dd  class="sale-goods-pir">${arr4[i].char}<strong>${arr4[i].price}</strong></dd>
    
                        </dl>
    
                    </a> 
                    </div>
                                                         
                            `);
                            node2.appendTo(".boutiquereCommend_right");
                        }

                        for(let i =0; i<arr.length;i++){
                            var arr5 = arr[2];
                            var node5 = $(`
                                 
                                <section class="zx-title-name">
                                <dl>
                                    <dt>${arr5.title}</dt><dd>${arr5.mintitle}</dd>
                                </dl>
                                </section>
    
                            `);
                            node5.appendTo(".content3")
    
                        }

                        for(let i =0; i<arr[2].child3.length;i++){
                            var arr6 = arr[2].child3;
                            var node6 = $(`
                            <div class="content_Phone">
                            <a href="" >
                        <dl>
                             <dt class="sale-goods-img"><img  class="shadow" src="${arr6[i].img}" alt=""></dt>
                             <h2  class="sale-goods-name">${arr6[i].ad}</h2>
                             <dt  class="sale-goods-ad">${arr6[i].minad}</dt>
                             <dd  class="sale-goods-pir">${arr6[i].char}<strong>${arr6[i].price}</strong></dd>
    
                        </dl>
    
                    </a> 
                    </div>                            
                            `);
                            node6.appendTo(".content");
                        }

                    

                   

                },
                error:function(msg){
                    console.log(msg)
                }

              






            })

        })
        // $(".todayrecommend_aside").on("mouseenter","img",function(ev){
           
        //     var e = ev ||window.event;
        //     $(this).addClass("img_active");
          


        // })

        // $(".todayrecommend_aside").on("mouseleave","a",function(ev){
  
        //     var e = ev ||window.event;
        //     $("a").find("img").removeClass("img_active");
        //     $(".img_active").css({
        //         boxShadow:"0 #000",
        //        marginBottom: "0px" 
        //    })
        // })




    }
    return {
        show:show
    }





})