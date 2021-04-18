
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