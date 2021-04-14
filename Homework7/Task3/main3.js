let button1=document.createElement("button");
button1.id="button1";
button1.textContent="Click to make the page blue";
let button2=document.createElement("button");
button2.value="button2";
button2.textContent="Double-click to make page pink";
let button3=document.createElement("button");
button3.id="button3";
button3.textContent="Click and hold to make the page brown";
let link=document.createElement("a");
link.textContent="Hover over to make page yellow";
link.href="/";

document.getElementsByTagName("body")[0].appendChild(button1);
document.getElementsByTagName("body")[0].appendChild(button2);
document.getElementsByTagName("body")[0].appendChild(button3);
document.getElementsByTagName("body")[0].appendChild(link);
let body=document.getElementsByTagName("body")[0];


button1.onclick=function () {
    body.style.backgroundColor="blue";
};
button2.ondblclick=function () {
    body.style.backgroundColor="pink";
};
button3.onmousedown=function () {
    body.style.backgroundColor="brown";
}
button3.onmouseup=function () {
    body.style.backgroundColor="white";
}
link.onmouseover=function () {
    body.style.backgroundColor="yellow";
}
link.onmouseout=function () {
    body.style.backgroundColor="white";
}