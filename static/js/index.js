window.onload = function () {
     // 返回顶部效果
 var cebian = document.getElementById('cebian')
 var cebian_a = cebian.children[3];
 var banner = document.querySelector('.banner')
 var bannerTop = banner.offsetTop + banner.offsetHeight;
//  显示影藏回到顶部按钮
 window.onscroll = function(){
     // 计算顶部卷去到banner部分 和banner到顶部距离作比较 
     if(document.documentElement.scrollTop>=bannerTop){
         cebian_a.style.display = 'block'
     }
     else{
         cebian_a.style.display = 'none'
     }
 }
 // 点击回到顶部
 cebian_a.onclick =function(){
     document.documentElement.scrollTop = 0;
 }
    // 轮播部分
    // 请求数据banner
    conmentAjax('get','data/ujiuye1.json','',function(e){
        var sel1 = JSON.parse(e);
        var sel = sel1.banner;
        var lunboUl = document.querySelector('#bannerUl')
        var banner = document.querySelector('.banner')
        var idxUl = document.querySelector('#idxUl')
        //    渲染banner数据
        lunboUl.style.width = sel.length * 1349 + 'px';//ul宽度
        for (var i = 0; i < sel.length; i++) {
            var li_idx = document.createElement('li')
            var li = document.createElement('li')
            li.innerHTML = '<a href="pages/play.html"><img src="' + sel[i].img + '" alt=""></a>'
            lunboUl.appendChild(li)
            idxUl.appendChild(li_idx);
        }
        // 自动轮播
        var idxLi = idxUl.querySelectorAll('li')
        var lunboLi = lunboUl.querySelectorAll('li')
        var e = 0
        idxLi[0].className = 'active_bg'
        function auto() {
            e++;
            if (e > sel.length) {
                e = 1;
                lunboUl.style.left = '0px';
            }
            //计算终点值
            var end = -e * 1349
            //做动画
            bufferMove(lunboUl, { left: end });
            //  序号跟随轮播亮起
            for (var i = 0; i < idxLi.length; i++) {
                idxLi[i].className = '';
            }
            if (e == sel.length) {
                idxLi[0].className = 'active_bg';
            }
            else {
                idxLi[e].className = 'active_bg';
            }
        }
        var timer = setInterval(auto, 4000)
        // 获取左右箭头
        var leftArr = document.querySelector('#leftArr')
        var rightArr = document.querySelector('#rightArr')
        // 鼠标移入停止鼠标移出继续
        lunboUl.parentNode.onmouseover = function () {
            clearInterval(timer);
            leftArr.style.display = 'block'
            rightArr.style.display = 'block'
        }
        lunboUl.parentNode.onmouseout = function () {
            timer = setInterval(auto, 4000)
            leftArr.style.display = 'none'
            rightArr.style.display = 'none'  
        }
        // //  无缝轮播：
        var liS = lunboUl.firstElementChild.cloneNode(true);
        lunboUl.appendChild(liS);
        lunboUl.style.width = (sel.length + 1) * 1349 + 'px'
        // 鼠标移入对应小盒子 显示对应banner
        for (var j = 0; j < idxLi.length; j++) {
            idxLi[j].index = j;
            //    鼠标经过bgLi
            idxLi[j].onmouseover = function () {
                var end = -this.index * 1349 ;
                bufferMove(lunboUl, { left: end })
                for (var m = 0; m < idxLi.length; m++) {
                    idxLi[m].className = '';
                }
                this.className = 'active_bg';
                e = this.index;
            }
        }
    //     //    点击下一个按钮
    //     // 切换到下一章图片；
        rightArr.onclick = function () {
            auto();
        }
        leftArr.onclick = function () {
            e -= 2;
    //         //判断：如果当前n小于-1， 就证明当前正在显示第0张图 不能继续上一张了
            if (e < -1) {
                e = -1
            }
            auto();
        }  
    // })
    // 热门直播部分
    // 获取热门直播左边边ul和li
    var ul_hot = document.getElementById('ul_hot')
    var ul_hotLi = ul_hot.querySelectorAll('li')
    console.log(ul_hotLi);
    // 获取热门直播右边ul和li
    var ul_hot_r = document.getElementById('ul_hot_r')
    var ul_hot_rLi = ul_hot_r.querySelectorAll('li')  
    for(var j=0;j<ul_hot_rLi.length;j++){
        ul_hot_rLi[j].index = j
        ul_hot_rLi[j].onmouseover =function(){
            for(k=0;k<ul_hotLi.length;k++){
                ul_hotLi[k].className = 'none'
            }
            ul_hotLi[this.index].className = 'block'
        }
    }
    //   精品网课部分
    // conmentAjax('get', 'data/ujiuye1.json', '', function (e) {
        var sel2 = JSON.parse(e)
        var sel3 = sel1.classOnline;
        var selectorS = document.getElementById('selectorS')
        var tab = document.querySelector('.tab')
        for (var i = 0; i < sel3.length; i++) {
            // 渲染精品网课导航部分
            var span = document.createElement('span')
            span.innerHTML = sel3[i].name
            selectorS.appendChild(span)
            // 主体部分
            var ul = document.createElement('ul')
            // console.log(sel[i]);
            // 把sel数组中的每个对象加给ul作为属性
            ul.data = sel3[i]
            ul.className = 'tab_ul_hot'
            tab.appendChild(ul);
        }
        // 渲染精品网课主体部分
        var tab_ul_hot = document.querySelectorAll('.tab_ul_hot')
        for (var w = 0; w < tab_ul_hot.length; w++) {
            // 创建li
            var dataS = tab_ul_hot[w].data;
            for (var k = 0; k < dataS.details.length; k++) {
                var li = document.createElement('li')
                li.innerHTML = '<img src="' + dataS.details[k].img + '" alt=""><a href="">' + dataS.details[k].title + '</a><em>' + dataS.details[k].price + '</em><span>' + dataS.details[k].lesson + '</span>'
                tab_ul_hot[w].appendChild(li)
            }
        }
        // 做选项卡
        // 获取所有菜单span
        var span_online = selectorS.querySelectorAll('span');
        for (var s = 0; s < span_online.length; s++) {
            span_online[s].indexS = s
            tab_ul_hot[0].className = 'block'//默认显示
        span_online[s].addEventListener('mouseover',function(){
            for (var d = 0; d < tab_ul_hot.length; d++) {
                tab_ul_hot[d].className = 'none'
            }
            tab_ul_hot[this.indexS].className = 'block'
        }) 
        }
    // })
    //   免费课程部分
    // conmentAjax('get','data/ujiuye1.json','',function(e){
        var sel4 = JSON.parse(e)
        var sel5 = sel1.freeLesson;
        // 渲染免费课程导航部分
        var selector1 = document.getElementById('selector1')
        var tab1 = document.querySelector('.tab1')
        // for (var i = 0; i < sel5.length; i++) {
        //     // 渲染免费网课导航部分
        //     var span = document.createElement('span')
        //     span.innerHTML = sel5[i].name
        //     selector1.appendChild(span)
        //     // 主体部分
        //     var ul = document.createElement('ul')
        //     // console.log(sel[i]);
        //     // 把sel数组中的每个对象加给ul作为属性
        //     ul.data = sel5[i]
        //     ul.className = 'tab_ul1'
        //     tab1.appendChild(ul);
        // }
        // 渲染免费网课主体部分
        var tab_ul1 = document.querySelectorAll('.tab_ul1')
        for (var j = 0; j < tab_ul1.length; j++) {
            var contentUl1 = tab_ul1[j]
            // 创建li
            // 拿到所有ul的属性集合
            var dataS = tab_ul1[j].data;
            for (var k = 0; k < dataS.details.length; k++) {
                var li = document.createElement('li')
                li.innerHTML = '<img src="' + dataS.details[k].img + '" alt=""><a href="">' + dataS.details[k].title + '</a><em>' + dataS.details[k].price + '</em><span>' + dataS.details[k].lesson + '</span>'
                contentUl1.appendChild(li)
            }
        }
        // 免费课程选项卡
        var span_online = selector1.querySelectorAll('span')
        var tab_ul = tab1.querySelectorAll('ul')
        for (var m = 0; m < span_online.length; m++) {
            span_online[m].index = m
            tab_ul[0].className = 'block'//默认显示
            span_online[m].onmouseover = function () {
                //    干掉所有人
                for (var num = 0; num < tab_ul.length; num++) {
                    tab_ul[num].className = 'none'
                }
                tab_ul[this.index].className = 'block'

            }
        }
    // })
    //   就业面授部分
    // conmentAjax('get','data/ujiuye1.json','',function(e){
        var sel6 = JSON.parse(e)
        var sel7 = sel1.faceToFace;
        // 渲染就业面授导航部分
        var selector2 = document.getElementById('selector2')
        var tab2 = document.querySelector('.tab2')
        for (var i = 0; i < sel7.length; i++) {
            // 渲染精品网课导航部分
            var span = document.createElement('span')
            span.innerHTML = sel7[i].name
            selector2.appendChild(span)
            // 主体部分
            var ul = document.createElement('ul')
            // console.log(sel[i]);
            // 把sel数组中的每个对象加给ul作为属性
            ul.data = sel7[i]
            ul.className = 'tab_ul2'
            tab2.appendChild(ul);
        }
        // 渲染就业面授主体部分
        var tab_ul2 = document.querySelectorAll('.tab_ul2')
        for (var j = 0; j < tab_ul2.length; j++) {
            var contentUl = tab_ul2[j]
            // 创建li
            // 拿到所有ul的属性集合
            var dataS = tab_ul2[j].data;
            for (var k = 0; k < dataS.details.length; k++) {
                var li = document.createElement('li')
                li.innerHTML = '<img src="' + dataS.details[k].img + '" alt=""><a href="">' + dataS.details[k].title + '</a><em>' + dataS.details[k].price + '</em><span>' + dataS.details[k].lesson + '</span>'
                contentUl.appendChild(li)
            }
        }
        // 做选项卡
        var span_online = selector2.querySelectorAll('span')
        for (var m = 0; m < span_online.length; m++) {
            span_online[m].index = m
            tab_ul2[0].className = 'block'//默认显示
            span_online[m].onmouseover = function () {
                //    干掉所有人
                for (var num = 0; num < tab_ul2.length; num++) {
                    tab_ul2[num].className = 'none'
                }
                tab_ul2[this.index].className = 'block'
            }
        }
    })
    // 底部链切换
    var dlS = document.querySelector('#dl')
    var dt = dlS.querySelector('dt');
    var dd = dlS.querySelectorAll('dd')
    dd[1].style.display = 'none'
    for(var b=0;b<dt.children.length;b++){
        dt.children[b].index = b
        dt.children[b].onmouseover =function(){
            for(var a=0;a<dd.length;a++){
                dt.children[a].className = ''
                dd[a].style.display = 'none'
            }
            this.className = 'selected'
            dd[this.index].style.display = 'block';
        }
    }
}