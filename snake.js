//贪吃蛇主函数
var sn = [ 42, 41 ], dz = 43, fx = 1, n, ctx = document.getElementById("can").getContext("2d");  
        //sn用于存储蛇身以 及 下一个位置
        //dz是果实位置
        //fx是方向
        //n是下一步的位置
        
        function draw(t, c) {  //t==n   c是颜色
            ctx.fillStyle = c;
            ctx.fillRect(t % 20 * 20 + 1, ~~(t / 20) * 20 + 1, 18, 18); //可去小数 ~是按位取反运算，~~是取反两次
            //t%20  求出第几列         ~~(t / 20)求出第几行
        }  
        document.onkeydown = function(e) {//按下 0左 1上 2右 3下
           fx = sn[1] - sn[0] == (n = [ -1, -20, 1, 20 ][(e || event).keyCode - 37] || fx) ? fx : n ;
			//n  --  +1则右   -- +20则下  -1则左   -+20则上
			//else if(e||event.keyCode==80){clearTimeout(i)}
			//else if(e||event.keyCode==83){clearTimeout(i);  i= setTimeout(arguments.callee, 130);}
			//else{};

        };  
      
        !function update() {  //自执行函数表达式  立即执行
            sn.unshift(n = sn[0] + fx);//  前进一步     unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
            if (sn.indexOf(n, 1) > 0 || n<0||n>399 || fx == 1 && n % 20 == 0 || fx == -1 && n % 20 == 19)  
            //从sn中除开始一位检测n出现的位置 /若下一步的位置是自己的身体  /超出上边际   /超过下边际 /左 /右6 -+
            //indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置没找到返回-1
                return alert("GAME OVER  请刷新界面重新开始游戏    得分"+(sn.length-4));  
            draw(n, "Lime"); //Lime：嫩绿色 
            if (n == dz) {  // 如果果子 被吃掉了  随机一个位置 若存在于蛇身则再找一次
                while (sn.indexOf(dz = ~~(Math.random() * 400)) >= 0);  //Math.random()返回0～1之间的随机数
                draw(dz, "Yellow");  //生成黄果子
            } else  
                draw(sn.pop(), "Black");  //sn.pop()删除并返回数组的最后一个    删除最后一位
           i= setTimeout(update, 130);//  调用自身     setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达式
        }(); //没有这个括号函数无法执行
        
 ////页面样式      
 function changeColor(){
	document.getElementById("myAudio").volume = 0.2;
var color="#f00|#0f0|#00f|#880|#808|#088|yellow|green|blue|gray";
color=color.split("|");
document.getElementsByTagName("em")[0].style.color=color[parseInt(Math.random() * color.length)];
}
setInterval("changeColor()",300);