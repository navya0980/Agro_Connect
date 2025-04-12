var ratingStar=(id,rate)=>{
    var liTag=document.getElementById(id);
    console.log(liTag);
   
   
    var mainDiv=document.createElement("div");
    mainDiv.setAttribute("class","star");
    var Fullstar=parseInt(rate/1);
    console.log(Fullstar);
    var halfstar=(rate%1)?1:0;
    var emptystar=5-(Fullstar+halfstar);
    for(var i=0;i<Fullstar;i++){
       
        var div1=document.createElement("div");
        div1.setAttribute("class","fullstar");
        mainDiv.appendChild(div1);
        
    }
    if(halfstar==1){
        var div2=document.createElement("div");
        div2.setAttribute("class","halfstar");
        mainDiv.appendChild(div2);

    }
    for(var i=0;i<emptystar;i++){
       
        var div3=document.createElement("div");
        div3.setAttribute("class","emptyStar");
        mainDiv.appendChild(div3);
        
    }
    console.log(mainDiv);
    liTag.append(mainDiv);
}