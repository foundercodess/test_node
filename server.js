require("dotenv").config();

const express = require("express");

const cors= require("cors");

const bodyParser= require("body-parser");


require("./config/dbConfig");

const userRouter= require("./routes/usrrRoute");

const app= express();

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

app.use("/api",userRouter);


// error handeling 

app.use((err, req, res, next)=> {
    err.statusCode= err.statusCode || 500;
    err.message= err.message || "Internal server error";
    res.status(err.statusCode).json({
        message:err.message,
    });
});

app.listen(3001,'0.0.0.0',()=> console.log("Server is running on port 3001"));   