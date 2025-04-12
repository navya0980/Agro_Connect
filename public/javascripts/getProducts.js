var singleTemplate;
document.addEventListener("DOMContentLoaded",()=>{
    axios.get('/templates/productDetails.htm').then((res)=>{
        singleTemplate=Handlebars.compile(res.data);

})

})

var products=[];
var loadSingle=(product)=>{
   
   $("#subBlock").append(singleTemplate(product));
  

}

var logout=()=>{
  axios.get('/log/out').then((res)=>{
    if(res.data=='success')
   {
    getHomePage();
    $("#logout").hide();
    $("#login").show();
   
    $("#register").show();
   
   }
  }).catch((err)=>{
  
  })
  
}

var getProducts=()=>{
    
        axios.get('/getProduct/data').then((result)=>{
            
            products=result.data;
            $("#home").hide();
            $("#subBlock").html("");
            products.forEach((product,index)=>{

               loadSingle(product);
               ratingStar(product.product_id,product.rating);
              
        
    
        }).catch(()=>{

        })
      })
       
    }
    // var apply=()=>{
    //     var selected=document.querySelectorAll("[name=productsCat]:checked");
    //     var categoryList=[];
    //     selected.forEach((item)=>{
    //        categoryList.push( item.getAttribute("value"));
    //     })
    //     axios.get("/getproduct/data",{params:{"category":categoryList}}).then((result)=>{
    //         console.log(result.data)
    //         products=result.data;
    //         $(".products").html("");
    //         products.forEach((product,index)=>{
    //            loadSingle(product);
    //         })
    //     }).catch((err)=>{
            
    //     })
    // }
