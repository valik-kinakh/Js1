

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