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
module.exports= userregister;