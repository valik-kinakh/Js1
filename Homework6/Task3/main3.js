let elem=document.querySelectorAll("div>p");
for (let i = 0; i < elem.length; i++) {
    alert("Selector text "+i+":"+elem[i].textContent);
}