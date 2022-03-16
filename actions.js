const express=require('express');
const router=express.Router();


    let users=[];


router.post('/register',(req,res)=>{
    //const useremail=req.body.email;
    //const userpassword=req.body.password;
    const{email,password}=req.body;

users.push({email:email,password:password});

    return res.status(200).json({
        Message:users
    });

})

router.get('/greeting',(req,res)=>{
    return res.status(200).json({
        Message:'welcome to me.js Api'
    });
});  
module.exports=router;
