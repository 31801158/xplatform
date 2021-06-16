const express=require('express');
const router=express.Router();
const Book=require('../models/Book')

//查询所有
router.get('/',async(req,res)=>{
    try{
        const posts=await Book.find().exec();
        res.json(posts);
    }
    catch(err){
        res.json({message:err});
    }
});

//post新增中医古籍
const bodyParser=require('body-parser');
var jsonParser = bodyParser.json()
router.post('/',jsonParser,async(req,res)=>{
    console.log(req.body);
    const post=new Book({
        name:req.body.name,
        describe:req.body.describe,
        content:req.body.content,
        catalogues:req.body.catalogues,
        pages:req.body.pages

    });
    try{
        const savePost=await post.save().exec();
        res.json(savePost);
    }
    catch(err){
        res.json({message:err});
    }
});

module.exports=router;