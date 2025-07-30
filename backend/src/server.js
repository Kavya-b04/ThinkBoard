import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
// const express = require("express");
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js"
import cors from "cors"


dotenv.config();
const app =express();
const PORT = process.env.PORT || 5001;





//middleware
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json()); //this midddleware will parse JSON bodies
app.use(rateLimiter)


//our simple custom middleware
// app.use((req,res,next) =>{
//    console.log("we just got a new rq");
//    next();
// })

app.use("/api/notes",notesRoutes);

// app.get("/api/notes",(req,res)=>{
//     res.send("you send 10 notes");
// });



connectDB().then(() => {app.listen(PORT,()=>{
 console.log("server runn",PORT);
});
});

