var viewSingleProduct=(productId)=>{
    axios.get('/getProduct/data',{params:{"product_id":productId}}).then((res)=>{
        var product=res.data;
        $("#subBlock").html("");
        product.forEach(element => {
            $("#subBlock").append(singleProduct(element));
            ratingStar(element.product_id,element.rating);
            
        });
        
    })
}
var singleProduct;
document.addEventListener("DOMContentLoaded",()=>{
    axios.get('/templates/product.htm').then((res)=>{
     singleProduct=Handlebars.compile(res.data);
    })
})