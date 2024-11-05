import RecruitersModels from "../models/recruiters.models.js";
import JobsVacanciesModel from "../models/jobs_detail.model.js";

// ApplicationController class handles various application-specific routes
export default class ApplicationController {
    // Render the homepage with default values for title and modal status
    getHomePage(req, res) {
        res.render("home", {
            titlename: "home",
            modalStatus: "false",
            recruiterEmail: req.session.recruiterEmail 
        });
    }

    // Handle new recruiter registration
    addNewRecruiterPost(req, res) {
        const recruiterData = req.body; 
        const save = RecruitersModels.registerUser(recruiterData); 
    }

    // Handle recruiter login functionality
    loginPost(req, res) {
        const { email, password } = req.body; 
        const dataStatus = RecruitersModels.machingData(email, password); 
        
        if (dataStatus) {
            req.session.recruiterEmail = email;
            const VacanciesData = JobsVacanciesModel.getAllJobsDetail(); 
            
            res.render("jobs_card", {
                details: VacanciesData,
                titlename: "jobs-cards", 
                modalStatus: "false", 
                recruiterEmail: req.session.recruiterEmail ,
            });
        } else {
            // If login fails, render the home page with default settings
            res.render("home", {
                titlename: "home",
                modalStatus: "false",
                recruiterEmail: req.session.recruiterEmail 
            });
        }
    }

    // Handle recruiter logout functionality
    logout(req, res) {
        req.session.destroy((err) => { 
            if (err) {
                console.log(err);
            } else {
                res.redirect("/"); 
            }
        });
    }
}
