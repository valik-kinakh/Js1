/////////Task1//////////
function check(str) {
    let regExp1=/[A-Z]/;
     let regExp2=/[^0-9]/;
    if (regExp1.test(str[0])&&regExp2.test(str[0])) {
        alert("String starts with uppercase character");
    }else{
        alert("String doesn't start with uppercase character");
    }
}

let str="3Hello";
check(str);

/////////Task2//////////
function checkEmail(str) {
    const regExp=/[A-Za-z0-9]@.*mail\.com/;
    const regExp2=/[^#$-&]/;
    if (regExp.test(str) && regExp2.test(str)) {
        return true;
    }else{
        return false;
    }
}

alert(checkEmail("valik@gmail.com"));

////////Task3/////////
const regExp1=/db+d/gi;
    const regExp2=/b+d/gi;
    const regExp3=/d/gi;
    let str="cdbBdbsbz";
    let arr1=str.match(regExp1);
    let arr2,arr3;
    for (let i = 0; i < arr1.length; i++) {
       arr2= arr1[i].match(regExp2);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr3=arr2[i].match(regExp3);
    }
    for (let i = 0; i < arr2.length; i++) {
        arr1.push(arr2[i]);
    }
    for (let i = 0; i < arr3.length; i++) {
        arr1.push(arr3[i]);
    }

    console.log(arr1);;

/////////Task4///////////
const regExp=/ /;

let str="Java Script";
let arr=str.split(regExp);
let newStr="";
arr[arr.length-1]+=",";
for (let i = arr.length-1; i >=0; i--) {
   newStr+=arr[i];
}
console.log(newStr);

////////Task5//////////
let cardNum="5214-4141-1374-1804";

function checkCard(cardNum) {
    const regExp=/^\d{4}\-\d{4}\-\d{4}\-\d{4}$|^\d{4}.\d{4}.\d{4}.\d{4}$|^\d{16}$/;
    if (regExp.test(cardNum)) {
       alert("Card is valid");
    }
    else
    {
        alert("Card is not valid");
    }
}
checkCard(cardNum);

////////Task6/////////
function checkEmail(str) {
    let regExp1 = /[^-\w@\.]./g;
    let regExp2 = /^-|^_/;
    let regExp3 = /-/g;
    let size;
    let arr = str.match(regExp3);
    if (arr.length > 1) {
        alert("Email is not correct!");
        return;
    }

    if (regExp1.test(str) || regExp2.test(str)) {
        alert("Email is not correct!");
    } else {
        alert("Email is correct!");
    }
}

let str="%my-mail@gmail.com";
checkEmail(str);

///////////Task7///////////
let regExp1 = /\d+\.\d+|\d+/g;
let regExp2 = /^\d/;
let regExp3 = /[^\w\.]/gi;


function checkLogin(str) {
    if (str.length < 2 || str.length > 10 || regExp2.test(str) || regExp3.test(str)) {
        alert("false");
    } else {
        alert("true");
    }
   alert(str.match(regExp1));
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');