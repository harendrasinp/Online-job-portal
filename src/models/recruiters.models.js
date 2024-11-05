// Exporting the RecruitersModels class to handle recruiter registration and authentication
export default class RecruitersModels {
    // Static method to register a new recruiter
    static registerUser(recruiterData) {
        // Creates a new recruiter object with name, email, and password
        const data = {
            name: recruiterData.name,      
            email: recruiterData.email,    
            password: recruiterData.password 
        };
        recruiters.push(data);            
    }

    // Static method to authenticate a recruiter by matching email and password
    static machingData(email, password) {
        // Searches for a recruiter with matching email and password
        const result = recruiters.find(recru => recru.email == email && recru.password == password);
        return result;                    
    }
}

// Array to hold registered recruiters' data
const recruiters = [
    // Sample recruiter data with name, email, and password
    {
        "name": "harendrasinh",
        "email": "haren111990@gmail.com",
        "password": "haren007"
    },
];
