const submitBtn=document.querySelector(".submitMail");
const dismissBtn=document.querySelector(".dismissBtn");
const mailPage=document.querySelector(".mailPage");
const thanksPage=document.querySelector(".thanksPage");
function showMailPage(){
    mailPage.classList.remove("hidden");
}
function hideMailPage(){
    mailPage.classList.add("hidden");
}

function showthanksPage(){
    thanksPage.classList.remove("hidden");
}
function hidethanksPage(){
    thanksPage.classList.add("hidden");
}
dismissBtn.addEventListener("click",()=>{
    hidethanksPage();
    showMailPage();
});
submitBtn.addEventListener("click",()=>{
    hideMailPage();
    showthanksPage();
  
});

function checkEmailValid(){
    var email=document.querySelector(".emailInput").innerHTML;
    var emailRegx=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!emailRegx.test(email)){
        return false;
    }
}


