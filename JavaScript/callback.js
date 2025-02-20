// function sjitclg(message,abc){
//     console.log(message);
//   abc()
// }
// function callbacksjit(){
    //     console.log("Welcome back to sjit");
    // }
    // sjitclg("Welcome to sjit",callbacksjit);
    
function formsubmit(message,cbFun){
    if(cbFun()){
        console.log("Form submiited successfully!");
    }
    else{
        console.log("Form submiited unsuccessful");
    }
}
function validation(){
    console.log("FormSubmitted successfully!");
}
formsubmit("Form submiited successfully!",validation)






