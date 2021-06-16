const mongoose=require('mongoose');
const PostSchema=mongoose.Schema({
    name:{//书名
        type:String,
        required:true,
        unique: true
    },
    describe:{//描述
        type:String,
        required:true
    },
    content:{//内容
        type:String,
    },
    catalogues:{//目录
        type:Array,
    },
    pages:{//
        type:Array,
    },
});

module.exports=mongoose.model('Book',PostSchema);