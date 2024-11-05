import JobsVacanciesModel from "../models/jobs_detail.model.js";
import ApplicantData from "../models/ApplicantData.model.js";
import nodemailer from "nodemailer";

// JobDetailsControllers class manages various job-related routes and operations
export default class JobDetailsControllers {

    // Render the job card page with job vacancies data
    jobsCard(req, res) {
        const VacanciesData = JobsVacanciesModel.getAllJobsDetail(); 
        res.render("jobs_card", {
            details: VacanciesData,
            titlename: "jobs-details", 
            modalStatus: "false", 
            recruiterEmail: req.session.recruiterEmail 
        });
    };

    // Render details of a specific job vacancy
    jobsDetail(req, res) {
        const cardId = req.params.id; 
        const availStatus = JobsVacanciesModel.checkAvailability(cardId); 
        if (availStatus) {
            const card = JobsVacanciesModel.findCard(cardId); 
            res.render("jobs_detail", {
                details: card, 
                titlename: "jobs-detail", 
                modalStatus: "false", 
                recruiterEmail: req.session.recruiterEmail 
            });
        } else {
            console.log("no card");
        }
    }

    // Render the form to post a new job
    addJobForm(req, res) {
        res.render("postNewJob", {
            titlename: "job-cards", 
            errosMessages: false, 
            modalStatus: "false", 
            recruiterEmail: req.session.recruiterEmail 
        });
    }

    // Handle the posting of a new job
    addNewJob(req, res) {
        const { company, value, location, salary, date, openings } = req.body; 
        JobsVacanciesModel.addNewJob(company, value, location, salary, date, openings); 
        const VacanciesData = JobsVacanciesModel.getAllJobsDetail(); 
        res.render("jobs_card", {
            details: VacanciesData, 
            errosMessages: false,
            titlename: "job-cards", 
            modalStatus: "false", 
            recruiterEmail: req.session.recruiterEmail 
        });
    }

    // Render the form to edit a specific job's details
    editJobDetails(req, res) {
        const jobId = req.params.id; 
        const jobData = JobsVacanciesModel.findCard(jobId); 
        res.render("edit_job_detail", {
            data: jobData,
            errosMessages: false, 
            titlename: "job-cards-details", 
            modalStatus: "false", 
            recruiterEmail: req.session.recruiterEmail 
        });
    }

    // Handle the update of job details
    updateData(req, res) {
        JobsVacanciesModel.updateDetails(req.body); 
        const VacanciesData = JobsVacanciesModel.getAllJobsDetail(); 
        res.render("jobs_card", {
            details: VacanciesData,
            titlename: "jobs-details",
            modalStatus: "false",
            recruiterEmail: req.session.recruiterEmail 
        });
    }

    // Handle deletion of a specific job card
    deleteJobcard(req, res) {
        const card_Id = req.params.id; 
        const status = JobsVacanciesModel.checkAvailability(card_Id); 
        if (status) {
            JobsVacanciesModel.deleteCard(card_Id);
            const VacanciesData = JobsVacanciesModel.getAllJobsDetail(); 
            res.render("jobs_card", {
                details: VacanciesData, 
                titlename: "add-New-Job", 
                modalStatus: "false", 
                recruiterEmail: req.session.recruiterEmail 
            });
        }
    }

    // Render the page with all applicant data
    applicantData(req, res) {
        const applicationData = ApplicantData.allApplicantData(); 
        res.render("ApplicantData", {
            data: applicationData,
            titlename: "Applicant-data", 
            modalStatus: "false", 
            recruiterEmail: req.session.recruiterEmail 
        });
    }

    // Handle job application data submission
    postapplicationData(req, res) {
        const { id, company, roll, name, email, contact } = req.body; 
        const resumePath = req.file ? req.file.filename : null; 
        JobsVacanciesModel.mactchingdata(id); 
        ApplicantData.addApplicantData(company, name, roll, email, contact, resumePath);

        // Function to send email notification to applicant
        async function sendMail(em) {
            const trasporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: "haren111990@gmail.com",
                    pass: "zlkh rbfi ujdt lbtp", 
                }
            });

            const EmailOption = {
                from: "haren111990@gmail.com",
                to: em, 
                subject: "Welcome to Easily Job Portal", 
                text: `Hello ${name},Your Job Roll "${roll}" has been Successfully Applied at ${company},Shortly Our Team Executive will contact you, Thank you !!`
            };

            // Try to send the email and log success or failure
            try {
                const result = await trasporter.sendMail(EmailOption);
                console.log("Email sent Successfully");
            } catch (err) {
                console.log("Email not sent: " + err); 
            }
        }

        sendMail(email); 
        res.redirect("/job-Cards"); 
    }
}
