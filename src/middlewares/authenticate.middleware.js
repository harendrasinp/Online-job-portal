// Importing the JobsVacanciesModel to access job vacancy details
import JobsVacanciesModel from "../models/jobs_detail.model.js";

// Middleware function to check if a recruiter is authenticated
export function Authentication(req, res, next) {
    // If session contains recruiter email, the user is authenticated
    if (req.session.recruiterEmail) {
        next(); // Proceed to the next middleware or route handler
    } else {
        // If not authenticated, set modal flag for login prompt and retrieve job data
        const flag = true; // Flag to indicate login modal display
        const VacanciesData = JobsVacanciesModel.getAllJobsDetail(); 

        // Render the "jobs_card" view with job details, login modal status, and page title
        res.render("jobs_card", {
            details: VacanciesData,    
            modalStatus: flag,          
            titlename: "jobs-details"   
        });
    }
}

// Middleware function for authentication specifically when adding a new job card
export function Authentication_Add_newCArd(req, res, next) {
    // If session contains recruiter email, the user is authenticated
    if (req.session.recruiterEmail) {
        next(); // Proceed to the next middleware or route handler
    } else {
        // If not authenticated, set modal flag for login prompt
        const flag = true; // Flag to indicate login modal display

        // Render the "home" view with login modal status and page title for adding new card
        res.render("home", {
            modalStatus: flag,           // Modal status to trigger login prompt
            titlename: "Add-New-Card"    // Page title
        });
    }
}
