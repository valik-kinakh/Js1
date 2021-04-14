let button=document.createElement("button");
button.id="button1";
button.textContent="Choose and delete";

document.getElementsByTagName("body")[0].appendChild(button);

let selectEl=document.getElementById("mySelect");
button.onclick=function () {
   selectEl.remove(selectEl.selectedIndex);
}