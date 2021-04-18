
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
    