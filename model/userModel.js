let mongoose = require("mongoose");


//创建视图 限制存储数据类型
let catSchema = mongoose.Schema(
    {
       tel:String,
       password:String,
       regtime:{
           type:Date,
           default:Date.now
       }
    }
)

let catmodel = mongoose.model("users",catSchema);

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

module.exports=
{
    create,
    find
  

}



