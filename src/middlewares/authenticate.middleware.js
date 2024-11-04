import JobsVacanciesModel from "../models/jobs_detail.model.js"
export function Authentication(req,res,next){
    if(req.session.recruiterEmail){
        next();
    }
    else{
        const flag=true
        const VacanciesData=JobsVacanciesModel.getAllJobsDetail();
        res.render("jobs_card",{details:VacanciesData,modalStatus:flag,titlename:"jobs-details"})
    }
}
export function Authentication_Add_newCArd(req,res,next){
    if(req.session.recruiterEmail){
        next();
    }
    else{
        const flag=true
        res.render("home",{modalStatus:flag,titlename:"Add-New-Card"})
    }
}

