document.getElementById('btnWidthraw').addEventListener('click', function(){
    const widthrawField = document.getElementById('widthrawField');
    const widthrawAmountStaring = widthrawField.value;
    const widthrawAmount = parseFloat(widthrawAmountStaring);


    const previousWidthraw = document.getElementById('widthrawTotal');
    const previousWidthrawString = previousWidthraw.innerText;
    const previousWidthrawAmount = parseFloat(previousWidthrawString);

    const previousTotalAmount = document.getElementById('balanceTotal');
    const previousTotalAmountString = previousTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousTotalAmountString);


    const totalWidthrawAmount = previousWidthrawAmount + widthrawAmount;

    const currentBalance = previousBalanceTotal - widthrawAmount;

    previousWidthraw.innerText = totalWidthrawAmount;
    previousTotalAmount.innerText = currentBalance;

    widthrawField.value = '';
})