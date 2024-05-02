const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');
const userdatabase = require('./user.mongo');
async function userregister(userdata){
    try{
        const response = await userdatabase.create({
            uid:userdata.uid,
            password:userdata.password
        });
        console.log('User registered successfully');
        return {success:true, message:'User Successfully registered'};
    }catch(error){
        console.error('Error registering the user: ',error);
        return {
            success:true,
            message:'you got an error while user registering!!'
        }
    }
}
async function userlogin(userdata){
    const {uid,password}=userdata
    try{
        const user = await userdatabase.findOne({uid});
        if(!user) return {success:false,message:'user not found'};
        // Validate password
        const validPassword = user.password===password;
        if (!validPassword) return {success:false,message:'wrong password'};
        // Generate JWT token
        const token = jwt.sign({ _id: user._id }, 'secret_key');
        
        // Set token as a cookie
        // res.cookie('token', token, { httpOnly: true }).send('Logged in successfully');

        console.log('User loggedin successfully');

        return {token:token,success:true,uid:user.uid, message:'User Successfully logged'};
    }catch(error){
        console.error('Error while login the user: ',error);
        return {
            success:true,
            message:'you got an error while user logging!!'
        }
    }
}
module.exports= {
    userlogin,
    userregister
};