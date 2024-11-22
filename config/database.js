import mongoose from "mongoose";
 

const dbConnect=async()=>{
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected sucessfully");
    }catch(error){
        console.log(error);
        console.log("Connection failed",error);
    }
}

export default dbConnect;