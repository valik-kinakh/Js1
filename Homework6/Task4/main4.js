let ulChildren=document.getElementById("list");
alert(ulChildren.children[0].textContent);
alert(ulChildren.children[4].textContent);
alert(ulChildren.children[1].textContent);
alert(ulChildren.children[3].textContent);
alert(ulChildren.children[2].textContent);

//Alternative

let ulChildren2=document.getElementsByTagName("ul")[0];
alert(ulChildren2.firstElementChild.innerHTML);
alert(ulChildren2.lastElementChild.innerHTML);
alert(ulChildren2.children[1].innerHTML);
alert(ulChildren2.children[3].innerHTML);
alert(ulChildren2.children[2].innerHTML);
