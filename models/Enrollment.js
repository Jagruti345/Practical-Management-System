import mongoose from 'mongoose';  
  
const enrollmentSchema=mongoose.Schema({  
    practicalId:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"Practical",  
        required:true  
    },  
    student:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:"User",  
        required:true  
    }  
  
})  
  
const enrollmentModel=mongoose.model("Enrollment",enrollmentSchema);  
  
export default enrollmentModel; 