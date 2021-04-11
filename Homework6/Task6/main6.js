let text1=prompt("Enter some text");
let input1=document.getElementById("input1");
input1.setAttribute("value",text1);
let text2=prompt("Enter some text again");
let input2=document.getElementById("input2");
input2.setAttribute("value",text2);

function myFunction() {
    input1.setAttribute("value",text2);
    input2.setAttribute("value",text1);
}