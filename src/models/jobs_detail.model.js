
export default class JobsVacanciesModel{
    constructor(id,company,value,location,salary,applydate,openings,applied){
        this.id=id,
        this.company=company,
        this.value=value,
        this.location=location,
        this.salary=salary,
        this.applydate=applydate,
        this.openings=openings,
        this.applied=applied;
    }
    static getAllJobsDetail(){
        return jobDetail;
    }
    static addNewJob(company,value,location,salary,date,openings){
        const job=new JobsVacanciesModel(jobDetail.length+1,company,value,location,salary,date,openings)
        jobDetail.push(job);
    }
    static checkAvailability(card_id){
        const cardStatus=jobDetail.findIndex(ind=>ind.id==card_id);
        return cardStatus !==-1;
    }
    static findCard(id){
        const card=jobDetail.find(cd=>cd.id==id)
        return card
    }
    static updateDetails(updateData){
        console.log(updateData)
        const index=jobDetail.findIndex((jobid)=>jobid.id==updateData.id);
        jobDetail[index].company = updateData.company;
        jobDetail[index].value = updateData.value;
        jobDetail[index].location = updateData.location;
        jobDetail[index].salary = updateData.salary;
        jobDetail[index].applydate = updateData.date;
        jobDetail[index].openings = updateData.openings;
    }
    static deleteCard(cardId){
        const index=jobDetail.findIndex(ind=>ind.id==cardId);
        jobDetail.splice(index,1);
    }
    static mactchingdata(id){
        const jobName=jobDetail.find((jid)=>jid.id==id);
        jobName.applied+=1;
    }
}
var jobDetail=[
    new JobsVacanciesModel(1,"VayuSoftwares","Fullstak Developer","Mumbai(Thane)","52 LPA","15-10-2024",5,0),
    new JobsVacanciesModel(2,"Google","Python Developer","Mumbai(Thane)","25 LPA","05-05-2024",5,0),
    new JobsVacanciesModel(4,"Microsoft","FrontEnd Developer","Chennai","52 LPA","28-06-2024",5,0),
]