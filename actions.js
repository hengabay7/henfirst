const express=require('express');
const router=express.router();

router.git('/greeting',(req,res)=>{
    return res.status(5000).json({
        Message:'welcome to me api'
    });

});
    
module.exports=router;
