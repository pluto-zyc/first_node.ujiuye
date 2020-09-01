let express = require("express");
let router = express.Router();

let indexmodel = require("../model/indexModel");
const { isValidObjectId } = require("mongoose");

router.use((req,res,next)=>{
  next();
})
let uname=""
//加载首页
router.get("/index",(req,res)=>{
    // console.log(req.session.username);
   
   if( req.session.username){
    uname ='欢迎' + req.session.username;
   }else{
     uname ='欢迎'
   }
     //查询数据到页面中
     indexmodel.find({},{},{limit:9,sort:{time:-1}},(err,result)=>{
      // console.log(result);
      res.render("index",{uname:uname,result:result});
     }) 
})
let  ObjectId = indexmodel.ObjectId
// 加载详情页
router.get('/xq',(req,res)=>{
  let name = req.query.id
  // 设计详情页面
  indexmodel.find({"name":name},{},{},(err,doc)=>{
    // console.log(doc);
    res.render("xq",{doc:doc}); 
   })

})



module.exports = router
// module.exports = uname
