require('dotenv').config();
const express=require('express');
const ejs=require('ejs');
const path=require('path');
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const app=express();

app.set('view Engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname+'/build')));
app.use(express.static(__dirname+'/public'));

mongoose.connect(process.env.SECRET,{  useNewUrlParser: true, useUnifiedTopology: true } );;

const wikiApi={
  title: String,
  content: String
};

const Article=mongoose.model("Article",wikiApi);

app.route('/articles').get((req,res)=>{

  Article.find((err,result)=>{

      if(err){
        console.log(err);
      }
      else {
        res.status(200).json(result);
      }

  });
})
.post((req,res)=>{
  if(req.body.title=="" || req.body.content===""){
    res.status(200).json("Please fill both the fields(title & content)");
    return;
  }
  const newArticle=new Article({
    title:req.body.title,
    content:req.body.content
  });
  newArticle.save(err=>{
    if(err){
      res.send(err);
    }
    else{
      res.status(200).json("Post request is successful");
    }
  });
})
.put((req,res)=>{
  Article.update({title:req.body.title},
    {title:req.body.title,content:req.body.content},
  {overwrite:true},(err)=>{
    if(!err){
      res.status(200).json("Updated the content for the entered title");
    }
    else{
      res.send(err);
    }
  })
});

app.route('/articles/:articlename').get((req,res)=>{
  Article.find({title:req.params.articlename},(err,artname)=>{
    if(err){
      res.send(err);
    }
    else{
      if(artname.length>0){
        res.send(artname);
      }
      else {
        res.status(200).json("Title is not found");
      }
    }
  })
})
.delete((req,res)=>{
  Article.deleteOne({title:req.params.articlename},(err)=>{
    if(!err){
      res.status(200).json("Deleted the article successfully");
    }
    else{
      res.send(err);
    }
  })
});

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname+'/build/index.html'));
})

app.listen(8000,()=>{
  console.log("port is listening to port 8000");
});
