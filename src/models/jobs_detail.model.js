// Exporting the JobsVacanciesModel class to manage job vacancy data
export default class JobsVacanciesModel {
    // Constructor to initialize job vacancy properties
    constructor(id, company, value, location, salary, applydate, openings, applied) {
        this.id = id;                   
        this.company = company;          
        this.value = value;               
        this.location = location;         
        this.salary = salary;             
        this.applydate = applydate;       
        this.openings = openings;        
        this.applied = applied;          
    }

    // Static method to retrieve all job details
    static getAllJobsDetail() {
        return jobDetail;                 
    }

    // Static method to add a new job to the job listings
    static addNewJob(company, value, location, salary, date, openings) {
        // Create a new JobsVacanciesModel instance and add it to jobDetail array
        const job = new JobsVacanciesModel(jobDetail.length + 1, company, value, location, salary, date, openings);
        jobDetail.push(job);              
    }

    // Static method to check if a job with a specific ID exists
    static checkAvailability(card_id) {
        // Finds the index of the job by ID; returns true if found, false otherwise
        const cardStatus = jobDetail.findIndex(ind => ind.id == card_id);
        return cardStatus !== -1;
    }

    // Static method to find and return a job by its ID
    static findCard(id) {
        const card = jobDetail.find(cd => cd.id == id);  
        return card;                      
    }

    // Static method to update details of an existing job
    static updateDetails(updateData) {
        console.log(updateData);          
        const index = jobDetail.findIndex((jobid) => jobid.id == updateData.id);
        // Updates each field of the job with the new data provided
        jobDetail[index].company = updateData.company;
        jobDetail[index].value = updateData.value;
        jobDetail[index].location = updateData.location;
        jobDetail[index].salary = updateData.salary;
        jobDetail[index].applydate = updateData.date;
        jobDetail[index].openings = updateData.openings;
    }

    // Static method to delete a job listing by ID
    static deleteCard(cardId) {
        const index = jobDetail.findIndex(ind => ind.id == cardId);
        jobDetail.splice(index, 1);       
    }

    // Static method to increment the count of applicants for a specific job
    static mactchingdata(id) {
        const jobName = jobDetail.find((jid) => jid.id == id); 
        jobName.applied += 1;           
    }
}

// Array to hold the list of job vacancies
var jobDetail = [
    // Sample job listings with details (id, company, position, location, salary, last apply date, openings, applicants)
    new JobsVacanciesModel(1, "VayuSoftwares", "Fullstack Developer", "Mumbai(Thane)", "52 LPA", "15-10-2024", 5, 0),
    new JobsVacanciesModel(2, "Google", "Python Developer", "Mumbai(Thane)", "25 LPA", "05-05-2024", 5, 0),
    new JobsVacanciesModel(4, "Microsoft", "FrontEnd Developer", "Chennai", "52 LPA", "28-06-2024", 5, 0),
];
