const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.fetchAll = async(req,res,next)=>{
 try{
     const [allposts]=await User.fetchAll();
     res.status(200).json(allposts);
 }catch(err){
   if(!err.statusCode)
   {
       err.statusCode=500;
   }
  next(err);
 }
};

exports.postpost=async(req,res,next)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty())return;

    const title = req.body.title;
    const body = req.body.body;

    try{
        const post = {
            title:title,
            body:body,
        };
        const result = await User.save(post);
        res.status(201).json({ message: 'Posted!' });
    }
    catch(err){
    if(!err.statusCode){
        err.statusCode=500;
    }
    next(err);
    }
};

exports.deletepost= async(req,res,next)=>{
  
    const id=Number(req.params.id);
     try{
         
         const deleteResponse= await User.deleteitem(id);
         res.status(200).json(deleteResponse);
         
     }
     catch(err){
         
         if(!err.statusCode)
         {
             err.statusCode=500;
         }
         next(err);
     }
};

exports.updatepost= async(req,res,next)=>{
    
    const errors = validationResult(req);
    if(!errors.isEmpty())return;
    const id=Number(req.params.id);
    const title = req.body.title;
    const body  = req.body.body;

    try{
        const post = {
            title:title,
            body:body,
            id:id
        };
        const result=await User.updateitem(post);
        res.status(200).json(result);
    }
    catch(err)
    {
        if(!err.statusCode)
        {
            err.statusCode=500;
        }
        next(err);
    }
}