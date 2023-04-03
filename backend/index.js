const express =require("express");
const app=express();
const mongoose=require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const voterRoute=require('./routes/user')
mongoose
  .connect(process.env.mongodb_url)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });
  app.use('/api/auth',voterRoute)
  app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
  });