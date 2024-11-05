// Exporting the ApplicantData class to be used in other files
export default class ApplicantData {
    // Constructor method to initialize properties of an applicant
    constructor(id, company, roll, name, email, contact, resumePath) {
        this.id = id;                     
        this.company = company;           
        this.roll = roll;                
        this.name = name;                 
        this.email = email;              
        this.contact = contact;          
        this.resumePath = resumePath;     
    }

    // Static method to retrieve all applicant data
    static allApplicantData() {
        return applicantData;            
    }

    // Static method to add a new applicant's data to the list
    static addApplicantData(company, name, roll, email, contact, resumePath) {
        // Create a new ApplicantData instance and add it to applicantData array
        const data = new ApplicantData(applicantData.length + 1, company, roll, name, email, contact, resumePath);
        applicantData.push(data);         
    }
}

// Array to hold the list of all applicants' data
const applicantData = [
    // Example applicant data (uncomment and customize if needed)
    // new ApplicantData(1, "ABC Corp", "Software Engineer", "Harendrasinh", "haren111990@gmail.com", 9867775626, "/path/to/resume.pdf"),
];
