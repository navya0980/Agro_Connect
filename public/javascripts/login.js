var validateCredentials=()=>{
    var userdetails={};
    userdetails.id=$("#login_username").val();
    userdetails.password=$("#login_password").val();
    axios.post("/validate/data",userdetails).then((result)=>{
       if(result.data.msg=='Valid'){
         loginModal.hide();
         $("#logout").show();
         $("#login").hide();
        
         $("#register").hide();
         
        
          
        //  $("#onloadBlock").hide();
        //  loadSelectedPage("productsPage");
       }
       else{
        $("#statusMsg").text("Invalid");
       }
    })
}