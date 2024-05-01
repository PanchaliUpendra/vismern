const express = require('express');
const {adduserregister,loginuser} = require('./users.controller');

const registerRouter = express.Router();
const loginRouter = express.Router();
registerRouter.post('/',adduserregister);
loginRouter.post('/',loginuser);
module.exports ={
    registerRouter,
    loginRouter
};