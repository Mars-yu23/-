console.log("加载成功");
require.config({
    paths : {
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "login":"login"
       
        


    },
    shim :{
        "jquery-cookie":["jquery"],
        "parabola":{
            exports:"_"
        }

    }
})

require (["login"],function(login){

    login.show();

   

})