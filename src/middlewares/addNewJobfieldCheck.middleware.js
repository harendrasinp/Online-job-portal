// Importing body validation and validationResult functions from express-validator
import { body, validationResult } from "express-validator";

// Middleware function for validating form input data
const errorValidation = async (req, res, next) => {
    // Defining validation rules for each field in the form
    const rules = [
        body("company")
            .notEmpty().withMessage("Please Enter Company Name")   // Check that company name is not empty
            .isString().withMessage("Company Name Should be In Character Format"), // Ensure company name is a string
        body("value")
            .notEmpty().withMessage("Please select Designation"),   // Ensure designation is selected
        body("location")
            .notEmpty().withMessage("Please Enter Location"),       // Check location is provided
        body("salary")
            .notEmpty().withMessage("Please Enter Salary Amount"),  // Ensure salary amount is provided
        body("date")
            .notEmpty().withMessage("Please Select Date"),          // Ensure date is selected
        body("openings")
            .notEmpty().withMessage("Please Enter Openings")        // Ensure number of openings is provided
    ];

    // Running all validation rules on the request object
    await Promise.all(rules.map(rule => rule.run(req)));

    // Gathering validation results
    const validationErrors = validationResult(req);

    // If there are validation errors, render the form with error messages
    if (!validationErrors.isEmpty()) {
        return res.render("postNewJob", {
            errosMessages: validationErrors.array(), 
            titlename: "postNewJob",                 
            modalStatus: "false"                    
        });
    }

  
    next();
};

export default errorValidation; 
