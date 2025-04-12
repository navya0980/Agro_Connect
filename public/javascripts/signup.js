var UserSignUp=()=>{
    
   
    var userdetails={};
    userdetails.id=$("#username").val();
    userdetails.password=$("#password").val();
    userdetails.email=$("#email").val()
    axios.post("/new/signup",userdetails).then((result)=>{
        if(result.data.msg=="Success"){
            $("#signupstatusmsg").text("You are registered Successfully!!");
           $("#register").hide();
          
           setTimeout(()=>{
            signupModal.hide();
           },2000);
          
            loginModal.show();
            $("#register").hide();
        }else{
            $("#signupstatusmsg").text("unable to signup");

        }

    }).catch((err)=>{

    })
    

}
