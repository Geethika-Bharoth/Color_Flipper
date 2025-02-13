let body=document.querySelector("body");
function buttonColor(color){
    body.style.backgroundColor=color;
}
//rgb(146, 211, 146)
function randomColor(){
    let red=Math.round(Math.random()*255);
    let blue=Math.round(Math.random()*255);
    let green=Math.round(Math.random()*255);
    let color="rgb("+red+", "+blue+", "+green+")";
    body.style.backgroundColor=color;
    document.querySelector("#random").style.backgroundColor=color;
}
