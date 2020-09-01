//首页数据的内容

let mongoose = require("mongoose");

//创建视图 限制存储数据类型
let catSchema = mongoose.Schema(
    {
        name:String,//标题
        title:String,//简介
        alt:String,//标题
        lesson:String,//简介
        price:String,
        pic:String,//图片
        time:{ //添加的时间
           type:Date,
           default:Date.now
       }
    }
)
let catmodel = mongoose.model("txts",catSchema);
//封装查询方法

function find(select,options,sel,callback)
{
    catmodel.find(select,options,sel,(err,docs)=>{
     if(!err)
     {
        callback(null,docs);
     }else
     {
        callback(err);
     }

    })

}




//封装添加方法
function create(post,callback)
{
    catmodel.create(post,(err,docs)=>{
     if(!err)
     {
        callback(null,docs);
     }else
     {
        callback(err);
     }
    })
}
//封装删除方法
function remove(post,callback)
{
    catmodel.remove(post,(err,docs)=>{
     if(!err)
     {
        callback(null,docs);
     }else
     {
        callback(err);
     }
    })
}
//封装修改方法
function update(post,callback)
{
    catmodel.update(post,(err,docs)=>{
     if(!err)
     {
        callback(null,docs);
     }else
     {
        callback(err);
     }
    })
}

module.exports=
{
    create,
    find,
    update,
    remove,

}
