let p1=document.getElementById("p1");
let p2=document.getElementById("p2");

 window.addEventListener("resize",function () {
   p1.textContent="Width:"+innerWidth;
   p2.textContent="Height:"+innerHeight;
},false);