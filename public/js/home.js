
const btns=document.querySelectorAll(".btn-recruter-hired a");
btns.forEach((btn)=>{
    btn.addEventListener("mousedown",()=>{
        btn.style.backgroundColor = "lightblue";
    });
    btn.addEventListener("mouseup",()=>{
        btn.style.backgroundColor ="rgb(245, 55, 159";
        console.log(btn);
    })
})
// --------------------------sigin login-------------------------------------
const signupFrom=document.querySelector("#Signup-form");
const LoginFrom=document.querySelector("#Login-form");
const signUp=document.querySelector("#SignUp-modal");
const login=document.querySelector("#Login-modal");
const signbtn=document.querySelector("#signbtn")
signupFrom.style.display="none";

signbtn.addEventListener("click",()=>{
    signupFrom.style.display="none"
    LoginFrom.style.display="block";
})
login.addEventListener("click",()=>{
    signupFrom.style.display="none"
    LoginFrom.style.display="block";
});
signUp.addEventListener("click",()=>{
    LoginFrom.style.display="none"
    signupFrom.style.display="block";
});
// ---------------------------------button-with -id-----------------------------
const dataBtn=document.querySelector("#datainfo");
const card_id=document.querySelector("#card-id")
const companyName=document.querySelector("#company-name")
const roll=document.querySelector("#roll");

const id=dataBtn.getAttribute("data-id");
const Cname=dataBtn.getAttribute("comp-name");
const rollName=dataBtn.getAttribute("roll-data");

card_id.value=id;
companyName.value=Cname;
roll.value=rollName;

// -----------------------------delete icon function----------------------------
function deleteProcess(id){
    const result=confirm("Are you sure to delete this Job Card");
    if(result){
        fetch("/delete-job-card/"+id,{
            method:"POST"
        }).then(res=>{
            if(res.ok){
                location.replace("/job-Cards")
                // location.assign("/job-Cards")
                //  window.location.href = "/job-Cards";
            }
        })
    }
}
// ---------------------------modal---------------------------------------------
const modalstatus=document.querySelector("#exampleModalCenter");
const flag=modalstatus.getAttribute("modalflag");
if(flag==="true"){
    var myModal = new bootstrap.Modal(document.querySelector("#exampleModalCenter"));
    console.log(myModal)
    myModal.show();
}
