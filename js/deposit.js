document.getElementById('btn-deposit').addEventListener('click', function(){
    //step:02 --> get the deposit ammount from the deposit input field
    //for input field use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmmountString = depositField.value;
    const newDepositAmmount = parseFloat(newDepositAmmountString);

    //step:07--> clear the deposit field
    depositField.value = '';
    if(isNaN(newDepositAmmount)){
        alert('Please provide a valid number');
        return;
    }
    //step:03 --> get the current deposit total ammount
    //for non input(element other than input, textarea) use innerText to get the text
    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //step:04 --> add number to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmmount;

    //set the deposit total
    depositTotalElement.innerText = currentDepositTotal;

    //step:05 --> get balance current total
    const balanceTotalElement = document.getElementById('balance-total');

    const previousBalanceTotalString = balanceTotalElement.innerText;

    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step:06 --> calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmmount;
    //set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
})