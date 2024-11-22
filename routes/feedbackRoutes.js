import { createPractical, enrollStudent, getAllPractical } from "../controllers/practicalControllers.js";
import { createSubject, getSubject } from "../controllers/subjectControllers.js";
import { createAdmin, createStudent, createTeacher, getAdmin, getAllUsers, getStudent, getTeacher } from "../controllers/userController.js";
import express from "express";
import { isAdmin, isTeacher } from "../Middleware.js";






const router = express.Router();

router.post("/admin/add",createAdmin);
router.post("/teacher/add",createTeacher);
router.post("/student/add",createStudent);
router.post("/subject/add",isAdmin,createSubject);
router.post("/practical/add",isTeacher,createPractical);
router.post("/enrollment/add",enrollStudent);
router.get("/user/get",isAdmin,getAllUsers);
router.get("/teacher/get",isAdmin,getTeacher);
router.get("/admin/get",isAdmin,getAdmin);
router.get("/student/get",isAdmin,isTeacher,getStudent);
router.get("/subject/get",getSubject);
router.get("/practical/get",getAllPractical);


export default router;