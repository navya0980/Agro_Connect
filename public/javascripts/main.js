var loginModal;
var signupModal;
var home;

document.addEventListener("DOMContentLoaded",()=>{

  axios.get("/session/checkSession").then((response)=>{
    if(response.data.isLoggedIn){
      $("#login").hide();
     
        $("#register").hide();
        $("#logout").show();
      }
  })
 loginModal=new bootstrap.Modal('#loginModal', {
    keyboard: false

  });
  signupModal=new bootstrap.Modal("#signupModal",{
    keyboard: false
  })
})

var getHomePage=()=>{
  $("#subBlock").html("")
 $("#home").show();




}
