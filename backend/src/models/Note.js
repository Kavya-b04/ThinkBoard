import mongoose from "mongoose";
//1-create a schema
//2-model based off of that schemma

const noteSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    content:{
        type:String,
        required:true,
    },

},{timestamps:true}) //createAt,updatedAt

const Note =mongoose.model("Note",noteSchema)

export default Note