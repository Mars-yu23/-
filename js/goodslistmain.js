console.log("加载成功");

require.config({
    paths : {
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "parabola":"parabola",
        "goodslist":"goodslist"


    },
    shim :{
        "jquery-cookie":["jquery"],
        "parabola":{
            exports:"_"
        }

    }
})

require (["goodslist"],function(goodslist){
    goodslist.show();
})