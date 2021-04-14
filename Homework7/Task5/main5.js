let button=document.createElement("button");
button.id="button1";
button.textContent="Live button";

document.getElementsByTagName("body")[0].appendChild(button);

button.onclick=function () {
    let text=document.createElement("p");
    text.textContent="I was pressed!";
    document.getElementsByTagName("body")[0].appendChild(text);
}
button.onmouseover=function () {
    let text=document.createElement("p");
    text.textContent="Mouse on me!";
    document.getElementsByTagName("body")[0].appendChild(text);
}
button.onmouseout=function () {
    let text=document.createElement("p");
    text.textContent="Mouse isn't on me!";
    document.getElementsByTagName("body")[0].appendChild(text);
}