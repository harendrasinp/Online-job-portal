
export default class ApplicantData{
    constructor(id,company,name,email,contact,resumePath){
        this.id=id,
        this.company=company
        this.name=name,
        this.email=email,
        this.contact=contact;
        this.resumePath=resumePath;
    }
    static allApplicantData(){
        return applicantData
    }
    static addApplicantData(company,name,email,contact,resumePath){
     const data=new ApplicantData(applicantData.length+1,company,name,email,contact,resumePath);
     applicantData.push(data);
    }
}

const applicantData=[
    // new ApplicantData(1,"harendrasinh","haren111990@gmail.com",9867775626),
]