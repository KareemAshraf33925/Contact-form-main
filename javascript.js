// firstname identifire
var formsubmit=document.getElementById("formsubmit");
var firstname=document.getElementById("firstname");
var valfir=document.querySelector(".valfir");
// lastname identifire
var lastname=document.getElementById("lastname");
var vallas=document.querySelector(".vallas");
// email identifire
var email=document.getElementById("email");
var valema=document.querySelector(".valema");
// checkgen identifire
var checgen=document.querySelector(".checgen");
var iconcheckbox=document.querySelector(".icon-checkbox");
var iconche=document.querySelector(".icon-che")
var labgen=document.querySelector(".labgen");
// checkup identifire
var checsup=document.querySelector(".checsup");
var labsup=document.querySelector(".labsup");
var please=document.querySelector(".please");
//  textarea identifire
var Message=document.getElementById("Message");
var labtex=document.querySelector(".labtex");
// 
var consent=document.querySelector(".consent");
var checkbox=document.querySelector(".checkbox")
// alertmessage
var alert=document.querySelector(".alert");
// validateform 
formsubmit.addEventListener("submit",(e)=>{
    validatefname();
    validatelname();
    validateemail();
    validatetextarea();
    e.preventDefault();
})
// /////
// validatefirstname
function validatefname(){
    if(firstname.value == ""){
        valfir.innerHTML="This field is required";
        firstname.style.borderColor="hsl(0, 66%, 54%)"
    }else{
        valfir.innerHTML="";
         firstname.style.borderColor="";
        firstname.value="";
    }
}
// ///
// validateladtname
function validatelname(){
    if(lastname.value == ""){
        vallas.innerHTML="This field is required";
        lastname.style.borderColor="hsl(0, 66%, 54%)";
    }else{
        vallas.innerHTML="";
         lastname.style.borderColor="";
       lastname.value="";
    }
}
// ///
// validate email
function validateemail(){
    if(email.value.indexOf("@gamil") !=-1){
        valema.innerHTML="";
        email.value="";
        alert.classList.add("active");
    }else{
        valema.innerHTML="Please enter a valid email address";
        email.style.borderColor="hsl(0, 66%, 54%)";
        email.value="";
    }
}
// /// query-check
checgen.addEventListener("click",()=>{
    if(null){
        please.innerHTML="Please select a query type"
    }else{
    checgen.classList.toggle("active");
    iconcheckbox.classList.toggle("active");
    labgen.classList.toggle("active");
    please.innerHTML=""
    checsup.classList.remove("active");
    iconche.classList.remove("active");
    labsup.classList.remove("active");
    }
})
// //
    // //query-check
    checsup.addEventListener("click",()=>{
        if(null){
            please.innerHTML="Please select a query type"
        }else{
        checsup.classList.toggle("active");
        iconche.classList.toggle("active");
        labsup.classList.toggle("active");
        checgen.classList.toggle("active");
        iconcheckbox.classList.remove("active");
        labgen.classList.remove("active");
        please.innerHTML=""
        }
    })
// /////
//  validatetextarea
function  validatetextarea(){
    if(Message.value == ""){
        labtex.innerHTML="This field is required";
        Message.style.borderColor="hsl(0, 66%, 54%)";
        
    }else{
        labtex.innerHTML="";
           Message.style.borderColor="";
           Message.value="";
    }
}
// 

consent.addEventListener("click",()=>{
    if(consent){
        consent.classList.add("active");
        checkbox.innerHTML="";
    }else{
        consent.classList.remove("active");
        checkbox.innerHTML="To submit this form, please consent to being contacted ";
    }
   
})