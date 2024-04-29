const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    uid:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});
const userdatabase = mongoose.model('users',userSchema);
module.exports = userdatabase;