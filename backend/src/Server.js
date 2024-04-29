// Import dotenv and configure it
require('dotenv').config();

const http = require('http');
const app = require('./app');
const mongoose = require('mongoose');
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;
const server = http.createServer(app);

mongoose.connection.once('open',()=>{
    console.log('MongoDB connection is ready!');
});

mongoose.connection.on('error',(err)=>{
    console.error(err);
});

async function startServer(){
    await mongoose.connect(MONGO_URL);
    server.listen(PORT,()=>{
        console.log(`Listening on port ${PORT}...`);
    });
}

startServer();

