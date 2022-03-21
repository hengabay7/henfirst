const express=require('express');
const router=express.Router();


    let users=[];
    
      
router.post('/register',(req,res)=>{
   
    const{email,password}=req.body;

    const accout=users.find(x=>x.email==email);
    if(accout){
        return res.status(200).json({
            Message:'user exist please try other email'
        });
     } else{
            users.push({email:email,password:password});
            return res.status(200).json({
                Message:'Acconunt created',
                users_count:users.length,
                date:users
            });      
        }      
    })

    

router.get('/greeting',(req,res)=>{
    return res.status(200).json({
        Message:'welcome to me.js Api'
    });
});  
module.exports=router;
