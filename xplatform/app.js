const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

require('dotenv/config');
var jsonParser = bodyParser.json()
app.use(cors());
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//Middlewares
// app.use('/posts',(req,res) => {
//     res.send('we are on posts');
//     console.log('this is a middleware running');
// });

//import routes
const postsRoute=require('./routes/posts');
app.use('/posts',postsRoute);
const postsRoute2=require('./routes/bookPosts');
app.use('/book',postsRoute2);
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());


//ROUTES
app.get('/',(req,res)=>{
    res.send('we are on home');
});
// app.get('/posts',(req,res)=>{
//     res.send('we are on posts');
// });

//connect to db
mongoose.connect(process.env.DB_CONNECTION,
{userNewUrlParser:true},
()=>{
    console.log('connect to db !')
});
app.listen(9785);//端口号
