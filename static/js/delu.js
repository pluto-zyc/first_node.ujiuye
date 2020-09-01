// 手机号验证部分
var deluBox = document.querySelector('.delu')
var pt1 = deluBox.querySelector('.pt1')
var t1 = deluBox.querySelector('#t1')
var reg1 = /^1[3-9]\d{9}$/;
pt1.onblur = function () {
    var val1 = pt1.value;
    val1 = val1.trim();
    if (val1) {
        if (reg1.test(val1)) {
            t1.style.display = 'block';
            t1.className = 'select';
            t1.innerHTML = '验证成功'
        }
        else {
            t1.style.display = 'block';
            t1.className = 'selected'
            t1.innerHTML = '账号格式错误'
        }
    }
    else {
        t1.style.display = 'block';
        t1.className = 'selected';
        t1.innerHTML = '手机号不能为空'
    }
}
// 密码部分
var pt2 = deluBox.querySelector('.pt2')
var t2 = deluBox.querySelector('#t2')
var reg2 = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
var btnS = document.getElementById('dengluS')
pt2.onblur = function(){
    var val2 = pt2.value;
    val2 = val2.trim();
    if (val2) {
        if (reg2.test(val2)) {
            t2.style.display = 'block';
            t2.className = 'select';
            t2.innerHTML = '验证成功'
     if(t1.innerHTML == '验证成功',t2.innerHTML == '验证成功'){
                t1.style.display = 'none'
                t2.style.display = 'none'
               // form.reset();
               btnS.disabled = '';
            }
            else{
                btnS.disabled = 'disabled' 
            }
        }
        else {
            t2.style.display = 'block';
            t2.className = 'selected'
            t2.innerHTML = '请输入8—16字母加数字组合密码'
        }
    }
    else {
        t2.style.display = 'block';
        t2.className = 'selected';
        t2.innerHTML = '密码不能为空'
    }
}
 
   
//    注册按钮验证成功
   
 