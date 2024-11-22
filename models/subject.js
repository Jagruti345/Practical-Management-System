import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  practical: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Practical",
  }],
});

const subjectModel = mongoose.model("Subject", subjectSchema);

export default subjectModel;
