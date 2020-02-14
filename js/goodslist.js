define(["jquery","jquery-cookie"],function($){
    function show(){
         $(function (){
             sc_num();
            $.ajax({
                type:"get",
                url:"../data/goodslist.json",
                success:function(arr){
                    for(let i =0;i<arr.length; i++){
                      
                        var node = $(`
                        <div class="col-xs-3" >
                        <div class="thumbnail goods-item">
                             <div class="gi-image-wrapper">
                            <a href="">
                                <img src="${arr[i].img}" alt="">
                            </a>
   
                            </div>
                            <div class="caption">
                                <h3 class="g-name">
                                    <a href="">${arr[i].ad}</a>
                                </h3>
                                <h3 class="guanggaoyu" style="height:15px;">
                                ${arr[i].minad}
   
                                </h3>
                                <ul class="list-inline clearfix">
                                    <li class="price-1 text-danger">${arr[i].pri}</li>
                                    <li class="price-1 text-muted">
                                        <del style="color:#787878">${arr[i].del}</del>
                                    </li> 
                                    <li class="buy-now" id="${arr[i].id}">${arr[i].btn}</li>
   
                                </ul>
   
                            </div>
                        </div>
                
   
                    </div>
                 
                        `);
                        node.appendTo(".row");
                }
            },
          
            error:function(msg){
                console.log(msg);

            }
            })

            $(".row" ).on("click",".buy-now",function(){
                var id = this.id;
                var first =   $.cookie("goods") ==null ? true: false;
                 if(first){
                            var arr = [{id: id, num:1}];
                            $.cookie("goods",JSON.stringify(arr),{
                                expires:7
                            })
                 }else{
                     var cookieStr = $.cookie("goods");
                     var cookieArr = JSON.parse(cookieStr);
                     var same = false;
                     for( var i =0; i <cookieArr.length;i++){
                         if( cookieArr[i].id == id){
                             same = true;
                             cookieArr[i].num++;
                             break;
                         }
                     }
                    //  如果没有添加过，就新增一条数据
                     if(!same){
                         var obj = {id: id , num: 1};
                         cookieArr.push(obj);
                       
                     }
                     $.cookie("goods",JSON.stringify(cookieArr),{
                        expires: 7
                    })
                 }
              sc_num();

            })


            function sc_num(){
                var cookieStr = $.cookie('goods');
                if(cookieStr){
                    var cookieArr = JSON.parse(cookieStr);
                    var sum =0;
                    for( var i =0; i <cookieArr.length;i++){
                        sum += cookieArr[i].num;
                    }
                    $(".header_ol").find(".goodsnum").html(sum);
                }else{
                    $(".header_ol").find(".goodsnum").html(0);
                }


            }
        })
    }

return {
    show:show
}
    

})