var sec=60;
var min=5;
let timmer_running=true;

var stopbtn=document.getElementById("stopbtn");
var resumebtn=document.getElementById("resumebtn");
var resetbtn=document.getElementById("resetbtn");
stopbtn.addEventListener("click",()=>{
    clearInterval(id);
    timmer_running=false;
});
resumebtn.addEventListener("click", ()=>{
    if(timmer_running==false)
    {   timmer_running=true;
        id=setInterval(()=>{
       
        sec=sec-1;
        display();
        if(sec==0){
            sec=60;
            min=min-1;
        }
        if(min<0){
            clearInterval(id);
        }
    } ,1000);}
});
resetbtn.addEventListener("click", ()=>{
sec=60;
min=5;
display()
});




var id=setInterval(()=>{
    sec=sec-1;
    display();
    if(sec==0){
        sec=60;
        min=min-1;
    }
} ,1000);
function display(){
    document.getElementById("sec").innerText=sec;
    document.getElementById("min").innerText=min;
}

