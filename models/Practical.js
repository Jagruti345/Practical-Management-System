import mongoose from 'mongoose';  
  
const practicalSchema=mongoose.Schema({  
    subject:{  
        type:mongoose.Schema.Types.ObjectId,  
        ref:'Subject',  
        required:true,  
    }, 
    email:{  
        type:String,  
        required:true  
    },  
    title:{  
        type:String,  
        required:true,  
    },  
    description:{  
        type:String,  
        required:true,  
    },
    enrolledStudent:[{
        type:mongoose.Schema.Types.ObjectId,  
        ref:'User'
    }] 
})  
  
const practicalModel=mongoose.model("Practical",practicalSchema);  
  
export default practicalModel; 

