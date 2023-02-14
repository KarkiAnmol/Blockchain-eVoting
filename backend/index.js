
const app=require('./app');
const dotenv = require('dotenv');

const connectDataBase = require("./config/database.js")

dotenv.config({path:"./config/.env"}); 

//Connecting database
connectDataBase();


app.listen(process.env.PORT,(err) => { 
    if(err) console.log("error in server sertup");

    console.log(`Server is listening on PORT : ${process.env.PORT}`);
    
});






