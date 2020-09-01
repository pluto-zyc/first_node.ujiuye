      // 导航鼠标事件
    var hed = document.querySelector('header') 
    var bot = hed.querySelector('#bottom')
    var  box = bot.querySelectorAll('#box');
    var icon = document.getElementById('icon')
    var span = icon.querySelectorAll('span')
    // 箭头旋转及二级菜单盒子动画
    icon.parentNode.onmousemove =function(){
        icon.style.transform = 'rotate(90deg)'
        icon.style.transition= 'all .1s'
        bot.style.display = 'block'
        bufferMove(bot,{height:70})
    }
    icon.parentNode.onmouseout =function(){
        icon.style.transform = 'rotate(0deg)'
        icon.style.transition= 'all .1s' 
        bufferMove(bot,{height:0})
    }
    // 搜索框效果
    var  search_box = this.document.getElementById('search_box')
    var search_l = document.querySelector('#search-l')
    var aS = document.getElementById('lar_icon')
    aS.onmouseover = function(){
        search_l.className = 'block'
        bufferMove(search_l,{width:150})
    }
    search_box.onmouseleave =function(){
        bufferMove(search_l,{width:0})
        setTimeout(function(){
            if(parseInt(getStyle(search_l,'width')) == 0){
                search_l.className = 'none'
            }
        },1000)
    }
    var login1 = document.querySelector('#login1')
    var login2 = document.querySelector('#login2')
    var reg1 = document.querySelector('#reg1')
    var reg2 = document.querySelector('#reg2')
    if(login2.innerHTML.length > 3){
        login2.style.display = 'block';
        login1.style.display = 'none';
        reg1.style.display = 'none';
        reg2.style.display = 'block';
    }else{
        login2.style.display = 'none';
        login1.style.display = 'block';
        reg1.style.display = 'block';
        reg2.style.display = 'none';
    }
    // if(reg2.getAttribute("mv") == '退出'){
    //     login2.innerHTML = '欢迎'
    // }
    // console.log(login1,login2,reg1,reg2);
    

   
    
  