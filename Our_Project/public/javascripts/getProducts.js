var singleTemplate;
document.addEventListener("DOMContentLoaded",()=>{
   
    axios.get("/templates/productDetails.htm").then((res)=>{
        singleTemplate=Handlebars.compile(res.data);
      
        
    })
})
var loadSingle=(product)=>{
    
    console.log(product)
    $("#detailsBlock").append(singleTemplate(product));
    ratingStar(product.product_id,product.rating);
 }

var getProducts=()=>{
    var products=[];
    axios.get("/getProduct/data",).then((res)=>{
        products=res.data;
        $("#detailsBlock").html("");
        products.forEach((product,index) => {
            
            loadSingle(product);
            
        });
        

    }).catch((err)=>{

    });
        
    
}