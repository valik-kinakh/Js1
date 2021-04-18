
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