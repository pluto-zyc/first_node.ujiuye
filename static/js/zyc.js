//    获取非行间样式getStyle（元素，'属性'）
function getStyle(ele, attr) {
    if (ele.currentStyle == undefined) {
        return getComputedStyle(ele)[attr]
    }
    else {
        return ele.currentStyle[attr]
    }
}
//linner动画函数   move_linner
var timer;
function move_linner(step, end, ele, attr) {
    clearInterval(ele.timer);
    step = end - parseInt(getStyle(ele, attr)) > 0 ? step : -step;
    ele.timer = setInterval(() => {
        var ln = parseInt(getStyle(ele, attr)) + step; //最终位置
        if ((end <= ln && step > 0) || (end >= ln && step < 0)) {
            clearInterval(timer)
            ln = end;
        }
        ele.style[attr] = ln + 'px';
    }, 20);
}

// 缓冲动画函数 bufferMove（元素，{'属性':目标值}） 
function bufferMove(ele, json) {
    clearInterval(ele.timer)
    var flag;
    ele.timer = setInterval(() => {
        flag = true;
        for (attr in json) {
            if (attr == 'opacity') {
                var ln = parseFloat((getStyle(ele, attr)) * 100);
            } else {
                var ln = parseInt(getStyle(ele, attr))
            }
            var step = (json[attr] - ln) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step)
            // 定时器调用还没走到目标位置时
            if (ln != json[attr]) {
                flag = false;
            }
            if (attr == 'opacity') {
                ele.style[attr] = (ln + step) / 100;
            }
            else {
                ele.style[attr] = ln + step + 'px';
            }
        }
        if (flag) {
            clearInterval(ele.timer)
        }
    }, 30);
}



    //  原生ajax请求
    function conmentAjax(method, url, data, success) {
        var ajax = new XMLHttpRequest();
        if (method == 'get') {//get方法
            if (data) {
                data = '?' + data
            }
            ajax.open(method, url + data)
            ajax.send();
        }//get方法
        else {//post方法
            ajax.open(method, url)
            ajax.setRequestHeader('Content-type', 'appLication/x-www-form-urlLencoded');
            if (data) {//如果have
                ajax.send(data);
            } else {
                ajax.send();
            }
        }
        ajax.onreadystatechange = function () {
            if (ajax.readyState == 4 && ajax.status == 200) {
                success(ajax.responseText);
            }
        }
    }

    

    // 拖拽动画 边缘限制 碰撞检测
    function mouseMove(ele,ele2){
        ele.onmousedown = function (ev) {
        var e = window.event || ev
        var x = e.clientX - ele.offsetLeft;
        var y = e.clientY - ele.offsetTop;
        document.onmousemove = function (ev) {
            var e = window.event || ev;
            var boxx = e.clientX - x 
            var boxy = e.clientY - y 
            if(boxx<=0){
                boxx = 0 ;
            }
            if(boxy<=0){
                boxy = 0 ;
            }
            if(boxx>=document.documentElement.clientWidth - ele.clientWidth){
                boxx = (document.documentElement.clientWidth - ele.clientWidth)
            }
            if(boxy>=document.documentElement.clientHeight - ele.clientHeight){
                boxy = (document.documentElement.clientHeight - ele.clientHeight)
            }

            if(boxx>=ele2.offsetLeft-ele.offsetWidth && boxx<=center.offsetLeft+ele2.offsetWidth &&boxy>=ele2.offsetTop-ele.offsetHeight && boxy<=ele2.offsetTop+center.offsetHeight  ){
                ele2.className = 'active'
            }
            else{
                ele2.className = ''
            } 
            ele.style.left = boxx + 'px'
            ele.style.top = boxy + 'px'
                                                                            
        }
       document.onmouseup = function () {
            document.onmousemove = null;
            document.onmouseup = null;
            return false
        }
    }
    }

