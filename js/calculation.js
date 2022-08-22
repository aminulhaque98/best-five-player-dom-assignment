document.getElementById('btn-budget').addEventListener('click', function () {
    const inputField = document.getElementById('bugdet-input');

    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString)

    const sum = playerArrayNumber.length * inputValue;
    console.log(sum)


    const buyPlayerCost = document.getElementById('cost-forPlayer');
    const buyPlayerCostString = buyPlayerCost.innerText;
    const getPlayerBuyValue = parseFloat(buyPlayerCostString);

    const totalBuyCost = sum + getPlayerBuyValue
    buyPlayerCost.innerText = totalBuyCost;

});

document.getElementById('btn-totalCalculate').addEventListener('click', function () {

    const manegerInputField = document.getElementById('maneger-inputField');
    const manegerInputFieldString = manegerInputField.value;
    const manegerInputValue = parseFloat(manegerInputFieldString);
    manegerInputField.value = '';

    const coachInputField = document.getElementById('coach-inputField');

    const coachInputFieldString = coachInputField.value;
    const coachInputValue = parseFloat(coachInputFieldString);
    coachInputField.value = '';
    // totalBuyCost + 
    const TotalCost = manegerInputValue + coachInputValue;

    const totalSumAdd = document.getElementById('total-spending')
    totalSumAdd.innerText = TotalCost

})