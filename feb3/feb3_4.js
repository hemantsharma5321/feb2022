var counter=0;
var is_inc=false;
var is_dec=false;
var id1;
var id2;

var container=document.getElementById("container");

function increasing(){
    if(is_inc==false && is_dec==false){
            id1=setInterval(()=>{
            
            counter+=1;
            container.innerText=counter;
            is_inc=true;
            is_dec=false;
        },1000)
        
    }
    else if(is_dec==true && is_inc==false){
        clearInterval(id2);
        id1=setInterval(()=>{
            
            counter+=1;
            container.innerText=counter;
            is_inc=true;
            is_dec=false;
        },1000)
    }
    else if(is_inc==true){
        
    }


}
function decreasing(){
    if(is_dec==false && is_inc==false){
        
        id2=setInterval(()=>{
            is_dec=true;
            is_inc=false;
            counter-=1;
            container.innerText=counter;
        },1000)
    }
    else if(is_inc==true && is_dec==false){
        clearInterval(id1);
        id2=setInterval(()=>{
            is_dec=true;
            is_inc=false;
            counter-=1;
            container.innerText=counter;
        },1000)
    }
    }

