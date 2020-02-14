define(["jquery"],function($){
    function show(){

        function addEvent(node, eventType, funcName){
            if(node.addEventListener){
                node.addEventListener(eventType, funcName, false);
            }else{
                node.attachEvent("on" + eventType, funcName);
            }
        }
        
        function removeEvent(node, eventType, funcName){
            if(node.removeEventListener){
                node.removeEventListener(eventType, funcName);
            }else{
                node.detachEvent("on" + eventType, funcName);
            }
        }
        
        //跨浏览器兼容
        function preDef(e){
            if(e.preventDefault){
                e.preventDefault();
            }else{
                window.event.returnValue = false;
            }
        }
        
        function drag(node){
            var offsetX = 0;
            var offsetY = 0;
            //记录按下的相对距离
            node.onmousedown = function(ev){
                var e = ev || window.event;
                offsetX = e.clientX - node.offsetLeft;
                offsetY = e.clientY - node.offsetTop;
        
                //添加鼠标移动事件
                document.onmousemove = function(ev){
                    var e = ev || window.event;
        
                    node.style.left = e.clientX - offsetX + 'px';
                    node.style.top = e.clientY - offsetY + 'px';
                }
            }
        
            document.onmouseup = function(){
                document.onmousemove = null;
            }
        }
        
        //跨浏览器兼容方案
        function stopBubble(e){
            if(e.stopPropagation){
                e.stopPropagation();
            }else{
                e.cancelBubble = true;
            }
        }
        
        function removeSpaceNode(nodes){
            var result = [];
            for(var i = 0; i < nodes.length; i++){
                if(!(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue))){
                    result.push(nodes[i]);
                }
        
            }
            return result;
        }
        
        
        //要直接修改原有的节点
        function removeSpaceNode2(parentNode){
            var nodes = parentNode.childNodes;
            for(var i = 0; i < nodes.length; i++){
                if(nodes[i].nodeType == 3 && /^\s+$/.test(nodes[i].nodeValue)){
                    //如果是纯空白节点
                    parentNode.removeChild(nodes[i]);
                }
            }
        }
        
        
        
        //比较的轮数
        function bubbleSort(arr){
            for(var i = 0; i < arr.length - 1; i++){
                //每一轮比较的次数
                for(var j = 0; j < arr.length - (i + 1); j++){
                    if(arr[j] > arr[j + 1]){
                        //如果前面的数，比后面的数大，交换两个数的位置。
                        var tmp = arr[j];
                        arr[j] = arr[j + 1];
                        arr[j + 1] = tmp;
                    }
                }
            }
        }
        //每次角逐擂台下标
        function changeSort(arr){ //arr = newArr
            for(var i = 0; i < arr.length - 1; i++){
                //j准备打擂台的数
                for(var j = i + 1; j < arr.length; j++){
                    if(arr[i] > arr[j]){
                        var tmp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = tmp;
                    }
                }
            }
        }
        
        // 获取当前时间
        function showTime(time){
        time = parseInt(time);
        var d = new Date(time);
        var year = d.getFullYear();
        var month = d.getMonth() + 1;
        var day = d.getDate();
        
        var week = d.getDay();
        week = chineseFromNum(week);
        
        var hour = doubleNum(d.getHours());
        var min = doubleNum(d.getMinutes());
        var sec = doubleNum(d.getSeconds());
        
        return year + "年" + month + "月" + day + "日 星期" + week + " " + hour + ":" + min + ":" + sec;
        }
        
        // 当数字小于10时，在前面加0
        function doubleNum(n){
        if(n < 10){
        return "0" + n;
        }else{
        return n;
        }
        }
        
        //把星期从数字转成中文
        function chineseFromNum(num){
        var arr = ["日", "一", "二", "三", "四", "五", "六"];
        return arr[num];
        }
        
        function elementsByClassName(node, classStr){
            //1、先将node节点下，所有的子节点都获取
            var nodes = node.getElementsByTagName("*");
            var resArr = [];//存储符合条件的元素节点
        
            //2、通过循环，判断符合条件的元素
            for(var i = 0; i < nodes.length; i++){
                if(nodes[i].className == classStr){
                    resArr.push(nodes[i]);
                }
            }
            return resArr;
        }
        //获取当前有效样式
        function getStyle(node, styleStr){
            return node.currentStyle ? node.currentStyle[styleStr] : getComputedStyle(node)[styleStr];
        }
        function randomColor(){
            var str = "rgba(" + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + "," + parseInt(Math.random() * 256) + ",1)";
            return str;
        }
        //封装忽略空白节点的函数
        function removeSpaceNode(nodes){
            var resArr = []; //装不是空白的节点的
            for(var i = 0; i < nodes.length; i++){
                if(!(nodes[i].nodeType == 3 && /^\s+$/ig.test(nodes[i].nodeValue))){
                    //将不是空白节点的装到数组中
                    resArr.push(nodes[i]);
                }
            }
            return resArr;
        }
        function removeSpaceNode2(parentNode){
            var nodes = parentNode.childNodes;
            for(var i = 0; i < nodes.length; i++){
                if(nodes[i].nodeType == 3 && /^\s+$/ig.test(nodes[i].nodeValue)){
                    //直接在父节点上，把纯空白节点删除掉。
                    parentNode.removeChild(nodes[i]);
                }
            }
        }
        function startMove(node, cssObj, complete){ //complete = show
        
            
        clearInterval(node.timer);
        node.timer = setInterval(function(){
        var isEnd = true;
        for(var attr in cssObj){
        //目的值
        var iTarget = cssObj[attr];
        
        //计算速度
        var iCur = null;
        if(attr == "opacity"){
        iCur = parseInt(parseFloat(getStyle(node, "opacity")) * 100);
        }else{
        iCur = parseInt(getStyle(node, attr));
        }  
        var speed = (iTarget - iCur) / 8;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        
        if(attr == "opacity"){
        iCur += speed;
        node.style.opacity = iCur / 100;
        node.style.filter = `filter: alpha(opacity=${iCur})`;
        
        }else{
        node.style[attr] = iCur + speed + 'px';
        }
        if(iCur != iTarget){
        isEnd = false;
        }
        }
        //要等所有动画都到达目的值关闭定时器
        if(isEnd){
        clearInterval(node.timer);
        if(complete){
        complete.call(node);
        }
        }
        }, 30);
        }
        
        function getStyle(node, cssStyle){
        return node.currentStyle ? node.currentStyle[cssStyle] : getComputedStyle(node)[cssStyle];
        }
        

    }

       return{
           show:show
       }

})


