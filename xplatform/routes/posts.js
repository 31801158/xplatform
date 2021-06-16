const express=require('express');
const router=express.Router();
const User=require('../models/User')

router.get('/',async(req,res)=>{
    try{
        const posts=await User.find().exec();
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }
});
router.get('/specific',async(req,res)=>{
    res.send('we are on specific post');
});

//按id查询
router.get('/findbyid/:postId',async(req,res)=>{
    try{
        console.log(req.params.postId);
        const post=await User.findById(req.params.postId);
        res.json(post);//设置返回的内容
    }catch(err){
        res.json({message:err});
    }
});
//post注册
const bodyParser=require('body-parser');
var jsonParser = bodyParser.json()
router.post('/',jsonParser,async(req,res)=>{
    console.log(req.body);
    const post=new User({
        user_name:req.body.user_name,
        user_pwd:req.body.user_pwd
    });
    try{
        const savePost=await post.save().exec();
        res.json(savePost);
    }
    catch(err){
        res.json({message:err});
    }
});

//删除一条post
// router.delete('/:postId',async(req,res)=>{
//     try{
//         const removePost=await User.remove({_id:req.params.postId});
//         res.json(removePost);
//     }
// catch(err){
//     res.json({message:err});

// }
// });
//更新
// router.patch('/:postId',jsonParser,async(req,res)=>{
//     console.log(req.body);
//     try{
//         const updatePost=await User.updateOne(
//             {_id:req.params.postId},
//             {$set:{title:req.body.title}},
//             {$set:{description:req.body.description}}
//             );
//             res.json(updatePost)
//     }catch(err){
//         res.json({message:err});
//     }
// });
//登录
router.post('/login',jsonParser,async(req,res)=>{
    try{
        let userInfo = req.body
        let userName = userInfo.user_name
        let password = userInfo.user_pwd
        let user=await User.findOne({ user_name: userName }).exec();
        console.log(user);
        if (user) {
            if(user.user_pwd===password){
                res.json({ message: '登陆成功' });//设置返回的内容    
            }
            else
                res.json({ message: '密码错误' });//设置返回的内容    
        } else {
            res.json( {
                message: '用户名不存在'
            });
        }
        //引入User的model
        // await User.findOne({ user_name: userName }).exec().then(async (res1) => {
        //      console.log(res1)
        //      if (res1) {
        //          if(res1.user_pwd===password){
        //              console.log(res)
        //             res.json = { code: 200, message: true }
        //             console.log(res.json)

        //          }
        //         } else {
        //             res.json = {
        //                 code: 201,
        //                 message: '用户名不存在'
        //             };
        //         }
        //     })
        // res.json = { code: 200, message: true }
    }catch(err){
        res.json({message:err});
    }
});
//修改学习时长
router.patch('/time/:username',jsonParser,async(req,res)=>{
    console.log(req.body);
    try{
        let user=await User.findOne({ user_name: req.params.username }).exec();
        let t=user.time+req.body.time;
        const updatePost=await User.updateOne(
            {user_name:req.params.username},
            {$set:{time:t}},
            );
            res.json(updatePost)
    }catch(err){
        res.json({message:err});
    }
});



module.exports=router;