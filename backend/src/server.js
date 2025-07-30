import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
// const express = require("express");
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js"
import cors from "cors"
import path from "path"


dotenv.config();
const app =express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve()




//middleware
if(process.env.NODE_ENV !== "production")
{
    app.use(cors({
    origin:"http://localhost:5173",
}))
}

app.use(express.json()); //this midddleware will parse JSON bodies
app.use(rateLimiter)


//our simple custom middleware
// app.use((req,res,next) =>{
//    console.log("we just got a new rq");
//    next();
// })

app.use("/api/notes",notesRoutes);


if(process.env.NODE_ENV == "production")
{
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}

// app.get("/api/notes",(req,res)=>{
//     res.send("you send 10 notes");
// });



connectDB().then(() => {app.listen(PORT,()=>{
 console.log("server runn",PORT);
});
});

