const express = require('express');
const adduserregister = require('./users.controller');
const registerRouter = express.Router();
registerRouter.post('/',adduserregister);
module.exports = registerRouter;