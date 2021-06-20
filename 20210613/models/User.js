const mongoose=require('mongoose');
const PostSchema=mongoose.Schema({
    user_name:{
        type:String,
        required:true,
        unique: true
    },
    user_pwd:{
        type:String,
        required:true
    },
    time:{
        type:Number,//用秒表示
        default:0,
        required:true
    }
});

module.exports=mongoose.model('User',PostSchema);