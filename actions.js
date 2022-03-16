const express=require('express');
const router=express.Router();

router.post('/register',(req,res)=>{
    const useremail=req.body.email;
    const userpassword=req.body.password;

    return res.status(200).json({
        Message:`Hello ${useremail}`
    });

})

router.get('/greeting',(req,res)=>{
    return res.status(200).json({
        Message:'welcome to me.js Api'
    });
});  
module.exports=router;
