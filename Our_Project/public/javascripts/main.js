var loginModal;
var signupModal;
document.addEventListener("DOMContentLoaded",()=>{
 loginModal=new bootstrap.Modal('#loginModal', {
    keyboard: false

  });
  signupModal=new bootstrap.Modal("#signupModal",{
    keyboard: false
  })
})