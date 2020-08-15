//color js
var links=document.querySelectorAll(".alternate-style");
var totallinks=links.length;
function setActiveStyle(color){
  for(let i=0; i<totallinks; i++){
    if(color===links[i].getAttribute("title")){
      links[i].removeAttribute("disabled");
    }
    else{
      links[i].setAttribute("disabled","true");
    }
  }
}
// dark light js
var bodyskin=document.querySelectorAll(".body-skin");
var totalbodyskin=bodyskin.length;
for(let i=0; i<totalbodyskin; i++){
  bodyskin[i].addEventListener("change",function(){
    if(this.value==="dark"){
      document.body.className="dark";
    }
    else{
      document.body.className="";
    }
  })
}




document.querySelector(".toggle-style-swicther").addEventListener("click", function(){
  document.querySelector(".style-swicther").classList.toggle("open");
})