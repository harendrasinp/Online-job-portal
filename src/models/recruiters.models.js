

export default class RecruitersModels{
   static registerUser(recruiterData){
        const data={name:recruiterData.name,email:recruiterData.email,password:recruiterData.password};
        recruiters.push(data)
        
   } 
   static machingData(email,password){
    const result=recruiters.find(recru=>recru.email==email && recru.password==password);
    return result;
   }
}


const recruiters=[
    {"name":"harendrasinh",
        "email":"haren111990@gmail.com",
        "password":"haren007"
    },
]