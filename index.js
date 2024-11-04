import express from "express";
import path from "path";
import ejslayout from "express-ejs-layouts"
import session from "express-session"
import errorValidation from "./src/middlewares/addNewJobfieldCheck.middleware.js"
import ApplicationController from "./src/controllers/home.controller.js";
import JobDetailsControllers from "./src/controllers/jobs_details.controllers.js"
import {Authentication,Authentication_Add_newCArd} from "./src/middlewares/authenticate.middleware.js"
import { upload } from "./src/middlewares/fileUpload.middleware.js";
import flash from "connect-flash";
import cookieParser from "cookie-parser";
import {LastVisit} from "./src/middlewares/lastVisite.middleware.js";
const server=express();
server.use(ejslayout);

server.use(express.static("public"));
server.use(flash());
server.set("view engine","ejs");
server.set("views",path.resolve("src","views"));
server.use(express.urlencoded({ extended: true }));
server.use(session({
    secret:"haren007",
    resave:false,
    saveUninitialized:false,
    cookie:false,
}));
server.use(cookieParser());
server.use(LastVisit)
const applicationController=new ApplicationController();
const jobDetailsControllers=new JobDetailsControllers();

server.get("/",applicationController.getHomePage);
server.get("/job-Cards",jobDetailsControllers.jobsCard);
server.get("/jobs-detail/:id",jobDetailsControllers.jobsDetail);
server.get("/new-job",Authentication_Add_newCArd,jobDetailsControllers.addJobForm);
server.get("/edit-job-detail/:id",Authentication_Add_newCArd,jobDetailsControllers.editJobDetails)
server.post("/delete-job-card/:id",Authentication,jobDetailsControllers.deleteJobcard)
server.get("/Logout",applicationController.logout);
server.get("/Applicant-Data",jobDetailsControllers.applicantData);

server.post("/add-new-job",Authentication_Add_newCArd,errorValidation,jobDetailsControllers.addNewJob);
server.post("/update-Data",Authentication_Add_newCArd,errorValidation,jobDetailsControllers.updateData);
server.post("/recruiter-data",applicationController.addNewRecruiterPost);
server.post("/login-post",applicationController.loginPost)
server.post("/apply-job-form",upload.single("file"),jobDetailsControllers.postapplicationData);
export default server;