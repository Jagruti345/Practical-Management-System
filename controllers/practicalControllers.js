import practicalModel from '../models/Practical.js';
import Subject from "../models/subject.js"
import Enrollment from '../models/Enrollment.js';
import User from '../models/User.js'


export const createPractical = async (req, res) => {  
  try {  
    const { subject, title,email, description} = req.body;  
  

    const subjectinfo = await Subject.findOne({name:subject});

    const practicalObj = new practicalModel({  
      subject: subjectinfo.id,
      title,  
      description,
      email,
    });  
   
    
    const savedPractical = await practicalObj.save();  
   
    const updatedSubject =await Subject.findByIdAndUpdate(  subjectinfo.id, 
         { $push: { practical: savedPractical._id } },  { new: true }  
    )  .populate("practical")  .exec();  
   
    res.json({ 
      message: "Practical Added successfully",
      subject: updatedSubject });  
  } catch (error) { 
    res.status(500).json({ message: "Error while adding Practical " });  
  }  
};  


export const enrollStudent = async (req, res) => {
  try {
    const { practicalId, studentId } = req.body;

    const updatedPractical = await practicalModel.findByIdAndUpdate(
      practicalId,
      { $push: { enrolledStudent: studentId } },
      { new: true }
    )
      .populate("enrolledStudent", "name email")
      .exec();
      
    res.json({
      message: "Student enrolled successfully",
      practical: updatedPractical,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while enrolling student",
    });
  }
};


   
export const getAllPractical=async(req,res)=>{  
  try{  
    const practical=await practicalModel.find()  
    res.json({  
      practical  
})  
}  
catch(error)  
{  
return res.status(400).json({ 
error:"error while fetching post",  
})  
}  
} 


