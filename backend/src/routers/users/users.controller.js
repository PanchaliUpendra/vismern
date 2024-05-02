const cookieParser = require('cookie-parser');
const express = require('express');
const app=express();
app.use(cookieParser());
const {userregister,userlogin} = require('../../model/user.model/user.model');
async function adduserregister(req,res){
    console.log('you requested with the post method');
    try{
        const result = await userregister(req.body);
        if(result.success){
            
            return res.status(201).json(
                {
                    success:true,
                    message:'user successfully registered'
                });
        }else{
            return res.status(500).json({
                success:false,
                message:'failed to registered the user'
            });
        }
    }
    catch(error){
        console.log('you got an error in user add register function',error);
    }
}
async function loginuser(req,res){
    console.log('you post requested the login');
    try{
        const result = await userlogin(req.body);
        if(result.success){
            // console.log('here is your token: ',result.token);
            res.cookie('token', result.token, { httpOnly: true });
            return res.status(201).json(
                {
                    token:result.token,
                    uid:result.uid,
                    success:true,
                    message:'user successfully loggedin'
                }
            );
        }else{
            return res.status(500).json({
                success:false,
                message:result.message
            });
        }

    }catch(error){
        console.log("you got an error in user controller while logging in",error);
    }

}

module.exports = {
    adduserregister,
    loginuser
};