var loginModal;
var signupModal;
document.addEventListener("DOMContentLoaded",()=>{
  axios.get("/session/checkSession").then((response)=>{
    if(response.data.isLoggedIn){
      getProducts();}
  })
 loginModal=new bootstrap.Modal('#loginModal', {
    keyboard: false

  });
  signupModal=new bootstrap.Modal("#signupModal",{
    keyboard: false
  })
})

var getHomePage=()=>{
  var home=$("#subBlock");
  $("#detailsBlock").html("");
  $("#detailsBlock").append(home);
  

}
