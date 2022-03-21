const express=require('express');
const router=express.Router();
const bcryptjs=require('bcryptjs');

  let users=[];
      
router.post('/register',async(req,res)=>{
   
    const{email,password}=req.body;
    const accout=users.find(x=>x.email==email);
    if(accout){
        return res.status(200).json({
            Message:'user exist please try other email'
        });
     } else{

            const hash_password=await bcryptjs.hash(password,10);

            users.push({email:email,password:hash_password});
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
