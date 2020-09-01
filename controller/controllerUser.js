let express = require("express");
let router = express.Router();

const crypto = require('crypto')
const secret = 'qewriuoyusasfdsjh';
//加载model层
let indexModel = require("../model/indexModel");
let userModel = require("../model/userModel");
// let ControllerIndex = require('../controller/ControllerIndex')

let path = require('path')
let fs = require("fs");

//文件域解析
let formidable = require("formidable");

//加载uuid 生成时间戳+随机数
let uuid = require("uuid").v1();

//判断是否登录

router.use((req,res,next)=>{
    //排除登录和注册页面
    // console.log(req.session.username);
    if(req.url == "/delu" || req.url=="/zhuce")
    {
       console.log("111");
       next();
    }
    else if(!req.session.username)
     {
       return res.render("tip",{
           wait:"2",
           content:"你未登录，请先登录",
           href:"/user/delu"
         })
     }else
     {
       next();
     }
   })


// 退出登录功能
router.get('/tip',(req,res)=>{
  //  req.body = null
  let a = '退出'
  req.session = null;
if(req.session == null){
  return res.render("tip",{
    wait:"2",
    content:"你未登录，请先登录",
    href:"/user/delu"
  })
}
res.render("delu");
})


//加载登录  127.0.0.1:3000/user/login
router.get("/delu",(req,res)=>{
  res.render("delu");
})




 //登录数据处理
 router.post("/delu",(req,res)=>{
   
    //获取文本框里面输入值
    let  tel = req.body.tel
    let  password = req.body.password

    //对文本框密码进行加密
    password = crypto.createHmac('sha256', secret)
    .update(password).digest('hex');

    //判断用户名是否在数据库中存在
    userModel.find({tel},{},{},(err,result)=>{

     if(!result.length)
     {
        return res.render("tip",{
            wait:"2",
            content:"该用户名不存在，请注册",
            href:"/user/zhuce"
          }) 
     }
     //密码匹配
     if(password != result[0].password)
     {
        return res.render("tip",{
            wait:"2",
            content:"你输入的密码不正确，请从新输入",
            href:"/user/delu"
          })
     }
    //用session记住登录用户名
    req.session.username = tel;
     //登录成功 
     return res.render("tip",{
        wait:"2",
        content:"登录成功",
        href:"/index"
      })

    })
})
// router.get('/index',(req,res)=>{})

//注册 只是页面的加载
router.get("/zhuce",(req,res)=>{
    res.render("zhuce");
})


//上传页面加载
router.get("/add",(req,res)=>{

  res.render("add.html");

})

//上传加载数据处理
router.post("/add",(req,res)=>{
   //数据处理
   let form = new formidable.IncomingForm();
   
   form.uploadDir = __dirname; //存储路径跨磁盘

   form.parse(req,function(err,fildes,files){
     //console.log(files);
     let uploadfile = files.pic;
     //console.log(uploadfile);
     //文件名更名
     let extname = path.extname(uploadfile.name);
     //54cc2a60-c250-11ea-96e6-2b6f419440ca.jpg
     let pathname = uuid+extname;
     //console.log(pathname);

     //获取原来的上传路径
     let oldpath = uploadfile.path;
    // console.log(oldpath);
    
     //制定一个新的路径
     //c:\Users\Administrator\Desktop\cd0106web\newblog\Controller\upload
     let newpath = path.join(__dirname,"..","upload",pathname);
    //  console.log(newpath);
     
     fs.rename(oldpath,newpath,(err)=>{

      if(err)
      {
        return res.render("tip",{
          wait:"2",
          content:"上传失败",
          href:"/index"
        })
      }
      else
       {
         //console.log("上传成功");
         //将图片名字存储到数据库中
         fildes.pic = pathname;
         indexModel.create(fildes,(err,result)=>{ 
          return res.render("tip",{
            wait:"2",
            content:"内容提交成功",
            href:"/index"
          })
         })
       }
     })
   })
})

//处理数据提交
router.post("/zhuce",(req,res)=>{
    //获取表单提交的内容
    let tel = req.body.tel 
    req.body.password = crypto.createHmac('sha256', secret)
    .update(req.body.password).digest('hex');
    
//    进行数据库 查询
userModel.find({tel},{},{},(err,result)=>{
    if(result.length)
    {
       return res.render("tip",{
           wait:"2",
           content:"该用户名已存在，请登录",
           href:"/user/delu"
         }) 
    }   
    // 把获取的内容存放到数据库中
    userModel.create(req.body,(err,result)=>{
       if(err)
       {
       return res.render("tip",{
         wait:"2",
         content:"注册失败",
         href:"/user/zhuce"
       }) 
       }else
       {
           return res.render("tip",{
               wait:"2",
               content:"注册成功",
               href:"/user/delu"
             })      
       }
     })
   
    })
    return res.render("tip",{
        wait:"2",
        content:"注册成功",
        href:"/user/delu"
      })  
   })


module.exports = router