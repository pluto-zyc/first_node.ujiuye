//加载框架
let express = require("express");
let app = express();
let path = require("path");

require("./libs/catmodel");

// 加载魔板引擎
let ejs = require("ejs"); 
app.set("view engine","html")
app.set("views",__dirname+"/view")

app.use(express.urlencoded({extended:false}));
//加载静态资源文件
//C:\Users\Administrator\Desktop\cd0106web\ujiuye/static/
app.use(express.static(__dirname+"/static"));
//加载上传文件目录
app.use("/upload",express.static(path.resolve(__dirname+"/upload")))
//加载404页面
app.use(express.static(__dirname+"/404"));
app.engine("html",ejs.__express);

//加载cookie-session
let cookiesession = require("cookie-session");

app.use(cookiesession({
 name:"sessionId",//session的编号
 keys:["asdasfd",["wqerty"]]
}))



// 首页加载
let routerindex = require('./controller/ControllerIndex')
app.use(routerindex)
// 用户模块
let rouUeser = require('./controller/controllerUser')
// app.use(rouUeser)
app.use('/user',rouUeser)


//规划404页面
app.use((req,res,next)=>{
    res.render("404.html")
  })
app.listen(5111,()=>{
   console.log('成功');
})