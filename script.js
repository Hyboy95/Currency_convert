function convertMoney() {
    let money = document.getElementById('amount').value;
    let FCurrency = document.getElementById('F_Currency').value;
    let TCurrency = document.getElementById('T_Currency').value;
    let Result;

    if (FCurrency == 'VND' && TCurrency == 'USD') {
        Result = (money / 24000) + "USD";
    } else
        if (FCurrency == 'USD' && TCurrency == 'VND') {
            Result = (money * 24000) + "VND";
        } else
            if (FCurrency == 'VND' && TCurrency == 'VND') {
                Result = money + "VND";
            } else {
                Result =money + "USD";}
    document.getElementById('Result').innerHTML ='Result = ' + Result;
}



