    // 手机号验证部分
    var deluBox = document.querySelector('.zhuce')
    var pt = deluBox.querySelectorAll('input')
    var tS = deluBox.querySelectorAll('t')
    var reg1 = /^1[3-9]\d{9}$/;
    pt[0].onblur = function () {
        var val1 =  pt[0].value;
        val1 = val1.trim();
        if (val1) {
            if (reg1.test(val1)) {
                tS[0].style.display = 'block';
                tS[0].className = 'select';
                tS[0].innerHTML = '验证成功'
            }
            else {
                tS[0].style.display = 'block';
                tS[0].className = 'selected'
                tS[0].innerHTML = '账号格式错误'
            }
        }
        else {
            tS[0].style.display = 'block';
            tS[0].className = 'selected';
            tS[0].innerHTML = '手机号不能为空'
        }
    }
    // 密码部分
    var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    pt[1].onblur = function(){
        var val2 =  pt[1].value;
        val2 = val2.trim();
        if (val2) {
            if (reg2.test(val2)) {
                tS[1].style.display = 'block';
                tS[1].className = 'select';
                tS[1].innerHTML = '验证成功'
            }
            else {
                tS[1].style.display = 'block';
                tS[1].className = 'selected'
                tS[1].innerHTML = '请输入8—16字母加数字组合密码'
            }
        }
        else {
            tS[1].style.display = 'block';
            tS[1].className = 'selected';
            tS[1].innerHTML = '密码不能为空'
        }
    }
    // 确认密码部分
    pt[2].onblur = function(){
        var val3 = pt[2].value;
        var val2 = pt[1].value
        val3 = val3.trim();
        val2 = val2.trim();
        if(val3 &&val2 == val3){
                if (reg2.test(val3)) {
                    tS[2].style.display = 'block';
                    tS[2].className = 'select';
                    tS[2].innerHTML = '验证成功'
                }
        }else{
            tS[2].style.display = 'block';
            tS[2].className = 'selected';
            tS[2].innerHTML = '两次输入密码不一致/密码不能为空'
        }
    }
    // 验证码部分
    var sumArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','v','z',1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','V','Z']
    var strong = document.getElementById('strong')
    var num1= Math.floor(Math.random()*32);
        var num2= Math.floor(Math.random()*32);
        var num3= Math.floor(Math.random()*32);
        var num4= Math.floor(Math.random()*32);
        var num5= Math.floor(Math.random()*32);
        strong.innerHTML =sumArr[num1]  + sumArr[num2] + sumArr[num3] + sumArr[num4] + sumArr[num5];
    strong.onclick = function(){
        var num1= Math.floor(Math.random()*32);
        var num2= Math.floor(Math.random()*32);
        var num3= Math.floor(Math.random()*32);
        var num4= Math.floor(Math.random()*32);
        var num5= Math.floor(Math.random()*32);
        strong.innerHTML =sumArr[num1]  + sumArr[num2] + sumArr[num3] + sumArr[num4] + sumArr[num5];
        
    }
    pt[3].onblur = function(){
        var valTxt = strong.innerHTML;
        var val = pt[3].value;
        if(val){
            if(val == valTxt){
                tS[3].style.display = 'block'
                tS[3].className = 'select'
                tS[3].innerHTML = '验证成功'
            }
            else{
                tS[3].style.display = 'block'
                tS[3].className = 'selected'
                tS[3].innerHTML = '验证失败'
            }
        }else{
            tS[3].style.display = 'block'
                tS[3].className = 'selected'
                tS[3].innerHTML = '请输入验证码'
        }
    }
    // 短信验证部分
    var iS = deluBox.querySelector('#ii')
    var timerS = null
    iS.onclick = function(){
        clearInterval(timerS)
        var num1= Math.floor(Math.random()*9);
        var num2= Math.floor(Math.random()*9);
        var num3= Math.floor(Math.random()*9);
        var num4= Math.floor(Math.random()*9);
        var n = 10
        function auto() {
            n--;
            if(n==0){
                iS.disabled = false
                clearInterval(timerS)
                n = 10
                iS.innerHTML = '免费获取短信';
                iS.style.marginLeft = '-92px'
            }
            else{
                iS.disabled = true
                iS.style.marginLeft = '-108px'
                n = n<10?'0'+ n : n
               iS.innerHTML = n + 's后可再次获取'
            }
        }
        auto();
         timerS = setInterval(auto, 1000);
        setTimeout(function(){
            pt[4].value = num1.toString() + num2 + num3 + num4;
        },3000)
        
    }
    pt[4].onblur = function(){
        var valTxt = iS.innerHTML;
        var val = pt[4].value;
        val = val.trim();
        val = Number(val);
        var regM = /^[0-9]{4}$/
        if(val){
            if(regM.test(val)){
                tS[4].style.display = 'block';
                tS[4].className = 'select'
                tS[4].innerHTML = '验证成功'
            }
            else{
                tS[4].style.display = 'block'
                tS[4].className = 'selected'
                tS[4].innerHTML = '验证失败'
            }
        }
        else{
            tS[4].style.display = 'block'
                tS[4].className = 'selected'
                tS[4].innerHTML = '请输入验证码'
        }
        console.log(denglu_btn.children[0]);
        
        // 做提交按钮切换
     var succ= document.getElementById('succ');
     var form = document.getElementById('form');
    //  denglu_btn.onclick = function(){
         if(tS[0].innerHTML == '验证成功',tS[1].innerHTML == '验证成功',tS[2].innerHTML == '验证成功',tS[3].innerHTML == '验证成功',tS[4].innerHTML == '验证成功'){
             tS[0].style.display = 'none'
             tS[1].style.display = 'none'
             tS[2].style.display = 'none'
             tS[3].style.display = 'none'
             tS[4].style.display = 'none'
            succ.style.display = 'block';
            // form.reset();
            denglu_btn.type = 'submit';
            denglu_btn.disabled = '';
            console.log(denglu_btn.children[0].herf);
            
            setTimeout(function(){
                succ.style.display = 'none'
            },5000)
         }
         else{
            denglu_btn.disabled = 'disabled';
         }
    //  }
    }

    
     
     


  


