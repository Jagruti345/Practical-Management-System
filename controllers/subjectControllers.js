import subjectModel from "../models/subject.js";

export const createSubject=async (req, res) => {
    try {
      const { name, code ,email} = req.body;
  
      const subjectObj = new subjectModel({
        name,
        code,
       email,
      });
  
      const savedsubjectObj = await subjectObj.save();
  
      res.json({
        savedsubjectObj,
        message: "Subject created successfully"
      });
  
    } catch (error) {
        console.log(error);
        
      res.json({
        error: "Error occured",
      });
  
    }
  };

  export const getSubject=async(req,res)=>{
    try {
      const getSubject=await subjectModel.find()
      res.json({
        getSubject
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }