require("dotenv").config({path:"./.env"})  //dotenv ko access krna
const express=require("express");
const app=express();


require("./models/dbconfig").dbconnection();

app.listen(process.env.PORT,()=>{
    console.log(`the server is running on port ${process.env.PORT}`)
});