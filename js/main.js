console.log("加载成功");

require.config({
    paths : {
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "parabola":"parabola",
        "header":"header",
        "banner":"banner",
        "bannerlist":"bannerlist",
        "content":"content",
        "content4":"content4",
        "content5":"content5"


    },
    shim :{
        "jquery-cookie":["jquery"],
        "parabola":{
            exports:"_"
        }

    }
})

require (["header","banner","bannerlist","content","content4","content5"],function(header,banner,bannerlist,content,content4,content5){
    header.show();
    banner.show();//让轮播图产生效果
    bannerlist.show();
    content.show();
    content4.show();
    content5.show();

})