
 window.onload =function(){
 var video = document.getElementById('video')
  var source = document.getElementById('source1')
  
var ul_play = document.getElementById('ul-play')
li_play = ul_play.querySelectorAll('li')
//   鼠标移入每个选项li 对应改变source的sec路径
var arr = ['../media/first.mp4','../media/last.mp4','../media/first.mp4','../media/last.mp4','../media/first.mp4','../media/last.mp4' ]
// 默认播放
  source.src = arr[0];     
  video.src = arr[0]; 
  // 默认显示默认播放
  // li_play[0].children[1].style.background =  'url(../images/bofang.png) no-repeat right 5px'
  // li_play[0].className = 'play_bg'
  // 默认线路部分
  // 获取控制线路 第一个li
   var xianluLi = document.getElementById('xianluLi');
   // 获取控制线路 p
   var xianluP = xianluLi.querySelector('#xianlu');
  //  获取线路a标签集合
   var xianluA = xianluP.querySelectorAll('a');
   //  线路默认显示
  xianluA[0].className = 'xianlu_bg'
  // 鼠标移入事件
  xianluLi.onmouseover = function(){
    xianluP.style.display = 'block';
    for(var i=0;i<xianluA.length;i++){
      xianluA[i].onclick =function(){
        for(var j=0;j<xianluA.length;j++){
              xianluA[j].className = ''
            }
        this.className='xianlu_bg'
        xianluP.style.display = 'none';
      }
     
    }
  }  
  xianluP.onmouseout = function(){
    xianluP.style.display = 'none';
  }
  // 倍速播放部分
  var beisuLi = document.getElementById('beisuLi');
  var beisuP = beisuLi.querySelector('#beisuP');
  var beisuA = beisuP.querySelectorAll('a');
  //  获取倍速按钮内容
  var beisu_txt = beisuLi.querySelector('#beisu_txt');
 
  beisuA[0].className = 'beisu_bg'
  // 倍速播放部分鼠标移入li p显示
  beisuLi.onmouseover = function(){
    beisuP.style.display = 'block';
    for(var i=0;i<beisuA.length;i++){
      beisuA[i].index = i;
      beisuA[i].onclick =function(){
        for(var j=0;j<beisuA.length;j++){
              beisuA[j].className = ''
            }
        this.className='beisu_bg';
        beisuP.style.display = 'none';
        switch(this.index){
          case 0:beisu_txt.innerHTML = '0.5倍速';
          break;
          case 1:beisu_txt.innerHTML = '0.8倍速';
          break;
          case 2:beisu_txt.innerHTML = '1.0倍速';
          break;
          case 3:beisu_txt.innerHTML = '1.5倍速';
          break;
          case 4:beisu_txt.innerHTML = '1.8倍速';
          break;
          default:beisu_txt.innerHTML = '2.0倍速'; 
        }
      }
      
    }
  }  
  // 倍速播放部分鼠标移出li p隐藏
  beisuP.onmouseout = function(){
    beisuP.style.display = 'none';
  }
  // 切换白天黑夜部分
  // 获取palay包裹盒子
  // 记录默认选中的播放列表项
  var b= li_play[0];
   var playS = document.querySelector('.play')
  // 获取切换按钮
  var dayS = document.getElementById('dayS');
  var dayS_a = dayS.querySelector('a');
  //  获取播放列表目录头部
    var mulu = document.getElementById('mulu')
    var mulu_h3 = mulu.querySelector('h3')
    var mulu_h3_i = mulu_h3.querySelector('i')
  // 获取midea盒子
  var media = document.querySelector('.media')
  //  点击白天模式按钮变天
  var tag = true;
   dayS.onclick = function(){
     playS.data = tag;
     if(playS.data){  
      //  修改按钮内容雪碧图
      this.children[0].innerHTML = '夜晚模式';
      this.children[0].style.background = 'url(../images/yue.png) no-repeat 2px center'
      //  play盒子
      playS.style.background = '#f7f7f7';
      //包裹盒子
      media.style.background = '#fff';
      // 目录头部边框
      mulu_h3_i.className = 'mulu_bor';
      // 目录
      mulu.style.background  = '#fff';
      mulu_h3.style.background  = '#fff';
      // 播放列表
      ul_play.style.background  = '#fff';
      b.className = 'play_bg1'
      tag = false;
       // 播放列表li部分
   for(var c = 0;c < li_play.length;c++){
      //  播放列表li所有人下边框变色
      li_play[c].style.borderBottomColor = '#eee'
    // 获取背景盒子集合
    li_play[c].data = c
    li_play[c].addEventListener('click',function(){
      // 干掉所有人
      for(var g=0;g<li_play.length;g++){
        li_play[g].className = ''
      }
      this.className = 'play_bg1'
  })
}
     }else{
        //  修改按钮内容雪碧图
      this.children[0].innerHTML = '白天模式'
      this.children[0].style.background = 'url(../images/zg_shipincz04.png) no-repeat 2px center'
      b.className = 'play_bg'
      playS.style.background = '#292929';
       //包裹盒子
       media.style.background = '#292929';
       // 目录头部边框
      mulu_h3_i.className = '';
        // 目录
      mulu.style.background  = '#3f3f3f';
      mulu_h3.style.background  = '#323232';
       // 播放列表
      ul_play.style.background  = '#1f1f1f';
      //  变回所有人下边框下边框 
      for(var c = 0;c < li_play.length;c++){
        li_play[c].style.borderBottomColor = '#373737';
        li_play[c].data = c
    li_play[c].addEventListener('click',function(){
      // 干掉所有人
      for(var g=0;g<li_play.length;g++){
        li_play[g].className = ''
      }
      this.className = 'play_bg';
  })     
      }
      // 改变状态
      tag = true
     }
   }
    // 播放列表li部分
    
   for(var c = 0;c < li_play.length;c++){
    // 获取背景盒子集合
    li_play[c].data = c
    li_play[c].addEventListener('click',function(){
      source.src = arr[this.data];     
      video.src = arr[this.data];   
      // 干掉所有人color  bg
      for(var g=0;g<li_play.length;g++){
        li_play[g].style.background =  'url(../images/bofang1.png) no-repeat 305px center'
        li_play[g].className = ''
      }
      this.style.background =  'url(../images/bofang.png) no-repeat 305px center'
      this.className = 'play_bg'
      b = this;
  }) 
  }


//   相关课程数据渲染
  conmentAjax('get','../data/ujiuye1.json','',function(e){
    var sel1 = JSON.parse(e);
    var sel = sel1.correlation
    console.log(sel);
    
    var list_lesson = document.getElementById('list_lesson')
    for(var i =0;i<sel.length;i++){
        var dl = document.createElement('dl')
        dl.innerHTML = '<dt><a href=""><img src="'+sel[i].img+'" alt=""> </a></dt><dd><span>'+sel[i].title+'</span><em>'+sel[i].currentPrice+'</em><i>'+sel[i].originalPrice+'</i><a>'+sel[i].try+'</a></dd>';
        list_lesson.appendChild(dl)
    }  
  })
//   评论部分
// 获取评论个数（当前评论个数）
  var text_num = document.getElementById('text_num');
//   评论打星星数和输入框内容
  var p_bg= document.getElementById('p_bg');
  var text_txt = document.getElementById('text_txt')
  var xinxin = p_bg.querySelectorAll('span')
//   获取发表按钮和内容盒子（发表按钮及text）
 var text_btn = document.getElementById('text_btn')
 var text_txt = document.getElementById('text_txt')
//    获取匿名评论选中按钮 (是否匿名评论)
var text_pt = document.getElementById('text_pt')
//   获取包裹评论的ul、(追加li)
var textUl = document.getElementById('textUl')
// 获取评论者名称盒子
var idS = document.getElementById('idS');
//   发布评论内容盒子
  var h4 = document.getElementById('h4')
//   评论发布时间
  var date = document.getElementById('date')
  var num_span = document.getElementById('num')
   var n = 2;//记录评论条数
   var num = 0;//记录星星数
//    点击星星改变雪碧图
for(var j =0;j<xinxin.length;j++){
    xinxin[j].index = j
    xinxin[j].onclick = function(){
       for(var k = 0;k<= this.index;k++){
        xinxin[k].style.background = 'url(../images/xinxin1_03.jpg) no-repeat 0 0'
       }
       for(var m = this.index+1;m<xinxin.length;m++){
        xinxin[m].style.background = 'url(../images/zg_shipincz06.png) no-repeat 0 0'
       }
      num = this.index +1 ; //获取星星数
    }
}
   text_num.innerHTML = n;
  //  获取提示框
   var tishi = document.getElementById('tishi')
// 做输入框字数限制
function ato(){
  var val = text_txt.value
  num_span.innerHTML = val.length
   if(val.length>200){
    text_txt.value = text_txt.value.substring(0,200);
   }
 }
   text_txt.addEventListener('keyup',ato)
//    点击发表按钮获取text内容并创建li
text_btn.onclick = function(){//发表按钮
    //    获取内容
    var val = text_txt.value
    val = val.trim();
     var reg = /^\s*$/
    n++;
       var txt = null
      //  判断输入框有内容且小星星被点击
    if(num > 0 && val.length>0){
      // 干掉所有星星
      for(var v = 0;v<xinxin.length;v++){
        xinxin[v].style.background = 'url(../images/zg_shipincz06.png) no-repeat 0 0'
       }
       text_txt.value = ''
       num_span.innerHTML = 0;
       text_num.innerHTML = n;//记录评论条数
      // 创建评论li
    // 获取是否匿名
    if(text_pt.checked == true){
      txt = '匿名用户：'
  }
  else{
      txt = '超级棒棒糖：'
  }
  // 获取当前时间
  var data =  new Date()
  // 时间
  var year = data.getFullYear()
  var month = data.getMonth() + 1;
  var day = data.getDate();
  month =  month>10?month:'0'+month
  day =  day>10?day:'0'+day
  var time = year+'-'+month+'-'+day

  var li = document.createElement('li')
  li.innerHTML = `
  <div id="top">
      <img src="../images/yonghu.png" alt="">
  </div>
  <div id="bottom">
     <div id="bottom_top">
        <em id="idS">${txt}</em>
          <p id="p_bg1">

          </p>
     </div>
     <h4 id="h4">${val}</h4>
     <p id="tuo">
         和他一起学
         <span>
             <a href="">
              03－MySQL认知与使用
             </a>
         </span>
         
     </p>
     <b id="date">${time}</b>
  </div>
`
//   动态获取评论发布星星数的盒子
var xinxin_box1 = li.querySelector('#p_bg1')
   // 动态创建星星个数添加到评论
   for(var i = 0;i<num;i++){
      var xinxin_span = document.createElement('span')
      xinxin_box1.appendChild(xinxin_span)
  }
textUl.appendChild(li);
num= 0;//重置记录的星星数。一遍下一轮添加评论
    }
    // 判断输入为空且都为空格弹出提示框
    else if(val.length==0 && reg.test(val)){
      tishi.innerHTML = '请输入评论内容'
      tishi.className = 'block'
      var outTimer = setTimeout(function(){
        tishi.className = 'none'
        },3000)
    }
    // 判断小星星为零弹出提示框
    else  if(num == 0){
      tishi.innerHTML = '请点击小星星'
      tishi.className = 'block'
      var outTimer = setTimeout(function(){
        tishi.className = 'none'
        },3000)
    }
 } 
}