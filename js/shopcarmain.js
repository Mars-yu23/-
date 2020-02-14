console.log("加载成功");

require.config({
    paths : {
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "parabola":"parabola",
        "shopcar":"shopcar",
        "tool":"tool"


    },
    shim :{
        "jquery-cookie":["jquery"],
        "parabola":{
            exports:"_"
        }

    }
})

require (["shopcar","tool"],function(shopcar,tool){
     shopcar.show();
     tool.show();
})