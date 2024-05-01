const express = require('express');
const cors = require('cors');
const {registerRouter, loginRouter}  = require('./routers/users/user.router');
const app = express();
const allowedOrigins =[
    'http://localhost:3000',
];
app.use(cors({
    origin:allowedOrigins
}));
app.use(express.json());
app.use('/login',loginRouter);
app.use('/register',registerRouter);

module.exports = app;