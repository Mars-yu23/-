define(["jquery"],function($){
    function show(){

        $(function(){
            $.ajax({
                type: "get",
                url:"../data/content4.json",
                success:function(arr){
                    for(let i=0; i<arr.length; i++ ){
                        var arr1 = arr[0];

                        var node1 = $(`
                        <dl>
                           <dt>${arr1.title}</dt><dd>${arr1.mintitle}</dd>
                       </dl>
                        `);
                        node1.appendTo("#zx-title-name-content4");
                    }
                    // for(let i=0; i<arr[1].child0.length; i++ ){
                    //     var arr2 = arr[1].child0;

                    //     var node2 = $(`
                    //     <li class="zx-more-fenlei"><a href="">${arr2[i].li}</a>
                        
                    //     <div   class="content4-classfy ">

                    //     </div>

                    //     </li>
                    //     `);
                    //     node2.appendTo(".zx-more .zx-more_list");

                      

                    //     for(let i=0; i<arr.length; i++ ){
                    //         var newarr = arr.slice(2,5);
                    //         var arrChild =newarr.childs;
                    //         var node4 = $(`
                    //         <div   class="content4-classfy  ">
                    //         <a href="">
                    //             <dl>
                    //                  <dt class="sale-goods-img"><img  class="shadow" src="${arrChild.img}" alt=""></dt>
                    //                  <h2  class="sale-goods-name">${arrChild.ad}</h2>
                    //                  <dt  class="sale-goods-ad">${arrChild.minad}</dt>
                    //                  <dd  class="sale-goods-pir">${arrChild.char}<strong>${arrChild.price}</strong></dd>
                    //             </dl>
                    //         </a>
                    //     </div>
                    //         `);
                    //         node4.appendTo(".content4-classfy");
                    //     }

                    // }

                    for(let i=4; i<arr.length; i++ ){


                        var arr3 = arr[1];
                        
                        var node3 = $(`
                       <a href="" id="more"><span>${arr3.sapn}</span><img src="${arr3.img}" alt=""></a>
                        `);
                        node3.appendTo(".zx-more .zx-more_list");
                    }
                    // for(let i=0; i<arr.length; i++ ){
                    //     var arr3 = arr[2];
                    //     var node3 = $(`
                    //    <a href=""><span>${arr3.sapn}</span><img src="${arr3.img}" alt=""></a>
                    //     `);
                    //     node3.appendTo(".zx-more .zx-more_list");
                    // }
                    // for(let i=0; i<arr[2].child1.length; i++ ){
                    //     var arr4 = arr[2].child1;

                    //     var node4 = $(`
                    //     <div   class="content_Phone ">
                    //     <a href="">
                    //         <dl>
                    //              <dt class="sale-goods-img"><img  class="shadow" src="${arr4[i].img}" alt=""></dt>
                    //              <h2  class="sale-goods-name">${arr4[i].ad}</h2>
                    //              <dt  class="sale-goods-ad">${arr4[i].minad}</dt>
                    //              <dd  class="sale-goods-pir">${arr4[i].char}<strong>${arr4[i].price}</strong></dd>
                    //         </dl>
                    //     </a>
                    // </div>
                    //     `);
                    //     node4.appendTo("#content4_classfy");
                    // }
                },
                error:function(msg){
                    console.log(msg);
                }

            })

            // $(".zx-more_list").on("mouseenter","li",function(ev){
            //     var e = ev ||window.event;
            //     $(this).addClass("li_active");
            //     var index = $(this).index();
            //     if(index >= 0 && index <= 3){
            //         $(this).find(".content4-classfy").css({display: "block"});
            //         $(".li_active").css(" border-color","#fc6628");
                   

            //     }




            // })





        })




    }
    return {
        show:show
    }




})