var bars=document.querySelector('#bars');
var menu=document.querySelector('#menu');
menu.style.maxHeight="0px";
 function hienDongMenu(){
  if(menu.style.maxHeight==="0px"){
    menu.style.maxHeight="300px";
  }
  else{
    menu.style.maxHeight="0px";
  }
}