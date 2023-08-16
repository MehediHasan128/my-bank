document.getElementById('btnDeposit').addEventListener('click', function(){
    const depositField = document.getElementById('depositField');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    const previousDeposit = document.getElementById('depositTotal');
    const previousDepositAmountString = previousDeposit.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountString);


    const previousTotalAmount = document.getElementById('balanceTotal');
    const previousTotalAmountString = previousTotalAmount.innerText;
    const previousBalanceTotal = parseFloat(previousTotalAmountString);
    

    const totalDepositAmount = previousDepositAmount + newDepositAmount;

    const currentBalance = previousBalanceTotal + newDepositAmount;

    previousDeposit.innerText = totalDepositAmount;
    previousTotalAmount.innerText = currentBalance;
    depositField.value = '';
})