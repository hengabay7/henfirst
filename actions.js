const express=require('express');
const router=express.Router();

router.get('/greeting',(req,res)=>{
    return res.status(200).json({
        Message:'welcome to me api'
    });
});  
module.exports=router;
