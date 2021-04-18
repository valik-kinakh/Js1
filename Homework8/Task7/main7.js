

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
