import RecruitersModels from "../models/recruiters.models.js"
import JobsVacanciesModel from "../models/jobs_detail.model.js"
export default class ApplicationController{
    getHomePage(req,res){
        res.render("home",{titlename:"home",modalStatus:"false",recruiterEmail:req.session.recruiterEmail})
    }
    addNewRecruiterPost(req,res){
        const recruiterData=req.body;
        const save=RecruitersModels.registerUser(recruiterData);

    }
    loginPost(req,res){
        const {email,password}=req.body;
        const dataStatus=RecruitersModels.machingData(email,password);
        if(dataStatus){
            req.session.recruiterEmail=email;
            const VacanciesData=JobsVacanciesModel.getAllJobsDetail();
            res.render("jobs_card",{details:VacanciesData,titlename:"jobs-cards",modalStatus:"false",recruiterEmail:req.session.recruiterEmail})
        }
        else{
            res.render("home",{titlename:"home",modalStatus:"false",recruiterEmail:req.session.recruiterEmail})
        }
    }
    logout(req,res){
        req.session.destroy((err)=>{
            if(err){
                console.log(err)
            }
            else{
                res.redirect("/");
            }
        })
    }
}