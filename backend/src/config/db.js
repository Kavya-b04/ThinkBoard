import mongoose from "mongoose"
export const connectDB = async() => {
    try{
     await mongoose.connect(process.env.MONGO_URI);

        console.log("MongoDB connected");
  
    }catch(error){
      console.error("Error connecting to mongodb",error);
      process.exit(1)//exit with failure 0 means success
    }

}