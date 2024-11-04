import {body, validationResult} from "express-validator";

const errorValidation= async(req,res,next)=>{
    const rules=[
        body("company").notEmpty().withMessage("Please Enter Company Name"),
        body("company").isString().withMessage("Company Name Should be In SCarecter Format"),
        body("value").notEmpty().withMessage("Please select Designation"),
        body("location").notEmpty().withMessage("Please Enter Location"),
        body("salary").notEmpty().withMessage("Please Enter Salary Amount"),
        body("date").notEmpty().withMessage("Please Select Date"),
        body("openings").notEmpty().withMessage("Please Enter Openings"),
    ]
    await Promise.all(rules.map(rule=>rule.run(req)));

    const validationErrors=validationResult(req);
    if(!validationErrors.isEmpty()){
        return res.render("postNewJob",{
            errosMessages:validationErrors.array(),
            titlename:"postNewJob",
            modalStatus:"false"
        });
    }
    next();
}
export default errorValidation